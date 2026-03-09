import React from 'react';
import { Search, Filter, Layers, Plus, Minus, MapPin, Bolt, Construction, AlertTriangle, Warehouse, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const NetworkMap: React.FC = () => {
  return (
    <div className="relative flex-1 overflow-hidden h-[calc(100vh-64px)]">
      {/* Map Background Placeholder */}
      <div 
        className="absolute inset-0 bg-slate-200"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(0.5) contrast(1.1)'
        }}
      >
        {/* Markers */}
        <MapMarker top="40%" left="35%" type="active" />
        <MapMarker top="25%" left="60%" type="deploying" />
        <MapMarker top="55%" left="50%" type="active" isLarge />
        <MapMarker top="70%" left="20%" type="issue" />
        <MapMarker top="15%" left="10%" type="supplier" />
      </div>

      {/* Search & Filters Overlay */}
      <div className="absolute top-6 left-6 right-6 flex flex-col md:flex-row gap-4 pointer-events-none">
        <div className="flex-1 max-w-lg pointer-events-auto">
          <div className="relative group">
            <Search className="absolute inset-y-0 left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
            <input 
              className="block w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-md border-none rounded-2xl shadow-xl focus:ring-2 focus:ring-[#d41111] text-slate-900 placeholder-slate-400 transition-all" 
              placeholder="Find station ID, zone, or address in Cameroon..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <div className="flex bg-white/95 backdrop-blur-md p-1 rounded-2xl shadow-xl">
            <button className="px-4 py-3 rounded-xl bg-slate-100 text-slate-900 font-medium text-sm flex items-center gap-2">
              <Filter className="size-4" />
              Station Type
            </button>
            <button className="px-4 py-3 rounded-xl text-slate-600 font-medium text-sm flex items-center gap-2">
              Zone
              <Minus className="size-4 rotate-90" />
            </button>
          </div>
          <button className="w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-slate-600">
            <Layers className="size-6" />
          </button>
        </div>
      </div>

      {/* Legend Overlay */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <div className="flex gap-2 p-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-x-auto">
          <LegendItem color="#d41111" label="Active" />
          <LegendItem color="#facc15" label="Deploying" />
          <LegendItem color="#ef4444" label="Issues" />
          <LegendItem color="#94a3b8" label="Offline" />
          <LegendItem color="#3b82f6" label="Supplier" />
        </div>
      </div>

      {/* Station Details Panel */}
      <div className="absolute top-24 bottom-24 right-6 w-96 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col border border-white/20 pointer-events-auto overflow-hidden">
        <div className="p-1">
          <div 
            className="relative h-48 w-full rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')` }}
          >
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#d41111] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Active</span>
            </div>
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <X className="size-4" />
            </button>
          </div>
        </div>
        
        <div className="px-6 py-4 flex-1 overflow-y-auto">
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Zone: Downtown Core</p>
            <h2 className="text-xl font-bold text-slate-900">Station DZ-105</h2>
            <p className="text-sm text-slate-500">Rue Joss, Akwa, Douala</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Daily Revenue</p>
              <p className="text-lg font-bold text-slate-900">850.500 FCFA</p>
              <p className="text-[10px] text-[#d41111] font-bold">+12% vs last week</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Motos Serviced</p>
              <p className="text-lg font-bold text-slate-900">42</p>
              <p className="text-[10px] text-slate-500 font-medium">8.2 / hour avg</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Bolt className="size-4 text-[#d41111]" />
              Bay Status
            </h3>
            <div className="space-y-3">
              <BayStatus label="Bay 01 - Charging" status="80%" isActive />
              <BayStatus label="Bay 02 - Charging" status="45%" isActive />
              <BayStatus label="Bay 03 - Available" status="--" />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100">
          <button className="w-full py-4 bg-[#d41111] text-white rounded-2xl font-bold shadow-lg shadow-[#d41111]/20 hover:shadow-[#d41111]/40 transition-all flex items-center justify-center gap-2">
            View Full Analytics
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2 pointer-events-auto">
        <div className="flex flex-col bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
          <button className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 border-b border-slate-100">
            <Plus className="size-5" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50">
            <Minus className="size-5" />
          </button>
        </div>
        <button className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-slate-600">
          <MapPin className="size-5" />
        </button>
      </div>
    </div>
  );
};

const MapMarker = ({ top, left, type, isLarge }: any) => {
  const colors = {
    active: '#d41111',
    deploying: '#facc15',
    issue: '#ef4444',
    supplier: '#3b82f6'
  };
  const Icons = {
    active: Bolt,
    deploying: Construction,
    issue: AlertTriangle,
    supplier: Warehouse
  };
  const Icon = Icons[type as keyof typeof Icons];

  return (
    <div className="absolute group cursor-pointer" style={{ top, left }}>
      <div 
        className={cn(
          "rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform hover:scale-110",
          isLarge ? "size-10 ring-4 ring-[#d41111]/20" : "size-8"
        )}
        style={{ backgroundColor: colors[type as keyof typeof colors] }}
      >
        <Icon className={cn("text-white", isLarge ? "size-5" : "size-4")} />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }: { color: string, label: string }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 shrink-0">
    <div className="size-3 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-xs font-semibold">{label}</span>
  </div>
);

const BayStatus = ({ label, status, isActive }: { label: string, status: string, isActive?: boolean }) => (
  <div className={cn(
    "flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl",
    !isActive && "opacity-50"
  )}>
    <div className="flex items-center gap-3">
      <div className={cn("size-2 rounded-full", isActive ? "bg-[#d41111]" : "bg-slate-300")} />
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className="text-xs text-slate-400">{status}</span>
  </div>
);
