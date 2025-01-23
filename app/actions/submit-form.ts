"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

export async function submitForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    message: formData.get("message"),
  })
  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically send the form data to your backend or API
  // For this example, we'll just simulate a successful submission
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}