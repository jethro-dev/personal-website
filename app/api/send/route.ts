import { EmailTemplate } from "@/components/emails/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ name: "John", email: "", message: "" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
