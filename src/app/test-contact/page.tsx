import { Contact } from "@/components/contact/Contact";

export default function TestContactPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Test Contact Form
      </h1>
      <Contact />
    </div>
  );
}