import React, { useState } from 'react';
import { 
  RESEARCH_PAPERS, 
  RESEARCH_GAP_MATRIX, 
  MODULES_INFO, 
  TECHNOLOGIES_STACK, 
  PROJECT_METADATA 
} from '../data/researchData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Layers, 
  Target, 
  Cpu, 
  FileSpreadsheet, 
  TrendingUp, 
  ShieldAlert, 
  Check, 
  X, 
  ChevronRight, 
  ExternalLink,
  GitBranch,
  Smartphone,
  Database,
  Server
} from 'lucide-react';

interface DomainSectionProps {
  initialModuleId?: string;
  onOpenFlowchart: () => void;
}

export const DomainSection: React.FC<DomainSectionProps> = ({ 
  initialModuleId,
  onOpenFlowchart 
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'literature' | 'gap' | 'problem_objectives' | 'methodology' | 'architecture' | 'technologies' | 'commercialization'
  >('literature');

  const [selectedModule, setSelectedModule] = useState<string>(initialModuleId || 'learning');
  const [activeArchNode, setActiveArchNode] = useState<string>('ai_engine');

  const currentMod = MODULES_INFO.find(m => m.id === selectedModule) || MODULES_INFO[0];

  return (
    <div className="space-y-10 py-6">
      {/* Domain Header */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-stone-500 font-bold">
          Research Domain Documentation
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
          Domain Synthesis, Gaps & Methodology
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          Comprehensive academic documentation of the literature survey, empirical gap analysis, formal research problem statements, multi-stage methodology, and architectural technical blueprint for project <strong>R26-IT-037</strong>.
        </p>
      </div>

      {/* Sub-Navigation Tabs - Responsive scroller + Mobile select dropdown */}
      <div className="space-y-2">
        {/* Mobile dropdown selector for small screens */}
        <div className="block sm:hidden">
          <label htmlFor="domain-subtab-select" className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Jump to Section:
          </label>
          <select
            id="domain-subtab-select"
            value={activeSubTab}
            onChange={(e) => setActiveSubTab(e.target.value as any)}
            className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-stone-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-stone-400"
          >
            <option value="literature">1. Literature Survey</option>
            <option value="gap">2. Research Gap Matrix (Table 1.1)</option>
            <option value="problem_objectives">3. Problems & Objectives</option>
            <option value="methodology">4. Methodology Workflow</option>
            <option value="architecture">5. System Architecture</option>
            <option value="technologies">6. Technologies Used</option>
            <option value="commercialization">7. Impact & Ethics</option>
          </select>
        </div>

        {/* Desktop / Tablet pill bar */}
        <div className="hidden sm:flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl overflow-x-auto border border-stone-200 scrollbar-none">
          {[
            { id: 'literature', label: '1. Literature Survey' },
            { id: 'gap', label: '2. Research Gap Matrix' },
            { id: 'problem_objectives', label: '3. Problems & Objectives' },
            { id: 'methodology', label: '4. Methodology Workflow' },
            { id: 'architecture', label: '5. System Architecture' },
            { id: 'technologies', label: '6. Technologies Used' },
            { id: 'commercialization', label: '7. Impact & Ethics' },
          ].map((tab) => {
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive 
                    ? 'bg-stone-950 text-white shadow-xs font-bold' 
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Tabs Content Container with Smooth Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* SUB-TAB 1: LITERATURE SURVEY */}
          {activeSubTab === 'literature' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
              Scholarly Literature Review & Grounding
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              Research into technological interventions for Autism Spectrum Disorder demonstrates marked efficacy across specific functional tasks, including digital visual schedules (Mechling & Savidge, 2011; Knight et al., 2015), wearable autonomic arousal detection (Goodwin et al., 2018), and machine learning personalization (Duda et al., 2016). However, in developing nations such as Sri Lanka—where approximately 1 in 93 children are diagnosed—interventions face severe structural barriers: acute scarcity of child psychiatrists, prohibitive private therapy costs, and a lack of Sinhala/Tamil language localization.
            </p>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-700 space-y-2">
              <div className="font-semibold text-stone-900">Key Contextual Insight from Local Trials:</div>
              <p>
                Groundbreaking Sri Lankan research by <em>Perera et al. (2016)</em> proved the therapeutic feasibility and developmental efficacy of parent-mediated early home intervention. Simultaneously, <em>Bandara et al. (SIPNENA, 2020)</em> verified that mother-tongue Sinhala cultural familiarity greatly elevates interaction comprehension among autistic children. Our project builds directly upon these clinical foundations by unifying fragmented tools into a single, accessible mobile architecture.
              </p>
            </div>
          </div>

          {/* Filterable Literature Review Table */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <h3 className="text-base font-semibold text-stone-900">
                Core Referenced Studies & Systematic Reviews
              </h3>
              <span className="text-xs font-mono text-stone-500">
                6 Primary Benchmarks Analyzed
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {RESEARCH_PAPERS.map((paper) => (
                <div 
                  key={paper.id}
                  className="p-4 rounded-lg border border-stone-200/80 bg-stone-50/50 hover:bg-stone-50 transition-colors space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="font-semibold text-stone-900 text-sm">
                      {paper.citation}
                    </span>
                    <span className="text-xs font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded self-start sm:self-auto">
                      {paper.focusArea}
                    </span>
                  </div>
                  <div className="text-xs text-stone-500 italic">
                    "{paper.title}" — {paper.source}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                    <div>
                      <strong className="text-stone-700">Demonstrated Findings: </strong>
                      <span className="text-stone-600">{paper.keyFindings}</span>
                    </div>
                    <div>
                      <strong className="text-amber-800">Critical Literature Gap: </strong>
                      <span className="text-stone-600">{paper.limitationIdentified}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: RESEARCH GAP & TABLE 1.1 */}
      {activeSubTab === 'gap' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
              Empirical Research Gap Analysis
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              As established during project proposals and defense reviews, current commercial and academic assistive systems suffer from four severe limitations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
                <div className="font-semibold text-stone-900">1. System Fragmentation</div>
                <p className="text-stone-600">Caregivers must juggle distinct apps for speech (e.g. Proloquo2Go), games (Otsimo), and timers, creating disjointed user experiences and contradictory progress histories.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
                <div className="font-semibold text-stone-900">2. Absence of Real-Time Personalization</div>
                <p className="text-stone-600">Existing games enforce static difficulty levels that bore advanced children or trigger panic and frustration when tasks are too complex.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
                <div className="font-semibold text-stone-900">3. Cultural & Economic Exclusion</div>
                <p className="text-stone-600">Western applications lack Sinhala/Tamil vocabulary, demand recurring expensive subscription models, and require continuous high-speed internet connectivity.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
                <div className="font-semibold text-stone-900">4. Lack of Telemetric Analytics</div>
                <p className="text-stone-600">Games rarely expose granular telemetry (latency, task hesitation, error clusters) necessary for clinical therapists and parents to track true developmental evolution.</p>
              </div>
            </div>
          </div>

          {/* Table 1.1 Matrix from Academic Proposals */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-4">
            <div>
              <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Proposal Documentation Reference</div>
              <h3 className="text-base sm:text-lg font-serif font-medium text-stone-900">
                Table 1.1: Comparative Analysis of Existing Research Methods vs. Proposed Platform
              </h3>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
              <span className="sm:hidden text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                ← Swipe table horizontally →
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="min-w-[620px] w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-stone-300 bg-stone-100 text-stone-800">
                    <th className="py-3 px-3 font-semibold">Technologies and Methods</th>
                    <th className="py-3 px-2 text-center font-mono">[1] Mechling</th>
                    <th className="py-3 px-2 text-center font-mono">[2] Knight</th>
                    <th className="py-3 px-2 text-center font-mono">[3] Goodwin</th>
                    <th className="py-3 px-2 text-center font-mono">[4] Duda</th>
                    <th className="py-3 px-2 text-center font-mono">[5] Fletcher</th>
                    <th className="py-3 px-2 text-center font-mono">[6] Kientz</th>
                    <th className="py-3 px-3 text-center font-bold bg-stone-950 text-white border-l border-stone-800">
                      Proposed Method
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {RESEARCH_GAP_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-2.5 px-3 font-medium text-stone-800">
                        {row.feature}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {row.p1 ? <Check className="w-4 h-4 text-stone-900 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {row.p2 ? <Check className="w-4 h-4 text-stone-900 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {row.p3 ? <Check className="w-4 h-4 text-stone-900 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {row.p4 ? <Check className="w-4 h-4 text-stone-900 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {row.p5 ? <Check className="w-4 h-4 text-stone-900 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {row.p6 ? <Check className="w-4 h-4 text-stone-900 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}
                      </td>
                      <td className="py-2.5 px-3 text-center bg-stone-100 border-l border-stone-200 font-bold">
                        <Check className="w-4 h-4 text-stone-950 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-xs text-stone-500 font-mono pt-2">
              Source: SLIIT CDAP Research Proposal Document (R26-IT-037), Table 1.1.
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: RESEARCH PROBLEM & OBJECTIVES */}
      {activeSubTab === 'problem_objectives' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Problem & Objective */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-3">
              <div className="text-xs font-mono uppercase text-stone-900 font-bold">Overarching Problem</div>
              <h3 className="text-lg font-serif font-medium text-stone-900">
                General Research Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Children diagnosed with Autism Spectrum Disorder (ASD) in Sri Lanka face severe developmental barriers in communication, activity transitions, and emotional self-regulation. Formal clinical therapies are cost-prohibitive and geographically concentrated in Colombo. Existing commercial software fails to integrate daily routines with academic and social interventions, treats all children with rigid non-adaptive difficulty, and lacks Sinhala cultural adaptation.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-3">
              <div className="text-xs font-mono uppercase text-stone-900 font-bold">Primary Goal</div>
              <h3 className="text-lg font-serif font-medium text-stone-900">
                General Research Objective
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                To design, implement, and rigorously evaluate an integrated, culturally localized, AI-assisted mobile support system for children with ASD aged 5–10 years in Sri Lanka. The system coordinates adaptive personalized learning, behavioral social training, gamified cognitive exercises, and visual routine transition management within a single unified child profile.
              </p>
            </div>
          </div>

          {/* Module-Specific Breakdown */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-stone-900">
                  Sub-Objectives & Specific Research Questions by Researcher
                </h3>
                <p className="text-xs text-stone-500">Select any module below to review its formal academic question and sub-objectives.</p>
              </div>

              {/* Module selector pills */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 rounded-lg">
                {MODULES_INFO.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedModule(mod.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                      selectedModule === mod.id
                        ? 'bg-stone-950 text-white shadow-xs font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {mod.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Module Detail Card */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div>
                  <h4 className="text-lg font-bold text-stone-900">{currentMod.name}</h4>
                  <div className="text-xs text-stone-500 font-mono mt-0.5">
                    Assigned Researcher: <strong className="text-stone-800">{currentMod.leadMember}</strong> ({currentMod.studentId})
                  </div>
                </div>
                <button
                  onClick={onOpenFlowchart}
                  className="px-4 py-2 text-xs font-bold bg-stone-950 text-white rounded-lg hover:bg-stone-800 transition-colors self-start sm:self-auto cursor-pointer shadow-xs"
                >
                  View Research Flowchart
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                    Module Research Question:
                  </div>
                  <div className="p-3.5 bg-stone-100 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-900 italic leading-relaxed">
                    "{currentMod.researchQuestion}"
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                    Formal Sub-Objective:
                  </div>
                  <div className="p-3.5 bg-stone-100 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {currentMod.researchObjective}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                  Novel Scientific Contributions & Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentMod.noveltyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-white border border-stone-200 rounded-lg text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-950 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: METHODOLOGY WORKFLOW */}
      {activeSubTab === 'methodology' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
              Six-Phase Research & Engineering Methodology
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              Following established human-centered computing protocols for vulnerable populations, the project follows an iterative 6-phase engineering lifecycle integrating ongoing domain specialist feedback, ethical safeguards, and clinical advisory review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Requirements Analysis & Domain Consultation',
                desc: 'Interviews with special education teachers, child psychologists, and speech therapists in Sri Lanka. Identification of sensory sensitivities (colors, noises) and core functional needs.'
              },
              {
                step: '02',
                title: 'Data Preparation & Localized Content Design',
                desc: 'Collection of anonymized baseline data, curation of bilingual Sinhala and English phonetic assets, 3D AR asset modeling, and cultural activity tailoring.'
              },
              {
                step: '03',
                title: 'Sub-Module Engineering & Integration',
                desc: 'Component development across React Native frontends, Node.js REST services, Firebase Firestore cloud state, and local SQLite offline persistence.'
              },
              {
                step: '04',
                title: 'Adaptive Difficulty & Positive Reinforcement',
                desc: 'Formulation of transparent, rule-based cost functions that increase/decrease lesson difficulty based on observable task completions without opaque AI confusion.'
              },
              {
                step: '05',
                title: 'Usability & Sensory Accessibility Testing',
                desc: 'Evaluation of child-facing interfaces (large touch targets, zero flashing, low text density) and parent dashboards using standardized SUS metrics.'
              },
              {
                step: '06',
                title: 'Statistical Evaluation & Outcome Dissemination',
                desc: 'Paired pre- and post-intervention statistical measurements, objective latency and error logging, dissertation compilation, and IEEE research paper publication.'
              }
            ].map((phase) => (
              <div key={phase.step} className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
                <div className="text-xs font-mono font-bold text-stone-900">
                  PHASE {phase.step}
                </div>
                <h4 className="text-sm font-semibold text-stone-900">{phase.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: SYSTEM ARCHITECTURE */}
      {activeSubTab === 'architecture' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
              Interactive System Architecture Diagram
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              The architecture establishes a unified child profile that bridges the four support modules. Select any node in the architectural schematic below to examine its exact technical responsibility, data flow, and safeguards:
            </p>

            {/* Interactive Architecture Schematic */}
            <div className="p-4 sm:p-6 bg-stone-950 text-white rounded-2xl border border-stone-800 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Layer 1: Client */}
                <button
                  onClick={() => setActiveArchNode('client')}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    activeArchNode === 'client' 
                      ? 'bg-stone-900 border-white ring-2 ring-white/20' 
                      : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2 text-stone-300 text-xs font-mono">
                    <Smartphone className="w-4 h-4 text-white" />
                    <span>Mobile Interface Layer</span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">Child & Caregiver App</div>
                  <div className="text-xs text-stone-400 mt-1">React Native + Expo · Sensory Calm UI · AR View</div>
                </button>

                {/* Layer 2: AI & Logic */}
                <button
                  onClick={() => setActiveArchNode('ai_engine')}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    activeArchNode === 'ai_engine' 
                      ? 'bg-stone-900 border-white ring-2 ring-white/20' 
                      : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2 text-stone-300 text-xs font-mono">
                    <Cpu className="w-4 h-4 text-white" />
                    <span>AI & Personalization Engine</span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">Adaptive Learning Logic</div>
                  <div className="text-xs text-stone-400 mt-1">Rule-based Difficulty · Telemetry · Rewards</div>
                </button>

                {/* Layer 3: Backend & Data */}
                <button
                  onClick={() => setActiveArchNode('backend')}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    activeArchNode === 'backend' 
                      ? 'bg-stone-900 border-white ring-2 ring-white/20' 
                      : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2 text-stone-300 text-xs font-mono">
                    <Database className="w-4 h-4 text-white" />
                    <span>Data & Cloud Layer</span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">Firebase + SQLite Offline</div>
                  <div className="text-xs text-stone-400 mt-1">Firestore · Local Cache · Cloud Functions</div>
                </button>
              </div>

              {/* Node Detailed Information Box */}
              <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2 text-xs sm:text-sm">
                <div className="font-semibold text-white flex items-center gap-2 font-mono">
                  <span>Selected Architectural Block:</span>
                  <span className="text-white bg-stone-800 px-2 py-0.5 rounded capitalize font-bold">{activeArchNode.replace('_', ' ')}</span>
                </div>
                {activeArchNode === 'client' && (
                  <p className="text-stone-300 leading-relaxed">
                    <strong>Client-Side Engine:</strong> Renders sensory-friendly mobile screens built with React Native and Expo. Employs large touch targets (≥ 44px), muted pastel palettes, and non-overstimulating animations. Communicates with local SQLite database for zero-latency offline operation, and dispatches encrypted payload batches to Firebase when network becomes available.
                  </p>
                )}
                {activeArchNode === 'ai_engine' && (
                  <p className="text-stone-300 leading-relaxed">
                    <strong>Adaptive Personalization Service:</strong> Analyzes recent observable interactions (accuracy, completion latency, consecutive trial success, and caregiver preference weights). Adjusts lesson complexity dynamically without sudden jumps. Monitors optional wearable arousal markers conservatively to trigger calming recommendations without making medical diagnoses.
                  </p>
                )}
                {activeArchNode === 'backend' && (
                  <p className="text-stone-300 leading-relaxed">
                    <strong>Cloud and Local Storage Architecture:</strong> Centralized Firebase Firestore document store maintaining child profiles, routine schedules, and encrypted progress records. Firebase Authentication enforces strict role separation between child gameplay mode and caregiver administrative controls. SQLite ensures full functionality in rural areas lacking cellular connectivity.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 6: TECHNOLOGIES USED */}
      {activeSubTab === 'technologies' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
              Tools & Technologies Rationale
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              Technology selection was strictly governed by accessibility on entry-level Android smartphones prevalent across rural and urban Sri Lankan households, offline reliability, and data privacy safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECHNOLOGIES_STACK.map((group, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-xs">
                <h3 className="text-base font-semibold text-stone-900 border-b border-stone-100 pb-2">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <div key={i} className="text-xs space-y-1">
                      <div className="font-semibold text-stone-800">{item.name}</div>
                      <div className="text-stone-600 leading-relaxed">{item.purpose}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 7: COMMERCIALIZATION & ETHICS */}
      {activeSubTab === 'commercialization' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Commercialization Potential */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-xs">
              <div className="text-xs font-mono uppercase text-stone-900 font-bold">Market Analysis</div>
              <h3 className="text-lg font-serif font-medium text-stone-900">
                Commercialization & Deployment Model
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The global autism intervention software market is projected to reach USD 5.9 billion by 2030. In Sri Lanka, with rising diagnosis awareness and acute specialist shortages, a massive demand exists for culturally localized digital support tools.
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-800">Freemium Delivery Model:</strong>
                  <p className="text-stone-600">Basic lessons, routines, and games provided 100% free for all families. Premium subscription (Rs. 500–1,000/month) unlocks advanced long-term analytics and customized social stories.</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-800">B2B & School Partnerships:</strong>
                  <p className="text-stone-600">Institutional licensing for special education units, clinical therapy centers, and non-governmental organizations.</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-800">Total Student Research Budget:</strong>
                  <p className="text-stone-600">Rs. 37,500 allocated per module proposal → Rs. 150,000 total research budget across all 4 researchers.</p>
                </div>
              </div>
            </div>

            {/* Ethics & Legal Safeguards */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-xs">
              <div className="text-xs font-mono uppercase text-stone-900 font-bold">Regulatory Compliance</div>
              <h3 className="text-lg font-serif font-medium text-stone-900">
                Ethical Safeguards & Data Protection
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Working with vulnerable pediatric populations necessitates rigorous ethical and legal alignment with local and international standards:
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200 space-y-1">
                  <strong className="text-emerald-950">Sri Lanka Personal Data Protection Act No. 9 of 2022:</strong>
                  <p className="text-emerald-900">All data collection complies with statutory provisions enforced by the Data Protection Authority from March 2025. Data is strictly pseudonymized and encrypted on device.</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-800">Informed Parental Consent:</strong>
                  <p className="text-stone-600">Caregivers retain full sovereignty; trial sessions may be terminated instantly at any point without penalty or coercion.</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-800">Non-Diagnostic Assistive Scope:</strong>
                  <p className="text-stone-600">The software strictly provides assistive guidance; it never issues medical or psychological diagnoses, eliminating risk of clinical misclassification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
