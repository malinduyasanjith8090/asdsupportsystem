import React from 'react';
import { NavigationTab } from '../types';
import { PROJECT_METADATA, MODULES_INFO, MILESTONES } from '../data/researchData';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  ArrowRight, 
  FileText, 
  Users, 
  Calendar, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Languages,
  CheckCircle2,
  Clock,
  Compass,
  GitBranch,
  Layers,
  Cpu,
  Brain,
  Smile,
  Activity,
  HeartHandshake,
  FolderOpen
} from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenFlowchart: () => void;
  onSelectModule: (moduleId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ 
  onNavigate, 
  onOpenFlowchart,
  onSelectModule 
}) => {
  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO GRADIENT SECTION (Black & White high-contrast user-friendly design) */}
      <section className="hero-gradient-dark relative rounded-3xl overflow-hidden text-white my-2 sm:my-4 p-5 sm:p-10 md:p-14 shadow-2xl border border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Chips row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="hero-chip-bw">
                  <Brain className="w-3.5 h-3.5 text-stone-300" />
                  <span>Assistive Intelligence</span>
                </span>
                <span className="hero-chip-bw">
                  <Layers className="w-3.5 h-3.5 text-stone-300" />
                  <span>Integrated ASD Support</span>
                </span>
                <span className="hero-chip-bw">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="font-mono text-stone-300">R26-IT-037</span>
                </span>
              </div>

              {/* Kicker */}
              <p className="uppercase tracking-[0.25em] text-stone-400 text-[11px] sm:text-xs font-mono font-bold">
                RESEARCH PROJECT — SLIIT FACULTY OF COMPUTING
              </p>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] text-balance">
                Autism support for children, redesigned as an integrated living care system.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-stone-300/90 leading-relaxed max-w-2xl">
                A modern assistive platform tailored for Sri Lanka that blends AI-driven personalized learning, behavioral social training, sensory-safe cognitive games, and daily visual routine management into one unified mobile experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const el = document.getElementById('overview');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-white hover:bg-stone-100 text-stone-950 font-bold px-6 py-3 rounded-full transition shadow-lg text-xs sm:text-sm cursor-pointer"
                >
                  <span>Explore the System</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenFlowchart}
                  className="inline-flex items-center justify-center bg-stone-850 hover:bg-stone-800 text-white border border-stone-700 font-semibold px-5 py-3 rounded-full transition text-xs sm:text-sm cursor-pointer shadow-xs"
                >
                  <GitBranch className="w-4 h-4 mr-2 text-stone-300" />
                  <span>Research Flowchart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('domain')}
                  className="inline-flex items-center justify-center border border-stone-800 hover:border-stone-700 hover:bg-stone-900 text-stone-300 hover:text-white font-medium px-4 py-3 rounded-full transition text-xs sm:text-sm cursor-pointer"
                >
                  <span>See Domain</span>
                </motion.button>
              </div>
            </div>

            {/* Right Hero Stage: Live Overview Glass Panel */}
            <div className="lg:col-span-5">
              <div className="glass-panel-bw rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 space-y-5 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-400 font-mono font-bold">
                      Live Overview
                    </p>
                    <h2 className="text-lg sm:text-2xl font-bold text-white mt-0.5">
                      Project at a glance
                    </h2>
                  </div>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-stone-200 border border-white/15">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* 2x2 Metric Cards Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="metric-card-bw p-3 sm:p-4">
                    <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">4</div>
                    <div className="text-[11px] sm:text-xs text-stone-300 mt-1">Connected Modules</div>
                  </div>
                  <div className="metric-card-bw p-3 sm:p-4">
                    <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">1 : 93</div>
                    <div className="text-[11px] sm:text-xs text-stone-300 mt-1">ASD Ratio (Sri Lanka)</div>
                  </div>
                  <div className="metric-card-bw p-3 sm:p-4">
                    <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">100%</div>
                    <div className="text-[11px] sm:text-xs text-stone-300 mt-1">Offline SQLite Support</div>
                  </div>
                  <div className="metric-card-bw p-3 sm:p-4">
                    <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">3</div>
                    <div className="text-[11px] sm:text-xs text-stone-300 mt-1">Languages (Sinhala/En/Ta)</div>
                  </div>
                </div>

                {/* Sub-module Ribbon */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="uppercase tracking-[0.25em] text-stone-400 font-mono font-bold text-[10px]">
                      Integrated Modules
                    </span>
                    <span className="text-[11px] text-stone-300">Fast & Offline-Ready</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="hero-chip-bw text-[11px] py-1 px-2.5">Personalized Learning</span>
                    <span className="hero-chip-bw text-[11px] py-1 px-2.5">Behavioral Training</span>
                    <span className="hero-chip-bw text-[11px] py-1 px-2.5">Daily Routines</span>
                    <span className="hero-chip-bw text-[11px] py-1 px-2.5">Cognitive Games</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION SURFACE: KEY METRICS / PILLARS RIBBON */}
      <section id="overview" className="section-surface-bw rounded-3xl p-6 sm:p-10 border border-stone-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="section-divider-bw mb-2"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs transition-all hover:border-stone-900">
              <div className="text-stone-900 text-xs uppercase tracking-[0.25em] font-mono font-bold mb-1">Focus</div>
              <div className="text-xl sm:text-2xl font-extrabold text-stone-950">Adaptive AI</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">Dynamic difficulty adjustment scaling with real-time child accuracy.</p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs transition-all hover:border-stone-900">
              <div className="text-stone-900 text-xs uppercase tracking-[0.25em] font-mono font-bold mb-1">Design</div>
              <div className="text-xl sm:text-2xl font-extrabold text-stone-950">Sensory Calm</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">Muted contrast palettes, zero flashing, and large touch targets (≥44px).</p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs transition-all hover:border-stone-900">
              <div className="text-stone-900 text-xs uppercase tracking-[0.25em] font-mono font-bold mb-1">Routines</div>
              <div className="text-xl sm:text-2xl font-extrabold text-stone-950">Predictable</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">Visual schedules and gentle audio alerts to soothe transition stress.</p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs transition-all hover:border-stone-900">
              <div className="text-stone-900 text-xs uppercase tracking-[0.25em] font-mono font-bold mb-1">Telemetry</div>
              <div className="text-xl sm:text-2xl font-extrabold text-stone-950">Objective Data</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">Continuous tracking of task latency, errors, and progress over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SUB-MODULES SHOWCASE (Like the tall cards in reference site) */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <p className="uppercase tracking-[0.3em] text-stone-500 text-xs font-mono font-bold">The Four Research Modules</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight mt-1">
              Engineered for Cognitive, Social & Daily Independence
            </h2>
          </div>
          <button
            onClick={() => onNavigate('domain')}
            className="text-xs font-semibold text-stone-900 hover:underline flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>View Full Technical Specification</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES_INFO.map((mod, idx) => (
            <div 
              key={mod.id}
              className="feature-card-bw rounded-3xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
              onClick={() => {
                onSelectModule(mod.id);
                onNavigate('domain');
              }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  {idx === 0 && <Cpu className="w-6 h-6" />}
                  {idx === 1 && <Sparkles className="w-6 h-6" />}
                  {idx === 2 && <Calendar className="w-6 h-6" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                    <span>{mod.studentId}</span>
                    <span className="font-semibold text-stone-800">{mod.leadMember.split(' ')[0]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-950 group-hover:text-stone-700 transition-colors">
                    {mod.name}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {mod.description}
                </p>

                <div className="pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-mono font-bold text-stone-800 uppercase block mb-1">Key Novelty:</span>
                  <p className="text-xs text-stone-500 line-clamp-2">
                    {mod.noveltyFeatures[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">90% Verified</span>
                <span className="text-xs font-semibold text-stone-900 group-hover:underline flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BLACK CONTRAST SECTION: "One platform. Four connected research responses." */}
      <section className="bg-stone-950 text-white rounded-3xl py-14 px-8 sm:px-12 md:px-16 overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.35em] text-stone-400 text-xs font-mono font-bold">
                Unified Research Architecture
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                One platform. Four connected assistive responses.
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
                Combining localized Sri Lankan phonetics, evidence-based pediatric clinical guidelines, and real-time machine learning to establish a sustainable, stress-free support framework for children with ASD and their families.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenFlowchart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-950 font-bold text-xs hover:bg-stone-100 transition shadow-sm cursor-pointer"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>Launch Research Flowchart</span>
                </button>
              </div>
            </div>

            {/* 4 Summary Stats in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="summary-card-bw">
                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">4</p>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-mono">Team Researchers</p>
              </div>
              <div className="summary-card-bw">
                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">6</p>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-mono">Research Phases</p>
              </div>
              <div className="summary-card-bw">
                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">13</p>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-mono">Milestones & Defenses</p>
              </div>
              <div className="summary-card-bw">
                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">2026</p>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-mono">Regular CDAP Batch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE THE PROJECT: "Navigate each part like a story map" (From reference site) */}
      <section className="section-surface-bw rounded-3xl p-8 sm:p-12 border border-stone-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-stone-700 text-xs font-mono font-bold mb-2">
                Explore the Project
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
                Navigate each part like a story map
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md">
              The cards below work as entry points to the complete academic domain, assessment timeline, document archive, and research personnel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Research Domain */}
            <div 
              onClick={() => onNavigate('domain')}
              className="explore-card-bw group rounded-2xl sm:rounded-[1.75rem] p-5 sm:p-7 transition flex flex-col sm:flex-row items-start gap-4 sm:gap-5 cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-stone-950 text-white flex items-center justify-center shrink-0 group-hover:bg-stone-800 transition shadow-xs">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base sm:text-lg text-stone-950 group-hover:text-stone-700 transition-colors">
                    Research Domain
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Literature survey matrix, Table 1.1 comparative gap, 4 formal sub-objectives, 6-phase methodology, and system architecture schematic.
                </p>
              </div>
            </div>

            {/* Card 2: Milestones & Timeline */}
            <div 
              onClick={() => onNavigate('milestones')}
              className="explore-card-bw group rounded-2xl sm:rounded-[1.75rem] p-5 sm:p-7 transition flex flex-col sm:flex-row items-start gap-4 sm:gap-5 cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-stone-950 text-white flex items-center justify-center shrink-0 group-hover:bg-stone-800 transition shadow-xs">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base sm:text-lg text-stone-950 group-hover:text-stone-700 transition-colors">
                    Milestones & Timeline
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Track all 13 project assessment stages, evaluation criteria, deadlines, and deliverables with the interactive dropdown selector.
                </p>
              </div>
            </div>

            {/* Card 3: Documentation & Thesis */}
            <div 
              onClick={() => onNavigate('documents')}
              className="explore-card-bw group rounded-2xl sm:rounded-[1.75rem] p-5 sm:p-7 transition flex flex-col sm:flex-row items-start gap-4 sm:gap-5 cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-stone-950 text-white flex items-center justify-center shrink-0 group-hover:bg-stone-800 transition shadow-xs">
                <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base sm:text-lg text-stone-950 group-hover:text-stone-700 transition-colors">
                    Documentation Archive
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Download the Project Charter, 4 individual proposals, 5 draft thesis volumes, and the formal IEEE Research Paper via verified SharePoint links.
                </p>
              </div>
            </div>

            {/* Card 4: Meet the Team */}
            <div 
              onClick={() => onNavigate('about')}
              className="explore-card-bw group rounded-2xl sm:rounded-[1.75rem] p-5 sm:p-7 transition flex flex-col sm:flex-row items-start gap-4 sm:gap-5 cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-stone-950 text-white flex items-center justify-center shrink-0 group-hover:bg-stone-800 transition shadow-xs">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base sm:text-lg text-stone-950 group-hover:text-stone-700 transition-colors">
                    Research Team & Supervision
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Meet the 4 student investigators (Yasanjith, Jayalath, Premarathna, Savindi) and academic supervisors from SLIIT Department of IT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
