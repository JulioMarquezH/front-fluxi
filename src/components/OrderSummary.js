'use client'

export function OrderSummary({ product, amount, price }) {
  return (
    <div className="summary-section">
      <h3>Resumen de la orden:</h3>

      <div className="summary-content">
        <div className="summary-header">
          <span>Producto</span>
          <span>Precio de venta</span>
        </div>

        <div className="summary-item">
          <span>{product?.name} ({amount})</span>
          <span>$ {price}</span>
        </div>

        <div className="summary-totals">
          <div className="total-row">
            <span>Total a recaudar:</span>
            <span>$ {price * amount}</span>
          </div>
          <div className="total-row">
            <span>Precio proveedor:</span>
            <span>$ {product?.price_proveedor ?? 0}</span>
          </div>
          <div className="total-row">
            <span>Precio de envío:</span>
            <span>$ {product?.price_proveedor ?? 0}</span>
          </div>
          <div className="total-row">
            <span>Comisión de la plataforma:</span>
            <span>$ {product?.price_proveedor ?? 0}</span>
          </div>
          <div className="total-row earnings">
            <span>Ganancias:</span>
            <span>$ {product?.price_proveedor ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

