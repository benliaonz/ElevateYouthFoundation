import { BookOpen, Trophy, HeartHandshake, Palette, Users, GraduationCap } from 'lucide-react';
import { Program, Stat, FinancialData, Trustee } from './types.ts';

export const FOUNDATION_NAME = "Elevate Youth Foundation";
export const MISSION_STATEMENT = "To identify, support, and encourage young people who demonstrate potential in academics, sports, arts, and community service.";

export const OFFICE_ADDRESS = "40A Vicent Street, Howick, Auckland, New Zealand";
export const FOUNDATION_EMAIL = "elevateyouthfoundationnz@gmail.com";
export const FOUNDATION_PHONE = "022 599 9395";

export const ABOUT_TEXT = {
  history: "Established in 2025, Elevate Youth Foundation was born from a collective desire to address the growing gap in opportunities for talented youth in New Zealand's under-served communities. What started as a small mentorship circle in Auckland has grown into a nationwide initiative.",
  vision: "We envision a New Zealand where every young person, regardless of their background, has the support structure to realize their full potential and contribute meaningfully to society.",
  legal: "We operate as a registered Charitable Trust under the Charitable Trusts Act 1957. We are committed to the highest standards of governance and transparency."
};

export const PROGRAMS: Program[] = [
  {
    id: 'academic',
    title: 'Academic Excellence',
    description: 'Scholarships, tutoring, and educational resources for high-potential students facing financial barriers.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    testimonials: [{ quote: "The scholarship allowed me to focus on my studies without worrying about fees.", author: "Sarah T.", role: "Scholarship Recipient" }]
  },
  {
    id: 'sports',
    title: 'Sports Development',
    description: 'Providing equipment, coaching, and travel grants for aspiring young athletes to compete at higher levels.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800',
    testimonials: [{ quote: "I made the representative team thanks to the new gear and coaching support.", author: "Mikaere W.", role: "Athlete" }]
  },
  {
    id: 'arts',
    title: 'Creative Arts',
    description: 'Funding for instruments, art supplies, and exhibition opportunities for young creatives.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'community',
    title: 'Community Leadership',
    description: 'Mentorship programs connecting youth with local community leaders to foster civic engagement.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS: Stat[] = [
  { id: '1', label: 'Youth Supported', value: '150', suffix: '+' },
  { id: '2', label: 'Scholarships', value: '45', prefix: '' },
  { id: '3', label: 'Mentors Active', value: '20', suffix: '+' },
  { id: '4', label: 'Success Rate', value: '95', suffix: '%' }
];

export const FINANCIAL_DATA: FinancialData[] = [
  { name: 'Program Services', value: 82, color: '#4f46e5' }, // indigo-600
  { name: 'Fundraising', value: 10, color: '#818cf8' }, // indigo-400
  { name: 'Management', value: 8, color: '#c7d2fe' }, // indigo-200
];

// Helper to automatically convert Google Drive sharing URLs to direct image URLs
// This fixes the issue where images don't load
const formatDriveUrl = (url: string) => {
  if (url.includes('drive.google.com')) {
    // Extract ID from /file/d/ID/view or id=ID
    const idMatch = url.match(/\/d\/(.*?)\//) || url.match(/id=(.*?)(&|$)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
    }
  }
  return url;
};

export const TRUSTEES: Trustee[] = [
  {
    name: "[Trustee Name]",
    role: "Chairperson",
    bio: "[Enter Bio Here]",
    // PASTE YOUR GOOGLE DRIVE LINK BELOW inside formatDriveUrl("...")
    image: formatDriveUrl("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400") 
  },
  {
    name: "[Trustee Name]",
    role: "Treasurer",
    bio: "[Enter Bio Here]",
    image: formatDriveUrl("https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400")
  },
  {
    name: "[Trustee Name]",
    role: "Secretary",
    bio: "[Enter Bio Here]",
    image: formatDriveUrl("https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400")
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI assistant for ${FOUNDATION_NAME}. 
Your goal is to help visitors understand our mission, programs, and how they can support us.
Be friendly, professional, and encouraging.
Our mission: ${MISSION_STATEMENT}
We are located at ${OFFICE_ADDRESS}.
Key contact: ${FOUNDATION_EMAIL}.
If asked about donations, encourage them to email us.
If asked about specific trustees, refer to the Trustees page information.
Do not make up financial figures beyond what is provided in the Impact section (82% direct impact).`;