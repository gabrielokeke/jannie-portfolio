"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

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

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    text: "",
  });

  const [alert, setAlert] = useState<Alert>({
    type: "",
    message: "",
    visible: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
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
      const errorMessage = error instanceof Error ? error.message : "Failed to send message.";
      setAlert({ type: "error", message: errorMessage, visible: true });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setAlert({ type: "", message: "", visible: false }), 5000);
    }
  };

  return (
    <motion.div
      className="w-full max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-lg shadow-lg border border-gray-200 bg-white">
        <header className="bg-amber-400 p-6 rounded-t-lg shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Contact
          </h2>
        </header>

        <div className="p-6">
          {alert.visible && (
            <motion.div
              className={`mb-6 rounded px-4 py-3 text-center font-semibold ${
                alert.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
              role="alert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {alert.message}
            </motion.div>
          )}

          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 font-semibold text-gray-700">
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

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
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

            <div>
              <label htmlFor="text" className="block mb-2 font-semibold text-gray-700">
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

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full rounded px-6 py-3 font-bold text-gray-900 transition flex items-center justify-center gap-2 ${
                isSubmitting ? "bg-amber-300 cursor-not-allowed opacity-70" : "bg-amber-400 hover:bg-amber-300"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"} <FaPaperPlane />
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
