import React from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { PackageCard } from "@/components/dashboard/PackageCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Package, MailOpen, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const packages = [
  {
    id: "pkg-1",
    recipient: "Ana García",
    apartment: "2B",
    carrier: "DHL",
    arrivedAt: "Hoy, 11:30",
    status: "pending",
    type: "package"
  },
  {
    id: "pkg-2",
    recipient: "Carlos López",
    apartment: "5A",
    carrier: "Correos",
    arrivedAt: "Ayer, 16:15",
    status: "pending",
    type: "mail"
  },
  {
    id: "pkg-3",
    recipient: "Elena Martínez",
    apartment: "3C",
    carrier: "Amazon",
    arrivedAt: "Hoy, 09:45",
    status: "pending",
    type: "package"
  },
  {
    id: "pkg-4",
    recipient: "Roberto Sánchez",
    apartment: "1A",
    carrier: "FedEx",
    arrivedAt: "Ayer, 14:20",
    status: "delivered",
    type: "package"
  },
  {
    id: "pkg-5",
    recipient: "Isabel Torres",
    apartment: "4D",
    carrier: "Oficina",
    arrivedAt: "Ayer, 15:30",
    status: "pending",
    type: "document"
  },
  {
    id: "pkg-6",
    recipient: "Miguel Rodríguez",
    apartment: "2C",
    carrier: "UPS",
    arrivedAt: "30/03/2025, 10:15",
    status: "delivered",
    type: "package"
  },
  {
    id: "pkg-7",
    recipient: "Sofía Vargas",
    apartment: "6B",
    carrier: "Correos",
    arrivedAt: "Hoy, 08:45",
    status: "pending",
    type: "mail"
  },
];

const PaqueteriaPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [activeTab, setActiveTab] = React.useState("pending");
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = React.useState({
    recipient: "",
    apartment: "",
    carrier: "",
    type: "package",
  });
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Paquete registrado",
      description: `Se registró un nuevo paquete para ${formData.recipient} (${formData.apartment})`,
    });
    
    setFormData({
      recipient: "",
      apartment: "",
      carrier: "",
      type: "package",
    });
  };
  
  const filterPackagesByType = (packages: typeof packages) => {
    if (filter === "all") return packages;
    return packages.filter(pkg => pkg.type === filter);
  };
  
  const filterPackagesByStatus = (packages: typeof packages) => {
    return packages.filter(pkg => pkg.status === activeTab);
  };
  
  const filterPackagesBySearch = (packages: typeof packages) => {
    if (!searchTerm) return packages;
    return packages.filter(pkg => 
      pkg.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.apartment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.carrier.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const filteredPackages = filterPackagesBySearch(
    filterPackagesByType(
      filterPackagesByStatus(packages)
    )
  );
  
  const pendingCount = packages.filter(pkg => pkg.status === "pending").length;
  const deliveredCount = packages.filter(pkg => pkg.status === "delivered").length;
  
  return (
    <div>
      <PageHeader 
        title="Paquetería y Correspondencia" 
        description="Gestión de paquetes, cartas y documentos"
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Registrar Nuevo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Registrar Nuevo Paquete</DialogTitle>
                  <DialogDescription>
                    Ingrese los detalles del paquete recibido
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="recipient" className="text-right">
                      Destinatario
                    </Label>
                    <Input
                      id="recipient"
                      name="recipient"
                      className="col-span-3"
                      value={formData.recipient}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="apartment" className="text-right">
                      Apartamento
                    </Label>
                    <Input
                      id="apartment"
                      name="apartment"
                      className="col-span-3"
                      value={formData.apartment}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="carrier" className="text-right">
                      Transportista
                    </Label>
                    <Input
                      id="carrier"
                      name="carrier"
                      className="col-span-3"
                      value={formData.carrier}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Tipo
                    </Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => handleSelectChange("type", value)}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Seleccione tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="package">Paquete</SelectItem>
                        <SelectItem value="mail">Carta</SelectItem>
                        <SelectItem value="document">Documento</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Registrar Paquete</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        }
      />
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por destinatario, apartamento..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="package">Paquetes</SelectItem>
            <SelectItem value="mail">Cartas</SelectItem>
            <SelectItem value="document">Documentos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="mb-8"
      >
        <TabsList>
          <TabsTrigger value="pending">Pendientes ({pendingCount})</TabsTrigger>
          <TabsTrigger value="delivered">Entregados ({deliveredCount})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPackages.map(pkg => (
              <PackageCard 
                key={pkg.id}
                id={pkg.id}
                recipient={pkg.recipient}
                apartment={pkg.apartment}
                carrier={pkg.carrier}
                arrivedAt={pkg.arrivedAt}
                status={pkg.status as "pending" | "delivered"}
                type={pkg.type as "package" | "mail" | "document"}
              />
            ))}
            
            {filteredPackages.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-2">No hay paquetes pendientes</p>
                {searchTerm && (
                  <Button 
                    variant="link" 
                    onClick={() => setSearchTerm("")}
                  >
                    Limpiar búsqueda
                  </Button>
                )}
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="delivered" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPackages.map(pkg => (
              <PackageCard 
                key={pkg.id}
                id={pkg.id}
                recipient={pkg.recipient}
                apartment={pkg.apartment}
                carrier={pkg.carrier}
                arrivedAt={pkg.arrivedAt}
                status={pkg.status as "pending" | "delivered"}
                type={pkg.type as "package" | "mail" | "document"}
              />
            ))}
            
            {filteredPackages.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-2">No hay paquetes entregados</p>
                {searchTerm && (
                  <Button 
                    variant="link" 
                    onClick={() => setSearchTerm("")}
                  >
                    Limpiar búsqueda
                  </Button>
                )}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaqueteriaPage;
