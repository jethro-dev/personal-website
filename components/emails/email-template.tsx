import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
const config = require("@/tailwind.config");

interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <Tailwind config={config}>
    <h1>New message from jethroau.com</h1>
    <p>Name:{name}</p>
    <p>Email:{email}</p>
    <p>Message:{message}</p>
  </Tailwind>
);

EmailTemplate.PreviewProps = {
  name: "Chris Wong",
  email: "chriswong@gmail.com",
  message: "Hello there.",
} as EmailTemplateProps;

export default EmailTemplate;
