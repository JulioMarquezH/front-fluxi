'use client'

import { Copy } from 'lucide-react'

export function HeaderStoreCreate({handleCreate = () => {}}) {
  return (
    <header className="header">
      <h1>Bodegas</h1>
      <div className="header-actions">
        <button className="btn btn-icon">
          <Copy size={20} />
        </button>
        <button onClick={handleCreate} className="btn btn-guardar">
          Guardar
        </button>
      </div>
    </header>
  )
}

