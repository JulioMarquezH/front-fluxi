'use client';

import { getStore } from '@/service/backFluxi';
import { Box, CircularProgress } from '@mui/material';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function StoreTable() {
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStore(localStorage.getItem('user_id'))
      .then(({ data }) => setStore(data.data))
      .catch(({ error }) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="table-container">
      {!loading ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Es Bodega principal</th>
              <th>Proveedor</th>
              <th>Nombre de Bodega</th>
              <th>Teléfono</th>
              <th>Departamento</th>
              <th>Ciudad</th>
              <th>Dirección</th>
              <th>Accion</th>
            </tr>
          </thead>

          <tbody>
            {store.map((store, index) => (
              <tr key={index}>
                <td>{store._id}</td>
                <td>{store.warehouse_white_brand ? 'Si' : "No"}</td>
                <td>{store.supplier}</td>
                <td>{store.name}</td>
                <td>{store.phone}</td>
                <td>{store.department}</td>
                <td>{store.city_name}</td>
                <td>
                  <span className="status-badge">{store.address}</span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <Pencil className="icon" />
                    </button>
                    <button className="action-btn delete">
                      <Trash2 className="icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>)
        : (
          <Box sx={{ display:'flex', justifyContent: 'center' }} ><CircularProgress /></Box>
        )}
    </div>
  );
}
