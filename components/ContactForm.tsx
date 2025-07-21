"use client";

import { useState } from "react";

// Define types for better TypeScript support
interface FormData {
  username: string;
  email: string;
  text: string;
}

interface Alert {
  type: "success" | "error" | "";
  message: string;
  visible: boolean;
}

// A reusable, styled contact form component powered by Nodemailer
const ContactForm = () => {
  // State to hold form input values
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    text: "",
  });

  // State to display submission result
  const [alert, setAlert] = useState<Alert>({
    type: "",
    message: "",
    visible: false,
  });

  // State to track loading/submitting status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handles input changes and updates state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles the form submission logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    setIsSubmitting(true);

    try {
      // Send the data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // On success, show success alert and reset form
        setAlert({
          type: "success",
          message: result.message || "Message sent successfully!",
          visible: true,
        });
        setFormData({ username: "", email: "", text: "" });
      } else {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // On error, show failure alert (TypeScript-safe)
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send message.";

      setAlert({
        type: "error",
        message: errorMessage,
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlert({ type: "", message: "", visible: false });
    }, 5000);
  };

  return (
    <div className="w-full max-w-xl">
      <div className="rounded-lg shadow-lg border border-gray-200 bg-white">
        {/* Header */}
        <header className="bg-amber-400 p-6 rounded-t-lg shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Contact
          </h2>
        </header>

        {/* Form content */}
        <div className="p-6">
          {/* Alert display */}
          {alert.visible && (
            <div
              className={`mb-6 rounded px-4 py-3 text-center font-semibold ${
                alert.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
              role="alert"
            >
              {alert.message}
            </div>
          )}

          {/* Contact form */}
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="username"
                className="block mb-2 font-semibold text-gray-700"
              >
                Name &amp; Surname
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="text"
                className="block mb-2 font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="text"
                name="text"
                rows={4}
                value={formData.text}
                onChange={handleChange}
                className="w-full rounded border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded px-6 py-3 font-bold text-gray-900 transition ${
                isSubmitting
                  ? "bg-amber-300 cursor-not-allowed opacity-70"
                  : "bg-amber-400 hover:bg-amber-300"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;