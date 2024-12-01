'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <section className="w-full lg:min-w-screen">
            <nav className="snap-start bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image
                            src="/logo-brichete.svg"
                            width={50}
                            height={50}
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link href="tel:+15555555555" className="inline-block">
                            <button
                                type="button"
                                className="text-neutral-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primarylighter font-medium rounded-lg text-sm px-4 py-2 text-center"
                            >
                                Apelează
                            </button>
                        </Link>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-charcoal rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 mx-auto f ${
                            isMenuOpen ? "block" : "hidden"
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    href="#Specs"
                                    className="block py-2 px-3 text-neutral-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 "
                                    aria-current="page"
                                >
                                    Specificatii
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="block py-2 px-3 text-neutral-text-neutral-charcoal rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                                >
                                    Avantaje
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#rooms"
                                    className="block py-2 px-3 text-neutral-charcoal rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                                >
                                    Beneficii
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#gallery"
                                    className="block py-2 px-3 text-neutral-text-neutral-charcoal rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                                >
                                    Recenzii
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#restaurant"
                                    className="block py-2 px-3 text-neutral-text-neutral-charcoal rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                                >
                                    Comanda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="block py-2 px-3 text-neutral-text-neutral-charcoal rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                                >
                                    Intrebari frecvente
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
