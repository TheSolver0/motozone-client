import React from 'react';
import { Search, Bell, Badge, Wallet, Bolt, Gift, TrendingUp, TrendingDown, MoreVertical, RefreshCw, Download, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

export const HRPayroll: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-bold">RH & Paies Overview</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <input 
              className="pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#d41111]/50 w-64 outline-none" 
              placeholder="Search staff, payments..." 
              type="text"
            />
          </div>
          <button className="size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600">
            <Bell className="size-5" />
          </button>
          <button className="bg-[#d41111] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-600 transition-colors">
            New Payment
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Total Employees" value="42" trend="+2%" icon={Badge} />
        <KPICard title="Monthly Payroll" value="55.000.000 FCFA" trend="-1.5%" icon={Wallet} isNegative />
        <KPICard title="Avg Mechanic Performance" value="88%" trend="+5%" icon={Bolt} />
        <KPICard title="Pending Bonuses" value="2.950.000 FCFA" trend="+12%" icon={Gift} />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Mechanic Leaderboard */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h4 className="font-bold text-lg">Mechanic Performance Leaderboard</h4>
              <button className="text-[#d41111] text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold text-center">Interventions</th>
                    <th className="px-6 py-4 font-semibold">Revenue</th>
                    <th className="px-6 py-4 font-semibold">Score</th>
                    <th className="px-6 py-4 font-semibold text-right">Bonus Est.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <LeaderboardRow name="Marc Rossi" station="Station A" interventions={124} revenue="8.130.000 FCFA" score={92} bonus="8.130.000 FCFA" initial="MR" />
                  <LeaderboardRow name="Lucia Benz" station="Station B" interventions={110} revenue="8.130.000 FCFA" score={85} bonus="8.130.000 FCFA" initial="LB" />
                  <LeaderboardRow name="Sasha Vroom" station="Station C" interventions={145} revenue="8.130.000 FCFA" score={96} bonus="8.130.000 FCFA" initial="SV" />
                </tbody>
              </table>
            </div>
          </section>

          {/* Employee Directory */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h4 className="font-bold text-lg">Employee Directory</h4>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#d41111] text-white">All</button>
                  <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">Mechanic</button>
                  <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">Supervisor</button>
                  <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">Admin</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
              <EmployeeCard name="Jean Dupont" role="Lead Mechanic" img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
              <EmployeeCard name="Sarah Miller" role="Secretary" img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
              <EmployeeCard name="Thomas Shelby" role="Supervisor" img="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
              <EmployeeCard name="Elena Vance" role="HR Admin" img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 h-full flex flex-col">
            <div className="p-6 border-b border-slate-200">
              <h4 className="font-bold text-lg">Recent Payroll</h4>
              <p className="text-xs text-slate-500 mt-1">Status of last 10 processed payments</p>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <PayrollItem name="Marc Rossi" date="Oct 28, 2023" amount="2.260.000 FCFA" sub="780.000 FCFA" status="PAID" />
              <PayrollItem name="Lucia Benz" date="Oct 30, 2023" amount="2.260.000 FCFA" sub="Processing" status="PROCESSING" isProcessing />
              <PayrollItem name="Jean Dupont" date="Oct 28, 2023" amount="2.260.000 FCFA" sub="780.000 FCFA" status="PAID" />
              <PayrollItem name="Sarah Miller" date="Oct 28, 2023" amount="2.260.000 FCFA" sub="780.000 FCFA" status="PAID" isMuted />
              <PayrollItem name="Sasha Vroom" date="Oct 28, 2023" amount="2.260.000 FCFA" sub="780.000 FCFA" status="PAID" />
            </div>
            <div className="p-6 border-t border-slate-200">
              <button className="w-full py-2.5 bg-slate-100 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
                Download Monthly Report
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, trend, icon: Icon, isNegative }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-[#d41111]/10 p-2 rounded-lg text-[#d41111]">
        <Icon className="size-5" />
      </div>
      <span className={cn(
        "text-xs font-bold flex items-center gap-1",
        isNegative ? "text-rose-500" : "text-emerald-500"
      )}>
        {isNegative ? <TrendingDown className="size-3" /> : <TrendingUp className="size-3" />}
        {trend}
      </span>
    </div>
    <p className="text-slate-500 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

const LeaderboardRow = ({ name, station, interventions, revenue, score, bonus, initial }: any) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-[#d41111]/10 flex items-center justify-center text-[#d41111] font-bold text-xs">{initial}</div>
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-slate-500">{station}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-center text-sm">{interventions}</td>
    <td className="px-6 py-4 text-sm font-medium">{revenue}</td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#d41111]" style={{ width: `${score}%` }} />
        </div>
        <span className="text-xs font-bold">{score}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-right text-sm font-medium">{bonus}</td>
  </tr>
);

const EmployeeCard = ({ name, role, img }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors group">
    <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
    <div className="flex-1">
      <h5 className="text-sm font-bold">{name}</h5>
      <p className="text-xs text-slate-500">{role}</p>
    </div>
    <MoreVertical className="size-4 text-slate-300 group-hover:text-[#d41111] transition-colors" />
  </div>
);

const PayrollItem = ({ name, date, amount, sub, status, isProcessing, isMuted }: any) => (
  <div className={cn("flex items-center justify-between", isMuted && "opacity-75")}>
    <div className="flex items-center gap-3">
      <div className={cn(
        "size-10 rounded-lg flex items-center justify-center font-bold text-xs",
        isProcessing ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
      )}>
        {isProcessing ? <RefreshCw className="size-5 animate-spin" /> : sub}
      </div>
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-bold">{amount}</p>
      <span className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase",
        isProcessing ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
      )}>{status}</span>
    </div>
  </div>
);
