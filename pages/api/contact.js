import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;
  // TODO: validation email here

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.SEND_EMAIL,
      replyTo: email,
      subject: `Your website message from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent: ", mail.messageId);

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email. Your message was not sent.",
    });
  }
}
