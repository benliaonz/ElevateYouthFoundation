
import React from 'react';
import { ABOUT_TEXT } from '../constants.ts';
import { ShieldCheck, History, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000" 
                alt="Mentorship in action"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-100 rounded-[40px] -z-10 hidden lg:block"></div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-indigo-900/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Our Heritage</h2>
            <h3 className="text-4xl font-black text-indigo-950 mb-8 leading-tight">
              A Foundation Built on <span className="text-indigo-600">Trust and Vision.</span>
            </h3>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <History size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-950 mb-2">Our Origins</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ABOUT_TEXT.history}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-950 mb-2">Our Vision</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ABOUT_TEXT.vision}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-950 mb-2">Legal Compliance</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ABOUT_TEXT.legal}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
