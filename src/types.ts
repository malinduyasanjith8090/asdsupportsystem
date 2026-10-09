export type NavigationTab = 
  | 'home' 
  | 'domain' 
  | 'milestones' 
  | 'documents' 
  | 'presentations' 
  | 'about' 
  | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  studentId: string;
  email: string;
  role: string;
  moduleName: string;
  avatarColor: string;
  initials: string;
  degree: string;
  tasks: string[];
  novelty: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

export interface Supervisor {
  name: string;
  role: string;
  department: string;
  faculty: string;
  institution: string;
  email: string;
  profileUrl?: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  deadline: string;
  dateDisplay: string;
  allocatedMarks?: string;
  percentage?: number;
  status: 'completed' | 'in_progress' | 'upcoming';
  category: 'presentation' | 'document' | 'checklist' | 'evaluation' | 'publication';
  description: string;
  deliverables: string[];
  feedbackNotes?: string;
  isHighlighted?: boolean;
}

export interface ProjectDocument {
  id: string;
  title: string;
  category: 'charter' | 'proposal' | 'thesis' | 'paper' | 'form' | 'checklist';
  author: string;
  studentId?: string;
  date: string;
  pages?: string;
  fileType: 'PDF' | 'DOCX' | 'SHAREPOINT';
  sharepointUrl: string;
  description: string;
  highlights: string[];
}

export interface PresentationDeck {
  id: string;
  title: string;
  date: string;
  sharepointUrl: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  allocatedMarks?: string;
  slideCount?: number;
  summary: string;
  agendaItems: string[];
  keyTopics: string[];
}

export interface LiteraturePaper {
  id: string;
  citation: string;
  authors: string;
  year: number;
  title: string;
  source: string;
  focusArea: string;
  keyFindings: string;
  limitationIdentified: string;
  url?: string;
}

export interface SystemModuleInfo {
  id: string;
  name: string;
  leadMember: string;
  studentId: string;
  themeColor: string;
  description: string;
  researchProblem: string;
  researchQuestion: string;
  researchObjective: string;
  noveltyFeatures: string[];
  technologies: string[];
  completedFeatures: string[];
  nextSteps: string[];
}
