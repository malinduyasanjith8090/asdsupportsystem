import React, { useState } from 'react';
import { PROJECT_DOCUMENTS } from '../data/researchData';
import { ProjectDocument } from '../types';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  Filter, 
  Copy, 
  Check, 
  FileCheck2, 
  FileCode2, 
  BookOpen, 
  Eye, 
  X,
  FileSpreadsheet
} from 'lucide-react';

export const DocumentsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewDoc, setPreviewDoc] = useState<ProjectDocument | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'charter', label: 'Project Charter' },
    { id: 'proposal', label: 'Proposal Reports' },
    { id: 'thesis', label: 'Draft Theses' },
    { id: 'paper', label: 'IEEE Research Paper' }
  ];

  const filteredDocs = PROJECT_DOCUMENTS.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.studentId && doc.studentId.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyLink = (doc: ProjectDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(doc.sharepointUrl);
    setCopiedId(doc.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold">
          Official Academic Deliverables
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
          Research Documents & Download Repository
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          Access all published academic materials produced throughout the research lifecycle—from early project charters, topic assessment forms, and individual proposals to the draft thesis volumes and IEEE research paper.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by title, author name, student ID, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-900 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  doc.fileType === 'PDF' 
                    ? 'bg-red-50 text-red-700 border border-red-200' 
                    : doc.fileType === 'DOCX'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                }`}>
                  {doc.fileType}
                </span>

                <span className="text-xs font-mono text-stone-500">
                  {doc.date}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-stone-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {doc.title}
                </h3>
                <div className="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
                  <span className="font-medium text-stone-700">{doc.author}</span>
                  {doc.studentId && (
                    <span className="font-mono text-stone-400">({doc.studentId})</span>
                  )}
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                {doc.description}
              </p>

              {doc.highlights && (
                <div className="pt-2 border-t border-stone-100 space-y-1">
                  <div className="text-xs font-medium text-stone-700">Document Key Points:</div>
                  <ul className="text-xs text-stone-500 space-y-0.5 list-disc list-inside line-clamp-2">
                    {doc.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions: Download / Open & Inspect */}
            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setPreviewDoc(doc)}
                className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Quick View</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleCopyLink(doc, e)}
                  title="Copy SharePoint link"
                  className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
                >
                  {copiedId === doc.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>

                <a
                  href={doc.sharepointUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
                >
                  <span>Download</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDocs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-stone-200 p-8 space-y-3">
          <FileText className="w-8 h-8 text-stone-400 mx-auto" />
          <h3 className="text-base font-semibold text-stone-800">No documents match your query</h3>
          <p className="text-xs text-stone-500">Try adjusting your search criteria or resetting filters.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs font-medium text-indigo-600 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Document Quick View Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 animate-scaleUp">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                    {previewDoc.fileType}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">{previewDoc.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                  {previewDoc.title}
                </h3>
                <div className="text-xs text-stone-600">
                  Author: <strong>{previewDoc.author}</strong> {previewDoc.studentId && `(${previewDoc.studentId})`}
                </div>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-semibold text-stone-800 mb-1">Document Summary & Abstract:</h4>
                <p className="text-stone-600 leading-relaxed">{previewDoc.description}</p>
              </div>

              {previewDoc.highlights && (
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Key Topics Covered in this Document:</h4>
                  <ul className="space-y-1.5 list-disc list-inside text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-200">
                    {previewDoc.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-stone-500">
                Official SLIIT SharePoint Cloud Storage
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={previewDoc.sharepointUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Open & Download Document</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
