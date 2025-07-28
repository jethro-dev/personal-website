"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// Define schema in server action to avoid client/server boundary issues
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(200).optional(),
});

export async function send(values: z.infer<typeof formSchema>) {
  console.log("Running on server");

  const name = values.name;
  const email = values.email;
  const message = values.message || "";

  if (!name || !email) {
    throw new Error("Name and email are required.");
  }

  // Create a transporter object using Outlook's SMTP settings
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password
    },
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"Jethro Au" <galongau@gmail.com>', // Sender address
    to: "galongau@gmail.com", // List of receivers
    cc: "hello@jethroau.com", // Carbon Copy
    replyTo: email, // Sets the Reply-To email address
    subject: "New message from jethroau.com", // Subject line
    text: `Message from ${name}, Email: ${email}, Message: ${message}`, // Plain text body
    html: `<b>Message from ${name}</b><p>Email: ${email}</p><p>Message: ${message}</p>`, // HTML body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true, message: "Email sent successfully", info };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { success: false, error: "Failed to send email" };
  }
}

// React 19 Form Action - Modern approach with FormData
export async function sendMessage(formData: FormData) {
  console.log("React 19 Form Action - Running on server");
  
  // Debug: Log all form data
  console.log("FormData entries:");
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = (formData.get("message") as string) || "";

  console.log("Extracted values:", { name, email, message });

  // Validate form data
  try {
    formSchema.parse({ name, email, message });
    console.log("Validation passed");
  } catch (error) {
    console.log("Validation failed:", error);
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: error.errors.map(e => e.message).join(", ")
      };
    }
    return { success: false, error: "Invalid form data" };
  }

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  // Create a transporter object using Gmail's SMTP settings
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password
    },
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"Jethro Au" <galongau@gmail.com>', // Sender address
    to: "galongau@gmail.com", // List of receivers
    cc: "hello@jethroau.com", // Carbon Copy
    replyTo: email, // Sets the Reply-To email address
    subject: "New message from jethroau.com", // Subject line
    text: `Message from ${name}, Email: ${email}, Message: ${message}`, // Plain text body
    html: `<b>Message from ${name}</b><p>Email: ${email}</p><p>Message: ${message}</p>`, // HTML body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true, message: "Email sent successfully", info };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
