import React from 'react';
import { TEAM_MEMBERS, SUPERVISORS, PROJECT_METADATA } from '../data/researchData';
import { 
  Mail, 
  Award, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  UserCheck, 
  FileText,
  ExternalLink
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold">
          Research Personnel & Academic Supervision
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
          About the Research Team & Department
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          The <strong>R26-IT-037</strong> research project is conducted by four final-year undergraduate software engineering researchers under the guidance of academic faculty from the Department of Information Technology at SLIIT.
        </p>
      </div>

      {/* Group Members Section */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Undergraduate Researchers</div>
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900 mt-1">
            Student Research Investigators (Group R26-IT-037)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {/* Photo Avatar Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-stone-950 to-stone-800 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-xs ring-1 ring-stone-900">
                    {member.initials}
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-stone-900">{member.name}</h3>
                    <div className="text-xs font-mono text-stone-800 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md inline-block font-bold">
                      {member.studentId}
                    </div>
                    <div className="text-xs text-stone-500 font-medium">
                      {member.role}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="text-xs font-bold text-stone-800 font-mono">
                    Assigned Component: <span className="text-stone-950 underline underline-offset-2">{member.moduleName}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="text-xs font-semibold text-stone-700">Specific Technical Contributions:</div>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    {member.tasks.slice(0, 3).map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{member.email}</span>
                </a>
                <span className="text-xs text-stone-400 font-mono">B.Sc. IT (Hons)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Supervisors Section */}
      <div className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500">Faculty Mentorship</div>
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900 mt-1">
            Academic Project Supervisors
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Faculty guidance provided throughout requirements elicitation, architectural defense, and empirical validation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUPERVISORS.map((sup, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-stone-900 text-white font-bold flex items-center justify-center text-sm">
                  {sup.name.split(' ')[1]?.[0] || 'S'}
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">{sup.name}</h3>
                  <div className="text-xs text-indigo-700 font-medium">{sup.role}</div>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-0.5">
                <div>{sup.department}</div>
                <div>{sup.faculty} · {sup.institution}</div>
              </div>
              <div className="pt-2 border-t border-stone-100">
                <a
                  href={`mailto:${sup.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{sup.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Accreditation */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-6 h-6 text-stone-800" />
          <h2 className="text-lg sm:text-xl font-serif font-medium text-stone-900">
            Institutional Affiliation & Research Laboratory
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm pt-2">
          <div className="space-y-1">
            <strong className="text-stone-800 block">Department & Faculty:</strong>
            <p className="text-stone-600">Department of Information Technology, Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT).</p>
          </div>
          <div className="space-y-1">
            <strong className="text-stone-800 block">Research Group:</strong>
            <p className="text-stone-600">TIM — Technology Integration and Management Research Cluster.</p>
          </div>
          <div className="space-y-1">
            <strong className="text-stone-800 block">Campus Location:</strong>
            <p className="text-stone-600">SLIIT Malabe Campus, New Kandy Road, Malabe 10115, Sri Lanka.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
