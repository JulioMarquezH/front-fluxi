'use client';

import { getOrders } from '@/service/backFluxi';
import { Box, CircularProgress } from '@mui/material';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders(localStorage.getItem('user_id'))
      .then(({ data }) => setOrders(data.data))
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
              <th>Nombre del producto</th>
              <th>Fecha de la orden</th>
              <th>Estatus de la Orden</th>
              <th>Transportadora</th>
              <th>Bodega</th>
              <th>Impreso</th>
              <th>Etiqueta</th>
              <th>Detalles</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order._id}</td>
                <td>{order.product_name}</td>
                <td>{order.order_date}</td>
                <td>{order.order_status}</td>
                <td>{order.carrier}</td>
                <td>{order.warehouse}</td>
                <td>{order.printed}</td>
                <td>{order.label}</td>
                <td>{order.details}</td>
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
