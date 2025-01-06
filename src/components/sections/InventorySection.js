'use client'
import { InputLabel, MenuItem, FormControl, Select, TextField, Card, CardContent, CircularProgress } from "@mui/material"
import '@/css/inventorySection.css';
import { useEffect, useState } from "react";
import { getStore } from "@/service/backFluxi";

export function InventorySection({ productData, handleChange, setProductData }) {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStore(localStorage.getItem('user_id'))
      .then(({ data }) => setStores(data.data))
      .catch(({ error }) => console.log(error))
      .finally(() => setLoading(false));
  }, []);


  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="inventory-section-card">
        <div className="inventory-section-grid">
          <div className="inventory-section-form-group">
            <InputLabel className="inventory-section-input-label">Bodega</InputLabel>
            <FormControl className="inventory-section-form-control">
              <Select
                id="store_id"
                defaultValue=""
                placeholder="Seleccionar bodega"
                onChange={(e) => setProductData({ ...productData, store_id: e.target.value })}
              >
                {stores.map((store, index) => (
                  <MenuItem key={index} value={store._id}>{store.name}</MenuItem>
                ))
                }
              </Select>
            </FormControl>
          </div>
          <div className="inventory-section-form-group">
            <InputLabel className="inventory-section-input-label">Existencia</InputLabel>
            <TextField
              id="stock"
              type="number"
              placeholder="Ingrese la existencia"
              className="inventory-section-text-field"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
