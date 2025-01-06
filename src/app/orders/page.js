'use client';

import { HeaderProducts } from '@/components/HeaderProducts';
import { OrdersTable } from '@/components/OrdersTable';
import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import '@/css/product.css';


export default function OrdersHome() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);

    return (
        <div className="container">
            <Sidebar ubication={"Ordenes"} />

            <div className="productos-page">
                <HeaderProducts title='Ordenes' />
                <div className="content">
                    <SearchBar placeholder='Ordenes' />
                    <OrdersTable />
                </div>
            </div>
        </div>
    );
}
