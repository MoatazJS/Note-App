import * as z from "zod";

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .nonempty("This field is required")
    .min(3, "Name must be at least 3 characters long")
    .max(20, "Name cannot exceed 20 characters"),

  email: z
    .string()
    .nonempty("This field is required")
    .email("Invalid email address"),

  password: z
    .string()
    .nonempty("This field is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
      "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
    ),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .int({ message: "Age must be a whole number" })
    .min(13, { message: "You must be at least 13 years old" })
    .max(100, { message: "Please enter a valid age" }),
  // age: z
  //   .number({
  //     invalid_type_error: "Age must be a number",
  //     required_error: "Age is required",
  //   })
  //   .refine((val) => !Number.isNaN(val), { message: "Age is required" })
  //   .int()
  //   .min(13, { message: "You must be at least 13 years old" })
  //   .max(100, { message: "Please enter a valid age" }),
  phone: z
    .string()
    .regex(
      /^\+20\d{10}$/,
      "Invalid phone number. Must be in format +201234567890"
    ),
});
export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;
