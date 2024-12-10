import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./globals.css";
import { NotificationProvider } from "@/components/Notification";

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Fumărele",
    description: "Aschii de fum pentru preparate afumate autentice",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (

        <html lang="en" className={inter.className}>
        <head>
            <link rel="icon" href="favicon.ico"/>
        </head>
        <body>
        <NotificationProvider>
        <Navbar/>
        <main className="max-w-screen-lg mx-auto">{children}</main>
        <Footer/>
        </NotificationProvider>
        </body>
        </html>
    );
}
