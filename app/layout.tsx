import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./globals.css";

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={inter.className}>
        <body>
        <Navbar />
        <main className="max-w-screen-lg mx-auto">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
