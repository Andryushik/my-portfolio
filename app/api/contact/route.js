import nodemailer from "nodemailer";
import { contactFormSchema } from "@/validation/contactFormValidation";

export async function POST(request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ message: "Expected JSON" }, { status: 415 });
  }

  let body;
  try {
    body = await request.json();
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
    data = await contactFormSchema.validate(body);
  } catch {
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
