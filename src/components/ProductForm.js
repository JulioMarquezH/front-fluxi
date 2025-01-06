'use client'
import { useState } from "react"
import { GeneralSection } from "./sections/GeneralSection"
import { InventorySection } from "./sections/InventorySection"
import { ImagesSection } from "./sections/ImagesSection"
import { ResourcesSection } from "./sections/ResourcesSection"
import { PrivateSection } from "./sections/PrivateSection"
import { WarrantySection } from "./sections/WarrantySection"
import { Save } from 'lucide-react'
import { Alert, Button, Snackbar, Tab } from "@mui/material"
import '@/css/productForm.css'
import { TabPanel } from "./sections/TabPanel"
import { postCreateProduct } from "@/service/backFluxi"

export function ProductForm() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general")
  const [productData, setProductData] = useState({
    name: "",
    guideName: "",
    weight: 0,
    length: 0,
    width: 0,
    high: 0,
    price: 0,
    suggested_price: 0,
    type: "",
    category: "",
    sku: "",
    description: "",
    store_id: "",
    stock: 0,
    image: "",
    mail: "",
    amount: 0,
    is_private: false,
    user_id: localStorage.getItem('user_id'),
    incomplete_order: {
      days: 0,
      observation: "",
      enabled: false
    },
    malfunction: {
      days: 0,
      observation: "",
      enabled: false
    },
    broken_product: {
      days: 0,
      observation: "",
      enabled: false
    },
    different_order: {
      days: 0,
      observation: "",
      enabled: false
    },
  })

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
  };


  const handlePostProduct = () => {
    postCreateProduct(productData)
      .then(({ data }) => {
        if (data.message == 'success') {
          setOpen(true);
          setTimeout(() => {
            window.location.replace('/product');
          }, 1000);
        }
      })
      .catch(({ error }) => console.log(error))
  }

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className="product-form-container">
      <div className="product-form-header">
        <div className="copy-button">
        </div>
        <Button onClick={handlePostProduct} className="save-button">
          <Save className="mr-2 h-4 w-4" />
          Guardar
        </Button>
      </div>
      <div className="product-tabs">
        <div className="product-tabs-header">
          {[
            { id: "general", label: "General" },
            { id: "inventory", label: "Existencia" },
            { id: "images", label: "Imagen del producto" },
            { id: "resources", label: "Recursos Adicionales" },
            { id: "private", label: "Productos privados" },
            { id: "warranty", label: "Garantías" },
          ].map((tab) => (
            <Tab
              key={tab.id}
              value={tab.id}
              label={tab.label}
              className={`product-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <TabPanel value={activeTab} index="general">
          <GeneralSection productData={productData} handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={activeTab} index="inventory">
          <InventorySection productData={productData} handleChange={handleChange} setProductData={setProductData} />
        </TabPanel>
        <TabPanel value={activeTab} index="images">
          <ImagesSection productData={productData} handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={activeTab} index="resources">
          <ResourcesSection productData={productData} handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={activeTab} index="private">
          <PrivateSection productData={productData} handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={activeTab} index="warranty">
          <WarrantySection productData={productData} handleChange={handleChange} />
        </TabPanel>
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
  )
}
