import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { Menu, X, GitBranch, Brain, Home, Layers, Calendar, FileText, Tv, Users, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  onOpenFlowchart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenFlowchart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'domain', label: 'Domain', icon: <Layers className="w-4 h-4" /> },
    { id: 'milestones', label: 'Milestones', icon: <Calendar className="w-4 h-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
    { id: 'presentations', label: 'Presentations', icon: <Tv className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Users className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40 shadow-xs transition-all w-full">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Lockup - Responsive & Never overflows mobile */}
        <div className="min-w-0 flex-1 sm:flex-initial">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group cursor-pointer focus:outline-none max-w-full"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-stone-950 text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-stone-800 transition-colors shrink-0">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-sm sm:text-base lg:text-lg text-stone-950 tracking-tight truncate">
                  ASD Support System
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-semibold text-stone-700 bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded shrink-0">
                  R26-IT-037
                </span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-stone-500 uppercase tracking-wider truncate hidden xs:block">
                SLIIT Faculty of Computing
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-5 lg:space-x-7 font-medium text-sm">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 transition-colors cursor-pointer whitespace-nowrap text-sm ${
                    isActive 
                      ? 'text-stone-950 font-bold' 
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {item.label}
                </button>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenFlowchart}
            className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 active:bg-black text-white text-xs font-bold px-4 py-2 rounded-full transition shadow-xs cursor-pointer"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Research Flowchart</span>
          </motion.button>
        </div>

        {/* Mobile menu action controls - ALWAYS VISIBLE and NEVER CLIPPED */}
        <div className="flex md:hidden items-center gap-1.5 shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenFlowchart}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-stone-950 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-colors"
            title="Research Flowchart"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">Flowchart</span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg focus:outline-none cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-1.5 shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-stone-100">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
                Project Navigation
              </span>
              <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                Group R26-IT-037
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-xl text-sm transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-stone-950 text-white font-bold'
                        : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-stone-400'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-stone-100">
              <button
                onClick={() => {
                  onOpenFlowchart();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs py-3 rounded-xl transition shadow-xs cursor-pointer"
              >
                <GitBranch className="w-4 h-4" />
                <span>Open Research Timeline & Flowchart</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

