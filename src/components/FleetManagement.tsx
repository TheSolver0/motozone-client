import React from 'react';
import { Search, Filter, Download, MoreVertical, ChevronLeft, ChevronRight, Phone, MapPin, Users, Star } from 'lucide-react';
import { cn } from '../lib/utils';

export const FleetManagement: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto p-8 flex gap-8">
      {/* Table Section */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Base Conducteurs & Motos</h2>
            <p className="text-slate-500 text-sm">Aperçu de tous les véhicules enregistrés dans la flotte nationale.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-50">
              <Filter className="size-4" />
              Filter
            </button>
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-800">
              <Download className="size-4" />
              Export
            </button>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-1.5 bg-[#d41111] text-white rounded-full text-sm font-medium shrink-0">All Vehicles</button>
          <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shrink-0 hover:bg-slate-50">Active</button>
          <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shrink-0 hover:bg-slate-50">In Maintenance</button>
          <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shrink-0 hover:bg-slate-50">Top Loyalty</button>
        </div>

        {/* Table Card */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Plate</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Service</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Loyalty Points</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <TableRow 
                plate="LT-482-CE" 
                model="Kawasaki Ninja 400" 
                owner="Moussa Ibrahim" 
                date="Oct 15, 2023" 
                points="1,250 PTS" 
                isHigh 
              />
              <TableRow 
                plate="CE-901-BA" 
                model="Honda CB500X" 
                owner="Amina Bello" 
                date="Nov 02, 2023" 
                points="840 PTS" 
                isHigh 
              />
              <TableRow 
                plate="AD-115-XZ" 
                model="Yamaha MT-07" 
                owner="Jean-Pierre Nguema" 
                date="Sep 20, 2023" 
                points="120 PTS" 
              />
              <TableRow 
                plate="SW-773-KK" 
                model="Ducati Monster" 
                owner="Cécile Eboa" 
                date="Dec 12, 2023" 
                points="3,100 PTS" 
                isHigh 
              />
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
            <p className="text-xs text-slate-500">Showing 4 of 128 vehicles</p>
            <div className="flex gap-2">
              <button className="p-1 border border-slate-200 rounded hover:bg-white disabled:opacity-50" disabled>
                <ChevronLeft className="size-4" />
              </button>
              <button className="p-1 border border-slate-200 rounded hover:bg-white">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sidebar */}
      <aside className="w-80 shrink-0 flex flex-col gap-6">
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="h-24 bg-gradient-to-r from-[#d41111]/20 to-[#d41111]/40 relative" />
          <div className="px-6 pb-6 -mt-10">
            <div className="size-20 rounded-xl border-4 border-white overflow-hidden shadow-lg bg-slate-100 mb-4">
              <img 
                src="https://i.pinimg.com/1200x/55/1e/fd/551efdcabb77e0ce4cf9f48f4d02e395.jpg"
                alt="Driver" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">Moussa Ibrahim</h3>
            <p className="text-slate-500 text-sm mb-6">Aperçu de tous les véhicules enregistrés dans la flotte nationale.</p>
            
            <div className="space-y-4">
              <ProfileInfo icon={Phone} label="Phone" value="+1 (555) 902-1234" />
              <ProfileInfo icon={MapPin} label="Zone" value="Douala - Akwa" />
              <ProfileInfo icon={Users} label="Union Member" value="Syndicat des Mototaxis (SYNAM)" />
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-end mb-2">
                <p className="text-sm font-bold text-slate-900">Loyalty Status</p>
                <p className="text-xs font-bold text-[#d41111]">Gold Tier</p>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-[#d41111] rounded-full" />
              </div>
              <p className="text-[10px] text-slate-400 mt-2">250 points until Platinum Tier</p>
            </div>
            
            <button className="w-full mt-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Mini Map */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm h-48 relative">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
            alt="Map" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200 shadow-xl text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Chef de Flotte</p>
              <p className="text-sm font-bold text-slate-900">Yaoundé - Bastos</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

const TableRow = ({ plate, model, owner, date, points, isHigh }: any) => (
  <tr className="hover:bg-slate-50/80 transition-colors group">
    <td className="px-6 py-4 text-sm font-bold text-slate-900">{plate}</td>
    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{model}</td>
    <td className="px-6 py-4 text-sm text-slate-600">{owner}</td>
    <td className="px-6 py-4 text-sm text-slate-600">{date}</td>
    <td className="px-6 py-4">
      <span className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase",
        isHigh ? "bg-[#d41111]/10 text-[#d41111]" : "bg-slate-100 text-slate-500"
      )}>
        {points}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      <button className="text-slate-400 hover:text-[#d41111] transition-colors">
        <MoreVertical className="size-4" />
      </button>
    </td>
  </tr>
);

const ProfileInfo = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-3">
    <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
      <Icon className="size-4" />
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{label}</p>
      <p className="text-sm font-medium text-slate-700">{value}</p>
    </div>
  </div>
);
