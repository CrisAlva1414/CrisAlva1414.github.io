import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle2, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface PackageCardProps {
  id: string;
  recipient: string;
  apartment: string;
  carrier: string;
  arrivedAt: string;
  status: "pending" | "delivered";
  type: "package" | "mail" | "document";
}

export function PackageCard({ id, recipient, apartment, carrier, arrivedAt, status, type }: PackageCardProps) {
  const [packageStatus, setPackageStatus] = React.useState(status);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const markAsDelivered = () => {
    setIsLoading(true);
    
    // Simulación de API call
    setTimeout(() => {
      setPackageStatus("delivered");
      setIsLoading(false);
      
      toast({
        title: "Paquete entregado",
        description: `El paquete para ${recipient} ha sido marcado como entregado.`,
      });
    }, 1000);
  };

  const getIconByType = () => {
    switch (type) {
      case "package":
        return <Package className="h-5 w-5" />;
      case "mail":
        return <Package className="h-5 w-5" />;
      case "document":
        return <Package className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          {getIconByType()}
          {recipient}
        </CardTitle>
        <div className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          packageStatus === "pending" 
            ? "bg-yellow-100 text-yellow-800" 
            : "bg-green-100 text-green-800"
        )}>
          {packageStatus === "pending" ? "Pendiente" : "Entregado"}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Apartamento:</span>
            <span className="font-medium">{apartment}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transportista:</span>
            <span>{carrier}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
            <CalendarDays className="h-3 w-3" />
            Recibido: {arrivedAt}
          </div>
        </div>
      </CardContent>
      {packageStatus === "pending" && (
        <CardFooter>
          <Button 
            onClick={markAsDelivered}
            variant="default" 
            className="w-full text-xs"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1.5" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
            )}
            Marcar como entregado
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
