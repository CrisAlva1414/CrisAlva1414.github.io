import React from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { CommunicationCard } from "@/components/dashboard/CommunicationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

const residents = [
  {
    id: "res-1",
    name: "Ana García",
    apartment: "2B",
    phone: "+123456789",
  },
  {
    id: "res-2",
    name: "Carlos López",
    apartment: "5A",
    phone: "+123456789",
  },
  {
    id: "res-3",
    name: "Elena Martínez",
    apartment: "3C",
    phone: "+123456789",
  },
  {
    id: "res-4",
    name: "Roberto Sánchez",
    apartment: "1A",
    phone: "+123456789",
  },
  {
    id: "res-5",
    name: "Isabel Torres",
    apartment: "4D",
    phone: "+123456789",
  },
  {
    id: "res-6",
    name: "Miguel Rodríguez",
    apartment: "2C",
    phone: "+123456789",
  },
  {
    id: "res-7",
    name: "Sofía Vargas",
    apartment: "6B",
    phone: "+123456789",
  },
  {
    id: "res-8",
    name: "Javier Morales",
    apartment: "3A",
    phone: "+123456789",
  },
];

const ComunicacionPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredResidents = residents.filter(resident => 
    resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resident.apartment.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <PageHeader 
        title="Comunicación con Residentes" 
        description="Contacto con propietarios vía citófono o WhatsApp"
        actions={
          <Button variant="default" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Residente
          </Button>
        }
      />
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre o apartamento..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredResidents.map(resident => (
          <CommunicationCard 
            key={resident.id}
            id={resident.id}
            name={resident.name}
            apartment={resident.apartment}
            phone={resident.phone}
          />
        ))}
        
        {filteredResidents.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-2">No se encontraron residentes</p>
            {searchTerm && (
              <Button 
                variant="link" 
                onClick={() => setSearchTerm("")}
              >
                Borrar búsqueda
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComunicacionPage;
