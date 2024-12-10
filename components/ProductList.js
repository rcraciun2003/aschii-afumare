'use client';

import Image from 'next/image';
import { useCart } from './CartContext';

const products = [
    { id: 1, name: 'Așchii de afumare din fag', price: 16, image: '/fag.jpg' },
    { id: 2, name: 'Așchii de afumare cu rozmarin', price: 24, image: '/rozmarin.jpg' },
    { id: 3, name: 'Așchii de afumare cu piper și usturoi ', price: 24, image: '/piper-usturoi.jpg' },
    { id: 4, name: 'Mix de așchii de afumare pentru carne roșie', price: 24, image: '/carne-rosie.jpg' },
    { id: 5, name: 'Mix de așchii pentru pește', price: 24, image: '/peste.jpg' },
];

export default function ProductList() {
    const { addToCart } = useCart();

    return (
        <div id='Order' className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border rounded-lg shadow-md p-4">
                    <div className="relative w-full h-96">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                            quality={100} // Optional: Adjust image quality
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                    <p className="text-neutral-charcoal font-bold">{product.price} LEI / KG</p>
                    <div className="flex items-center mt-4 justify-between px-10">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            id={`quantity-${product.id}`}
                            className="w-20 h-10 border rounded text-center"
                        />
                        <button
                            onClick={() => {
                                const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value);
                                addToCart(product, quantity);
                            }}
                            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded"
                        >
                            Adaugă în coș
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
