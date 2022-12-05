import { toast } from "react-toastify";

export const sendContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw "Failed to send message. Please try again.";
  }

  return res;
};
