export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-center text-primary mb-6">Contactează-ne</h1>
                <p className="text-center text-gray-600 mb-8">
                    Suntem aici să te ajutăm! Pentru orice întrebări sau informații suplimentare, ne poți contacta
                    folosind detaliile de mai jos.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-around text-gray-700">
                    <div className="text-center mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold">Email</h2>
                        <a
                            href="mailto:fabricadebrichete@gmail.com"
                            className="text-primary hover:underline block mt-2"
                        >
                            fabricadebrichete@gmail.com
                        </a>
                    </div>
                    <div className="text-center mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold">Telefon</h2>
                        <a
                            href="tel:+40 725 184 359"
                            className="text-primary hover:underline block mt-2"
                        >
                            0725184359
                        </a>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold">Adresa</h2>
                        <p className="mt-2">Strada  Ciresilor nr. 431 ,Loc. Pestisani 217335</p>
                        <p>Gorj, Romania </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
