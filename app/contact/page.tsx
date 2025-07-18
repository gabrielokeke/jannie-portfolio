import ContactForm from "@/components/ContactForm";

// Contact page that only renders the ContactForm
export default function ContactPage() {
  return (
    <section className="pt-40 flex justify-center py-12 px-4 bg-black min-h-screen">
      <ContactForm />
    </section>
  );
}
