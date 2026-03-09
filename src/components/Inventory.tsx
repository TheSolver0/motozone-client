import React from 'react';
import { Search, Filter, Download, Bell, ArrowUp, Cpu, Droplets, Bolt, Link as LinkIcon, MoreVertical, Activity, Truck, Package as InventoryIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export const Inventory: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Inventory Management</h2>
          <p className="text-slate-500 mt-1">Real-time stock monitoring and supplier synchronization.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <Download className="size-4" />
            <span>Export CSV</span>
          </button>
          <button className="size-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600">
            <Bell className="size-5" />
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total SKU" value="1,284" subtext="12% from last month" isTrendUp />
        <StatCard title="Low Stock Alerts" value="24" subtext="Requires immediate attention" isWarning />
        <StatCard title="Out of Stock" value="7" subtext="Critical impact on operations" isDanger />
        <StatCard title="Active Suppliers" value="42" subtext="3 pending shipments" />
      </div>

      {/* Filters and Table Card */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <input 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#d41111] transition-all" 
                placeholder="Search by product, SKU or supplier..." 
                type="text"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-600">
              <Filter className="size-4" />
              <span>Filters</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <select className="text-sm bg-slate-50 border-none rounded-lg py-2 pl-3 pr-8 focus:ring-2 focus:ring-[#d41111] outline-none">
              <option>All Stations</option>
              <option>Station Akwa</option>
            </select>
            <select className="text-sm bg-slate-50 border-none rounded-lg py-2 pl-3 pr-8 focus:ring-2 focus:ring-[#d41111] outline-none">
              <option>All Suppliers</option>
              <option>Cameroun Auto Parts</option>
            </select>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product Details</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Level</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Station</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <InventoryRow 
                icon={Cpu} 
                name="Brake Pads - Front" 
                sku="MZ-BP-001" 
                level={75} 
                station="Station Akwa" 
                supplier="Cameroun Auto Parts" 
                status="Healthy" 
              />
              <InventoryRow 
                icon={Droplets} 
                name="Synthetic Oil 5W-40" 
                sku="MZ-OL-922" 
                level={15} 
                station="Station Bonanjo" 
                supplier="Douala Logistics SARL" 
                status="Low Stock" 
                isWarning 
              />
              <InventoryRow 
                icon={Bolt} 
                name="Spark Plug Platinum" 
                sku="MZ-SP-441" 
                level={2} 
                station="Station Akwa" 
                supplier="Yaoundé Spark" 
                status="Out of Stock" 
                isDanger 
              />
              <InventoryRow 
                icon={LinkIcon} 
                name="Clutch Cable Heavy Duty" 
                sku="MZ-CC-112" 
                level={45} 
                station="Station Bastos" 
                supplier="Bami Motors" 
                status="Healthy" 
              />
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">1</span> to <span className="font-semibold text-slate-900">10</span> of <span className="font-semibold text-slate-900">1,284</span> results</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Previous</button>
            <button className="px-3 py-1 bg-[#d41111] text-white rounded text-sm font-medium">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* Secondary Info Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200">
          <h4 className="text-lg font-bold mb-4">Stock Trends</h4>
          <div className="h-48 w-full bg-slate-50 rounded-lg flex items-center justify-center border border-dashed border-slate-200">
            <div className="text-center">
              <Activity className="size-10 text-slate-300 mx-auto" />
              <p className="text-sm text-slate-400 mt-2">Historical stock replenishment chart placeholder</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h4 className="text-lg font-bold mb-4">Pending Deliveries</h4>
          <div className="space-y-4">
            <DeliveryItem id="PO-8821" supplier="Cameroun Auto Parts" date="Oct 12" status="Transit" isTransit />
            <DeliveryItem id="PO-8825" supplier="Yaoundé Spark" date="Oct 15" status="Pending" />
          </div>
          <button className="w-full mt-6 text-sm font-semibold text-[#d41111] py-2 border border-[#d41111]/20 rounded-lg hover:bg-[#d41111]/5 transition-colors">
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtext, isTrendUp, isWarning, isDanger }: any) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</p>
    <h3 className={cn(
      "text-2xl font-bold",
      isWarning ? "text-orange-500" : isDanger ? "text-red-500" : "text-slate-900"
    )}>{value}</h3>
    <div className="mt-2 flex items-center gap-1">
      {isTrendUp && <ArrowUp className="size-3 text-[#d41111]" />}
      <span className={cn(
        "text-xs font-medium",
        isTrendUp ? "text-[#d41111]" : "text-slate-400"
      )}>{subtext}</span>
    </div>
  </div>
);

const InventoryRow = ({ icon: Icon, name, sku, level, station, supplier, status, isWarning, isDanger }: any) => (
  <tr className="hover:bg-slate-50/50 transition-colors">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded bg-slate-100 flex items-center justify-center text-slate-400">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">SKU: {sku}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-3 min-w-[120px]">
        <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className={cn(
            "h-full",
            isDanger ? "bg-red-500" : isWarning ? "bg-orange-500" : "bg-[#d41111]"
          )} style={{ width: `${level}%` }} />
        </div>
        <span className="text-sm font-medium text-slate-700">{level}/100</span>
      </div>
    </td>
    <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">{station}</span>
    </td>
    <td className="px-6 py-4">
      <p className="text-sm text-slate-600">{supplier}</p>
    </td>
    <td className="px-6 py-4">
      <span className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase",
        isDanger ? "bg-red-100 text-red-600" : isWarning ? "bg-orange-100 text-orange-600" : "bg-[#d41111]/10 text-[#d41111]"
      )}>
        <div className={cn("size-1.5 rounded-full", isDanger ? "bg-red-500" : isWarning ? "bg-orange-500" : "bg-[#d41111]")} />
        {status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      <button className="text-slate-400 hover:text-slate-600">
        <MoreVertical className="size-4" />
      </button>
    </td>
  </tr>
);

const DeliveryItem = ({ id, supplier, date, status, isTransit }: any) => (
  <div className="flex gap-3">
    <div className={cn(
      "size-8 rounded-full flex items-center justify-center",
      isTransit ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
    )}>
      {isTransit ? <Truck className="size-4" /> : <InventoryIcon className="size-4" />}
    </div>
    <div className="flex-1">
      <p className="text-sm font-semibold">Order #{id}</p>
      <p className="text-xs text-slate-500">{supplier} • Est. Arrival {date}</p>
    </div>
    <span className={cn(
      "text-xs font-bold",
      isTransit ? "text-blue-600" : "text-orange-600"
    )}>{status}</span>
  </div>
);
