"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sendMail } from "@/lib/send_mail";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactFormSchema = z.object({
  first_name: z.string().min(2, { message: "Please Enter First Name" }),
  last_name: z.string().min(2, { message: "Please Enter Your Last Name" }),
  email: z.email({ message: "Please Enter a Valid Email Address" }),
  message: z.string().min(10, {
    message: "Please make sure your message is at least 10 characters long",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `First name: ${values.first_name} \n Last name: ${values.last_name} \n Email: ${values.email} \n Message: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });
    console.log("Mail Response", response);
    if (response?.messageId) {
      toast.success("Application Submitted Successfully");
    } else {
      toast.error("Failed to send application");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to make your move? Contact us for a free, no-obligation quote
            and let us make your relocation stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-300">(647)-763-7427</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">metrahoservices@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-gray-300">Greater Ottawa Area</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-gray-300">Mon-Sun: 7AM - 8PM</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              {...form}
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                // Show a toast for the first error found
                for (const key in errors) {
                  const error = errors[key as keyof typeof errors];
                  if (error?.message) {
                    toast.error(String(error.message));
                    break;
                  }
                }
              })}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Request Free Quote</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  {...form.register("first_name")}
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  {...form.register("last_name")}
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  {...form.register("email")}
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <textarea
                {...form.register("message")}
                placeholder="Tell us about your moving needs..."
                rows={4}
                className="w-full bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-6"
              ></textarea>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-medium text-lg transition-colors"
              >
                {isLoading ? "Sending....." : "Get Free Quote"}
                
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
