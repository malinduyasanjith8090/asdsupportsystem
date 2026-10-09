import React, { useState, useEffect } from 'react';
import { NavigationTab } from './types';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { DomainSection } from './components/DomainSection';
import { MilestonesSection } from './components/MilestonesSection';
import { DocumentsSection } from './components/DocumentsSection';
import { PresentationsSection } from './components/PresentationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResearchFlowchartModal } from './components/ResearchFlowchartModal';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Layers, Calendar, FileText, GitBranch } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('learning');
  const [isFlowchartModalOpen, setIsFlowchartModalOpen] = useState<boolean>(false);

  // Sync hash in URL with active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationTab;
      if (['home', 'domain', 'milestones', 'documents', 'presentations', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModuleAndNavigate = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setActiveTab('domain');
    window.location.hash = 'domain';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-stone-900 selection:text-white pb-16 md:pb-0">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenFlowchart={() => setIsFlowchartModalOpen(true)}
      />

      {/* Main Content Area with Smooth Animation */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.995 }}
            transition={{ 
              duration: 0.28, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            {activeTab === 'home' && (
              <HomeSection
                onNavigate={handleTabChange}
                onOpenFlowchart={() => setIsFlowchartModalOpen(true)}
                onSelectModule={handleSelectModuleAndNavigate}
              />
            )}

            {activeTab === 'domain' && (
              <DomainSection
                initialModuleId={selectedModuleId}
                onOpenFlowchart={() => setIsFlowchartModalOpen(true)}
              />
            )}

            {activeTab === 'milestones' && (
              <MilestonesSection />
            )}

            {activeTab === 'documents' && (
              <DocumentsSection />
            )}

            {activeTab === 'presentations' && (
              <PresentationsSection />
            )}

            {activeTab === 'about' && (
              <AboutSection />
            )}

            {activeTab === 'contact' && (
              <ContactSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Creative Research Flowchart & Progress Modal */}
      <ResearchFlowchartModal
        isOpen={isFlowchartModalOpen}
        onClose={() => setIsFlowchartModalOpen(false)}
      />

      {/* Mobile Bottom Navigation Dock - Guarantees instant navigation is always accessible on mobile */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-1.5 shadow-lg flex items-center justify-around"
        aria-label="Mobile Navigation Dock"
      >
        <button
          onClick={() => handleTabChange('home')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-stone-950 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => handleTabChange('domain')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] transition-colors cursor-pointer ${
            activeTab === 'domain' ? 'text-stone-950 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span>Domain</span>
        </button>

        <button
          onClick={() => handleTabChange('milestones')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] transition-colors cursor-pointer ${
            activeTab === 'milestones' ? 'text-stone-950 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Timeline</span>
        </button>

        <button
          onClick={() => handleTabChange('documents')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] transition-colors cursor-pointer ${
            activeTab === 'documents' ? 'text-stone-950 font-bold' : 'text-stone-500 hover:text-stone-900'
          }`}
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>Docs</span>
        </button>

        <button
          onClick={() => setIsFlowchartModalOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-bold text-white bg-stone-950 hover:bg-stone-850 transition-colors shadow-xs cursor-pointer"
        >
          <GitBranch className="w-4 h-4 mb-0.5 text-white" />
          <span>Flowchart</span>
        </button>
      </nav>
    </div>
  );
}
