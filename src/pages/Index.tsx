import React from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { CameraCard } from "@/components/dashboard/CameraCard";
import { GateCard } from "@/components/dashboard/GateCard";
import { PackageCard } from "@/components/dashboard/PackageCard";
import { Button } from "@/components/ui/button";
import { Camera, DoorOpen, Package, Bell, Users, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div>
      <PageHeader 
        title="Panel de Control" 
        description="Bienvenido al sistema de administración del condominio"
        actions={
          <Button variant="default">
            Ver todos los alertas
          </Button>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Cámaras Activas" 
          value="8/10" 
          description="80% de cámaras operativas"
          icon={<Camera className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard 
          title="Aperturas de Portón" 
          value="24" 
          description="En las últimas 24 horas"
          icon={<DoorOpen className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Paquetes Pendientes" 
          value="7" 
          description="Sin entregar a residentes"
          icon={<Package className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 2, isPositive: false }}
        />
        <StatCard 
          title="Residentes Activos" 
          value="42" 
          description="De 50 apartamentos"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Cámaras Recientes</h2>
            <Button variant="link" size="sm" asChild>
              <a href="/camaras">
                Ver todas <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CameraCard 
              id="cam-1"
              name="Entrada Principal"
              location="Exterior"
              status="online"
              thumbnail="https://plus.unsplash.com/premium_photo-1682377521625-bff87d734102?q=80&w=1860&auto=format&fit=crop"
            />
            <CameraCard 
              id="cam-2"
              name="Estacionamiento Sur"
              location="Exterior"
              status="offline"
              thumbnail="/placeholder.svg"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Portones de Acceso</h2>
            <Button variant="link" size="sm" asChild>
              <a href="/portones">
                Ver todos <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <GateCard 
              id="gate-1"
              name="Entrada Principal"
              location="Acceso Norte"
              status="closed"
              lastActivity="Hoy, 14:32"
            />
            <GateCard 
              id="gate-2"
              name="Entrada de Servicio"
              location="Acceso Sur"
              status="closed"
              lastActivity="Hoy, 10:15"
            />
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Paquetería Pendiente</h2>
          <Button variant="link" size="sm" asChild>
            <a href="/paqueteria">
              Ver toda <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PackageCard 
            id="pkg-1"
            recipient="Ana García"
            apartment="2B"
            carrier="DHL"
            arrivedAt="Hoy, 11:30"
            status="pending"
            type="package"
          />
          <PackageCard 
            id="pkg-2"
            recipient="Carlos López"
            apartment="5A"
            carrier="Correos"
            arrivedAt="Ayer, 16:15"
            status="pending"
            type="mail"
          />
          <PackageCard 
            id="pkg-3"
            recipient="Elena Martínez"
            apartment="3C"
            carrier="Amazon"
            arrivedAt="Hoy, 09:45"
            status="pending"
            type="package"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
