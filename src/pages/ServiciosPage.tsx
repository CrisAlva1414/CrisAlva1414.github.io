import React from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { Button } from "@/components/ui/button";
import { Plus, Wrench, CalendarClock, Car, Briefcase, Trash, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ServiciosPage = () => {
  const { toast } = useToast();
  
  const handleServiceAction = (serviceName: string) => {
    toast({
      title: `Servicio: ${serviceName}`,
      description: `Has accedido al servicio ${serviceName}`,
    });
  };
  
  return (
    <div>
      <PageHeader 
        title="Servicios Adicionales" 
        description="Gestión de servicios para el condominio"
        actions={
          <Button variant="default" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Servicio
          </Button>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          id="svc-1"
          name="Mantenimiento"
          description="Gestión de solicitudes de mantenimiento y reparaciones en el condominio."
          icon={<Wrench className="h-5 w-5 text-blue-600" />}
          color="bg-blue-500"
          action={() => handleServiceAction("Mantenimiento")}
          actionLabel="Gestionar Solicitudes"
        />
        
        <ServiceCard 
          id="svc-2"
          name="Reservas"
          description="Reserva de áreas comunes como salón, piscina o áreas de BBQ."
          icon={<CalendarClock className="h-5 w-5 text-purple-600" />}
          color="bg-purple-500"
          action={() => handleServiceAction("Reservas")}
          actionLabel="Ver Calendario"
        />
        
        <ServiceCard 
          id="svc-3"
          name="Estacionamiento"
          description="Control de estacionamientos para residentes y visitantes."
          icon={<Car className="h-5 w-5 text-green-600" />}
          color="bg-green-500"
          action={() => handleServiceAction("Estacionamiento")}
          actionLabel="Gestionar Espacios"
        />
        
        <ServiceCard 
          id="svc-4"
          name="Administración"
          description="Gestión financiera y administrativa del condominio."
          icon={<Briefcase className="h-5 w-5 text-amber-600" />}
          color="bg-amber-500"
          action={() => handleServiceAction("Administración")}
          actionLabel="Panel Administrativo"
        />
        
        <ServiceCard 
          id="svc-5"
          name="Recolección"
          description="Programación de recolección de basura y reciclaje."
          icon={<Trash className="h-5 w-5 text-red-600" />}
          color="bg-red-500"
          action={() => handleServiceAction("Recolección")}
          actionLabel="Ver Horarios"
        />
        
        <ServiceCard 
          id="svc-6"
          name="Residentes"
          description="Directorio y gestión de residentes del condominio."
          icon={<Users className="h-5 w-5 text-indigo-600" />}
          color="bg-indigo-500"
          action={() => handleServiceAction("Residentes")}
          actionLabel="Directorio"
        />
      </div>
    </div>
  );
};

export default ServiciosPage;
