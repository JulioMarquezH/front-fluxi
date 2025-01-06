'use client';

import { HeaderStoreCreate } from '@/components/HeaderStoreCreate';
import { Sidebar } from '@/components/Sidebar';
import { WarehouseForm } from '@/components/WarehouseForm';
import '@/css/storeCreate.css';
import { postCreateStore } from '@/service/backFluxi';
import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';


export default function StoreCreate() {
  const [open, setOpen] = useState(false);
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
    guideFormat: [],
    department: '',
    city_name: '',
    warehouse_white_brand: false,
    created_by: "123",
    created_at: currentDate,
    supplier: "juanperez@fluxi.com",
  });

  const handleCreate = () => {
    postCreateStore(storeData)
      .then(({ data }) => {
        if (data.message == 'success') {
          setOpen(true);
          setTimeout(() => {
            window.location.replace('/store');
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Sidebar ubication={"Bodega"} />

      <div className="crear-bodega">
        <HeaderStoreCreate handleCreate={handleCreate} />
        <main className="main-content">
          <WarehouseForm storeData={storeData} setStoreData={setStoreData} />
        </main>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          ¡Creado exitosamente!
        </Alert>
      </Snackbar>
    </div>
  );
}
