# AICTE-Nexus 🏛️⚡
> **Integrated Cross-Bureau Grievance & Regulatory Collision Monitoring Platform for Technical Institutions**  
> *"AICTE-Nexus does not replace bureaus — it makes them legally incapable of acting in conflict."*

---

## 📌 Overview

**AICTE-Nexus** is an enterprise-grade administrative prototype designed for regulatory bodies such as the **All India Council for Technical Education (AICTE)**. It bridges the critical procedural gap between siloed administrative departments:
- **PGRC (Public Grievance Redressal Cell):** Handles citizen, student, and faculty complaints (fee withholding, ragging, unfair practices).
- **RB (Regulation Bureau):** Conducts annual approvals, compliance audits, infrastructure verifications, and issues Show Cause Notices (SCNs).

In current administrative setups, these two bureaus often conduct parallel inquiries into the same institution without mutual visibility, leading to **contradictory directives, judicial writ petitions, procedural deadlocks, and severe SLA breaches**.

**AICTE-Nexus** detects these overlaps in real time, issues an **Action-Collision Warning**, generates a shared **Nexus Workspace**, and enforces a **Programmatic Forced Co-Sign Protocol** before any unilateral punitive order can be finalized.

---

## 🎯 Key Capabilities & Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           AICTE-NEXUS PLATFORM                                  │
├─────────────────────┬───────────────────────────┬───────────────────────────────┤
│ 1. Data Ingestion   │ 2. AI Collision Engine    │ 3. Enforcement & Governance   │
│ • AICTE Master ID   │ • Deterministic ID (1.0)  │ • Dual-Key Co-Sign Protocol   │
│ • CPGRAMS / PGRC    │ • RapidFuzz Names (0.7)   │ • Programmatic Freeze Webhook │
│ • RB Annual Logs    │ • Sentence-Transformers   │ • 360° Institution Ledger     │
│ • OCR Preprocessing │ • SLA Predictor (Risk idx)│ • Immutable SHA-256 Audit     │
└─────────────────────┴───────────────────────────┴───────────────────────────────┘
```

1. **Entity-Centric 360° Ledger:**
   All incidents, inspections, and notices are bound to the institution's canonical **AICTE Permanent Institute ID** (`1-XXXXXXX`), providing a single unified chronological timeline across all academic cycles.

2. **Action-Collision Engine (ACDE):**
   A multi-tier detection engine that flags conflicts using:
   - **Deterministic Layer (Weight 1.0):** Exact AICTE ID mapping.
   - **Fuzzy Lexical Layer (Weight 0.7):** RapidFuzz Levenshtein matching for institutional acronyms and colloquial names.
   - **Semantic NLP Layer (Weight 0.85):** Sentence-Transformers cosine similarity to connect thematically linked complaints (e.g., student lab complaints vs. cadre-ratio infrastructure citations).
   - **Trigger Threshold:** Cumulative confidence score $\ge 0.75$ triggers immediate collision isolation.

3. **Nexus Collaborative Workspace:**
   A split-screen coordination interface providing side-by-side comparative views of both bureau files, timelines, and officer evidence.

4. **Forced Dual-Key Co-Sign Protocol:**
   Enforces an API and UI-level lock. An order or case resolution cannot be finalized without cryptographically verified sign-offs from **both** the RB Officer and the PGRC Official.

5. **Proactive SLA Breach Predictor:**
   Evaluates statutory 30/60-day deadlines, officer workloads, and institutional compliance velocity to forecast and alert on breaches **7 days in advance**.

---

## 🖥️ Screen-by-Screen Walkthrough (Demo / Evaluation)

| View | Feature Highlight | Purpose |
| :--- | :--- | :--- |
| **Main Dashboard** | • 5 Top-line KPI Cards (SLA Breaches in red, Collisions in amber)<br>• Recharts Volume & Trend Graphs<br>• 3-Column SLA Kanban Board | Central monitoring hub for administrators and regional directors. |
| **Action-Collision Banner** | • Live Amber Alert banner (`RV University`)<br>• Instant CTA: *"Launch Nexus Workspace"* | Highlights active cross-bureau conflicts preventing conflicting orders. |
| **Nexus Workspace** | • Left Column: PGRC Case (`PGRC-992`, Fee Withholding)<br>• Right Column: RB Case (`RB-405`, Infrastructure Deficiencies)<br>• Sticky Joint Resolution Bar with **Locked / Active Co-Sign Buttons** | Collaborative arbitration room enforcing mutual concurrence. |
| **Role Toggle (Header)** | • Toggle between **"RB Officer"** and **"PGRC Official"** | Demonstrates Role-Based Access Control (RBAC) and switches button locks in real time. |
| **Institution 360° Ledger** | • Click on any college name (e.g., *RV University*)<br>• Vertical chronological spine with color-coded nodes (Green: PGRC, Blue: RB, Amber: Nexus) | Entity-centric single source of truth for court dossiers and inquiries. |
| **Master Ledger** | • Searchable, filterable case table with CSV export options | Global registry for tracking nationwide case statuses. |

---

## 🛠️ Technology Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4
- **Data Visualization:** Recharts (Area and Bar charts)
- **Icons & UI Elements:** Lucide React
- **Architecture Philosophy:** Service-Oriented / Federated Ingestion + Zero-Trust RBAC

---

## 🚀 Quickstart & Local Installation

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9+ or yarn/pnpm)

### Step 1: Clone or Navigate to Directory
```bash
cd c:\Users\tuhin\Music\Java_projects\Booknest\aicte-nexus
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```

The application will start immediately at:
👉 **`http://localhost:5173/`**

### Step 4: Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `/dist` directory.

---

## 📂 Project Structure

```
aicte-nexus/
├── public/
│   └── favicon.svg               # Nexus SVG emblem
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Global search, RBAC role toggle, notification bell
│   │   └── Sidebar.jsx           # Collapsible enterprise navigation
│   ├── data/
│   │   └── mockData.js           # Single source of truth (cases, timelines, KPIs)
│   ├── views/
│   │   ├── Dashboard.jsx         # Main command center, KPIs, Recharts, Kanban
│   │   ├── NexusWorkspace.jsx    # Split-screen collision arbitration & Co-Sign bar
│   │   ├── InstitutionLedger.jsx # 360° chronological multi-bureau timeline
│   │   └── MasterLedger.jsx      # Searchable & filterable full case registry
│   ├── App.jsx                   # Root SPA state router & modal orchestrator
│   ├── index.css                 # Tailwind CSS v4 styling & scrollbar utilities
│   └── main.jsx                  # React DOM root entry
├── package.json
├── vite.config.js
└── README.md
```

---

## 🏆 Presentation & Evaluation Cheat-Sheet

* **What problem does this solve?** It eliminates judicial embarrassment and regulatory double jeopardy where AICTE inadvertently approves a college on one desk while taking de-affiliation or penalty action on another.
* **Why not just email each other?** Emails don't enforce statutory constraints. Nexus uses **programmatic locking** (Forced Co-Sign) where files cannot physically proceed to closure without both signatures.
* **How are false positives prevented?** The hybrid matching pipeline requires an aggregated score of $\ge 0.75$, ensuring trivial text matches do not lock administrative workflows.

---

## 📄 License
Developed for educational, hackathon, and prototype evaluation purposes.
