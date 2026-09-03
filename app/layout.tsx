import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawVita - Care. Love. Companionship.",
  description: "PawVita provides professional pet grooming, boarding, veterinary care and training services across Delhi NCR. Book your appointment today.",
  icons: {
    icon: '/main logo/logo.png',
    shortcut: '/main logo/logo.png',
    apple: '/main logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
