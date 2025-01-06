'use client'

export function ShippingCompanies({ selectedCompany, setSelectedCompany, shippingType, setShippingType }) {
  const companies = [
    { id: 'envia', name: 'Envía', logo: '📦' },
    { id: 'servientrega', name: 'Servientrega', logo: '🚚' },
    { id: 'interrapidisimo', name: 'Interrapidísimo', logo: '🏃' },
    { id: 'domina', name: 'Domina', logo: '🎯' },
    { id: 'coordinadora', name: 'Coordinadora', logo: '📍' },
    { id: '99minutos', name: '99minutos', logo: '⏱️' },
    { id: 'tcc', name: 'Tcc', logo: '🚛' },
    { id: 'web-envios', name: 'Web-Envíos', logo: '🌐' },
    { id: 'speedgo', name: 'Speedgo', logo: '⚡' },
    { id: 'd-box', name: 'D-Box', logo: '📦' },
    { id: 'the-rocha-store', name: 'The-Rocha-Store', logo: '🏪' },
    { id: 'ventas-bogota', name: 'Ventas-Bogota', logo: '🏢' },
  ]

  return (
    <div className="shipping-section">
      <h3>Seleccione una transportadora:</h3>

      <div className="shipping-options">
        <label className={`radio-label ${shippingType === 'con-recaudo' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="shipping-type"
            value="con-recaudo"
            checked={shippingType === 'con-recaudo'}
            onChange={(e) => setShippingType(e.target.value)}
          />
          <span>Con Recaudo</span>
        </label>
        <label className={`radio-label ${shippingType === 'sin-recaudo' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="shipping-type"
            value="sin-recaudo"
            checked={shippingType === 'sin-recaudo'}
            onChange={(e) => setShippingType(e.target.value)}
          />
          <span>Sin Recaudo</span>
        </label>
      </div>

      <div className="companies-list">
        {companies.map((company) => (
          <button
            key={company.id}
            className={`company-item`}
            style={{
              backgroundColor: selectedCompany == company.id ? `#625df5` : "",
              color: selectedCompany !== company.id ? `black` : "#ffffff",
            }}
            onClick={() => {
              console.log('company.id', company.id)
              setSelectedCompany(company.id)
            }}
          >
            <span className="company-logo">{company.logo}</span>
            <span className="company-name">{company.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

