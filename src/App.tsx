import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Index from "./pages/Index";
import CamarasPage from "./pages/CamarasPage";
import PortonesPage from "./pages/PortonesPage";
import ComunicacionPage from "./pages/ComunicacionPage";
import PaqueteriaPage from "./pages/PaqueteriaPage";
import ServiciosPage from "./pages/ServiciosPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/camaras" element={<CamarasPage />} />
            <Route path="/portones" element={<PortonesPage />} />
            <Route path="/comunicacion" element={<ComunicacionPage />} />
            <Route path="/paqueteria" element={<PaqueteriaPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
