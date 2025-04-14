import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, MoreVertical, Video, VideoOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface CameraCardProps {
  id: string;
  name: string;
  location: string;
  status: "online" | "offline";
  thumbnail: string;
}

export function CameraCard({ id, name, location, status, thumbnail }: CameraCardProps) {
  const [isActive, setIsActive] = React.useState(status === "online");

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 pb-2">
        <div className="relative aspect-video rounded-md overflow-hidden bg-black">
          {isActive ? (
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400">
              <VideoOff className="h-10 w-10" />
              <p className="text-xs">Cámara desconectada</p>
            </div>
          )}
          <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/70 text-white px-2 py-1 rounded text-xs">
            <span className={cn(
              "h-2 w-2 rounded-full",
              isActive ? "bg-green-500" : "bg-red-500"
            )} />
            {isActive ? "En vivo" : "Offline"}
          </div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Ubicación: {location}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs h-8"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <>
              <VideoOff className="h-3.5 w-3.5 mr-1.5" /> Desactivar
            </>
          ) : (
            <>
              <Video className="h-3.5 w-3.5 mr-1.5" /> Activar
            </>
          )}
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="text-xs h-8"
        >
          <Eye className="h-3.5 w-3.5 mr-1.5" /> Ver
        </Button>
      </CardFooter>
    </Card>
  );
}
