"use server";

import { formSchema } from "@/components/drawer";
import { EmailTemplate } from "@/components/emails/email-template";
import { Resend } from "resend";
import { z } from "zod";

export async function send(values: z.infer<typeof formSchema>) {
  console.log("Running on server");

  const name = values.name;
  const email = values.email;
  const message = values.message;

  if (!name || !email) {
    throw new Error("Invalid data. Name and email are required.");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  /* @ts-ignore */
  const { data } = await resend.emails.send({
    from: "galongau@gmail.com",
    to: ["galongau@gmail.com"],
    subject: `Message from ${name}(${email})`,
    reply_to: email,
    react: EmailTemplate(values),
  });

  console.log(data);
}
