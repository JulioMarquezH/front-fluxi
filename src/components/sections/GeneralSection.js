'use client'
import { Alert, Card, CardContent, Checkbox, FormControlLabel, TextField } from '@mui/material'
import '@/css/generalSection.css';

export function GeneralSection({ productData, handleChange }) {
  return (
    <Card>
      <CardContent className="general-section-card">
        <div className="form-group">
          <TextField
            id="name"
            label="Nombre del producto"
            variant="outlined"
            value={productData.name}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="form-group">
          <TextField
            id="guideName"
            label="Nombre para mostrar en la Guía de envío (Opcional)"
            variant="outlined"
            value={productData.guideName}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="grid grid-cols-4 gap-4" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="weight"
              label="Peso (g)"
              variant="outlined"
              type="number"
              value={productData.weight}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="length"
              label="Longitud (cm)"
              variant="outlined"
              type="number"
              value={productData.length}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="width"
              label="Ancho (cm)"
              variant="outlined"
              type="number"
              value={productData.width}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="high"
              label="Alto (cm)"
              variant="outlined"
              type="number"
              value={productData.high}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>
        <Alert className="general-section-alert">
          <p>
            Al ingresar las medidas correctas, te aseguramos que el costo de envío sea exacto, evitando cobros adicionales por refacturación en el futuro.
          </p>
        </Alert>
        <div className="grid grid-cols-4 gap-4" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="price"
              label="Precio"
              variant="outlined"
              type="number"
              value={productData.price}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="suggested_price"
              label="Precio sugerido"
              variant="outlined"
              type="number"
              value={productData.suggested_price}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <FormControlLabel
              control={
                <Checkbox
                  id='is_private'
                  checked={productData.is_private}
                  onChange={handleChange}
                  name="is_private"
                  color="primary"
                />
              }
              label="Productos privados"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="type"
              label="Tipo"
              variant="outlined"
              type="text"
              value={productData.type}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <TextField
              id="category"
              label="Categoría"
              variant="outlined"
              type="text"
              value={productData.category}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>
        <div className="form-group" style={{ width: '60%' }}>
          <TextField
            id="sku"
            label="SKU"
            variant="outlined"
            type="text"
            value={productData.sku}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="form-group" style={{ width: '100%' }}>
          <TextField
            id="description"
            label="Descripción"
            variant="outlined"
            type="text"
            value={productData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
