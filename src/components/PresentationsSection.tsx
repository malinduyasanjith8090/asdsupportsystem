import React, { useState } from 'react';
import { PRESENTATIONS } from '../data/researchData';
import { PresentationDeck } from '../types';
import { 
  Tv, 
  ExternalLink, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Eye, 
  X,
  Award
} from 'lucide-react';

export const PresentationsSection: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState<PresentationDeck | null>(null);

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold">
          Academic Oral Defenses & Slide Decks
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
          Slides of Past & Upcoming Presentations
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          Access all slide presentations delivered before the academic evaluation panel at the Sri Lanka Institute of Information Technology, detailing the evolution of research project <strong>R26-IT-037</strong>.
        </p>
      </div>

      {/* Featured Banner: Progress Presentation 2 (The highlighted 90% milestone from user) */}
      <div className="bg-stone-950 text-white rounded-2xl p-5 sm:p-8 border border-stone-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-white text-stone-950 font-bold">
            Featured Defense Deck · 90% System Milestone
          </span>
          <span className="text-xs text-stone-400 font-mono">
            Presented 31st August – 02nd September 2026
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Progress Presentation 2: Full System Prototype & Experimental Outcomes
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed max-w-3xl">
            Demonstrated near-final integration across all four research sub-modules, featuring the live real-time adaptive difficulty algorithms, AR 3D counting object displays, routine transition countdown alerts, and parent dashboard telemetry.
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={PRESENTATIONS[2].sharepointUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-stone-950 bg-white hover:bg-stone-100 rounded-lg transition-colors shadow-xs"
          >
            <span>Open Slides in SharePoint (PPTX)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setSelectedDeck(PRESENTATIONS[2])}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-850 border border-stone-800 rounded-lg transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Agenda Breakdown</span>
          </button>
        </div>
      </div>

      {/* Presentation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRESENTATIONS.map((deck) => {
          const isPending = deck.status === 'in_progress';
          return (
            <div
              key={deck.id}
              className={`bg-white border rounded-xl p-6 flex flex-col justify-between transition-all ${
                isPending 
                  ? 'border-amber-200 bg-amber-50/20' 
                  : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{deck.date}</span>
                  </div>
                  {deck.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Clock className="w-3 h-3 text-amber-600" />
                      <span>In Preparation</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    {deck.title}
                  </h3>
                  <div className="text-xs text-indigo-700 font-mono font-medium mt-1">
                    CDAP Academic Defense Stage
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {deck.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="text-xs font-semibold text-stone-700">Agenda & Core Themes:</div>
                  <ul className="text-xs text-stone-500 space-y-1 list-disc list-inside">
                    {deck.agendaItems.slice(0, 3).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedDeck(deck)}
                  className="text-xs font-medium text-stone-700 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Deck Details</span>
                </button>

                {!isPending ? (
                  <a
                    href={deck.sharepointUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-indigo-600 rounded-lg transition-colors shadow-xs"
                  >
                    <span>Open PPTX</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs text-amber-700 font-medium bg-amber-100/60 px-2.5 py-1 rounded">
                    Release Pending Defense
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Modal Breakdown */}
      {selectedDeck && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 animate-scaleUp">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">
                  Presentation Slide Summary
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  {selectedDeck.title}
                </h3>
                <div className="text-xs text-stone-500 font-mono">
                  Presented: {selectedDeck.date}
                </div>
              </div>
              <button
                onClick={() => setSelectedDeck(null)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-semibold text-stone-800 mb-1">Defense Overview:</h4>
                <p className="text-stone-600 leading-relaxed">{selectedDeck.summary}</p>
              </div>

              <div>
                <h4 className="font-semibold text-stone-800 mb-2">Comprehensive Agenda & Deck Content:</h4>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {selectedDeck.agendaItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-stone-500">
                SLIIT Faculty of Computing Research Repository
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedDeck(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Close
                </button>
                {selectedDeck.status !== 'in_progress' && (
                  <a
                    href={selectedDeck.sharepointUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-xs"
                  >
                    <span>View in SharePoint</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
