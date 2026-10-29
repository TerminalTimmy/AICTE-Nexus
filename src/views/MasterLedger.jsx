import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  ExternalLink,
  ChevronDown,
  AlertTriangle,
} from 'lucide-react';
import { MOCK_CASES } from '../data/mockData';

const ALL_CASES = [
  ...MOCK_CASES,
  {
    id: 'RB-512',
    title: 'Faculty Ratio Violation',
    institution: 'ABC Engineering College',
    aicteId: '1-234567',
    status: 'Under Process',
    bureau: 'RB',
    priority: 'Medium',
    filedDate: '2026-03-10',
    slaDeadline: '2026-04-10',
    slaBreach: false,
  },
  {
    id: 'PGRC-1024',
    title: 'Ragging Complaint',
    institution: 'XYZ Institute of Technology',
    aicteId: '1-876543',
    status: 'Pending',
    bureau: 'PGRC',
    priority: 'Critical',
    filedDate: '2026-04-01',
    slaDeadline: '2026-05-01',
    slaBreach: true,
  },
  {
    id: 'RB-610',
    title: 'Affidavit Discrepancy',
    institution: 'National College of Engineering',
    aicteId: '1-345678',
    status: 'Pending',
    bureau: 'RB',
    priority: 'High',
    filedDate: '2026-03-25',
    slaDeadline: '2026-04-25',
    slaBreach: false,
  },
];

export default function MasterLedger({ onInstitutionClick }) {
  const [filterBureau, setFilterBureau] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = ALL_CASES.filter((c) => {
    if (filterBureau !== 'All' && c.bureau !== filterBureau) return false;
    if (filterStatus !== 'All' && c.status !== filterStatus) return false;
    if (
      searchQuery &&
      !c.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !c.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !c.institution.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const statusBadge = {
    Pending: 'bg-yellow-100 text-yellow-800',
    'Under Process': 'bg-blue-100 text-blue-800',
    Disposed: 'bg-emerald-100 text-emerald-800',
  };

  const priorityDot = {
    Critical: 'bg-red-500',
    High: 'bg-orange-500',
    Medium: 'bg-yellow-500',
  };

  return (
    <div className="max-w-[1440px] mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Master Ledger</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            All cases across bureaus — unified registry
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <Download size={14} />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by case ID, title, institution..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-slate-400" />
          <select
            value={filterBureau}
            onChange={(e) => setFilterBureau(e.target.value)}
            className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
          >
            <option value="All">All Bureaus</option>
            <option value="RB">RB</option>
            <option value="PGRC">PGRC</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Under Process">Under Process</option>
            <option value="Disposed">Disposed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Case ID
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Title
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Institution
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Bureau
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Filed
              </th>
              <th className="text-left px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                SLA
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr
                key={c.id}
                className={`border-b border-slate-100 hover:bg-slate-50/80 transition-colors cursor-pointer ${
                  c.slaBreach ? 'bg-red-50/30' : ''
                }`}
              >
                <td className="px-5 py-3.5">
                  <span className="font-mono text-xs font-bold text-slate-700">{c.id}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm font-medium text-slate-700">{c.title}</span>
                </td>
                <td className="px-5 py-3.5">
                  <button
                    onClick={() =>
                      onInstitutionClick({ name: c.institution, aicteId: c.aicteId })
                    }
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    {c.institution}
                    <ExternalLink size={10} />
                  </button>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      c.bureau === 'RB'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {c.bureau}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      statusBadge[c.status] || 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${priorityDot[c.priority] || 'bg-slate-300'}`} />
                    <span className="text-xs text-slate-600">{c.priority}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-xs text-slate-500">{c.filedDate}</span>
                </td>
                <td className="px-5 py-3.5">
                  {c.slaBreach ? (
                    <span className="flex items-center gap-1 text-xs text-red-600 font-semibold">
                      <AlertTriangle size={12} />
                      Breached
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">{c.slaDeadline}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>
            Showing {filtered.length} of {ALL_CASES.length} cases
          </span>
          <span>Last synced: 2 minutes ago</span>
        </div>
      </div>
    </div>
  );
}
