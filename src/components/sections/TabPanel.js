'use client'
import '@/css/generalSection.css';

export function TabPanel({ value, index, children }) {
    return (
        <div className={`tab-panel ${value === index ? 'active' : ''}`} role="tabpanel">
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    )
}

