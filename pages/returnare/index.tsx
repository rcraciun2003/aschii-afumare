import React from 'react'
import ReturnForm from '@/components/ReturnForm/page';

const returnare = () => {
    return (
        <>
            <ReturnForm/>
            <div className='max-w-screen-lg p-6 mx-auto'>
                <h1 className='text-heading-xxl font-bold'>Politica de returnare</h1>
                <p className='text-body-lg font-normal p-2'>Produsele achizitionate la distanta se pot returna conform O.U.G. 34/2014. Consumatorul are dreptul sa notifice comerciantul ca renunta la cumparare, fara penalitati si fara invocarea unui motiv, in termen de 14 zile de la primirea produsului sau, in cazul prestarilor de servicii, de la incheierea contractului. Returnarea produselor se va face pe cheltuiala clientului, in termen de 14 zile de la denuntarea contractului. Se recomanda utlizarea aceluiasi serviciu de transport utilizat pentru receptionarea produselor</p>
                <p className='text-body-lg font-normal p-2'>Contravaloarea comenzii se va inapoia cumparatorului in cel mai scurt timp posibil de la primirea produsului returnat. Suma inapoiata cat si conditiile de returnare nu includ cheltuielile de transport. Produsul va fi returnat la furnizor doar prin curier. Comanda de ridicare a coletului va fi facută de furnizor, predarea produsului fiind obligația cumpărătorului. Costurile de returnare vor fi plătite de furnizor.</p>
                <p className='text-body-lg font-normal p-2'>Definitia contractului de vanzare (art. 2, 5.): orice contract in temeiul caruia profesionistul transfera sau se angajeaza sa transfere proprietatea asupra unor produse catre consumator, iar consumatorul plateste sau se angajeaza sa plateasca pretul acestora, inclusiv orice contract care are drept obiect atat produse, cat si servicii. Incheierea contractului are loc in momentul emiterii facturii fiscale si nu la lansarea comenzii sau emiterea confirmarii automate de primire a acesteia.</p>
                <p className='text-body-lg font-normal p-2'>Art. 12 mentioneaza ca exercitarea dreptului de retragere pune capat obligatiilor partilor contractuale. Produsul returnat trebuie sa fie in aceeasi stare in care a fost livrat (in ambalajul original cu toate accesoriile, cu etichetele intacte si documentele care l-au insotit). Nu se accepta pentru returnare produsele care prezinta modificari fizice, lovituri, ciobiri, zgarieturi, socuri, urme de folosire excesiva si/sau interventii neautorizate etc.</p>
                <p className='text-body-lg font-normal p-2'>Prevederile OUG 34/2014 se aplica doar consumatorului definit ca orice persoana fizica sau grup de persoane fizice constituite in asociatii asa cum sunt definite la art. 2 pct. 2 OG 21/1992 privind protectia consumatorilor, republicata, cu modificarile si completarile ulterioare.</p>
                <p className='text-body-lg font-normal p-2'>Consumatorul este responsabil doar in ce priveste diminuarea valorii produselor rezultata din manipularea acestora, diferit de ceea ce este necesar pentru determinarea naturii, caracteristicilor si functionarii produselor. In conformitate cu Directiva 2011/83/UE, punctul (47) din prezentare: pentru a stabili natura, caracteristicile si modul de functionare a bunurilor, consumatorul ar trebui sa le manuiasca si sa le inspecteze in acelasi mod in care i s-ar permite sa-o faca intr-un magazin; de exemplu, consumatorul ar trebui doar sa probeze un articol de imbracaminte, nu sa il poarte.</p>
            </div>
        </>
    )
}
export default returnare
