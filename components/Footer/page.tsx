import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-charcoal border-t border-gray-200 py-6">
            <div className="container mx-auto px-4 text-center">
                {/* Logo and Text */}
                <div className="mb-6">
                    <div className="flex justify-center items-center space-x-2">
                        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image
                                src="/logo-brichete.svg"
                                width={50}
                                height={50}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <p className="text-neutral-charcoal mt-2 text-sm md:text-base">
                        Fumărele – partenerul tău pentru preparate afumate autentic!
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                    <Link href="tel:+15555555555" className="inline-block">
                        <button className="bg-primary text-neutral-white px-4 py-2 rounded-md  text-sm md:text-base">
                            Comandă telefonică
                        </button>
                    </Link>
                    <Link href="/contact" className="inline-block">
                    <button
                        className="border border-gray-300 px-4 py-2 rounded-md hover:bg-primary hover:text-neutral-white text-sm md:text-base">
                    Contact →
                    </button>
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap justify-center space-x-6 text-neutral-gray text-sm md:space-x-8 md:text-base">
                    <Link href="/termeni" className="hover:text-primary">Termeni si conditii</Link>
                    <Link href="/returnare" className="hover:text-primary">Politica de returnare</Link>
                    <Link href="/contact" className="hover:text-primary">Contact</Link>
                    <Link href="/confidentialitate" className="hover:text-primary">Confidentialitate</Link>


                </div>

                {/* Copyright */}
                <p className="text-neutral-gray text-sm mt-4">
                    © 2024 Fumărele. Toate drepturile rezervate.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
