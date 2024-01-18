import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Container } from "@/components/Container";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibadan Emergency Channel",
  description: "Help us account for your Ibadan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " text-black"}>
        <Container>{children}</Container>
        <Toaster />
      </body>
    </html>
  );
}
