import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
          <input 
            type="text" 
            placeholder="Search for stations, mechanics, or bikes..." 
            className="w-full bg-slate-50 border-none rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-[#d41111]/20 text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg relative">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
          <MessageSquare className="size-5" />
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-none">Alex Kamga</p>
            <p className="text-xs text-slate-500">Fleet Director</p>
          </div>
          <img 
            src="https://i.pinimg.com/1200x/55/1e/fd/551efdcabb77e0ce4cf9f48f4d02e395.jpg"
            alt="Profile" 
            className="size-9 rounded-full border border-[#d41111]/30"
          />
        </div>
      </div>
    </header>
  );
};
