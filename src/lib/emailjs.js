import emailjs from "@emailjs/browser";
import { CONTACT_INFO } from "../data/contactInfo";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Sends the contact enquiry to Sydney Bokdokbang's inbox via EmailJS.
 * Requires VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID / VITE_EMAILJS_PUBLIC_KEY
 * in .env (see .env.example) — the EmailJS template must accept matching
 * {{name}}/{{email}}/{{phone}}/{{reason}}/{{message}}/{{to_email}} variables.
 */
export async function sendContactEnquiry(values) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured. Set VITE_EMAILJS_* in .env.");
  }
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: values.name,
      email: values.email,
      phone: values.phone || "-",
      reason: values.reason || "-",
      message: values.message,
      to_email: CONTACT_INFO.email,
    },
    { publicKey: PUBLIC_KEY }
  );
}
