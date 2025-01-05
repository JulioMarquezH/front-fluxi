'use client';

import { getProducts } from '@/service/backFluxi';
import { Box, CircularProgress } from '@mui/material';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ProductTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(localStorage.getItem('user_id'))
      .then(({ data }) => setProducts(data.data))
      .catch(({ error }) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="table-container">
      {!loading ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>IMAGEN</th>
              <th>WEBSITE</th>
              <th>SKU</th>
              <th>NOMBRE</th>
              <th>PRECIO</th>
              <th>STOCK</th>
              <th>CATEGORÍA</th>
              <th>ESTADO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td>
                  <span className="website-tag">{product.website}</span>
                </td>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>
                  <span className="status-badge">{product.status}</span>
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
