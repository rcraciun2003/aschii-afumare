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
        <header className="w-full bg-white sticky top-0 z-50 shadow-md max-w-screen-lg mx-auto rounded-xl">
            <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo-brichete.svg"
                        width={50}
                        height={50}
                        alt="Logo"
                    />
                </Link>

                {/* Call Button and Mobile Menu Toggle */}
                <div className="flex md:order-2">
                    <Link href="tel:+40 725 184 359">
                        <button
                            type="button"
                            className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Apelează
                        </button>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-2"
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

                {/* Menu Items */}
                <div
                    className={`items-center justify-between w-full lg:flex lg:w-auto ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
                        <li>
                            <Link
                                href="#Specs"
                                className="block py-2 px-4 text-gray-700 hover:text-neutral-white hover:bg-primary rounded-lg lg:hover:bg-transparent lg:hover:text-primary"
                            >
                                Specificatii
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Advantages"
                                className="block py-2 px-4 text-gray-700 hover:text-neutral-white hover:bg-primary rounded-lg hover:bg-primary lg:hover:bg-transparent lg:hover:text-primary"
                            >
                                Avantaje
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Benefits"
                                className="block py-2 px-4 text-gray-700 hover:text-neutral-white hover:bg-primary rounded-lg hover:bg-primary lg:hover:bg-transparent lg:hover:text-primary"
                            >
                                Beneficii
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Reviews"
                                className="block py-2 px-4 text-gray-700 hover:text-neutral-white hover:bg-primary rounded-lg hover:bg-primary lg:hover:bg-transparent lg:hover:text-primary"
                            >
                                Recenzii
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Order"
                                className="block py-2 px-4 text-gray-700 hover:text-neutral-white hover:bg-primary rounded-lg hover:bg-primary lg:hover:bg-transparent lg:hover:text-primary"
                            >
                                Comanda
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
