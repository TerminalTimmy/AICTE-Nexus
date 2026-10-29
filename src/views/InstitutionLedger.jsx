import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  GraduationCap,
  Users,
  FileCheck2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Shield,
  Scale,
  Zap,
} from 'lucide-react';
import { MOCK_INSTITUTION, MOCK_UNIFIED_TIMELINE, MOCK_CASES } from '../data/mockData';

function TimelineEvent({ item, isLast }) {
  const bureauConfig = {
    PGRC: {
      color: 'bg-emerald-500',
      ring: 'ring-emerald-100',
      badge: 'bg-emerald-100 text-emerald-700',
      line: 'border-emerald-200',
      icon: Scale,
    },
    RB: {
      color: 'bg-blue-500',
      ring: 'ring-blue-100',
      badge: 'bg-blue-100 text-blue-700',
      line: 'border-blue-200',
      icon: Shield,
    },
    NEXUS: {
      color: 'bg-amber-500',
      ring: 'ring-amber-100',
      badge: 'bg-amber-100 text-amber-800',
      line: 'border-amber-200',
      icon: Zap,
    },
  };

  const config = bureauConfig[item.bureau] || bureauConfig.PGRC;
  const Icon = config.icon;
  const isCollision = item.type === 'collision' || item.type === 'nexus';

  return (
    <div className="flex gap-4">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center ring-4 ${config.ring} shadow-sm z-10 ${
            isCollision ? 'animate-pulse' : ''
          }`}
        >
          <Icon size={16} className="text-white" />
        </div>
        {!isLast && <div className={`w-0.5 flex-1 border-l-2 ${config.line} my-1`} />}
      </div>

      {/* Content */}
      <div
        className={`flex-1 pb-6 ${isCollision ? '' : ''}`}
      >
        <div
          className={`rounded-xl p-4 border ${
            isCollision
              ? 'bg-amber-50 border-amber-300 shadow-sm'
              : 'bg-white border-slate-200 hover:shadow-sm'
          } transition-shadow`}
        >
          <div className="flex items-start justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${config.badge}`}>
                {item.bureau}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
            </div>
          </div>
          <p
            className={`text-sm ${
              isCollision ? 'font-semibold text-amber-900' : 'text-slate-700'
            } leading-relaxed mt-1`}
          >
            {item.event}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InstitutionLedger({ institution, onBack }) {
  const inst = MOCK_INSTITUTION;
  const relatedCases = MOCK_CASES.filter((c) => c.institution === inst.name);

  return (
    <div className="max-w-[1100px] mx-auto space-y-6">
      {/* Back Nav */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      {/* Institution Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Building2 size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{inst.name}</h2>
              <p className="text-sm text-slate-300 mt-0.5">
                Institution 360° Ledger — Unified Cross-Bureau History
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 divide-x divide-slate-100 border-t border-slate-200">
          <div className="p-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
              AICTE Permanent ID
            </p>
            <p className="text-sm font-mono font-bold text-slate-800">{inst.aicteId}</p>
          </div>
          <div className="p-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
              Institution Type
            </p>
            <p className="text-sm font-semibold text-slate-700">{inst.type}</p>
          </div>
          <div className="p-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
              Approval Status
            </p>
            <p className="text-sm font-semibold text-amber-600">{inst.approvalStatus}</p>
          </div>
          <div className="p-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Established</p>
            <p className="text-sm font-semibold text-slate-700">{inst.establishedYear}</p>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={14} className="text-slate-400" />
            {inst.address}
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-200">
          <div className="p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
              <GraduationCap size={18} className="text-blue-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800">{inst.programs}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Programs</p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
              <Users size={18} className="text-emerald-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800">
                {inst.studentIntake.toLocaleString()}
              </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                Student Intake
              </p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center">
              <AlertTriangle size={18} className="text-amber-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800">{relatedCases.length}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Active Cases</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Cases Summary */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
          <FileCheck2 size={16} className="text-slate-400" />
          Active Cases at this Institution
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {relatedCases.map((c) => (
            <div
              key={c.id}
              className={`border rounded-lg p-4 ${
                c.bureau === 'RB'
                  ? 'border-l-4 border-l-blue-500 border-blue-100'
                  : 'border-l-4 border-l-emerald-500 border-emerald-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-slate-600">{c.id}</span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    c.bureau === 'RB'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {c.bureau}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-slate-700">{c.title}</h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{c.description}</p>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                <span className="text-[10px] text-slate-400">{c.status}</span>
                <span className="text-[10px] text-slate-400">{c.filedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Timeline */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Clock size={16} className="text-slate-400" />
            Unified Cross-Bureau Timeline
          </h3>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500" /> PGRC
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-500" /> RB
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500" /> Nexus
            </span>
          </div>
        </div>

        <div>
          {MOCK_UNIFIED_TIMELINE.map((item, i) => (
            <TimelineEvent
              key={i}
              item={item}
              isLast={i === MOCK_UNIFIED_TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
