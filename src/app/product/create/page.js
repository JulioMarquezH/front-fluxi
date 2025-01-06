'use client';

import { ProductForm } from '@/components/ProductForm';
import { Sidebar } from '@/components/Sidebar';
import '@/css/productCreate.css';
import { useState } from 'react';


export default function ProductsCreate() {

    return (
        <div className="container">
            <Sidebar ubication={"Productos"} />

            <div className="page-container">
                <div className="content-wrapper">
                    <header className="page-header">
                        <h1>Crear Producto</h1>
                    </header>
                    <ProductForm />
                </div>
            </div>
        </div>
    );
}

