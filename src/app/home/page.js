'use client';

import { Sidebar } from '@/components/Sidebar';
import { ActionCard } from '@/components/ActionCard';
import { DollarSign, MessageSquare, Globe, BarChart2, Calculator, Lightbulb } from 'lucide-react';
import '@/css/home.css';
import {  useLayoutEffect, useState } from 'react';
import { CircularProgress } from '@mui/material'; 

export default function Home() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);
    const [loading, setLoading] = useState(true);

    function checkUserId() {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            window.location.href = '/login';
        } else {
            setLoading(false);
        }
    }

    useLayoutEffect(() => {
        checkUserId();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="container">
            <Sidebar ubication="Inicio" />

            <main className="main">
                <div className="content">
                    <div className="header">
                        <p className="dateText">{formattedDate}</p>
                        <h1 style={{ margin: 0 }}>Buenos días,</h1>
                    </div>

                    <div>
                        <h2 className="sectionTitle">¿Qué quieres hacer hoy?</h2>

                        <div className="grid">
                            <ActionCard icon={DollarSign} title="Ver mis ventas" href="#" />
                            <ActionCard icon={MessageSquare} title="Administrar mis chats" href="#" />
                            <ActionCard icon={Globe} title="Ver mis páginas web" href="#" />
                            <ActionCard icon={BarChart2} title="Ver mis métricas" href="#" />
                            <ActionCard icon={Calculator} title="Proyectar mis ventas" href="#" />
                            <ActionCard icon={Lightbulb} title="Aprender a vender" href="#" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
