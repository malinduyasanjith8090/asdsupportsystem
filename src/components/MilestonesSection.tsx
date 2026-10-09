import React, { useState } from 'react';
import { MILESTONES } from '../data/researchData';
import { MilestoneItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Award, 
  ChevronDown, 
  FileCheck, 
  Filter, 
  Sparkles,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('m5'); // Default to Progress Presentation 2 which was highlighted by user
  const [filterCategory, setFilterCategory] = useState<'all' | 'completed' | 'in_progress' | 'upcoming'>('all');

  const selectedMilestone = MILESTONES.find(m => m.id === selectedMilestoneId) || MILESTONES[0];

  const filteredMilestones = MILESTONES.filter(m => {
    if (filterCategory === 'all') return true;
    return m.status === filterCategory;
  });

  const getStatusBadge = (status: MilestoneItem['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Completed</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            <span>Active / In Review</span>
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200">
            <span>Upcoming Stage</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-stone-500 font-bold">
          Academic Progress Tracking
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
          Project Milestones & Assessment Timeline
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          Comprehensive milestone schedule for the <strong>2026 Regular Batch</strong> CDAP Research Project. Includes assessment deadlines, required deliverables, and evaluation outcomes.
        </p>
      </div>

      {/* Required Dropdown Selector (Specified in website.pdf Page 11) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <label htmlFor="milestone-select" className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-1">
              Select Assessment Item (Quick Drop-down Chooser)
            </label>
            <div className="text-xs text-stone-500">
              Pick any assessment below to inspect its detailed evaluation criteria, deadline, and deliverables:
            </div>
          </div>

          <div className="relative w-full sm:w-96">
            <select
              id="milestone-select"
              value={selectedMilestoneId}
              onChange={(e) => setSelectedMilestoneId(e.target.value)}
              className="w-full appearance-none bg-stone-50 border border-stone-300 hover:border-stone-900 focus:border-stone-950 rounded-xl px-4 py-2.5 text-sm font-medium text-stone-900 pr-10 focus:outline-none focus:ring-2 focus:ring-stone-200 cursor-pointer shadow-xs transition-colors"
            >
              {MILESTONES.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title} ({m.dateDisplay})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-stone-500 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Selected Milestone Feature Spotlight Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-4 p-6 rounded-2xl border transition-all ${
              selectedMilestone.isHighlighted 
                ? 'bg-stone-950 text-white border-stone-800 shadow-md' 
                : 'bg-stone-50 border-stone-200 text-stone-900'
            }`}
          >
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 ${
              selectedMilestone.isHighlighted ? 'border-white/10' : 'border-stone-200'
            }`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                    selectedMilestone.isHighlighted ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    Inspection View
                  </span>
                  {selectedMilestone.isHighlighted && (
                    <span className="text-[11px] bg-white text-stone-950 font-bold px-2 py-0.5 rounded">
                      Highlighted Assessment
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  {selectedMilestone.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                {getStatusBadge(selectedMilestone.status)}
                <span className={`text-xs font-mono px-2.5 py-1 rounded capitalize font-medium ${
                  selectedMilestone.isHighlighted 
                    ? 'bg-stone-800 text-stone-200 border border-stone-700' 
                    : 'bg-stone-200/80 text-stone-800'
                }`}>
                  {selectedMilestone.category} Deliverable
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 text-xs sm:text-sm">
              <div className="md:col-span-8 space-y-3">
                <div>
                  <strong className={`block mb-1 ${selectedMilestone.isHighlighted ? 'text-stone-200' : 'text-stone-800'}`}>
                    Assessment Scope & Description:
                  </strong>
                  <p className={`leading-relaxed ${selectedMilestone.isHighlighted ? 'text-stone-300' : 'text-stone-600'}`}>
                    {selectedMilestone.description}
                  </p>
                </div>

                <div>
                  <strong className={`block mb-1 ${selectedMilestone.isHighlighted ? 'text-stone-200' : 'text-stone-800'}`}>
                    Submitted / Target Deliverables:
                  </strong>
                  <ul className={`space-y-1 list-disc list-inside ${selectedMilestone.isHighlighted ? 'text-stone-300' : 'text-stone-600'}`}>
                    {selectedMilestone.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`md:col-span-4 p-4 rounded-xl border space-y-3 ${
                selectedMilestone.isHighlighted 
                  ? 'bg-stone-900 border-stone-800' 
                  : 'bg-white border-stone-200'
              }`}>
                <div>
                  <div className={`text-xs font-mono ${selectedMilestone.isHighlighted ? 'text-stone-400' : 'text-stone-400'}`}>
                    Formal Deadline
                  </div>
                  <div className="text-sm font-bold flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-4 h-4 text-stone-400" />
                    <span>{selectedMilestone.dateDisplay}</span>
                  </div>
                </div>

                {selectedMilestone.feedbackNotes && (
                  <div className={`pt-2 border-t ${selectedMilestone.isHighlighted ? 'border-stone-800' : 'border-stone-100'}`}>
                    <div className="text-xs font-mono text-stone-400">Evaluation Notes</div>
                    <div className={`text-xs mt-1 leading-relaxed p-2.5 rounded ${
                      selectedMilestone.isHighlighted ? 'bg-stone-800 text-stone-200' : 'bg-stone-50 text-stone-700'
                    }`}>
                      {selectedMilestone.feedbackNotes}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Milestones Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
            2026 Full Project Lifecycle Timeline
          </h2>
          <p className="text-xs text-stone-500">13 Structured assessments and submissions</p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start sm:self-auto border border-stone-200">
          {(['all', 'completed', 'in_progress', 'upcoming'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setFilterCategory(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors capitalize cursor-pointer ${
                filterCategory === filter 
                  ? 'bg-white text-stone-900 shadow-xs font-semibold' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {filter === 'in_progress' ? 'Active' : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Milestones Card Grid / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMilestones.map((milestone, idx) => {
          const isSelected = milestone.id === selectedMilestoneId;
          return (
            <div
              key={milestone.id}
              onClick={() => setSelectedMilestoneId(milestone.id)}
              className={`bg-white rounded-2xl border p-5 flex flex-col justify-between transition-all cursor-pointer ${
                isSelected 
                  ? 'border-stone-950 ring-2 ring-stone-950/15 shadow-md' 
                  : milestone.isHighlighted
                    ? 'border-stone-400 bg-stone-50/60 hover:border-stone-900 shadow-xs'
                    : 'border-stone-200 hover:border-stone-400 hover:shadow-xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-medium text-stone-400">
                    Step {idx + 1}
                  </span>
                  {getStatusBadge(milestone.status)}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-stone-900 line-clamp-1">
                    {milestone.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{milestone.dateDisplay}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {milestone.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500 capitalize">
                  {milestone.category} Deliverable
                </span>
                <span className="text-xs font-bold text-stone-900 group-hover:underline flex items-center gap-1">
                  <span>Inspect</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
