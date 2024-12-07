import React from 'react'
import Image from "next/image";

const Advantages = () => {
    return (
        <div id='Advantages' className='mt-10 p-4 pt-36'>
            <h1 className='text-heading-lg md:text-title-sm font-bold text-neutral-charcoal mx-auto text-center max-w-screen-sm'>Așchii de afumare din fag – Aroma perfectă pentru preparatele tale!</h1>
            <div className='flex flex-col md:flex-row mx-auto w-full h-auto p-6'>
                <div className='w-full h-auto justify-center items-center flex flex-col'>
                    <ul className='p-2 text-center md:text-left'>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Ingrediente de calitate
                            superioară</b> – Folosim lemn de fag natural, bine uscat, care
                            oferă un fum mai curat și mai bogat în arome. Așchiile de fag sunt perfect potrivite pentru
                            o afumare uniformă și delicată.
                        </li>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Arome naturale și
                            unice</b> – Fiecare sortiment este îmbogățit cu ierburi și condimente naturale, cum ar fi
                            rozmarinul, cimbrul sau feniculul, care sunt atent selecționate pentru a adăuga arome
                            distincte, fără a folosi aditivi sau substanțe chimice. Acest lucru face ca fiecare preparat
                            să fie mai gustos și mai sănătos.
                        </li>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Diversitate de
                            sortimente</b> – Avem 8 sortimente diferite, fiecare adaptat pentru diferite tipuri de carne
                            (carne roșie, carne albă, pește) și preparate, astfel încât clienții pot găsi exact ce le
                            trebuie, în funcție de gusturile lor.
                        </li>
                        <li className='p-4 text-neutral-charcoal'><b className='text-heading-sm'>Fără substanțe
                            artificiale </b> – Spre deosebire de multe alte produse din piață, așchiile de afumare
                            Fumarel sunt 100% naturale, fără conservanți sau arome artificiale. Oferim un produs curat,
                            ideal pentru clienții care sunt preocupați de sănătatea lor și vor să evite chimicalele.
                        </li>

                    </ul>
                </div>
                <div className='w-full h-full justify-center items-center flex bg-background rounded-xl px-6 py-8'>
                    <Image src='/prez7.png' width={500} height={400} alt='Specificatiile produsului'
                           className='p-4'/>
                </div>
            </div>
        </div>
    )
}
export default Advantages
