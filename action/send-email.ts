"use server";

import { formSchema } from "@/components/drawer";
import { EmailTemplate } from "@/components/emails/email-template";
import { z } from "zod";
import nodemailer from "nodemailer";

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
  }
}
