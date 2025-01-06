'use client';

import { HeaderProducts } from '@/components/HeaderProducts';
import { ProductTable } from '@/components/ProductTable';
import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import { StoreTable } from '@/components/StoreTable';
import '@/css/product.css';


export default function StoreHome() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);

    const handleCreate = () => {
        window.location.href = '/store/create';
    }

    return (
        <div className="container">
            <Sidebar ubication={"Bodega"} />

            <div className="productos-page">
                <HeaderProducts title='Bodega' handle={handleCreate} />
                <div className="content">
                    <SearchBar placeholder='bodega' />
                    <StoreTable />
                </div>
            </div>
        </div>
    );
}
