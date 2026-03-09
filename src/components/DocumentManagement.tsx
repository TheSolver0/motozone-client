import React from 'react';
import { Search, Bell, Settings, Grid, List, Folder, MoreVertical, FileText, Table, Image as ImageIcon, Download, Share2, History, Edit, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

export const DocumentManagement: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar for GED Labels */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#d41111] size-8 rounded-lg flex items-center justify-center text-white">
              <Folder className="size-5" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight">MotoZone GED</h1>
              <p className="text-[10px] text-slate-500 uppercase font-semibold">Document Cloud</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <GEDNavItem icon={Grid} label="Dashboard" />
          <GEDNavItem icon={Folder} label="All Files" isActive />
          <GEDNavItem icon={History} label="Recent" />
          <GEDNavItem icon={Star} label="Starred" />
          <GEDNavItem icon={Trash2} label="Trash" />
          <div className="pt-8 pb-2 px-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Labels</p>
          </div>
          <GEDNavItem icon={Circle} label="Urgent" color="bg-red-500" />
          <GEDNavItem icon={Circle} label="Verified" color="bg-[#d41111]" />
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="mb-4">
            <div className="flex justify-between text-[11px] mb-1 font-medium">
              <span>Storage</span>
              <span>75% • 1,500 FCFA/mo</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-[#d41111] h-1.5 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          <button className="w-full bg-[#d41111] text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-sm">
            <Download className="size-4 rotate-180" />
            Upload New
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumbs & Views */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm">
              <a className="text-slate-400 hover:text-[#d41111]" href="#">MotoZone</a>
              <ChevronRight className="size-4 text-slate-300" />
              <span className="font-medium">Main Drive</span>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button className="p-1.5 rounded-md bg-white shadow-sm text-slate-800">
                <Grid className="size-4" />
              </button>
              <button className="p-1.5 rounded-md text-slate-500 hover:text-slate-800">
                <List className="size-4" />
              </button>
            </div>
          </div>

          {/* Folders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <FolderCard name="Contracts" files={24} size="1.2 GB" />
            <FolderCard name="Invoices" files={156} size="450 MB" />
            <FolderCard name="Employee Docs" files={89} size="2.1 GB" />
            <FolderCard name="Station Photos" files={432} size="12.4 GB" />
          </div>

          {/* Recent Files Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h2 className="font-semibold">Recent Files</h2>
              <button className="text-sm text-[#d41111] font-medium hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Size</th>
                    <th className="px-6 py-3">Last Modified</th>
                    <th className="px-6 py-3">Version</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <FileRow icon={FileText} name="Supply_Agreement_2024.pdf" type="PDF" size="2.4 MB" date="Oct 12, 2023" version="v3.2" isPrimary />
                  <FileRow icon={Table} name="Monthly_Invoices_Q3.xlsx" type="XLSX" size="842 KB" date="Oct 10, 2023" version="v1.0" />
                  <FileRow icon={ImageIcon} name="Station_Front_View.jpg" type="JPEG" size="5.1 MB" date="Oct 08, 2023" version="v2.1" isPrimary />
                </tbody>
              </table>
            </div>
          </div>

          {/* Drag & Drop Upload Area */}
          <div className="mt-8">
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-slate-50/50 hover:border-[#d41111] hover:bg-[#d41111]/5 transition-all cursor-pointer group">
              <div className="bg-white size-16 rounded-full shadow-sm mx-auto flex items-center justify-center mb-4 border border-slate-100 group-hover:scale-110 transition-transform">
                <Download className="size-8 text-[#d41111] rotate-180" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Drag and drop files here</h3>
              <p className="text-slate-500 text-sm">Or click to browse from your computer</p>
              <p className="text-[11px] text-slate-400 mt-4">Supported formats: PDF, DOCX, XLSX, JPEG, PNG (Max 50MB)</p>
            </div>
          </div>
        </div>
      </main>

      {/* Right Detail Pane */}
      <aside className="w-80 border-l border-slate-200 bg-white hidden xl:flex flex-col p-6">
        <div className="text-center mb-6">
          <div className="size-32 bg-slate-100 rounded-lg mx-auto flex items-center justify-center mb-4">
            <FileText className="size-16 text-slate-400" />
          </div>
          <h2 className="font-bold text-lg leading-tight">Supply_Agreement_2024.pdf</h2>
          <p className="text-slate-500 text-sm">Modified 2 hours ago</p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <ActionButton icon={Share2} label="Share" />
              <ActionButton icon={History} label="Versions" />
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Metadata</h3>
            <div className="space-y-3">
              <MetaRow label="Owner" value="John Doe" />
              <MetaRow label="Created" value="Sep 15, 2023" />
              <MetaRow label="Location" value="Contracts / 2024" />
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Keywords</span>
                <div className="flex flex-wrap gap-1 justify-end max-w-[120px]">
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">Supply</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">Annual</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Recent Activity</h3>
            <div className="space-y-4">
              <ActivityRow icon={Edit} user="Admin" action="edited the document" time="2 hours ago" />
              <ActivityRow icon={Eye} user="Manager" action="viewed document" time="4 hours ago" isBlue />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

const GEDNavItem = ({ icon: Icon, label, isActive, color }: any) => (
  <button className={cn(
    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
    isActive ? "bg-[#d41111]/10 text-[#d41111] border-r-2 border-[#d41111]" : "text-slate-600 hover:bg-slate-50"
  )}>
    {color ? <div className={cn("size-2 rounded-full", color)} /> : <Icon className="size-[20px]" />}
    {label}
  </button>
);

const FolderCard = ({ name, files, size }: any) => (
  <div className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-[#d41111] transition-all cursor-pointer">
    <div className="flex justify-between items-start mb-3">
      <Folder className="size-8 text-[#d41111] fill-current" />
      <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-slate-600 transition-opacity">
        <MoreVertical className="size-4" />
      </button>
    </div>
    <h3 className="text-sm font-semibold mb-1">{name}</h3>
    <p className="text-[12px] text-slate-500">{files} files • {size}</p>
  </div>
);

const FileRow = ({ icon: Icon, name, type, size, date, version, isPrimary }: any) => (
  <tr className="hover:bg-slate-50 transition-colors group">
    <td className="px-6 py-4 flex items-center gap-3">
      <Icon className={cn("size-5", isPrimary ? "text-[#d41111]" : "text-blue-500")} />
      <span className="font-medium">{name}</span>
    </td>
    <td className="px-6 py-4 text-slate-500 uppercase text-[11px] font-bold">{type}</td>
    <td className="px-6 py-4 text-slate-500">{size}</td>
    <td className="px-6 py-4 text-slate-500">{date}</td>
    <td className="px-6 py-4">
      <span className={cn(
        "px-2 py-0.5 rounded text-[10px] font-bold",
        isPrimary ? "bg-[#d41111]/10 text-[#d41111]" : "bg-slate-100 text-slate-500"
      )}>{version}</span>
    </td>
    <td className="px-6 py-4 text-right">
      <button className="text-slate-400 hover:text-slate-600">
        <Download className="size-4" />
      </button>
    </td>
  </tr>
);

const ActionButton = ({ icon: Icon, label }: any) => (
  <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50">
    <Icon className="size-5 text-[#d41111] mb-1" />
    <span className="text-[11px] font-medium">{label}</span>
  </button>
);

const MetaRow = ({ label, value }: any) => (
  <div className="flex justify-between text-sm">
    <span className="text-slate-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const ActivityRow = ({ icon: Icon, user, action, time, isBlue }: any) => (
  <div className="flex gap-3">
    <div className={cn(
      "size-6 rounded-full flex items-center justify-center shrink-0",
      isBlue ? "bg-blue-100 text-blue-500" : "bg-[#d41111]/20 text-[#d41111]"
    )}>
      <Icon className="size-3.5" />
    </div>
    <div className="text-[12px]">
      <p><span className="font-semibold">{user}</span> {action}</p>
      <p className="text-slate-400">{time}</p>
    </div>
  </div>
);

// Helper components
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const Trash2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 0h6"/>
  </svg>
);
const Circle = ({ className }: { className?: string }) => (
  <div className={className} />
);
