import React, { useState, useEffect } from 'react';
import { 
  X, 
  GitBranch, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause, 
  ExternalLink, 
  Calendar, 
  FileText,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResearchFlowchartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SimplifiedStage {
  step: number;
  stageCode: string;
  shortTitle: string;
  fullTitle: string;
  timeframe: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  description: string;
  keyDeliverable: string;
  deliverableLink?: string;
  deliverableType: 'PDF' | 'DOCX' | 'PPTX' | 'WEB';
  fourModuleStatus: string;
}

export const ResearchFlowchartModal: React.FC<ResearchFlowchartModalProps> = ({ isOpen, onClose }) => {
  // Default to current active milestone Stage 4
  const [activeStep, setActiveStep] = useState<number>(4);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const STAGES: SimplifiedStage[] = [
    {
      step: 1,
      stageCode: 'STAGE 1',
      shortTitle: 'Proposal Defense',
      fullTitle: 'Inception & Proposal Defense',
      timeframe: 'March 2026',
      status: 'completed',
      description: 'Defined ASD 1:93 prevalence in Sri Lanka, identified the 6 literature gaps, and defended project charter with 4-module research scope.',
      keyDeliverable: 'Project Charter & 4 Component Proposals (R26-IT-037)',
      deliverableLink: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQDUCqyCbhovQ7ySRfIEyxHcAZ8eBrtF-mO9Hk_IYuWiP3I?e=6yxbjL',
      deliverableType: 'PDF',
      fourModuleStatus: 'Charter approved: Adaptive learning, cognitive games, routine, & behavior models.'
    },
    {
      step: 2,
      stageCode: 'STAGE 2',
      shortTitle: '50% Prototype',
      fullTitle: 'Progress Presentation 1 & 50% Prototype',
      timeframe: 'May 2026',
      status: 'completed',
      description: 'Implemented sensory-safe UI guidelines (calm colors, large touch targets, no flashing) and SQLite/Firebase offline database schemas.',
      keyDeliverable: 'Progress 1 Presentation & Initial Prototype Review',
      deliverableLink: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22224484_my_sliit_lk/IQCpMKeMGH6LS73uvI1qByKZAd-p3MboOU5jtn2ITqitbtc?e=I1Nlzy',
      deliverableType: 'PPTX',
      fourModuleStatus: 'Initial core screens and Sinhala voice audio integration verified.'
    },
    {
      step: 3,
      stageCode: 'STAGE 3',
      shortTitle: '90% Full Demo',
      fullTitle: 'Progress Presentation 2 (90% Integration)',
      timeframe: 'September 2026',
      status: 'completed',
      description: 'Fully integrated all 4 sub-modules with real-time adaptive difficulty, 3D AR counting assets, transition countdowns, and cognitive telemetry.',
      keyDeliverable: 'Progress 2 Presentation (Featured 90% Review)',
      deliverableLink: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22224484_my_sliit_lk/IQCpMKeMGH6LS73uvI1qByKZAd-p3MboOU5jtn2ITqitbtc?e=iHmaVU',
      deliverableType: 'PPTX',
      fourModuleStatus: 'Cross-module telemetry tested live with university evaluation panel.'
    },
    {
      step: 4,
      stageCode: 'STAGE 4',
      shortTitle: 'Draft Thesis & Web',
      fullTitle: 'Final Draft Thesis & Academic Web Portal (CURRENT)',
      timeframe: 'October 2026 (Active)',
      status: 'in_progress',
      description: 'Synthesized all empirical findings, architecture blueprints, and validation metrics into master thesis and deployed this public documentation web portal.',
      keyDeliverable: 'Master Draft Thesis Document & Research Portal',
      deliverableLink: 'https://mysliit-my.sharepoint.com/:w:/g/personal/it22224484_my_sliit_lk/IQDSbkQycUMDSaELT_53GEzLARXlzjwgB5Mzp1v9s6vVLmQ?e=fvk4j3',
      deliverableType: 'DOCX',
      fourModuleStatus: 'Complete thesis volumes compiled for all 4 research streams.'
    },
    {
      step: 5,
      stageCode: 'STAGE 5',
      shortTitle: 'Final Oral Viva',
      fullTitle: 'Final Presentation & Viva Voce Defense',
      timeframe: 'Late October 2026',
      status: 'upcoming',
      description: 'Comprehensive viva defense before external and internal panels, featuring live software stress-testing on low-end Android mobile devices.',
      keyDeliverable: 'Final Defense Slide Deck & Production App Demo',
      deliverableType: 'PPTX',
      fourModuleStatus: 'Live demonstration of personalized learning, games, routines, and behavior.'
    },
    {
      step: 6,
      stageCode: 'STAGE 6',
      shortTitle: 'IEEE Publication',
      fullTitle: 'Camera-Ready IEEE Paper & Archival Deposit',
      timeframe: 'November 2026',
      status: 'upcoming',
      description: 'Submitting camera-ready 6-page research paper for IEEE publication indexing and institutional hardbound archiving at SLIIT library.',
      keyDeliverable: 'IEEE Conference Research Paper Manuscript',
      deliverableLink: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQAG-F69EUv9QJ7Ohu61l8f7Acd68aYNsuDcfJU5of_oPEs?e=DP66Qd',
      deliverableType: 'PDF',
      fourModuleStatus: 'Research data and artifacts deposited into university institutional repository.'
    }
  ];

  const currentStage = STAGES.find(s => s.step === activeStep) || STAGES[0];

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep(prev => (prev >= STAGES.length ? 1 : prev + 1));
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, STAGES.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop with motion fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card with spring-like scale & slide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-white w-full max-w-4xl max-h-[94vh] rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-stone-800"
          >
            
            {/* Header */}
            <div className="p-4 sm:p-5 bg-stone-950 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white text-stone-950 flex items-center justify-center font-bold shrink-0"
                >
                  <GitBranch className="w-4 h-4 text-stone-950" />
                </motion.div>
                <div className="min-w-0">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight truncate flex items-center gap-2">
                    <span>Research Flowchart & Timeline</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-normal bg-white/10 px-2 py-0.5 rounded-full text-stone-300">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Interactive</span>
                    </span>
                  </h2>
                  <p className="text-[10px] sm:text-xs text-stone-400 font-mono truncate">
                    Project R26-IT-037 · Step-by-Step Research Milestones
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.18 }}
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
                aria-label="Close Flowchart"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Linear Step Bar / Timeline Track (Creative, Simple & Animated) */}
            <div className="bg-stone-100 border-b border-stone-200 px-3 sm:px-6 py-3 shrink-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                      isPlaying 
                        ? 'bg-amber-100 text-amber-950 border border-amber-300 shadow-xs' 
                        : 'bg-white text-stone-900 border border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-3 h-3 text-amber-900" /> : <Play className="w-3 h-3 text-stone-900" />}
                    <span>{isPlaying ? 'Pause Tour' : 'Play Tour'}</span>
                  </motion.button>
                  <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
                    Click any stage below to inspect
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900">
                  <div className="w-16 bg-stone-200 rounded-full h-1.5 overflow-hidden hidden xs:block">
                    <motion.div 
                      className="bg-stone-950 h-full rounded-full"
                      animate={{ width: `${Math.round((activeStep / STAGES.length) * 100)}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span>Stage {activeStep} of {STAGES.length}</span>
                </div>
              </div>

              {/* Stepper Node Strip - Horizontal Scroll on Small Mobile */}
              <div className="overflow-x-auto scrollbar-none py-1">
                <div className="flex items-center min-w-max sm:min-w-0 sm:grid sm:grid-cols-6 gap-2">
                  {STAGES.map((s) => {
                    const isActive = s.step === activeStep;
                    const isCompleted = s.status === 'completed';
                    const isCurrent = s.status === 'in_progress';

                    return (
                      <motion.button
                        key={s.step}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setActiveStep(s.step);
                          setIsPlaying(false);
                        }}
                        className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                          isActive 
                            ? 'bg-stone-950 text-white border-stone-950 shadow-md ring-2 ring-stone-900/20' 
                            : isCompleted
                              ? 'bg-white text-stone-900 border-stone-300 hover:border-stone-400'
                              : isCurrent
                                ? 'bg-amber-50 text-amber-950 border-amber-300 hover:bg-amber-100'
                                : 'bg-white/60 text-stone-500 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <motion.div 
                          animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                          transition={{ duration: 0.35 }}
                          className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${
                            isActive 
                              ? 'bg-white text-stone-950 shadow-xs' 
                              : isCompleted
                                ? 'bg-stone-900 text-white'
                                : isCurrent
                                  ? 'bg-amber-500 text-white animate-pulse'
                                  : 'bg-stone-200 text-stone-600'
                          }`}
                        >
                          {s.step}
                        </motion.div>

                        <div className="min-w-0 pr-1">
                          <div className={`text-[11px] font-bold truncate ${isActive ? 'text-white' : 'text-stone-900'}`}>
                            {s.shortTitle}
                          </div>
                          <div className={`text-[10px] font-mono truncate ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                            {s.timeframe.split(' ')[0]}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Stage Details (Smooth Animated Stage Transitions) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-50 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"
                >
                  
                  {/* Stage Title & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold bg-stone-950 text-white px-2.5 py-0.5 rounded shadow-2xs">
                          {currentStage.stageCode}
                        </span>
                        <span className="text-xs font-mono text-stone-600 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-stone-400" />
                          <span>{currentStage.timeframe}</span>
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-950">
                        {currentStage.fullTitle}
                      </h3>
                    </div>

                    <div>
                      {currentStage.status === 'completed' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Completed Milestone</span>
                        </span>
                      )}
                      {currentStage.status === 'in_progress' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 animate-pulse">
                          <Clock className="w-3.5 h-3.5 text-amber-700" />
                          <span>Current Active Stage</span>
                        </span>
                      )}
                      {currentStage.status === 'upcoming' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                          <span>Upcoming Final Stage</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Narrative */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase text-stone-500 font-bold">Research Milestone Focus:</div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {currentStage.description}
                    </p>
                  </div>

                  {/* Key Deliverable Box */}
                  <motion.div 
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2 hover:border-stone-400 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono uppercase font-bold text-stone-900 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Key Academic Deliverable</span>
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-900">
                        {currentStage.deliverableType}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-stone-950">
                      {currentStage.keyDeliverable}
                    </div>

                    {currentStage.deliverableLink ? (
                      <div className="pt-1">
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={currentStage.deliverableLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-stone-950 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                        >
                          <span>View SharePoint Document</span>
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      </div>
                    ) : (
                      <div className="text-xs text-stone-500 italic">
                        Document submitted directly to university viva evaluation panel.
                      </div>
                    )}
                  </motion.div>

                  {/* 4-Module Scope Summary */}
                  <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-1.5">
                    <div className="text-xs font-mono uppercase font-bold text-stone-900">
                      4-Module Integration Status:
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {currentStage.fourModuleStatus}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Navigation Bar */}
            <div className="p-3 sm:p-4 bg-white border-t border-stone-200 flex items-center justify-between gap-2 shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStep(prev => (prev > 1 ? prev - 1 : STAGES.length));
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </motion.button>

              <div className="font-mono text-xs text-stone-600">
                <span className="font-bold text-stone-950">Stage {activeStep}</span> of {STAGES.length}
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep(prev => (prev < STAGES.length ? prev + 1 : 1));
                  }}
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold bg-stone-950 text-white hover:bg-stone-800 rounded-lg cursor-pointer transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-950 border border-stone-200 rounded-lg cursor-pointer hidden sm:inline-block transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
