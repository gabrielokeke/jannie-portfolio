# Jannie's Portfolio

A minimalist, responsive portfolio website built for showcasing the creative and professional profile of Jannie. Developed using React (Vite) and styled with Tailwind CSS, with a functional contact form powered by Nodemailer.

## 🚀 Features

- ⚡️ Fast and lightweight (Vite + React)
- 🎨 Tailwind CSS for styling
- 📬 Contact form with Nodemailer backend
- ✅ Fully responsive and mobile-friendly
- 🧼 Clean and minimal design

---

## 🖼️ Live Demo

👉 [View the live site here](https://jannie-portfolio.netlify.app/)

---

## 🛠 Tech Stack

| Frontend | Backend |
|----------|---------|
| Next.js  | Node.js + Nodemailer |
| Tailwind CSS | Express (API route for form) |

---

## 🧪 Installation

1. **Clone the repo**
git clone https://github.com/gabrielokeke/jannie-portfolio.git
cd jannie-portfolio
Install dependencies
npm install
Run the app: npm run dev
Setup backend (optional if you're testing contact form)

The backend folder uses Nodemailer to send emails.
Configure your environment variables:

Create a .env file inside the backend folder:

EMAIL_USER=your@email.com
EMAIL_PASS=yourpassword
EMAIL_TO=recipient@email.com


📧 Contact Form
The contact form is fully functional and sends email using Nodemailer. If the message is sent successfully, a toast notification appears.

Make sure your email credentials are set properly .env.

📌 To Do / Improvements
 Project section: add more metadata (tech stack, description)

 Add loading/error state to form

 Include favicon and social previews

 Dark mode toggle

🧑‍💻 Author
Made with ❤️ by Gabriel Okeke

