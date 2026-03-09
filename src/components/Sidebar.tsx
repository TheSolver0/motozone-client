import React from 'react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  Bike, 
  Wrench, 
  BarChart3, 
  Star, 
  Package, 
  FileText, 
  Users, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type ViewType = 'dashboard' | 'map' | 'fleet' | 'intervention' | 'inventory' | 'documents' | 'hr';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'map', label: 'Network Map', icon: MapIcon },
  { id: 'fleet', label: 'Fleet', icon: Bike },
  { id: 'intervention', label: 'Interventions', icon: Wrench },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'hr', label: 'RH & Paies', icon: Users },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-[#111111] text-white flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-[#d41111] rounded-lg flex items-center justify-center text-white">
          <Bike className="size-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight tracking-tight">MotoZone</h1>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Network Admin</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as ViewType)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
              currentView === item.id 
                ? "bg-[#d41111] text-white" 
                : "text-slate-300 hover:bg-white/10"
            )}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors text-sm font-medium">
          <Settings className="size-5" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors text-sm font-medium">
          <HelpCircle className="size-5" />
          <span>Support</span>
        </button>
      </div>
      
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <img 
            src="https://i.pinimg.com/1200x/55/1e/fd/551efdcabb77e0ce4cf9f48f4d02e395.jpg" 
            alt="User" 
            className="size-9 rounded-full border border-slate-700"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">Alex Kamga</p>
            <p className="text-[10px] text-slate-500 uppercase">Fleet Director</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
