import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface ResidentProps {
  id: string;
  name: string;
  apartment: string;
  phone: string;
  avatar?: string;
}

export function CommunicationCard({ id, name, apartment, phone, avatar }: ResidentProps) {
  const { toast } = useToast();
  const [message, setMessage] = React.useState("");
  const [isCallDialogOpen, setIsCallDialogOpen] = React.useState(false);
  
  const handleCall = () => {
    setIsCallDialogOpen(true);
    
    // Simulate call timer
    let seconds = 0;
    const interval = setInterval(() => {
      seconds++;
    }, 1000);
    
    // Close dialog after 3 seconds (simulating call end)
    setTimeout(() => {
      clearInterval(interval);
      setIsCallDialogOpen(false);
      
      toast({
        title: "Llamada finalizada",
        description: `Duración: ${seconds} segundos`,
      });
    }, 3000);
  };
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Mensaje enviado",
      description: `Mensaje enviado a ${name}: "${message}"`,
    });
    
    setMessage("");
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback className="bg-condominio-600 text-white">
              {name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="text-muted-foreground">Apartamento:</span>
            <span className="font-medium">{apartment}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleCall}
        >
          <Phone className="h-3.5 w-3.5 mr-1.5" />
          Llamar
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="default" 
              size="sm"
            >
              <MessageSquare className="h-3.5 w-3.5 mr-1.5" />
              Mensaje
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enviar mensaje</DialogTitle>
              <DialogDescription>
                Enviar un mensaje WhatsApp a {name} ({phone})
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <Input
                placeholder="Escriba su mensaje aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                Enviar mensaje
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Dialog open={isCallDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Llamando...</DialogTitle>
              <DialogDescription>
                Conectando con {name} a través del citófono
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center py-6">
              <Avatar className="h-24 w-24">
                {avatar && <AvatarImage src={avatar} alt={name} />}
                <AvatarFallback className="bg-condominio-600 text-white text-4xl">
                  {name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-center text-xl font-medium">
              {name}
            </div>
            <div className="flex justify-center text-sm text-muted-foreground">
              Apartamento {apartment}
            </div>
            <div className="flex justify-center items-center gap-3 py-4">
              <Button variant="destructive" size="icon" className="h-12 w-12 rounded-full">
                <Phone className="h-6 w-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
