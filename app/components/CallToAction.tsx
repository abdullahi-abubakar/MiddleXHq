"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { submitForm } from "../actions/submit-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function CallToAction() {
  const [state, formAction] = useFormState(submitForm, null)
  const { pending } = useFormStatus()
  const { toast } = useToast()

  if (state?.success) {
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you soon.",
    })
  } else if (state?.success === false) {
    toast({
      title: "Error submitting form",
      description: "Please check your inputs and try again.",
      variant: "destructive",
    })
  }

  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to get started?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
          We understand that every business is unique. Our solutions are crafted to address specific challenges and meet
          individual client needs.
        </p>
        {/* action={formAction} */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <form action="https://formsubmit.co/omolaja.abubakar05@gmail.com" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full text-lg py-3 px-4 text-black"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="08012345678"
                required
                className="w-full text-lg py-3 px-4 text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full text-lg py-3 px-4 text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                required
                className="w-full text-lg py-3 px-4 text-black"
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full text-lg py-3" disabled={pending}>
              {pending ? "Submitting..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

