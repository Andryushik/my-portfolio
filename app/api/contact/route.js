import nodemailer from "nodemailer";
import { contactFormSchema } from "@/validation/contactFormValidation";

export async function POST(request) {
  // JSON only: a cross-site JSON post needs a CORS preflight, which Next
  // answers without Access-Control-Allow-* headers, so the browser never
  // sends the POST. Don't add CORS headers for this route.
  const contentType = request.headers.get("content-type")?.toLowerCase();
  if (!contentType?.startsWith("application/json")) {
    return Response.json({ message: "Expected JSON" }, { status: 415 });
  }

  // Refuse big bodies before reading them; the form sends a few KB at most.
  if (Number(request.headers.get("content-length")) > 16 * 1024) {
    return Response.json({ message: "Too large" }, { status: 413 });
  }

  const body = await request.json().catch(() => null);

  // Honeypot: a hidden field that people never see but bots fill in.
  // Answer as if it worked so the bot learns nothing, but leave a trace.
  if (body?._gotcha) {
    console.warn("Contact form: honeypot filled, message dropped");
    return Response.json({ message: "Success" });
  }

  const data = await contactFormSchema.validate(body).catch(() => null);
  if (!data) {
    return Response.json({ message: "Invalid input" }, { status: 400 });
  }

  const { USER_EMAIL, PASS_EMAIL, SEND_EMAIL } = process.env;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: USER_EMAIL, pass: PASS_EMAIL },
  });

  try {
    await transporter.sendMail({
      from: USER_EMAIL,
      to: SEND_EMAIL,
      replyTo: data.email,
      subject: `Your website message from ${data.name}`,
      // Plain text: visitor input must never be rendered as HTML.
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`,
    });
  } catch (error) {
    console.error("Contact form: sending failed", error);
    return Response.json({ message: "Failed to send" }, { status: 502 });
  }

  return Response.json({ message: "Success" });
}
