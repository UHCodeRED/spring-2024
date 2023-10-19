import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeRED Genesis",
  description: "Houston's Premier Hackathon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
