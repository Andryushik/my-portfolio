import nodemailer from "nodemailer";

const userEmail = process.env.USER_EMAIL;
const password = process.env.PASS_EMAIL;
const sendToEmail = process.env.SEND_EMAIL;

export default async function ContactAPI(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { name, email, message } = data;

    if (!data || !name || !email || !message) {
      return res.status(400).send({ message: "Bad request" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: password,
      },
    });

    try {
      await transporter.sendMail({
        from: userEmail,
        to: sendToEmail,
        replyTo: email,
        subject: `Your website message from ${name}`,
        html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
      });

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
}
