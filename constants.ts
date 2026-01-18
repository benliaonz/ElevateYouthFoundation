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

// Helper to automatically convert Google Drive sharing URLs to direct image URLs
// We define this before PROGRAMS so it can be used there too.
const formatDriveUrl = (url: string) => {
  if (url.includes('drive.google.com')) {
    // Extract ID from /file/d/ID/view or id=ID
    const idMatch = url.match(/\/d\/(.*?)\//) || url.match(/id=(.*?)(&|$)/);
    if (idMatch && idMatch[1]) {
      // Use thumbnail endpoint with large size (sz=w1000) for reliability
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
    }
  }
  return url;
};

export const PROGRAMS: Program[] = [
  {
    id: 'academic',
    title: 'Academic Excellence',
    description: 'Scholarships, tutoring, and educational resources for high-potential students facing financial barriers.',
    icon: BookOpen,
    image: formatDriveUrl('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'),
    testimonials: [{ quote: "The scholarship allowed me to focus on my studies without worrying about fees.", author: "Sarah T.", role: "Scholarship Recipient" }]
  },
  {
    id: 'sports',
    title: 'Sports Development',
    description: 'Providing equipment, coaching, and travel grants for aspiring young athletes to compete at higher levels.',
    icon: Trophy,
    image: formatDriveUrl('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'),
    testimonials: [{ quote: "I made the representative team thanks to the new gear and coaching support.", author: "Mikaere W.", role: "Athlete" }]
  },
  {
    id: 'arts',
    title: 'Arts',
    description: 'Funding for musical, creative arts, performance arts and exhibition opportunities for young creatives.',
    icon: Palette,
    image: formatDriveUrl('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800')
  },
  {
    id: 'community',
    title: 'Community Leadership',
    description: 'Mentorship programs connecting youth with local community leaders to foster civic engagement.',
    icon: Users,
    image: formatDriveUrl('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800')
  }
];

export const STATS: Stat[] = [
  { id: '1', label: 'Youth Supported', value: '30', suffix: '+' },
  { id: '2', label: 'Scholarships', value: '0', prefix: '' },
  { id: '3', label: 'Mentors Active', value: '5', suffix: '+' },
  { id: '4', label: 'Success Rate', value: '85', suffix: '%' }
];

export const FINANCIAL_DATA: FinancialData[] = [
  { name: 'Program Services', value: 32, color: '#4f46e5' }, // indigo-600
  { name: 'Fundraising', value: 60, color: '#818cf8' }, // indigo-400
  { name: 'Management', value: 8, color: '#c7d2fe' }, // indigo-200
];

export const TRUSTEES: Trustee[] = [
  {
    name: "Bin (Matthew) Li",
    role: "Chairperson",
    bio: "Mr. Matthew Li settled in New Zealand in 2017. As a member of the migrant community, he actively engaged in local community learning and integration upon his arrival, and obtained a Postgraduate Diploma in Computing. The systematic training he received in the field of computer science has endowed him with rigorous logical thinking and efficient processing capabilities, enabling him to demonstrate a rational and unique perspective when participating in community affairs management and decision-making.\n\nSocial Responsibility and Charity Practice: Upholding the original intention of \"giving back to society,\" Matthew has been deeply involved in charitable organizations for many years. Through long-term frontline work, he has accumulated rich experience in cross-cultural services and possesses a deep understanding of the real challenges faced by new immigrants in language communication, cultural adaptation, and career transition. His low-profile and pragmatic work style, along with his long-term dedication to public welfare, have earned him extensive recognition and trust from community peers.",
    image: formatDriveUrl("https://drive.google.com/uc?export=view&id=1OlCqjW-QE5fqVyzMvdoRE5Bb9nN_FM1S")
  },
  {
    name: "Kai (Leon) Sheng",
    role: "Trustee",
    bio: "Leon Sheng joined the board with a mission to foster resilience and innovation among New Zealand’s youth. A graduate in Electrical Control Engineering with over a decade of experience as a business owner, Leon moved to New Zealand in 2001, bringing a fresh, global perspective to the Foundation’s mission.\n\nIn his role as Trustee, Leon focuses on enhancing the Foundation’s outreach to diverse communities and streamlining the selection process for our youth leadership grants. He applies his engineering-driven logic to improve the Foundation’s operational efficiency, ensuring that resources are effectively channeled to those who need them most. Leon is passionate about creating inclusive pathways that allow young people from all backgrounds to access high-quality education and professional development.",
    image: formatDriveUrl("https://drive.google.com/uc?export=view&id=1tRbyDoTyoyTnKwwhgEW0-WdjcdLd31jv") 
  },
  {
    name: "Nan (Andrea) Li",
    role: "Trustee",
    bio: "Since moving to Auckland in 2002, Andrea Li has been deeply committed to the growth and success of the local community. As a mother of two teenagers, she has a front-row seat to the challenges and opportunities facing New Zealand’s youth today, fueling her passion for the Elevate Youth Foundation. Andrea believes that \"excellence\" isn't a one-size-fits-all concept. Whether a young person is striving for a podium finish in sports, expressing themselves through the arts, or pushing for academic success, she is dedicated to ensuring they have the support systems necessary to flourish.\n\nHeart for the Community: With a background in Psychology and Education, Andrea approaches her role as Trustee with a focus on holistic development. She draws on her previous experience in the non-profit sector to help the Foundation create meaningful, lasting impacts for rangatahi across the region. Her philosophy is simple: when we invest in the diverse talents of our youth, we build a stronger future for everyone. Andrea is proud to contribute her time and energy to helping the next generation of New Zealanders excel in every aspect of their lives.",
    image: formatDriveUrl("https://drive.google.com/uc?export=view&id=18tQlCFzfPqn0e0ItF3OLzbc4LQ1BD0D7")
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