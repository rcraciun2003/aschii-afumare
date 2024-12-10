'use client';

import { useCart } from '@/components/CartContext';
import { useState, useEffect } from 'react';
import { notify } from '@/components/Notification';

export default function OrderForm() {
    const { cart } = useCart();
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const initialQuantities = cart.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cart]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prev) => ({ ...prev, [name]: value }));
    };

    const handleQuantityChange = (productId, event) => {
        const newQuantity = Math.max(1, parseInt(event.target.value));
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const orderDetails = { customer, cart };

        try {
            const response = await fetch('/api/send-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderDetails),
            });

            if (response.ok) {
                notify('Comanda plasată cu succes!', 'success');
            } else {
                const errorData = await response.json();
                notify(`Nu s-a putut plasa comanda: ${errorData.message}`, 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            notify('Ceva a mers prost. Vă rugăm să încercați din nou.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calculate the total price
    const total = cart.reduce((sum, item) => sum + item.price * (quantities[item.id] || 1), 0);

    // Delivery cost based on total price
    const deliveryCost = total < 120 ? 20 : 0;
    const finalTotal = total + deliveryCost;

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-1">
                        Nume
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-bold mb-1">
                        Adresa
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-bold mb-1">
                        Telefon
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <h3 className="text-lg font-bold mt-4">Rezumatul Comenzii</h3>
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mt-2">
                        <p>{item.name} x</p>
                        <input
                            type="number"
                            value={quantities[item.id] || 1}
                            onChange={(e) => handleQuantityChange(item.id, e)}
                            className="w-16 p-1 border rounded"
                            min="1"
                        />
                        <p className="font-bold text-primary">
                            {(item.price * (quantities[item.id] || 1)).toFixed(2)} LEI
                        </p>
                    </div>
                ))}
                <div className="mt-4 font-bold">Total: {total.toFixed(2)} LEI</div>
                {deliveryCost > 0 && (
                    <div className="mt-2 font-bold text-red-500">
                        Livrarea costă 20 LEI (pentru comenzi sub 120 LEI)
                    </div>
                )}
                <div className="mt-4 font-bold">Total Final: {finalTotal.toFixed(2)} LEI</div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-6 w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded ${
                        isSubmitting ? 'opacity-50' : ''
                    }`}
                >
                    {isSubmitting ? 'Se trimite...' : 'Trimite comanda'}
                </button>
            </form>
        </div>
    );
}