import React from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { OFFICE_ADDRESS } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full -mr-48 -mt-48 opacity-50 blur-3xl"></div>
          
          <div className="lg:flex lg:gap-24 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Connect With Us</h2>
              <h3 className="text-4xl font-black text-indigo-950 mb-8 leading-tight">
                Ready to make a <br />
                <span className="text-indigo-600">difference?</span>
              </h3>
              <p className="text-slate-600 mb-12 max-w-md">
                Whether you want to become a mentor, volunteer for our community events, or discuss partnership opportunities, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-950">Auckland Office</h4>
                    <p className="text-sm text-slate-500">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-950">Email Us</h4>
                    <p className="text-sm text-slate-500">hello@elevateyouth.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-1/2">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 rounded-2xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-2xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
                <select className="w-full px-6 py-4 rounded-2xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-500">
                  <option>Interested in Mentoring</option>
                  <option>Volunteer Opportunities</option>
                  <option>Partnership Inquiry</option>
                  <option>General Support</option>
                </select>
                <textarea 
                  placeholder="How can we work together?" 
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                ></textarea>
                <button className="w-full bg-indigo-950 text-white font-bold py-4 rounded-2xl hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}