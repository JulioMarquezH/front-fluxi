'use client'

import { Plus, Upload, Download } from 'lucide-react'

export function HeaderProducts({ title = "", handle = () => { } }) {
  return (
    <div className="header">
      <h1>Gestión de {title}</h1>
      <div className="header-actions">
        <button onClick={handle} className="btn btn-primary">
          <Plus className="icon" />
          Nuevo {title}
        </button>
        <button className="btn btn-ghost">
          <Upload className="icon" />
        </button>
        <button className="btn btn-ghost">
          <Download className="icon" />
        </button>
      </div>
    </div>
  )
}

