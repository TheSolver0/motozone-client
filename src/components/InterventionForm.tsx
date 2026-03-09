import React from 'react';
import { Info, Wrench, Check, PlusCircle, Trash2, Receipt, Verified, Award, ChevronRight, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export const InterventionForm: React.FC = () => {
  return (
    <div className="p-6 space-y-8 max-w-[1400px] mx-auto">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
            <span>Station</span>
            <ChevronRight className="size-3" />
            <span className="text-[#d41111]">New Intervention</span>
          </nav>
          <h1 className="text-3xl font-bold text-slate-900">Create Intervention</h1>
          <p className="text-slate-500 mt-1">Register a new service record for a vehicle.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Discard Draft</button>
          <button className="px-6 py-2 text-sm font-semibold text-white bg-[#d41111] rounded-lg hover:opacity-90 shadow-sm shadow-[#d41111]/20 transition-all flex items-center gap-2">
            <Check className="size-4" /> Complete Record
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left & Middle: Form Sections */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Info */}
          <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50">
              <Info className="size-5 text-[#d41111]" />
              <h3 className="font-semibold text-slate-800">General Information</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="License Plate" placeholder="ABC-1234" />
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Intervention Type</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#d41111]/20 focus:border-[#d41111] transition-all outline-none">
                  <option>Oil Change & Filter</option>
                  <option>Brake Maintenance</option>
                  <option>Tire Replacement</option>
                  <option>Full Engine Diagnostic</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Assigned Mechanic</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#d41111]/20 focus:border-[#d41111] transition-all outline-none">
                  <option>Marco Rossi (Lead Tech)</option>
                  <option>Sarah Jenkins</option>
                  <option>David Chen</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Payment Mode</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg border-2 border-[#d41111] text-[#d41111] text-sm font-bold bg-[#d41111]/5">Card</button>
                  <button className="flex-1 py-2 rounded-lg border-2 border-slate-200 text-slate-500 text-sm font-semibold hover:bg-slate-50">Cash</button>
                </div>
              </div>
            </div>
          </section>

          {/* Parts & Labor */}
          <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Wrench className="size-5 text-[#d41111]" />
                <h3 className="font-semibold text-slate-800">Parts & Labor</h3>
              </div>
              <button className="text-xs font-bold text-[#d41111] hover:underline flex items-center gap-1">
                <PlusCircle className="size-4" /> ADD PART
              </button>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 text-[10px] uppercase tracking-widest text-slate-500">
                  <tr>
                    <th className="px-6 py-3 font-bold">Item Description</th>
                    <th className="px-6 py-3 font-bold text-center">Qty</th>
                    <th className="px-6 py-3 font-bold text-right">Unit Price</th>
                    <th className="px-6 py-3 font-bold text-right">Amount</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <PartRow description="Synthetic Oil 5W-30" qty={4} price="18.50 FCFA" amount="74.00 FCFA" />
                  <PartRow description="Oil Filter Premium" qty={1} price="22.00 FCFA" amount="22.00 FCFA" />
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50/30">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Labor Hours</label>
                  <div className="flex items-center gap-3">
                    <input className="w-24 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm" type="number" defaultValue="1.5" />
                    <span className="text-slate-400 text-sm">at</span>
                    <span className="text-slate-600 font-medium text-sm">80.00 FCFA/hr</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Labor Total</p>
                  <p className="text-xl font-bold text-slate-900">120.00 FCFA</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 opacity-10 scale-150 rotate-12 pointer-events-none">
              <Receipt className="size-[120px]" />
            </div>
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Total Calculation</h3>
            <div className="space-y-4">
              <SummaryRow label="Subtotal Parts" value="96.00 FCFA" />
              <SummaryRow label="Subtotal Labor" value="120.00 FCFA" />
              <SummaryRow label="Tax (8%)" value="17.28 FCFA" />
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase">Total Due</span>
                  <p className="text-4xl font-bold text-white tracking-tighter">233.28 FCFA</p>
                </div>
                <Verified className="size-6 text-[#d41111]" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                <Award className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Loyalty Rewards</h4>
                <p className="text-xs text-slate-500">Customer: Alex Thompson</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                <span className="text-sm font-medium">Points to Earn</span>
                <span className="text-lg font-bold text-[#d41111]">+233 FCFA</span>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-[10px] font-semibold py-1 px-2 uppercase rounded-full text-[#d41111] bg-[#d41111]/10">Next Reward</span>
                  <span className="text-xs font-semibold text-[#d41111]">85%</span>
                </div>
                <div className="overflow-hidden h-1.5 mb-4 rounded bg-[#d41111]/20">
                  <div className="h-full bg-[#d41111]" style={{ width: '85%' }} />
                </div>
                <p className="text-[10px] text-slate-400 text-center">Only 120 points left for a free Oil Change!</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Recent History */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Recent Station History</h3>
          <button className="text-xs font-bold text-[#d41111] hover:underline">View All Records</button>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4 font-bold">Plate</th>
                <th className="px-6 py-4 font-bold">Intervention</th>
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold text-center">Status</th>
                <th className="px-6 py-4 font-bold text-right">Amount</th>
                <th className="px-6 py-4 font-bold text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <HistoryRow plate="XYZ-9876" service="Brake Pad Replacement" sub="Front wheels + Fluid flush" cost="185.50 FCFA" time="14 mins ago" />
              <HistoryRow plate="KJH-5521" service="Tire Balancing" sub="Full set alignment" cost="65.00 FCFA" time="42 mins ago" />
              <HistoryRow plate="BNC-3329" service="Battery Diagnostics" sub="Alternator test" cost="40.00 FCFA" time="1 hour ago" isDraft />
            </tbody>
          </table>
        </div>
      </section>

      {/* Map Tooltip Simulation */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-2xl z-40">
        <div className="size-10 rounded-full bg-[#d41111]/10 flex items-center justify-center">
          <MapPin className="size-5 text-[#d41111]" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Station</p>
          <p className="text-sm font-bold">Station Akwa, Douala</p>
        </div>
        <div className="h-10 w-24 bg-slate-200 rounded-lg overflow-hidden border border-slate-100">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Map" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const FormField = ({ label, placeholder }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</label>
    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#d41111]/20 focus:border-[#d41111] transition-all outline-none" placeholder={placeholder} type="text" />
  </div>
);

const PartRow = ({ description, qty, price, amount }: any) => (
  <tr className="group">
    <td className="px-6 py-4">
      <input className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium" type="text" defaultValue={description} />
    </td>
    <td className="px-6 py-4 text-center">
      <input className="w-12 text-center bg-transparent border-none focus:ring-0 p-0 text-sm" type="number" defaultValue={qty} />
    </td>
    <td className="px-6 py-4 text-right text-sm">{price}</td>
    <td className="px-6 py-4 text-right text-sm font-semibold">{amount}</td>
    <td className="px-6 py-4 text-right">
      <button className="text-slate-300 hover:text-red-500 transition-colors">
        <Trash2 className="size-4" />
      </button>
    </td>
  </tr>
);

const SummaryRow = ({ label, value }: any) => (
  <div className="flex justify-between text-sm text-slate-300">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

const HistoryRow = ({ plate, service, sub, cost, time, isDraft }: any) => (
  <tr className="hover:bg-slate-50 transition-colors cursor-pointer group">
    <td className="px-6 py-4">
      <span className="px-2 py-1 rounded bg-slate-100 text-slate-900 font-mono text-xs font-bold border border-slate-200">{plate}</span>
    </td>
    <td className="px-6 py-4">
      <div className="text-sm font-semibold text-slate-800">{service}</div>
      <div className="text-xs text-slate-400">{sub}</div>
    </td>
    <td className="px-6 py-4 text-sm text-slate-600">Alex Thompson</td>
    <td className="px-6 py-4 text-center">
      <span className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        isDraft ? "bg-slate-100 text-slate-800" : "bg-emerald-100 text-emerald-800"
      )}>
        {isDraft ? 'Draft' : 'Completed'}
      </span>
    </td>
    <td className="px-6 py-4 text-right text-sm font-bold">{cost}</td>
    <td className="px-6 py-4 text-right text-xs text-slate-400">{time}</td>
  </tr>
);
