import { Inter, Roboto_Mono, Anton, Roboto, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
