'use client'
import { Card, CardContent, InputLabel, TextField, Checkbox, FormControlLabel } from "@mui/material";
import '@/css/warrantySection.css';

export function WarrantySection({ productData, handleChange }) {
  const warranties = [
    { id: "incomplete_order", label: "Orden incompleta" },
    { id: "malfunction", label: "Mal funcionamiento" },
    { id: "broken_product", label: "Producto roto" },
    { id: "different_order", label: "Orden diferente" },
  ];

  const handleInputChange = (warrantyKey, field, value) => {
    handleChange({
      target: {
        id: warrantyKey,
        value: {
          ...productData[warrantyKey],
          [field]: value
        }
      }
    });
  };

  return (
    <Card className="warranty-section-card">
      <CardContent>
        <h3 className="warranty-section-title">Garantías por defecto</h3>
        <div className="warranty-section-grid">
          {warranties.map((warranty) => (
            <div key={warranty.id} className="warranty-section-form-group">
              <div className="warranty-section-checkbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      id={warranty.id}
                      checked={productData[warranty.id]?.enabled || false}
                      onChange={(e) => handleInputChange(warranty.id, 'enabled', e.target.checked)}
                    />
                  }
                  label={warranty.label}
                />
              </div>

              <div className="warranty-section-grid-cols">
                <div className="warranty-section-input-group">
                  <InputLabel className="warranty-section-input-label">DÍAS</InputLabel>
                  <TextField
                    type="number"
                    value={productData[warranty.id]?.days || ""}
                    variant="outlined"
                    className="warranty-section-text-field"
                    onChange={(e) => handleInputChange(warranty.id, 'days', e.target.value)}
                  />
                </div>
                <div className="warranty-section-input-group">
                  <InputLabel className="warranty-section-input-label">Observaciones</InputLabel>
                  <TextField
                    value={productData[warranty.id]?.observation || ""}
                    placeholder="Ingrese observaciones"
                    multiline
                    rows={4}
                    variant="outlined"
                    className="warranty-section-text-field"
                    onChange={(e) => handleInputChange(warranty.id, 'observation', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
