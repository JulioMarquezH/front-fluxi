import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  DollarSign,
  Package,
  MessageSquare,
  Globe,
  BarChart2,
  Calculator,
  Truck,
  Lightbulb,
} from 'lucide-react';
import '@/css/sidebar.css';

export function Sidebar({ ubication }) {

  const handleRedirect = (ubication) => {
    window.location.href = `/${ubication}`;
  }

  return (
    <aside className="sidebar">
      <div className="sidebarLogo">
        <Image
          src="/placeholder.svg"
          alt="Fluxi Logo"
          width={120}
          height={40}
        />
      </div>

      <nav className="sidebarNav">
        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Inicio' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <Home className="sidebarLinkIcon" />
          Inicio
        </Link>

        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Ventas' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <DollarSign className="sidebarLinkIcon" />
          Ventas
        </Link>

        <Link href={"#"} onClick={() => { handleRedirect("product") }} className={ubication == 'Productos' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <Package className="sidebarLinkIcon" />
          Productos
        </Link>

        <div className="sidebarSection">
          <p className="sidebarSectionTitle">Canales de venta</p>
        </div>

        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Chat' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <MessageSquare className="sidebarLinkIcon" />
          Chat
        </Link>

        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Páginas Web' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <Globe className="sidebarLinkIcon" />
          Páginas Web
        </Link>

        <div className="sidebarSection">
          <p className="sidebarSectionTitle">Herramientas</p>
        </div>

        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Métricas' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <BarChart2 className="sidebarLinkIcon" />
          Métricas
        </Link>

        <Link href={"#"} onClick={() => { handleRedirect("store") }} className={ubication == 'Bodega' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <Calculator className="sidebarLinkIcon" />
          Bodega
        </Link>

        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Logística' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <Truck className="sidebarLinkIcon" />
          Logística
        </Link>

        <div className="sidebarSection">
          <p className="sidebarSectionTitle">Educación</p>
        </div>

        <Link href={"#"} onClick={() => { handleRedirect("home") }} className={ubication == 'Fórmula de ventas' ? "sidebarLink sidebarLinkActive" : "sidebarLink"}>
          <Lightbulb className="sidebarLinkIcon" />
          Fórmula de ventas
        </Link>
      </nav>
    </aside>
  );
}
