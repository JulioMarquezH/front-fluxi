'use client';

import { HeaderProducts } from '@/components/HeaderProducts';
import { ProductTable } from '@/components/ProductTable';
import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import '@/css/product.css';


export default function ProductsHome() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);

    return (
        <div className="container">
            <Sidebar ubication={"Productos"} />

            <div className="productos-page">
                <HeaderProducts title='productos' />
                <div className="content">
                    <SearchBar placeholder='productos' />
                    <ProductTable />
                </div>
            </div>
        </div>
    );
}
