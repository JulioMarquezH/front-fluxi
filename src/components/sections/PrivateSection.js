'use client'
import { Card, CardContent, FormLabel, TextField, Switch } from "@mui/material";
import '@/css/privateSection.css';

export function PrivateSection({ productData, handleChange }) {
  return (
    <Card>
      <CardContent className="private-section-card">
        <div className="private-section-switch">
          <FormLabel htmlFor="private-products" className="private-section-form-label">
            Productos privados
          </FormLabel>
          <Switch
            id="is_private"
            onChange={handleChange}
            value={productData.is_private}
          />
        </div>
        <div className="private-section-grid">
          <div className="private-section-form-group">
            <FormLabel className="private-section-form-label">Correo</FormLabel>
            <TextField
              id="mail"
              type="email"
              placeholder="Ingrese el correo"
              variant="outlined"
              className="private-section-input"
              fullWidth
              onChange={handleChange}
              value={productData?.mail || ""}
            />
          </div>
          <div className="private-section-form-group">
            <FormLabel className="private-section-form-label">Cantidad</FormLabel>
            <TextField
              id="amount"
              type="number"
              placeholder="0"
              variant="outlined"
              className="private-section-input"
              fullWidth
              onChange={handleChange}
              value={productData.amount}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
