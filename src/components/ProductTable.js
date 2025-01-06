'use client';

import { deleteProducts, getProducts } from '@/service/backFluxi';
import { Box, CircularProgress } from '@mui/material';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ManualOrderModal } from './ManualOrderModal';
import { Sell } from './icnos';

export function ProductTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const productId = useRef(null)

  useEffect(() => {
    setLoading(true);
    getProducts(localStorage.getItem('user_id'))
      .then(({ data }) => setProducts(data.data))
      .catch(({ error }) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleOpenModal = (product_id) => {
    productId.current = product_id
    setShowModal(true)
  }

  const handleDeleteProducts = (product_id) => {
    deleteProducts(product_id)
      .then(({ data }) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <div className="table-container">
      <div>
        {showModal && <ManualOrderModal productId={productId.current} setShowModal={setShowModal} />}
      </div>
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
                      src={product?.image ? product?.image : null}
                      alt={product?.name}
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td>
                  <span className="website-tag">{product.website}</span>
                </td>
                <td>{product?.sku}</td>
                <td>{product?.name}</td>
                <td>${product?.price}</td>
                <td>{product?.stock}</td>
                <td>{product?.category}</td>
                <td>
                  <span className="status-badge">{product?.status}</span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <Pencil className="icon" />
                    </button>
                    <button onClick={() => handleOpenModal(product?._id)} className="action-btn edit">
                      <Sell />
                    </button>
                    <button onClick={() => handleDeleteProducts(product?._id)} className="action-btn delete">
                      <Trash2 className="icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>)
        : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }} ><CircularProgress /></Box>
        )}
    </div>
  );
}
