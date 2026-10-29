import {
  AlertTriangle,
  TrendingUp,
  Clock,
  Zap,
  ArrowRight,
  ExternalLink,
  Activity,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
} from 'recharts';
import { MOCK_CASES, MOCK_KPI, MOCK_CHART_DATA } from '../data/mockData';

// ──────────── KPI Cards ────────────
function KPICard({ title, value, icon: Icon, color, subtitle }) {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600 shadow-blue-500/25',
    red: 'from-red-500 to-red-600 shadow-red-500/25',
    amber: 'from-amber-500 to-amber-600 shadow-amber-500/25',
    emerald: 'from-emerald-500 to-emerald-600 shadow-emerald-500/25',
    indigo: 'from-indigo-500 to-indigo-600 shadow-indigo-500/25',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">{value}</p>
          {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
        </div>
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center shadow-lg`}
        >
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
}

// ──────────── Collision Banner ────────────
function CollisionBanner({ onLaunchNexus }) {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 rounded-xl p-5 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30 animate-pulse">
            <AlertTriangle size={24} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-amber-900">
                CRITICAL: Action-Collision Detected
              </h3>
              <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Live
              </span>
            </div>
            <p className="text-sm text-amber-800 mt-1">
              <span className="font-semibold">RV University</span> — Parallel investigations found
              across <span className="font-semibold">Regulation Bureau (RB)</span> and{' '}
              <span className="font-semibold">Public Grievance Redressal Cell (PGRC)</span>.
              Coordinated resolution required to prevent conflicting directives.
            </p>
          </div>
        </div>
        <button
          onClick={onLaunchNexus}
          className="flex-shrink-0 ml-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Zap size={18} />
          Launch Nexus Workspace
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ──────────── Case Card ────────────
function CaseCard({ caseData, onInstitutionClick }) {
  const bureauColor = caseData.bureau === 'RB' ? 'border-l-blue-500' : 'border-l-emerald-500';
  const bureauBadge =
    caseData.bureau === 'RB'
      ? 'bg-blue-100 text-blue-700'
      : 'bg-emerald-100 text-emerald-700';

  const priorityBadge = {
    Critical: 'bg-red-100 text-red-700',
    High: 'bg-orange-100 text-orange-700',
    Medium: 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div
      className={`bg-white rounded-lg border border-slate-200 border-l-4 ${bureauColor} p-4 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-mono font-bold text-slate-600">{caseData.id}</span>
        <div className="flex gap-1.5">
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${bureauBadge}`}>
            {caseData.bureau}
          </span>
          {caseData.slaBreach && (
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-100 text-red-700">
              SLA BREACH
            </span>
          )}
        </div>
      </div>
      <h4 className="text-sm font-semibold text-slate-800 mb-1">{caseData.title}</h4>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onInstitutionClick({
            name: caseData.institution,
            aicteId: caseData.aicteId,
          });
        }}
        className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 mb-2"
      >
        {caseData.institution}
        <ExternalLink size={10} />
      </button>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
        <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${priorityBadge[caseData.priority] || 'bg-slate-100 text-slate-600'}`}>
          {caseData.priority}
        </span>
        <span className="text-[10px] text-slate-400">{caseData.filedDate}</span>
      </div>
    </div>
  );
}

// ──────────── Kanban Board ────────────
function KanbanBoard({ onInstitutionClick }) {
  const columns = [
    {
      title: 'Pending',
      status: 'Pending',
      color: 'border-yellow-400',
      bgHeader: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      cases: MOCK_CASES.filter((c) => c.status === 'Pending'),
    },
    {
      title: 'Under Process',
      status: 'Under Process',
      color: 'border-blue-400',
      bgHeader: 'bg-blue-50',
      textColor: 'text-blue-800',
      cases: MOCK_CASES.filter((c) => c.status === 'Under Process'),
    },
    {
      title: 'Escalated / Disposed',
      status: 'Disposed',
      color: 'border-emerald-400',
      bgHeader: 'bg-emerald-50',
      textColor: 'text-emerald-800',
      cases: MOCK_CASES.filter((c) => c.status === 'Disposed'),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-800">SLA Tracking Board</h3>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-blue-500" /> RB Bureau
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500" /> PGRC Bureau
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {columns.map((col) => (
          <div key={col.status} className="min-h-[300px]">
            <div
              className={`${col.bgHeader} border-t-2 ${col.color} rounded-t-lg px-4 py-2.5 flex items-center justify-between`}
            >
              <h4 className={`text-sm font-semibold ${col.textColor}`}>{col.title}</h4>
              <span
                className={`w-6 h-6 rounded-full ${col.bgHeader} ${col.textColor} text-xs font-bold flex items-center justify-center border ${col.color}`}
              >
                {col.cases.length}
              </span>
            </div>
            <div className="bg-slate-50/50 rounded-b-lg border border-t-0 border-slate-200 p-3 space-y-3">
              {col.cases.map((c) => (
                <CaseCard key={c.id} caseData={c} onInstitutionClick={onInstitutionClick} />
              ))}
              {col.cases.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">No cases</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────── Dashboard View ────────────
export default function Dashboard({ role, overlapDetected, onLaunchNexus, onInstitutionClick }) {
  return (
    <div className="space-y-6 max-w-[1440px] mx-auto">
      {/* Collision Banner */}
      {overlapDetected && <CollisionBanner onLaunchNexus={onLaunchNexus} />}

      {/* KPI Row */}
      <div className="grid grid-cols-5 gap-4">
        <KPICard
          title="Total Active Cases"
          value={MOCK_KPI.totalActive}
          icon={Activity}
          color="blue"
          subtitle="Across all bureaus"
        />
        <KPICard
          title="Pending Review"
          value={MOCK_KPI.pendingCases}
          icon={Clock}
          color="indigo"
          subtitle="Awaiting action"
        />
        <KPICard
          title="Under Process"
          value={MOCK_KPI.underProcess}
          icon={TrendingUp}
          color="emerald"
          subtitle="Active investigations"
        />
        <KPICard
          title="SLA Breaches"
          value={MOCK_KPI.slaBreaches}
          icon={AlertTriangle}
          color="red"
          subtitle="Requires immediate action"
        />
        <KPICard
          title="Collisions Detected"
          value={MOCK_KPI.collisionsDetected}
          icon={Zap}
          color="amber"
          subtitle="Cross-bureau overlaps"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">
            Bureau Case Volume — Last 6 Months
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={MOCK_CHART_DATA} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="PGRC" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="RB" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">
            Trend Analysis — Cross-Bureau Activity
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={MOCK_CHART_DATA}>
              <defs>
                <linearGradient id="pgrcGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="rbGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="PGRC"
                stroke="#10b981"
                fill="url(#pgrcGrad)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="RB"
                stroke="#3b82f6"
                fill="url(#rbGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Kanban */}
      <KanbanBoard onInstitutionClick={onInstitutionClick} />
    </div>
  );
}
