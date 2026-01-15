import { BookOpen, Trophy, HeartHandshake, Users, Palette, GraduationCap } from 'lucide-react';
import { Program, Stat, FinancialData, Trustee } from './types.ts';

export const FOUNDATION_NAME = "Elevate Youth Foundation";
export const MISSION_STATEMENT = "To identify, support, and encourage young people who demonstrate potential in academics, sports, arts, and community service.";

export const OFFICE_ADDRESS = "40A Vicent Street, Howick, Auckland, New Zealand";
export const FOUNDATION_EMAIL = "elevateyouthfoundationnz@gmail.com";
export const FOUNDATION_PHONE = "0225999395";

export const ABOUT_TEXT = {
  history: "Established on October 21, 2025, by Settlor Bin Li, the Elevate Youth Foundation was created with a clear vision: to empower the youth of Aotearoa through structured mentorship and financial support.",
  vision: "We believe that every young person, regardless of their financial circumstances, deserves the opportunity to reach their full potential in academics, sports, and the arts.",
  legal: "Operated as a registered charitable trust under the Charitable Trusts Act 1957 and the Trusts Act 2019, we maintain the highest standards of governance and transparency."
};

export const PROGRAMS: Program[] = [
  {
    id: 'edu-adv',
    title: 'Educational Advancement',
    description: 'Providing mentoring, training, and workshops that promote creativity, confidence, and resilience in young minds.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    testimonials: [
      {
        quote: "The robotics workshop changed my life. I never thought I could be an engineer until Elevate gave me the tools to try.",
        author: "Sarah T.",
        role: "Year 12 Student"
      }
    ]
  },
  {
    id: 'sports-arts',
    title: 'Athletics & Arts',
    description: 'Encouraging excellence in sports and arts through dedicated support programs and talent identification initiatives.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800',
    testimonials: [
      {
        quote: "With the foundation's support, I was able to travel to the regional swimming championships. Their belief in me kept me going.",
        author: "James M.",
        role: "Athlete"
      }
    ]
  },
  {
    id: 'scholarships',
    title: 'Financial Assistance',
    description: 'Offering scholarships, grants, and awards to youth with potential, regardless of their personal or financial circumstances.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1544650030-3c51ad3571d2?auto=format&fit=crop&q=80&w=800',
    testimonials: [
      {
        quote: "Receiving this scholarship meant I could focus on my studies without the constant stress of school fees. I'm forever grateful.",
        author: "Aria W.",
        role: "University Applicant"
      }
    ]
  },
  {
    id: 'wellbeing',
    title: 'Community Wellbeing',
    description: 'Promoting engagement through volunteering and service initiatives that encourage social responsibility and connection.',
    icon: HeartHandshake,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800',
    testimonials: [
      {
        quote: "Volunteering with Elevate taught me more about leadership than any textbook ever could. I feel truly connected to my community now.",
        author: "David L.",
        role: "Volunteer Lead"
      }
    ]
  },
];

export const TRUSTEES: Trustee[] = [
  {
    name: "Bin (Matthew) Li",
    role: "Chairperson",
    bio: "Mr. Matthew Li settled in New Zealand in 2017. As a member of the migrant community, he actively engaged in local community learning and integration upon his arrival, and obtained a Postgraduate Diploma in Computing. The systematic training he received in the field of computer science has endowed him with rigorous logical thinking and efficient processing capabilities, enabling him to demonstrate a rational and unique perspective when participating in community affairs management and decision-making.\n\nSocial Responsibility and Charity Practice: Upholding the original intention of \"giving back to society,\" Matthew has been deeply involved in charitable organizations for many years. Through long-term frontline work, he has accumulated rich experience in cross-cultural services and possesses a deep understanding of the real challenges faced by new immigrants in language communication, cultural adaptation, and career transition. His low-profile and pragmatic work style, along with his long-term dedication to public welfare, have earned him extensive recognition and trust from community peers.",
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Nan (Andrea) Li",
    role: "Trustee",
    bio: "Since moving to Auckland in 2002, Andrea Li has been deeply committed to the growth and success of the local community. As a mother of two teenagers, she has a front-row seat to the challenges and opportunities facing New Zealand’s youth today, fueling her passion for the Elevate Youth Foundation.\n\nAndrea believes that \"excellence\" isn't a one-size-fits-all concept. Whether a young person is striving for a podium finish in sports, expressing themselves through the arts, or pushing for academic success, she is dedicated to ensuring they have the support systems necessary to flourish.\n\nHeart for the Community: With a background in Psychology and Education, Andrea approaches her role as Trustee with a focus on holistic development. She draws on her previous experience in the non-profit sector to help the Foundation create meaningful, lasting impacts for rangatahi across the region. Her philosophy is simple: when we invest in the diverse talents of our youth, we build a stronger future for everyone. Andrea is proud to contribute her time and energy to helping the next generation of New Zealanders excel in every aspect of their lives.",
    image: "https://images.unsplash.com/photo-1567532939604-b6c5b0adcc80?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Kai (Leon) Sheng",
    role: "Trustee",
    bio: "Leon Sheng joined the board with a mission to foster resilience and innovation among New Zealand’s youth. A graduate in Electrical Control Engineering with over a decade of experience as a business owner, Leon moved to New Zealand in 2001, bringing a fresh, global perspective to the Foundation’s mission.\n\nIn his role as Trustee, Leon focuses on enhancing the Foundation’s outreach to diverse communities and streamlining the selection process for our youth leadership grants. He applies his engineering-driven logic to improve the Foundation’s operational efficiency, ensuring that resources are effectively channeled to those who need them most. Leon is passionate about creating inclusive pathways that allow young people from all backgrounds to access high-quality education and professional development.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const STATS: Stat[] = [
  { id: '1', label: 'Youth Impacted', value: '15,000', suffix: '+' },
  { id: '2', label: 'Scholarships', value: '2.5', prefix: '$', suffix: 'M' },
  { id: '3', label: 'Schools Supported', value: '45', suffix: '' },
  { id: '4', label: 'Active Mentors', value: '300', suffix: '+' },
];

export const FINANCIAL_DATA: FinancialData[] = [
  { name: 'Program Services', value: 82, color: '#312e81' }, 
  { name: 'Fundraising', value: 10, color: '#6366f1' },      
  { name: 'Management', value: 8, color: '#a5b4fc' },        
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for the Elevate Youth Foundation.
Your tone should be inspiring, professional, warm, and helpful.

Key Leadership:
- Chairperson: Bin (Matthew) Li
- Trustee: Nan (Andrea) Li
- Trustee: Kai (Leon) Sheng

Key Legal & Structural Information:
- Legal Status: Registered Charitable Trust in New Zealand (Charitable Trusts Act 1957).
- Registered Office: ${OFFICE_ADDRESS}.
- Governing Law: New Zealand Law.
- Mission: ${MISSION_STATEMENT}.
- History: Founded Oct 21, 2025.
- Programs: Educational Advancement, Athletics & Arts, Scholarships/Financial Aid, and Community Wellbeing.
- Contact: ${FOUNDATION_EMAIL} | ${FOUNDATION_PHONE}
- Transparency: 82% of funds go directly to programs.

Answer questions about how to get involved (donate/volunteer), our specific legal purposes in NZ, and who leads the foundation.
`;