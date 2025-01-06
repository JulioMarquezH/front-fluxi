'use client';

import { HeaderProducts } from '@/components/HeaderProducts';
import { ManualOrderModal } from '@/components/ManualOrderModal';
import { ProductTable } from '@/components/ProductTable';
import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import '@/css/product.css';
import { useState } from 'react';


export default function ProductsHome() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);

    const handleCreate = () => {
        window.location.href = '/product/create';
    }

    return (
        <div className="container">
            <Sidebar ubication={"Productos"} />

            <div className="productos-page">
                <HeaderProducts title='productos' handle={handleCreate} />
                <div className="content">
                    <SearchBar placeholder='productos' />
                    <ProductTable />
                </div>
            </div>
        </div>
    );
}
