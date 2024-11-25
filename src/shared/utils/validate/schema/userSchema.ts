import * as yup from 'yup';

export const textYup = yup
  .string()
  .min(2, "Min char 2")
  .max(15, "Max char 15")
  .required();

export const passwordYup = yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(32, "The password must be no more than 8 characters")
  .matches(/[a-z]/, "Password must contain a lowercase letter")
  .matches(/[A-Z]/, "Password must contain a uppercase letter")
  .matches(/[^a-zA-Z\d]/, "Password must special symbol").ensure()
  .required();

export const emailYup = yup.string().email("Uncorect email").required();

export const loginInSchema = yup.object({
    email: emailYup,
    password: passwordYup, 
})
