'use client'
import { useState } from 'react';

export function WarehouseForm({ storeData, setStoreData = () => { } }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStoreData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleGuideFormatChange = (e, service) => {
    const { value } = e.target;
    setStoreData((prevState) => {
      const updatedGuideFormat = prevState.guideFormat.includes(service)
        ? prevState.guideFormat
        : [...prevState.guideFormat, service];

      return {
        ...prevState,
        guideFormat: updatedGuideFormat,
      };
    });
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Datos de la Bodega</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Nombre"
            value={storeData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="Teléfono"
            value={storeData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Departamento</label>
          <select
            id="department"
            className="form-select"
            value={storeData.department}
            onChange={handleInputChange}
          >
            <option value="">Departamento</option>
            <option value="Antioquia">Antioquia</option>
            <option value="Bogotá D.C.">Bogotá D.C.</option>
            <option value="Valle del Cauca">Valle del Cauca</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ciudad</label>
          <select
            id="city_id"
            className="form-select"
            value={storeData.city_id || ""}
            onChange={(e) => {
              const selectedCityId = parseInt(e.target.value);
              const selectedCityName = e.target.selectedOptions[0].text;
              console.log(selectedCityId, selectedCityName);

              setStoreData((prevState) => ({
                ...prevState,
                city_id: selectedCityId,
                city_name: selectedCityName,
              }));
            }}
          >
            <option value="">Ciudad</option>
            <option value="1">Medellín</option>
            <option value="2">Bogotá</option>
            <option value="3">Cali</option>
          </select>



        </div>

        <div className="form-group full-width">
          <label>Dirección</label>
          <textarea
            id="address"
            className="form-textarea"
            placeholder="Dirección"
            value={storeData.address}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>

      <h3 className="section-subtitle">Guide Format</h3>

      <div className="guide-format-grid">
        {[
          'ENVIA',
          'SERVIENTREGA',
          'INTERRAPIDISIMO',
          'DOMINA',
          'COORDINADORA',
          '99MINUTOS',
          'TCC',
          'WEB-ENVIOS',
          'SPEEDGO',
          'D-BOX',
          'THE-ROCHA-STORE',
          'VENTAS-BOGOTA'
        ].map((service) => (
          <div key={service} className="form-group">
            <label>{service}</label>
            <select
              id="guideFormat"
              className="form-select"
              value={storeData.guideFormat.includes(service) ? service : ""}
              onChange={(e) => handleGuideFormatChange(e, service)}
            >
              <option value="">Guide format</option>
              <option value={service}>{service}</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
