'use client'

import { X } from 'lucide-react'
import { CustomerForm } from './CustomerForm'
import { ShippingCompanies } from './ShippingCompanies'
import { OrderSummary } from './OrderSummary'
import '@/css/modal.css'
import { useEffect, useState } from 'react'
import { getProductsById } from '@/service/backFluxi'


export function ManualOrderModal({ productId, setShowModal = () => { } }) {
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(1)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [shippingType, setShippingType] = useState('con-recaudo')

  useEffect(() => {
    getProductsById(productId)
      .then(({ data }) => setProduct(data.data[0]))
      .catch(({ error }) => console.log(error))
  }, [])

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Creación de orden manual</h2>
          <button onClick={() => setShowModal(false)} className="close-button">
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <CustomerForm product={product} setAmount={setAmount} setPrice={setPrice} />
          <ShippingCompanies
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
            shippingType={shippingType}
            setShippingType={setShippingType}
          />
          <OrderSummary product={product} amount={amount} price={price} />
        </div>

        <div className="modal-footer">
          <button style={{ width: "180px" }} className="btn btn-cancel" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button style={{ width: "180px" }} className="btn btn-primary">
            Enviar al cliente
          </button>
        </div>
      </div>
    </div>
  )
}

