'use client'
import { Alert, Card, CardContent } from '@mui/material'
import { InfoIcon } from 'lucide-react'
import '@/css/resourcesSection.css';

export function ResourcesSection() {
  return (
    <Card>
      <CardContent className="resources-section-card">
        <Alert className="resources-section-alert">
          <p className="resources-section-alert-text">
            Para crear recursos adicionales, por favor guarda el producto primero.
          </p>
        </Alert>
      </CardContent>
    </Card>
  )
}
