import nodemailer from "nodemailer";
import { contactFormSchema } from "@/validation/contactFormValidation";

// The form sends three short fields; anything bigger is not from it.
const MAX_BODY_LENGTH = 16_000;

export async function POST(request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ message: "Expected JSON" }, { status: 415 });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) {
    return Response.json({ message: "Request too large" }, { status: 413 });
  }

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ message: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: a hidden field that people never see but bots fill in.
  // Answer as if it worked so the bot learns nothing.
  if (body?.website) {
    return Response.json({ message: "Success" });
  }

  let data;
  try {
    data = await contactFormSchema.validate(body ?? {}, { strict: true });
  } catch {
    return Response.json({ message: "Invalid input" }, { status: 400 });
  }

  const { USER_EMAIL, PASS_EMAIL, SEND_EMAIL } = process.env;
  if (!USER_EMAIL || !PASS_EMAIL || !SEND_EMAIL) {
    console.error("Contact form: SMTP environment variables are not set");
    return Response.json({ message: "Not configured" }, { status: 500 });
  }

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
