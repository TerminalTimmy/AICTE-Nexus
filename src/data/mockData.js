export const MOCK_CASES = [
  {
    id: 'PGRC-992',
    title: 'Fee Withholding',
    institution: 'RV University',
    aicteId: '1-987654',
    status: 'Pending',
    bureau: 'PGRC',
    priority: 'High',
    filedDate: '2026-01-12',
    slaDeadline: '2026-02-12',
    slaBreach: false,
    complainant: 'Mr. Arun Sharma (Parent)',
    assignedOfficer: 'Dr. Priya Nair, Dy. Director (PGRC)',
    description:
      'Complainant alleges that RV University has been withholding the fee refund of ₹2,45,000 for over 90 days after the student withdrew admission within the permissible window under AICTE regulations.',
    timeline: [
      { date: '2026-01-12', event: 'PGRC Case PGRC-992 Opened', bureau: 'PGRC' },
      { date: '2026-01-18', event: 'Notice issued to RV University', bureau: 'PGRC' },
      { date: '2026-02-04', event: 'University response received — partial compliance noted', bureau: 'PGRC' },
      { date: '2026-02-22', event: 'Hearing scheduled', bureau: 'PGRC' },
    ],
  },
  {
    id: 'RB-405',
    title: 'Infrastructure Violation',
    institution: 'RV University',
    aicteId: '1-987654',
    status: 'Under Process',
    bureau: 'RB',
    priority: 'Critical',
    filedDate: '2026-02-04',
    slaDeadline: '2026-03-04',
    slaBreach: true,
    assignedOfficer: 'Shri R. K. Mehta, Asstt. Director (RB)',
    description:
      'Regulation Bureau inspection report flagged critical deficiencies in lab infrastructure, faculty-to-student ratio non-compliance, and discrepancies in affidavit submitted during approval cycle 2025-26.',
    regulatoryNotes:
      'Non-compliance with Clause 4.2 (Infrastructure) and Clause 7.1 (Faculty Cadre Ratio) of AICTE Approval Process Handbook 2025-26. Previous warning issued in AY 2024-25.',
    complianceHistory: [
      { year: '2023-24', status: 'Compliant', remarks: 'All norms met' },
      { year: '2024-25', status: 'Warning Issued', remarks: 'Lab infra shortfall — 60% compliance' },
      { year: '2025-26', status: 'Non-Compliant', remarks: 'Ongoing investigation' },
    ],
    timeline: [
      { date: '2026-02-04', event: 'RB Inspection Scheduled', bureau: 'RB' },
      { date: '2026-02-18', event: 'Inspection completed — violations documented', bureau: 'RB' },
      { date: '2026-03-01', event: 'Show Cause Notice issued', bureau: 'RB' },
      { date: '2026-03-20', event: 'University submits compliance plan', bureau: 'RB' },
    ],
  },
  {
    id: 'PGRC-881',
    title: 'Faculty Dispute',
    institution: 'NIT Surathkal',
    aicteId: '1-543210',
    status: 'Disposed',
    bureau: 'PGRC',
    priority: 'Medium',
    filedDate: '2025-10-05',
    slaDeadline: '2025-11-05',
    slaBreach: false,
    assignedOfficer: 'Dr. Meena Kapoor, Dy. Director (PGRC)',
    description:
      'Faculty member alleged non-payment of arrears and arbitrary service termination. Case investigated, institution found compliant after documentary evidence review.',
    timeline: [
      { date: '2025-10-05', event: 'PGRC Case PGRC-881 Opened', bureau: 'PGRC' },
      { date: '2025-10-20', event: 'Institution response received', bureau: 'PGRC' },
      { date: '2025-11-02', event: 'Case disposed — no further action', bureau: 'PGRC' },
    ],
  },
];

export const MOCK_INSTITUTION = {
  name: 'RV University',
  aicteId: '1-987654',
  address: 'Mysore Road, RV Vidyaniketan Post, Bengaluru, Karnataka — 560059',
  type: 'Deemed-to-be University',
  approvalStatus: 'Approved (Conditional)',
  programs: 42,
  studentIntake: 3200,
  establishedYear: 1975,
};

export const MOCK_UNIFIED_TIMELINE = [
  { date: '2026-01-12', event: 'PGRC Case PGRC-992 Opened — Fee Withholding complaint filed', bureau: 'PGRC', type: 'case' },
  { date: '2026-01-18', event: 'Notice issued to RV University (PGRC)', bureau: 'PGRC', type: 'notice' },
  { date: '2026-02-04', event: 'RB Inspection Scheduled for RV University', bureau: 'RB', type: 'inspection' },
  { date: '2026-02-04', event: 'University response received on fee refund — partial compliance', bureau: 'PGRC', type: 'response' },
  { date: '2026-02-18', event: 'RB Inspection completed — infrastructure violations documented', bureau: 'RB', type: 'inspection' },
  { date: '2026-02-22', event: 'PGRC Hearing scheduled for PGRC-992', bureau: 'PGRC', type: 'hearing' },
  { date: '2026-03-01', event: 'Show Cause Notice issued by RB', bureau: 'RB', type: 'notice' },
  { date: '2026-03-10', event: '⚠️ ACTION-COLLISION DETECTED — Parallel investigations identified', bureau: 'NEXUS', type: 'collision' },
  { date: '2026-03-20', event: 'University submits compliance plan to RB', bureau: 'RB', type: 'response' },
  { date: '2026-04-02', event: 'Nexus Workspace created — Cross-bureau coordination initiated', bureau: 'NEXUS', type: 'nexus' },
];

export const MOCK_KPI = {
  totalActive: 47,
  pendingCases: 18,
  underProcess: 22,
  escalated: 7,
  slaBreaches: 5,
  collisionsDetected: 3,
  avgResolutionDays: 34,
};

export const MOCK_CHART_DATA = [
  { month: 'May', PGRC: 12, RB: 8 },
  { month: 'Jun', PGRC: 15, RB: 10 },
  { month: 'Jul', PGRC: 11, RB: 14 },
  { month: 'Aug', PGRC: 18, RB: 9 },
  { month: 'Sep', PGRC: 14, RB: 13 },
  { month: 'Oct', PGRC: 16, RB: 11 },
];

export const MOCK_NOTIFICATIONS = [
  { id: 1, text: 'Action-Collision detected for RV University', time: '2 min ago', urgent: true },
  { id: 2, text: 'SLA breach: Case RB-405 exceeded deadline', time: '1 hr ago', urgent: true },
  { id: 3, text: 'Case PGRC-881 disposed successfully', time: '3 hrs ago', urgent: false },
  { id: 4, text: 'New PGRC complaint assigned to your queue', time: '5 hrs ago', urgent: false },
];
