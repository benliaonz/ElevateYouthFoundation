import React from 'react';
import { TRUSTEES } from '../constants';
import { UserCheck } from 'lucide-react';

export default function Trustees() {
  return (
    <div id="trustees" className="py-24 bg-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em]">Board of Governance</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
            Our Trustees
          </p>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Governed by the Charitable Trusts Act 1957 and the Trusts Act 2019, our board ensures the foundation remains dedicated to its core charitable purposes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TRUSTEES.map((trustee, index) => (
            <div key={index} className="bg-white p-8 rounded-[32px] shadow-sm border border-indigo-50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <UserCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-1">{trustee.name}</h3>
              <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-4">{trustee.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {trustee.bio}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-indigo-950 rounded-[32px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2">Legal Compliance</h4>
            <p className="text-indigo-200 text-sm max-w-xl">
              Elevate Youth Foundation is a registered charitable entity in New Zealand. Our operations are strictly conducted in accordance with the New Zealand Charities Act 2005.
            </p>
          </div>
          <a href="#" className="whitespace-nowrap bg-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition-colors">
            View Trust Deed
          </a>
        </div>
      </div>
    </div>
  );
}