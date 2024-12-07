'use client';

import { useState } from 'react';

export default function ReturnOrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        billNumber: '',
        iban: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('/api/return-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Solicitarea a fost trimisă cu succes!');
                setFormData({ name: '', phone: '', billNumber: '', iban: '' });
            } else {
                const errorData = await response.json();
                setMessage(`Eroare: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Ceva a mers prost. Vă rugăm să încercați din nou.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow m-4">
            <h2 className="text-lg font-bold mb-4">Formular Returnare</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-1">
                        Nume
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-bold mb-1">
                        Telefon
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="billNumber" className="block text-sm font-bold mb-1">
                        Număr Factură
                    </label>
                    <input
                        type="text"
                        id="billNumber"
                        name="billNumber"
                        value={formData.billNumber}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="iban" className="block text-sm font-bold mb-1">
                        IBAN
                    </label>
                    <input
                        type="text"
                        id="iban"
                        name="iban"
                        value={formData.iban}
                        onChange={handleChange}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded ${isSubmitting ? 'opacity-50' : ''}`}
                >
                    {isSubmitting ? 'Se trimite...' : 'Trimite'}
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
}
