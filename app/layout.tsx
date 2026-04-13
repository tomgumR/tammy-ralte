import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tammy Ralte | Portfolio",
  description:
    "Portfolio of Tammy Ralte, PhD candidate at IISc Bangalore working on 3D reconstruction, AR/VR, Gaussian Splatting, and interactive XR systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
