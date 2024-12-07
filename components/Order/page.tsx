import { CartProvider } from '@/components/CartContext';
import ProductList from '@/components/ProductList';
import OrderForm from "@/components/OrderForm/page";

export default function Order() {
    return (
        <CartProvider>
            <div id='Order' className="container mx-auto p-4 pt-36">
                <h1 className="text-heading-lg md:text-title-sm font-bold text-neutral-charcoal mx-auto text-center max-w-screen-sm">Produsele noastre</h1>
                <ProductList />
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-heading-lg md:text-title-sm font-bold text-neutral-charcoal mx-auto text-center max-w-screen-sm">Comanda</h1>
                <OrderForm />
            </div>
        </CartProvider>
    );
}