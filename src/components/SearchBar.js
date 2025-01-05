'use client'

import { Search } from 'lucide-react'

export function SearchBar({ placeholder = "", handle = () => {} }) {
  return (
    <div className="search-container">
      <Search className="search-icon" />
      <input 
        onChange={handle}
        type="text" 
        placeholder={`Buscar ${placeholder}...` }
        className="search-input"
      />
    </div>
  )
}

