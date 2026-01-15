import React from 'react';
import { TRUSTEES } from '../constants.ts';
import { ShieldCheck, Scale, GraduationCap } from 'lucide-react';

export default function Trustees() {
  return (
    <div className="bg-slate-50">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">Board of Governance</h2>
          <p className="text-4xl md:text-5xl font-black text-indigo-950 leading-tight">
            Leadership Dedicated to <br />
            <span className="text-indigo-600">Integrity & Vision.</span>
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {TRUSTEES.map((trustee, index) => (
            <div key={index} className="group bg-white rounded-[40px] shadow-sm border border-indigo-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center p-8 text-center">
              <div className="relative mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-indigo-50 group-hover:ring-indigo-100 transition-all duration-500">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-indigo-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
                  <ShieldCheck size={18} />
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-black text-indigo-950 mb-1">{trustee.name}</h3>
                <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">{trustee.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed text-left whitespace-pre-wrap">
                  {trustee.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 w-full flex justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">Board Member</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-indigo-950 p-12 rounded-[40px] text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <Scale size={28} className="text-indigo-300" />
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Legal Stewardship</h4>
              <p className="text-indigo-100/70 text-sm leading-relaxed mb-8 max-w-md">
                Elevate Youth Foundation is registered under the <strong>Charitable Trusts Act 1957</strong> (NZ) and operates within the frameworks of the <strong>Trusts Act 2019</strong>. We are committed to absolute transparency and public accountability.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-white font-bold hover:text-indigo-300 transition-colors group/link">
              View Governing Documents <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
            </a>
          </div>

          <div className="bg-white p-12 rounded-[40px] border border-indigo-100 flex flex-col justify-between shadow-sm relative overflow-hidden group">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <div>
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
                <GraduationCap size={28} className="text-indigo-600" />
              </div>
              <h4 className="text-2xl font-bold text-indigo-950 mb-4 tracking-tight">Governance Meetings</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
                Our board meets quarterly in Auckland to review program effectiveness, financial allocations, and strategic growth opportunities for the youth we serve.
              </p>
            </div>
            <div className="flex items-center">
               <div className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/20">Next Meeting: Q4 2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}