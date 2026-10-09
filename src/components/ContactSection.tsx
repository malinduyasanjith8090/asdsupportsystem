import React from 'react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  ExternalLink 
} from 'lucide-react';
import { SUPERVISORS } from '../data/researchData';

export const ContactSection: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold">
          Academic Communications
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
          Contact Details & Academic Directory
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          Contact the student investigators, project supervisors, and departmental office for academic inquiries, evaluations, or collaboration opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Department Information */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-stone-500 font-bold">Institution & Department</div>
              <h2 className="text-lg font-bold text-stone-950 mt-1">Faculty of Computing</h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Department of Information Technology<br />
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 font-mono">
            SLIIT CDAP · Group R26-IT-037
          </div>
        </div>

        {/* Card 2: Campus Location & Phone */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-stone-500 font-bold">Campus Address</div>
              <h2 className="text-lg font-bold text-stone-950 mt-1">SLIIT Malabe Campus</h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                New Kandy Road, Malabe 10115, Sri Lanka
              </p>
            </div>
            <div className="pt-2">
              <div className="text-xs font-mono uppercase text-stone-500 font-bold">Telephone Inquiries</div>
              <p className="text-xs sm:text-sm font-mono text-stone-900 mt-1">
                +94 11 754 4801 / +94 11 754 4802
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 font-mono">
            Operating: Mon – Fri (8:30 AM – 5:00 PM)
          </div>
        </div>

        {/* Card 3: Project Inquiries & Email Links */}
        <div className="bg-stone-950 text-white rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-stone-400 font-bold">Electronic Mail</div>
              <h2 className="text-lg font-bold text-white mt-1">Project Correspondence</h2>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                Direct queries to the student group leader or project supervisors:
              </p>
            </div>

            <div className="space-y-2.5 pt-1 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <div className="text-[10px] font-mono uppercase text-stone-400">Team Leader</div>
                <div className="font-mono text-stone-200 select-all font-semibold break-all">it22224484@mysliit.lk</div>
                <a
                  href="mailto:it22224484@mysliit.lk?subject=%5BR26-IT-037%20Inquiry%5D%20ASD%20Support%20System"
                  className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white underline pt-0.5"
                >
                  <span>Send email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <div className="text-[10px] font-mono uppercase text-stone-400">Project Supervisor</div>
                <div className="font-mono text-stone-200 select-all font-semibold break-all">uthpala.s@sliit.lk</div>
                <a
                  href="mailto:uthpala.s@sliit.lk?subject=%5BR26-IT-037%20Supervision%5D%20ASD%20Support%20System"
                  className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white underline pt-0.5"
                >
                  <span>Send email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-stone-400 font-mono">
            Response turnaround: ~2 business days
          </div>
        </div>
      </div>

      {/* Research Supervision & Co-Supervision Quick Table */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="border-b border-stone-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase text-stone-900 font-bold">Academic Supervision Panel</div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-950 mt-0.5">Faculty Contact Details</h2>
          </div>
          <span className="text-xs font-mono text-stone-500">Department of Information Technology</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {SUPERVISORS.map((sup, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-900 bg-stone-200/80 px-2 py-0.5 rounded">
                {idx === 0 ? 'Supervisor' : 'Co-Supervisor'}
              </span>
              <div className="font-bold text-stone-950 text-base">{sup.name}</div>
              <div className="text-stone-600">{sup.role}</div>
              <div className="text-stone-500 text-xs">{sup.department} · {sup.faculty}</div>
              <div className="pt-2 font-mono text-xs text-stone-900 font-medium">
                Email: <a href={`mailto:${sup.email}`} className="underline hover:text-stone-700">{sup.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
