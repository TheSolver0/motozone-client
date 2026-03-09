import React from 'react';
import { Download, TrendingUp, TrendingDown, Bike, MapPin, Star, DollarSign, CheckCircle, ClipboardList, UserPlus } from 'lucide-react';
import { cn } from '../lib/utils';

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Network Overview</h2>
          <p className="text-slate-500">Monitor your motorcycle maintenance network performance.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d41111] hover:bg-[#d41111]/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Download className="size-4" />
          Export Data
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Daily Revenue" 
          value="7.450.000 FCFA" 
          change="+12.5%" 
          subtext="vs. 6.630.000 FCFA hier" 
          icon={DollarSign} 
        />
        <KPICard 
          title="Motos Serviced" 
          value="142" 
          change="+8.2%" 
          subtext="Across 38 stations" 
          icon={Bike} 
        />
        <KPICard 
          title="Active Stations" 
          value="38" 
          change="0%" 
          subtext="All locations operational" 
          icon={MapPin} 
          isNeutral 
        />
        <KPICard 
          title="Loyalty Points Issued" 
          value="5,200" 
          change="-2.4%" 
          subtext="New rewards system pending" 
          icon={Star} 
          isNegative 
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Area Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Network Revenue over time</h3>
              <p className="text-slate-500 text-sm">Last 30 days growth analysis</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-[#d41111] rounded-full"></div>
              <span className="text-xs text-slate-500 font-medium">Revenue</span>
            </div>
          </div>
          <div className="flex-1 min-h-[250px] relative flex items-end">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 250">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#d41111" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#d41111" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,200 Q100,180 200,190 T400,140 T600,160 T800,80 V250 H0 Z" fill="url(#chartGradient)" />
              <path d="M0,200 Q100,180 200,190 T400,140 T600,160 T800,80" fill="none" stroke="#d41111" strokeWidth="3" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-4">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>

        {/* Bar Chart: Interventions */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <h3 className="font-bold text-lg">Interventions by Type</h3>
          <p className="text-slate-500 text-sm">1,280 total this month</p>
          <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-6">
            <Bar height="60%" label="Oil" />
            <Bar height="40%" label="Tires" />
            <Bar height="85%" label="Engine" />
            <Bar height="30%" label="Brakes" />
            <Bar height="50%" label="Chain" />
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-lg">Recent Activity</h3>
          <button className="text-[#d41111] text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="divide-y divide-slate-100">
          <ActivityItem 
            icon={CheckCircle} 
            title="Service Completed: Honda CBR 650R" 
            subtitle="Station #12 - Douala Akwa" 
            time="Just now" 
            isSuccess 
          />
          <ActivityItem 
            icon={ClipboardList} 
            title="New Intervention Requested: Brake Pad Replacement" 
            subtitle="Client: Marcus Thompson • Station #04 - Yaoundé Bastos" 
            time="12 min ago" 
          />
          <ActivityItem 
            icon={UserPlus} 
            title="New Mechanic Onboarded" 
            subtitle="Sarah Jenkins a rejoint le Hub de Garoua" 
            time="45 min ago" 
          />
          <ActivityItem 
            icon={DollarSign} 
            title="Payment Processed: Monthly Station Fee" 
            subtitle="Station #08 - Bafoussam Marché" 
            time="2 hours ago" 
            isSuccess 
          />
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, change, subtext, icon: Icon, isNegative, isNeutral }: any) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-[#d41111]/10 rounded-lg text-[#d41111]">
        <Icon className="size-5" />
      </div>
      <span className={cn(
        "text-xs font-semibold px-2 py-1 rounded flex items-center gap-1",
        isNegative ? "text-red-500 bg-red-50" : isNeutral ? "text-slate-500 bg-slate-100" : "text-[#d41111] bg-[#d41111]/10"
      )}>
        {!isNeutral && (isNegative ? <TrendingDown className="size-3" /> : <TrendingUp className="size-3" />)}
        {change}
      </span>
    </div>
    <p className="text-slate-500 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
    <p className="text-xs text-slate-400 mt-2">{subtext}</p>
  </div>
);

const Bar = ({ height, label }: { height: string, label: string }) => (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className="w-full bg-slate-100 rounded-t-lg relative" style={{ height: '150px' }}>
      <div className="absolute inset-x-0 bottom-0 bg-[#d41111]/20 border-t-2 border-[#d41111] rounded-t-lg" style={{ height }} />
    </div>
    <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
  </div>
);

const ActivityItem = ({ icon: Icon, title, subtitle, time, isSuccess }: any) => (
  <div className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4">
    <div className={cn(
      "size-10 rounded-full flex items-center justify-center shrink-0",
      isSuccess ? "bg-[#d41111]/10 text-[#d41111]" : "bg-slate-100 text-slate-500"
    )}>
      <Icon className="size-5" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold truncate">{title}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
    <div className="text-right shrink-0">
      <p className="text-xs font-medium text-slate-400">{time}</p>
    </div>
  </div>
);
