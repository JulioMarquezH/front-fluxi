'use client'
import { Button, Card, CardContent } from '@mui/material'
import { Upload } from 'lucide-react'
import '@/css/imagesSection.css';
export function ImagesSection({ productData, handleChange }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleChange({ target: { id: 'image', value: imageUrl } });
    }
  };

  const handleImageDelete = () => {
    handleChange({ target: { id: 'image', value: null } });
  };

  return (
    <Card>
      <CardContent className="images-section-card">
        {!productData?.image ? (
          <div
            className="images-section-container"
            onClick={() => document.getElementById('image').click()}
          >
            <div className="images-section-text">
              <Upload className="images-section-upload-icon" />
              <p className="images-section-upload-text">AGREGAR UNA IMAGEN</p>
            </div>
          </div>
        ) : (
          <div className="image-preview">
            <img
              src={productData.image} // Mostrar la URL directamente
              alt="Vista previa"
              className="image-preview-img"
            />
          </div>
        )}

        <input
          type="file"
          id="image"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </CardContent>

      <div className="delete-button-container">
        <Button
          onClick={handleImageDelete}
          variant="contained"
          className="delete-button"
        >
          Borrar
        </Button>
      </div>
    </Card>
  );
}
