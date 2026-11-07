import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .trim()
    .max(80)
    // One line only: a line break could fake extra lines in the email.
    .matches(/^[^\r\n]*$/, "please use a single line")
    .required("please enter your name"),
  email: yup
    .string()
    .trim()
    .email("email format is not valid")
    .required("please enter your email"),
  message: yup
    .string()
    .trim()
    .min(3)
    .max(1000)
    .required("please enter your message"),
});
