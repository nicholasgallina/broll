import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "B-Roll: Letterboxd but for TV Shows",
  description: "Rate episodes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-linear-to-b from-cyan-600 to-gray flex flex-col min-h-screen">
        <Header />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
