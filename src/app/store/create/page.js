'use client';

import { HeaderStoreCreate } from '@/components/HeaderStoreCreate';
import { Sidebar } from '@/components/Sidebar';
import { WarehouseForm } from '@/components/WarehouseForm';
import '@/css/storeCreate.css';
import { postCreateStore } from '@/service/backFluxi';
import { useEffect, useState } from 'react';


export default function StoreCreate() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);
    const [storeData, setStoreData] = useState({
        name: '',
        phone: '',
        department_id: '',
        city_id: '',
        address: '',
        user_id: localStorage.getItem('user_id'),
        guideFormat: []
    });

    const handleCreate = () => {
        postCreateStore(storeData)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <Sidebar ubication={"Bodega"} />

            <div className="crear-bodega">
                <HeaderStoreCreate handleCreate={handleCreate} />
                <main className="main-content">
                    <WarehouseForm storeData={storeData} setStoreData={setStoreData} />
                </main>
            </div>
        </div>
    );
}
