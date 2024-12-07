'use client';

import React from 'react';
import Link from "next/link";
import { FaTruck, FaUndo, FaMoneyBillAlt } from "react-icons/fa";

const Header = () => {

    const originalPrice = 50;
    const specialPrice = 24;
    const discount = Math.round(((originalPrice - specialPrice) / originalPrice) * 100);
    const phoneNumber = "+40 725 184 359";

    const benefits = [
        {
            icon: <FaTruck size={32} className="text-neutral-white" />,
            title: "Livrare Rapidă",
        },
        {
            icon: <FaUndo size={32} className="text-neutral-white" />,
            title: "Returnare în 14 zile",
        },
        {
            icon: <FaMoneyBillAlt size={32} className="text-neutral-white" />,
            title: "Plată Ramburs",
        },
    ];

    return (
        <div className="w-full h-full mx-auto flex flex-col sm:flex-row p-4">
            <div
                className="w-full h-auto mx-auto my-auto flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <video
                    controls
                    autoPlay
                    loop
                    className="w-full  max-h-[50vh] rounded-lg"
                >
                    <source src="/prezentation.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full  h-full px-8 py-4 my-auto flex flex-col items-center justify-center text-center">
                <h1 className='text-title-sm text-neutral-charcoal p-2 font-bold'>Fumărel - Arome naturale pentru
                    un
                    gust desăvârșit</h1>
                <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
                    <div className="text-center">
                        <div className="text-gray-500 text-sm line-through">
                            {originalPrice} RON
                        </div>
                        <div className="text-4xl font-bold text-red-500">
                            {specialPrice} RON
                        </div>
                    </div>

                    {/* Discount Badge */}
                    <div className="mt-2 flex justify-center">
        <span className="px-4 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
          Economisești {discount}%
        </span>
                    </div>

                    {/* Phone Number */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">Sună acum pentru mai multe informații:</p>
                        <a href={`tel:${phoneNumber}`} className="text-lg font-bold text-primary">
                            {phoneNumber}
                        </a>
                    </div>

                    {/* Call-to-Action Button */}
                    <div className="mt-6 text-center">
                        <Link href='#Order'>
                            <button
                                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-200 text-heading-lg"
                            >
                                Comandă acum
                            </button>
                        </Link>
                    </div>
                    <div className=" py-10">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4">
                            {benefits.map((benefit: any, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    <div
                                        className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-neutral-charcoal">{benefit.title}</h3>
                                    <p className="text-sm text-gray-400 mt-2">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Header;
