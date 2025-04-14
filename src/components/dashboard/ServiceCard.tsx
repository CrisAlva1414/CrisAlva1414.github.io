import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  action?: () => void;
  actionLabel?: string;
}

export function ServiceCard({ id, name, description, icon, color, action, actionLabel }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={cn("h-2", color)} />
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={cn("p-2 rounded-lg", color.replace("bg-", "bg-").replace("-500", "-100"))}>
            {icon}
          </div>
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
      {action && (
        <CardFooter>
          <Button 
            onClick={action}
            variant="outline" 
            className="w-full"
          >
            {actionLabel || "Ver detalles"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
