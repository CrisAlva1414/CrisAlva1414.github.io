import React from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { CameraCard } from "@/components/dashboard/CameraCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, RefreshCw } from "lucide-react";

const cameras = [
  {
    id: "cam-1",
    name: "Entrada Principal",
    location: "Exterior",
    status: "online",
    thumbnail: "https://plus.unsplash.com/premium_photo-1682377521625-bff87d734102?q=80&w=1860&auto=format&fit=crop",
  },
  {
    id: "cam-2",
    name: "Estacionamiento Sur",
    location: "Exterior",
    status: "offline",
    thumbnail: "/placeholder.svg",
  },
  {
    id: "cam-3",
    name: "Portón Vehicular",
    location: "Exterior",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1571263541330-13340904c902?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "cam-4",
    name: "Piscina",
    location: "Áreas Comunes",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1583909238390-10c7f567235a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "cam-5",
    name: "Gimnasio",
    location: "Áreas Comunes",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1589935447067-5a0c3c6a4c6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "cam-6",
    name: "Pasillo 1er Piso",
    location: "Pasillos",
    status: "offline",
    thumbnail: "/placeholder.svg",
  },
  {
    id: "cam-7",
    name: "Pasillo 2do Piso",
    location: "Pasillos",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1575352622748-c04cbc2f2c3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5JTIwY2FtZXJhfGVufDB8fDB8fHww",
  },
  {
    id: "cam-8",
    name: "Salón Comunitario",
    location: "Áreas Comunes",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1534544182010-856708292802?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlY3VyaXR5JTIwY2FtZXJhfGVufDB8fDB8fHww",
  },
];

const CamarasPage = () => {
  const exteriorCameras = cameras.filter(cam => cam.location === "Exterior");
  const areasComunes = cameras.filter(cam => cam.location === "Áreas Comunes");
  const pasillos = cameras.filter(cam => cam.location === "Pasillos");
  
  return (
    <div>
      <PageHeader 
        title="Cámaras de Seguridad" 
        description="Visualización y control de cámaras del condominio"
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizar
            </Button>
            <Button variant="default" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Agregar Cámara
            </Button>
          </div>
        }
      />
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Todas ({cameras.length})</TabsTrigger>
          <TabsTrigger value="exterior">Exterior ({exteriorCameras.length})</TabsTrigger>
          <TabsTrigger value="areas">Áreas Comunes ({areasComunes.length})</TabsTrigger>
          <TabsTrigger value="pasillos">Pasillos ({pasillos.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="camera-grid">
            {cameras.map(camera => (
              <CameraCard 
                key={camera.id}
                id={camera.id}
                name={camera.name}
                location={camera.location}
                status={camera.status as "online" | "offline"}
                thumbnail={camera.thumbnail}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="exterior" className="mt-6">
          <div className="camera-grid">
            {exteriorCameras.map(camera => (
              <CameraCard 
                key={camera.id}
                id={camera.id}
                name={camera.name}
                location={camera.location}
                status={camera.status as "online" | "offline"}
                thumbnail={camera.thumbnail}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="areas" className="mt-6">
          <div className="camera-grid">
            {areasComunes.map(camera => (
              <CameraCard 
                key={camera.id}
                id={camera.id}
                name={camera.name}
                location={camera.location}
                status={camera.status as "online" | "offline"}
                thumbnail={camera.thumbnail}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pasillos" className="mt-6">
          <div className="camera-grid">
            {pasillos.map(camera => (
              <CameraCard 
                key={camera.id}
                id={camera.id}
                name={camera.name}
                location={camera.location}
                status={camera.status as "online" | "offline"}
                thumbnail={camera.thumbnail}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CamarasPage;