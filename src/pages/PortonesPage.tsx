import React from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { GateCard } from "@/components/dashboard/GateCard";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, DoorOpen, DoorClosed, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const gates = [
  {
    id: "gate-1",
    name: "Entrada Principal",
    location: "Acceso Norte",
    status: "closed",
    lastActivity: "Hoy, 14:32",
  },
  {
    id: "gate-2",
    name: "Entrada de Servicio",
    location: "Acceso Sur",
    status: "closed",
    lastActivity: "Hoy, 10:15",
  },
  {
    id: "gate-3",
    name: "Portón Peatonal",
    location: "Acceso Este",
    status: "closed",
    lastActivity: "Ayer, 20:45",
  },
  {
    id: "gate-4",
    name: "Acceso Áreas Comunes",
    location: "Interior",
    status: "open",
    lastActivity: "Hoy, 13:20",
  },
];

const gateHistory = [
  { id: 1, gateName: "Entrada Principal", action: "open", user: "Juan Seguridad", timestamp: "Hoy, 14:32" },
  { id: 2, gateName: "Entrada Principal", action: "close", user: "Sistema Automático", timestamp: "Hoy, 14:35" },
  { id: 3, gateName: "Entrada de Servicio", action: "open", user: "Admin", timestamp: "Hoy, 10:15" },
  { id: 4, gateName: "Entrada de Servicio", action: "close", user: "Admin", timestamp: "Hoy, 10:18" },
  { id: 5, gateName: "Portón Peatonal", action: "open", user: "María Recepción", timestamp: "Ayer, 20:45" },
  { id: 6, gateName: "Portón Peatonal", action: "close", user: "María Recepción", timestamp: "Ayer, 20:50" },
  { id: 7, gateName: "Acceso Áreas Comunes", action: "open", user: "Admin", timestamp: "Hoy, 13:20" },
];

const PortonesPage = () => {
  return (
    <div>
      <PageHeader 
        title="Control de Portones" 
        description="Gestión de accesos y entradas del condominio"
        actions={
          <Button variant="default" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Portón
          </Button>
        }
      />
      
      <Tabs defaultValue="control" className="mb-8">
        <TabsList>
          <TabsTrigger value="control">Control de Portones</TabsTrigger>
          <TabsTrigger value="history">Historial de Accesos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="control" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gates.map(gate => (
              <GateCard 
                key={gate.id}
                id={gate.id}
                name={gate.name}
                location={gate.location}
                status={gate.status as "closed" | "open"}
                lastActivity={gate.lastActivity}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Accesos</CardTitle>
              <CardDescription>
                Registro de aperturas y cierres de portones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Portón</TableHead>
                    <TableHead>Acción</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Fecha/Hora</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gateHistory.map(entry => (
                    <TableRow key={entry.id}>
                      <TableCell>{entry.gateName}</TableCell>
                      <TableCell>
                        <Badge variant={entry.action === "open" ? "default" : "secondary"} className="flex items-center w-fit gap-1">
                          {entry.action === "open" ? (
                            <>
                              <DoorOpen className="h-3 w-3" />
                              Apertura
                            </>
                          ) : (
                            <>
                              <DoorClosed className="h-3 w-3" />
                              Cierre
                            </>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        {entry.user}
                      </TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {entry.timestamp}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortonesPage;
