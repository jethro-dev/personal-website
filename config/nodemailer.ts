import nodemailer from "nodemailer";
import { MdEmail } from "react-icons/md";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};
