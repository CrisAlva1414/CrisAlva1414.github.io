import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  DoorOpen, 
  MessageSquare, 
  Package, 
  MoreHorizontal, 
  Home,
  Menu
} from "lucide-react";

interface SidebarLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

const sidebarLinks: SidebarLink[] = [
  {
    icon: Home,
    label: "Inicio",
    href: "/",
  },
  {
    icon: Camera,
    label: "Cámaras",
    href: "/camaras",
  },
  {
    icon: DoorOpen,
    label: "Portones",
    href: "/portones",
  },
  {
    icon: MessageSquare,
    label: "Comunicación",
    href: "/comunicacion",
  },
  {
    icon: Package,
    label: "Paquetería",
    href: "/paqueteria",
  },
  {
    icon: MoreHorizontal,
    label: "Servicios",
    href: "/servicios",
  },
];

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-0 translate-x-1/2 top-4 z-10 bg-sidebar-accent text-sidebar-foreground rounded-full border border-sidebar-border shadow-md lg:hidden"
        onClick={() => setCollapsed(prev => !prev)}
      >
        <Menu size={18} />
      </Button>
      
      <aside className={cn(
        "bg-sidebar h-screen sticky top-0 flex flex-col border-r border-sidebar-border transition-all",
        collapsed ? "w-0 -translate-x-full lg:translate-x-0 lg:w-20" : "w-64"
      )}>
        <div className="p-6">
          <h1 className={cn(
            "text-xl font-bold text-sidebar-foreground transition-opacity",
            collapsed && "lg:opacity-0"
          )}>
            IntegraLab
          </h1>
        </div>
        
        <nav className="flex-1 px-3 py-2">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const LinkIcon = link.icon;
              
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-sidebar-accent group",
                      isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-sidebar-foreground/60"
                    )}
                  >
                    <LinkIcon className={cn(
                      "h-5 w-5 shrink-0",
                      isActive ? "text-sidebar-primary" : "text-sidebar-foreground/60 group-hover:text-sidebar-foreground"
                    )} />
                    <span className={cn(
                      "transition-opacity",
                      collapsed && "lg:hidden"
                    )}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className={cn(
          "p-4 border-t border-sidebar-border mt-auto",
          collapsed && "lg:hidden"
        )}>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center text-white">
              C
            </div>
            <div className={cn(
              "transition-opacity",
              collapsed && "lg:opacity-0"
            )}>
              <p className="text-sm font-medium text-sidebar-foreground">Admin</p>
              <p className="text-xs text-sidebar-foreground/60">Cristian.alvarado@usach.cl</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
