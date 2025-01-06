'use client'

import { getProductsById } from "@/service/backFluxi"
import { Button, Card, CardContent, CardHeader, Input, TextField, Tooltip } from "@mui/material"
import { HelpCircle } from "lucide-react"
import { useEffect, useState } from "react"
import '@/css/cardProduct.css'

export function CustomerForm({ product, setAmount, setPrice }) {

  return (
    <div className="form-section">
      <h3>Información del cliente:</h3>

      <div className="form-grid">
        <div className="phone-input">
          <input type="text" placeholder="Nombres" className="form-input" />
        </div>
        <div className="phone-input">
          <input type="text" placeholder="Apellidos" className="form-input" />
        </div>

        <div className="phone-input">
          <div className="country-code">
            <span className="flag">🇨🇴</span>
            <span> 57</span>
          </div>
          <input type="tel" placeholder="Número de teléfono" className="form-input" />
        </div>

        <select
          className="form-select"
        >
          <option value="">Departamento</option>
        </select>

        <select
          className="form-select"
        >
          <option value="">Ciudad</option>
        </select>
        <div className="phone-input">
          <textarea
            placeholder="Dirección y complementos"
            className="form-textarea full-width"
          />
        </div>

        <div className="phone-input">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-input full-width"
          />
        </div>

        <select
          className="form-select full-width"
        >
          <option value="">Tienda</option>
        </select>

        <label className="checkbox-label full-width">
          <input type="checkbox" />
          <span>¿Desea agregar notas para el proveedor?</span>
        </label>
      </div>

      <Card className="card w-full">
        <CardHeader>
          <p className="card-header-text">Seleccionar Productos</p>
        </CardHeader>
        <CardContent className="card-content">
          <div className="product-info">
            <div className="indicator"></div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-meta">
                <p>ID: {product._id}</p>
                <p>Proveedor: {product?.Supplier}</p>
                <p>Precio de proveedor: $ {product?.price?.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <TextField
                label="Precio de venta"
                type="text"
                value={product?.suggested_price?.toLocaleString()}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                helperText={`Precio sugerido: $ ${product?.suggested_price?.toLocaleString()}`}
              />
            </div>

            <div className="form-group">
              <TextField
                label="Cantidad"
                type="number"
                defaultValue="1"
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
              />
              <div className="stock-info">
                <span>Existencia: {product?.stock}</span>
                <Tooltip title="Cantidad disponible en el inventario">
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={() => console.log('Agregar producto')}>
              Agregar producto
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

