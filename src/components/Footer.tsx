import React from 'react';
import { NavigationTab } from '../types';
import { ArrowUp, Building2, ShieldCheck, Brain } from 'lucide-react';
import { PROJECT_METADATA } from '../data/researchData';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-white border-t border-stone-800 text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Identity & Motto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-stone-950 flex items-center justify-center font-bold">
                <Brain className="w-4 h-4 text-stone-950" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                ASD Support System
              </span>
              <span className="text-[10px] font-mono text-stone-400 bg-stone-900 border border-stone-700 px-1.5 py-0.5 rounded">
                R26-IT-037
              </span>
            </div>
            <p className="text-stone-300 text-sm italic">
              "Technology for inclusive, culturally accessible care and independent daily living."
            </p>
            <p className="text-stone-400 leading-relaxed text-xs">
              An undergraduate research study investigating an integrated AI-powered mobile support system for children with Autism Spectrum Disorder (ASD) in Sri Lanka.
            </p>
            <div className="text-stone-400 text-xs font-mono">
              Faculty of Computing · Department of Information Technology · SLIIT
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-white font-bold font-mono uppercase tracking-wider text-[11px]">
              Research Directory
            </div>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Overview & Abstract
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('domain')} className="hover:text-white transition-colors cursor-pointer">
                  Domain & Literature Gaps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('milestones')} className="hover:text-white transition-colors cursor-pointer">
                  Milestones Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('documents')} className="hover:text-white transition-colors cursor-pointer">
                  Documents & Thesis Archive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('presentations')} className="hover:text-white transition-colors cursor-pointer">
                  Presentation Slide Decks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  Research Investigators
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Communication
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Regulatory Note */}
          <div className="md:col-span-4 space-y-3 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
            <div className="flex items-center gap-2 text-stone-200 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ethical & Academic Integrity</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Developed strictly for academic purposes in compliance with the Sri Lanka Personal Data Protection Act No. 9 of 2022. All user evaluations are conducted with informed caregiver consent and non-diagnostic research scope.
            </p>
            <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 font-mono">
              SLIIT CDAP 2026 Batch · Research Group TIM
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400">
          <p className="text-xs uppercase tracking-widest text-center sm:text-left">
            &copy; 2026 Support System for Children with ASD in Sri Lanka · Group R26-IT-037
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
