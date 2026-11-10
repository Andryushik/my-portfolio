import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .trim()
    .max(80, "Please use 80 characters or fewer.")
    // Any line break could fake extra lines in the email.
    .matches(/^[^\p{Cc}\p{Zl}\p{Zp}]*$/u, "Please use a single line.")
    .required("Please enter your name."),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
  message: yup
    .string()
    .trim()
    .required("Please enter your message.")
    .min(3, "Your message is too short.")
    .max(1000, "Please keep your message under 1,000 characters."),
});
