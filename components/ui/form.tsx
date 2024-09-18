// components/EnquiryForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Magicbutton } from "./magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

// Zod schema for validation
const EnquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters long" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type EnquiryFormValues = z.infer<typeof EnquirySchema>;

export function EnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(EnquirySchema),
  });

  const onSubmit = (data: EnquiryFormValues) => {
    // Sending data through EmailJS
    const serviceID = "service_uf0pxsn";
    const templateID = "template_092carl";
    const publicKey = "Gp0QKQzXUYe8gQzjH";

    // Send form data via EmailJS
    emailjs.send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your enquiry has been sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("There was an error sending your enquiry. Please try again.");
      });

    reset(); // Reset the form after submission
  };

  return (
    <div className="max-w-lg border border-white-100 mx-auto p-4 bg-BLACK-100 shadow-md rounded-md">
      <h1 className='heading lg:max-w-[30vw]:'>
                Enquiry <span className='text-purple'>Form</span> 
            </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            {...register("subject")}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-600 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Your message here"
          />
          {errors.message && (
            <p className="text-red-600 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="items-center flex flex-col">
          <button type="submit">
            <Magicbutton
              title="Send Enquiry"
              icon={<FaLocationArrow />}
              position="right"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
