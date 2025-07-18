"use client";

import { useState } from "react";

// A reusable, styled contact form component powered by Formspree
const ContactForm = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    text: "",
  });

  // State to display submission result
  const [alert, setAlert] = useState({
    type: "", // "success" or "error"
    message: "",
    visible: false,
  });

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

    try {
      // Send the data to Formspree (replace 'yourFormIdHere')
      const response = await fetch("https://formspree.io/f/mzzvzjoe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // On success, show success alert and reset form
        setAlert({
          type: "success",
          message: "Message sent successfully!",
          visible: true,
        });
        setFormData({ username: "", email: "", text: "" });
      } else {
        throw new Error("Something went wrong. Please try again.");
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
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded bg-amber-400 px-6 py-3 font-bold text-gray-900 transition hover:bg-amber-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
