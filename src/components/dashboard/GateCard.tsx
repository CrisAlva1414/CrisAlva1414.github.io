import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DoorClosed, DoorOpen, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface GateCardProps {
  id: string;
  name: string;
  location: string;
  status: "closed" | "open";
  lastActivity?: string;
}

export function GateCard({ id, name, location, status, lastActivity }: GateCardProps) {
  const [gateStatus, setGateStatus] = React.useState(status);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const toggleGate = () => {
    setIsLoading(true);
    
    // Simulación de API call para abrir/cerrar el portón
    setTimeout(() => {
      const newStatus = gateStatus === "closed" ? "open" : "closed";
      setGateStatus(newStatus);
      setIsLoading(false);
      
      toast({
        title: `Portón ${name}`,
        description: newStatus === "open" ? "El portón ha sido abierto" : "El portón ha sido cerrado",
        variant: newStatus === "open" ? "default" : "destructive",
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <div className={cn(
          "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
          gateStatus === "closed" 
            ? "bg-red-100 text-red-800" 
            : "bg-green-100 text-green-800"
        )}>
          {gateStatus === "closed" ? (
            <>
              <DoorClosed className="h-3 w-3" />
              Cerrado
            </>
          ) : (
            <>
              <DoorOpen className="h-3 w-3" />
              Abierto
            </>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Ubicación: {location}
        </div>
        {lastActivity && (
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            Última actividad: {lastActivity}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs"
        >
          <History className="h-3.5 w-3.5 mr-1.5" />
          Historial
        </Button>
        <Button 
          onClick={toggleGate}
          variant={gateStatus === "closed" ? "default" : "destructive"}
          size="sm"
          disabled={isLoading}
          className="text-xs"
        >
          {isLoading ? (
            <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1.5" />
          ) : gateStatus === "closed" ? (
            <DoorOpen className="h-3.5 w-3.5 mr-1.5" />
          ) : (
            <DoorClosed className="h-3.5 w-3.5 mr-1.5" />
          )}
          {gateStatus === "closed" ? "Abrir" : "Cerrar"} Portón
        </Button>
      </CardFooter>
    </Card>
  );
}
