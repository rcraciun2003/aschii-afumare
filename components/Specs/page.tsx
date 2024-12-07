import React from 'react'
import Image from "next/image";

const Specs = () => {
    return (
        <div id="Specs" className='mt-10 p-4 bg-background rounded-xl pt-36'>
            <h1 className='text-heading-lg md:text-title-sm font-bold text-neutral-charcoal mx-auto text-center max-w-screen-sm'>Descoperă secretul unei afumări autentice!</h1>
            <div className='flex flex-col md:flex-row mx-auto w-full h-auto p-6'>
                <div className='w-full h-auto justify-center items-center flex flex-col'>
                    <ul className='p-2 text-center md:text-left'>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Cu așchiile noastre din lemn de fag, recunoscut pentru arderea uniformă și aroma delicată de fum. Fiecare așchie este 100% fag, selecționat cu grijă pentru a-ți oferi un gust echilibrat, potrivit pentru toate tipurile de carne și pește.</b>
                        </li>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Proprietati</b> – Lemnul de fag adaugă un plus de savoare preparatelor tale, oferind un gust delicat de fum, fără a fi prea intens. Este alegerea perfectă pentru a pune în valoare gustul cărnurilor și al peștelui, creând o experiență culinară desăvârșită.
                        </li>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Instrucțiuni de utilizare</b> – Pentru rezultate optime, înmoaie așchiile în apă timp de 30 de minute înainte de utilizare. Adaugă-le apoi pe grătar sau în afumătoare, pentru a infuza carnea de porc, vită, pasăre sau pește cu un gust deosebit
                        </li>


                    </ul>
                </div>
                <div className='w-full h-full justify-center items-center flex '>
                    <Image src='/prez8.png' width={400} height={300} alt='Specificatiile produsului'
                           className='p-4'/>
                </div>
            </div>
        </div>
    )
}
export default Specs
