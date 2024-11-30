import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spodek Method",
  description: "Spodek Method | Sustainability Simplified Book Launch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gcq2bhw.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
