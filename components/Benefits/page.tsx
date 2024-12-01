import React from 'react'
import Image from "next/image";

const Benefits = () => {
    return (
        <div className='mt-10 p-4 bg-background rounded-xl'>
            <h1 className='text-heading-lg md:text-title-sm font-bold text-neutral-charcoal mx-auto text-center max-w-screen-sm'>Sustenabilitate și responsabilitate </h1>
            <div className='flex flex-col md:flex-row mx-auto w-full h-auto p-6'>
                <div className='w-full h-full justify-center items-center flex bg-background rounded-xl px-6 py-8'>
                    <Image src='/logo-brichete.svg' width={400} height={400} alt='Specificatiile produsului'
                           className='p-4'/>
                </div>
                <div className='w-full h-auto justify-center items-center flex flex-col'>
                    <p className='text-neutral-charcoal p-4 md:text-heading-sm '><b className='md:text-heading-lg'>F</b>umărel - Așchiile de afumare sunt realizate din lemn natural de fag, garantând un fum curat și o aromă autentică, care îmbogățește gustul preparatelor tale. Fiecare tip de așchie este special conceput pentru a adăuga note distinctive de gust, fie că este vorba despre carne roșie, pui sau preparate pe bază de pește. În plus, cărbunele de grătar pe care îl oferim asigură o ardere uniformă, fără fum excesiv, pentru o experiență plăcută la grătar. Produsele sunt naturale, fără aditivi chimici, oferind siguranță și un gust inconfundabil.</p>
                </div>

            </div>
        </div>
    )
}
export default Benefits
