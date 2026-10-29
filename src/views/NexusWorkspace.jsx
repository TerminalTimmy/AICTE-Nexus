import { useState } from 'react';
import {
  X,
  ExternalLink,
  FileText,
  Clock,
  User,
  CheckCircle2,
  Lock,
  ChevronDown,
  AlertTriangle,
  Shield,
  Scale,
  Building2,
} from 'lucide-react';
import { MOCK_CASES, MOCK_INSTITUTION } from '../data/mockData';

const pgrcCase = MOCK_CASES.find((c) => c.id === 'PGRC-992');
const rbCase = MOCK_CASES.find((c) => c.id === 'RB-405');

function TimelineItem({ item }) {
  const bureauColor = {
    PGRC: 'bg-emerald-500',
    RB: 'bg-blue-500',
    NEXUS: 'bg-amber-500',
  };
  return (
    <div className="flex items-start gap-3 py-2">
      <div
        className={`w-2.5 h-2.5 rounded-full ${bureauColor[item.bureau] || 'bg-slate-400'} mt-1.5 flex-shrink-0 ring-4 ring-white`}
      />
      <div>
        <p className="text-sm text-slate-700">{item.event}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{item.date}</p>
      </div>
    </div>
  );
}

export default function NexusWorkspace({ role, onClose, onInstitutionClick }) {
  const [resolution, setResolution] = useState('unified-joint');
  const [rbSigned, setRbSigned] = useState(false);
  const [pgrcSigned, setPgrcSigned] = useState(false);

  const isRB = role === 'RB';
  const canSignRB = isRB;
  const canSignPGRC = !isRB;

  return (
    <div className="max-w-[1440px] mx-auto space-y-5">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Building2 size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-slate-800">
                  Nexus Workspace: RV University
                </h2>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                  <AlertTriangle size={10} />
                  Collision Active
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-slate-500">
                  AICTE Permanent ID:{' '}
                  <span className="font-mono font-semibold text-slate-700">1-987654</span>
                </span>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() =>
                    onInstitutionClick({ name: 'RV University', aicteId: '1-987654' })
                  }
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                >
                  View 360° Ledger
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Split Screen */}
      <div className="grid grid-cols-2 gap-5">
        {/* ──── LEFT: PGRC Data ──── */}
        <div className="bg-white rounded-xl border-2 border-emerald-200 overflow-hidden">
          <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Scale size={14} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-emerald-900">PGRC Bureau</h3>
                <p className="text-[10px] text-emerald-600">
                  Public Grievance Redressal Cell
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold rounded-full">
              {pgrcCase.status}
            </span>
          </div>
          <div className="p-5 space-y-5">
            {/* Case Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                  {pgrcCase.id}
                </span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs font-semibold text-slate-700">{pgrcCase.title}</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="flex items-start gap-2 mb-2">
                  <FileText size={14} className="text-slate-400 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pgrcCase.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Meta Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  Complainant
                </p>
                <p className="text-sm font-medium text-slate-700">{pgrcCase.complainant}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  SLA Deadline
                </p>
                <p className="text-sm font-medium text-slate-700">{pgrcCase.slaDeadline}</p>
              </div>
            </div>

            {/* Officer */}
            <div className="flex items-center gap-3 bg-emerald-50/50 rounded-lg p-3 border border-emerald-100">
              <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Assigned Officer
                </p>
                <p className="text-sm font-semibold text-slate-700">{pgrcCase.assignedOfficer}</p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Clock size={12} /> Case Timeline
              </h4>
              <div className="border-l-2 border-emerald-200 pl-4 space-y-1">
                {pgrcCase.timeline.map((item, i) => (
                  <TimelineItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ──── RIGHT: RB Data ──── */}
        <div className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-50 border-b border-blue-200 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
                <Shield size={14} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-blue-900">Regulation Bureau</h3>
                <p className="text-[10px] text-blue-600">Approval & Compliance Wing</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-full">
                {rbCase.status}
              </span>
              {rbCase.slaBreach && (
                <span className="px-2.5 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded-full">
                  SLA BREACH
                </span>
              )}
            </div>
          </div>
          <div className="p-5 space-y-5">
            {/* Case Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                  {rbCase.id}
                </span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs font-semibold text-slate-700">{rbCase.title}</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="flex items-start gap-2 mb-2">
                  <FileText size={14} className="text-slate-400 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {rbCase.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Regulatory Notes */}
            <div className="bg-red-50/50 rounded-lg p-4 border border-red-100">
              <h4 className="text-[10px] text-red-500 uppercase tracking-wider font-semibold mb-2">
                Regulatory Notes
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {rbCase.regulatoryNotes}
              </p>
            </div>

            {/* Compliance History */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Compliance History
              </h4>
              <div className="space-y-2">
                {rbCase.complianceHistory.map((ch, i) => {
                  const statusColor = {
                    Compliant: 'bg-emerald-100 text-emerald-700',
                    'Warning Issued': 'bg-yellow-100 text-yellow-700',
                    'Non-Compliant': 'bg-red-100 text-red-700',
                  };
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-slate-50 rounded-lg p-3 border border-slate-100"
                    >
                      <span className="text-sm font-mono font-semibold text-slate-600">
                        AY {ch.year}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                          statusColor[ch.status] || 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {ch.status}
                      </span>
                      <span className="text-xs text-slate-500">{ch.remarks}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Clock size={12} /> Case Timeline
              </h4>
              <div className="border-l-2 border-blue-200 pl-4 space-y-1">
                {rbCase.timeline.map((item, i) => (
                  <TimelineItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ──── Co-Sign Action Bar ──── */}
      <div className="sticky bottom-0 bg-white border-2 border-indigo-200 rounded-xl shadow-2xl shadow-slate-300/50 p-5 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Scale size={18} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Joint Resolution Panel</h4>
              <p className="text-xs text-slate-500">
                Both bureau officers must co-sign to issue a unified directive
              </p>
            </div>
          </div>

          {/* Resolution Dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 cursor-pointer"
              >
                <option value="unified-joint">Unified Joint Resolution</option>
                <option value="sequential-review">Sequential Bureau Review</option>
                <option value="escalate-chairman">Escalate to Chairman</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Co-Sign Buttons */}
          <div className="flex items-center gap-3">
            {/* RB Co-Sign */}
            <button
              onClick={() => canSignRB && setRbSigned(!rbSigned)}
              disabled={!canSignRB}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                !canSignRB
                  ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : rbSigned
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-blue-50 text-blue-700 border-2 border-blue-300 hover:bg-blue-100'
              }`}
            >
              {!canSignRB ? (
                <Lock size={14} />
              ) : rbSigned ? (
                <CheckCircle2 size={14} />
              ) : (
                <CheckCircle2 size={14} />
              )}
              RB Officer Co-Sign
              {!canSignRB && (
                <span className="text-[10px] ml-1 opacity-60">(Switch role)</span>
              )}
            </button>

            {/* PGRC Co-Sign */}
            <button
              onClick={() => canSignPGRC && setPgrcSigned(!pgrcSigned)}
              disabled={!canSignPGRC}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                !canSignPGRC
                  ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : pgrcSigned
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-emerald-50 text-emerald-700 border-2 border-emerald-300 hover:bg-emerald-100'
              }`}
            >
              {!canSignPGRC ? (
                <Lock size={14} />
              ) : pgrcSigned ? (
                <CheckCircle2 size={14} />
              ) : (
                <CheckCircle2 size={14} />
              )}
              PGRC Officer Co-Sign
              {!canSignPGRC && (
                <span className="text-[10px] ml-1 opacity-60">(Switch role)</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
