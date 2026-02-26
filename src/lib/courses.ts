import { Course } from '@/components/CourseCard';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'certificate-iii-fitness',
    name: 'Certificate III in Fitness',
    code: 'SIS30321',
    duration: '6 months',
    category: 'fitness',
    level: 'Certificate III',
    description:
      'Gain the foundational skills to work as a fitness instructor. Learn to instruct gym-based exercise, conduct fitness appraisals, and develop personalised fitness programs.',
  },
  {
    id: '2',
    slug: 'certificate-iv-fitness',
    name: 'Certificate IV in Fitness',
    code: 'SIS40221',
    duration: '12 months',
    category: 'fitness',
    level: 'Certificate IV',
    description:
      'Advance your fitness career with personal training competencies. Design and deliver fitness programs, provide nutrition coaching, and manage a personal training business.',
  },
  {
    id: '3',
    slug: 'diploma-of-sport',
    name: 'Diploma of Sport',
    code: 'SIS50121',
    duration: '18 months',
    category: 'sport',
    level: 'Diploma',
    description:
      'A comprehensive qualification covering sport management, coaching, and administration. Ideal for those pursuing leadership roles in the sport industry.',
  },
  {
    id: '4',
    slug: 'certificate-iv-sport-coaching',
    name: 'Certificate IV in Sport Coaching',
    code: 'SIS40321',
    duration: '12 months',
    category: 'coaching',
    level: 'Certificate IV',
    description:
      'Develop advanced coaching skills to plan and deliver sport programs. Covers athlete development, performance analysis, and coaching methodologies.',
  },
  {
    id: '5',
    slug: 'certificate-iii-sport-recreation',
    name: 'Certificate III in Sport and Recreation',
    code: 'SIS30121',
    duration: '6 months',
    category: 'recreation',
    level: 'Certificate III',
    description:
      'Build skills in sport and recreation coordination. Learn to organise events, supervise activities, and support participants in community sport and recreation settings.',
  },
];

export interface CourseDetail extends Course {
  overview: string;
  outcomes: string[];
  units: { code: string; name: string; type: 'core' | 'elective' }[];
  entryRequirements: string[];
  careerOutcomes: string[];
  fees: { label: string; amount: string }[];
  deliveryMode: string;
  location: string;
}

export const courseDetails: Record<string, CourseDetail> = {
  'certificate-iii-fitness': {
    ...courses[0],
    overview:
      'The Certificate III in Fitness (SIS30321) is your entry point into the fitness industry. This qualification prepares you to work as a fitness instructor in a range of settings including gyms, fitness centres, and community facilities. You will develop hands-on skills through practical training and industry placements.',
    outcomes: [
      'Instruct gym-based exercise to individuals and groups',
      'Conduct fitness appraisals and consultations',
      'Develop and deliver personalised fitness programs',
      'Apply injury prevention and first aid knowledge',
      'Operate fitness equipment safely and effectively',
    ],
    units: [
      { code: 'SISFFIT006', name: 'Instruct gym-based exercise', type: 'core' },
      { code: 'SISFFIT007', name: 'Conduct fitness appraisals', type: 'core' },
      { code: 'SISFFIT010', name: 'Instruct approved community group exercise sessions', type: 'core' },
      { code: 'HLTAID011', name: 'Provide First Aid', type: 'core' },
      { code: 'SISXCAI010', name: 'Facilitate groups', type: 'elective' },
      { code: 'SISXEMR001', name: 'Respond to emergency situations', type: 'elective' },
    ],
    entryRequirements: [
      'Completion of Year 10 or equivalent',
      'Minimum age of 16 years',
      'Basic fitness and physical capability',
      'Language, Literacy and Numeracy (LLN) assessment',
    ],
    careerOutcomes: [
      'Gym Instructor',
      'Fitness Instructor',
      'Group Exercise Instructor',
      'Recreation Officer',
      'Community Fitness Leader',
    ],
    fees: [
      { label: 'Domestic (Full Fee)', amount: 'AUD $3,500' },
      { label: 'International', amount: 'AUD $7,000' },
      { label: 'Payment Plans', amount: 'Available' },
    ],
    deliveryMode: 'Face-to-face with online theory components',
    location: 'Sydney Campus',
  },
  'certificate-iv-fitness': {
    ...courses[1],
    overview:
      'The Certificate IV in Fitness (SIS40221) qualifies you as a Personal Trainer. Building on foundational fitness knowledge, this qualification provides advanced skills in program design, client management, and business operation for personal trainers.',
    outcomes: [
      'Design personalised fitness and nutrition programs',
      'Deliver one-on-one and small group personal training',
      'Conduct advanced fitness assessments',
      'Manage a personal training business',
      'Apply nutrition coaching principles',
    ],
    units: [
      { code: 'SISFFIT014', name: 'Provide personal training programs', type: 'core' },
      { code: 'SISFFIT015', name: 'Conduct personal training consultations', type: 'core' },
      { code: 'SISFFIT019', name: 'Instruct personal training clients in gym-based exercise', type: 'core' },
      { code: 'BSBSMB401', name: 'Establish legal and risk management requirements of small business', type: 'core' },
      { code: 'SISFFIT016', name: 'Apply sport science principles to personal training', type: 'elective' },
      { code: 'SISFFIT020', name: 'Instruct older client exercise programs', type: 'elective' },
    ],
    entryRequirements: [
      'Certificate III in Fitness (SIS30321) or equivalent',
      'Current First Aid certificate',
      'Minimum age of 17 years',
      'LLN assessment',
    ],
    careerOutcomes: [
      'Personal Trainer',
      'Strength & Conditioning Coach',
      'Corporate Wellness Consultant',
      'Online Fitness Coach',
      'Gym Manager',
    ],
    fees: [
      { label: 'Domestic (Full Fee)', amount: 'AUD $5,500' },
      { label: 'International', amount: 'AUD $10,000' },
      { label: 'Payment Plans', amount: 'Available' },
    ],
    deliveryMode: 'Blended (face-to-face + online)',
    location: 'Sydney Campus',
  },
  'diploma-of-sport': {
    ...courses[2],
    overview:
      'The Diploma of Sport (SIS50121) is a comprehensive qualification for those seeking leadership and management roles in sport. Covering sport management, administration, event coordination, and policy development, this diploma prepares graduates for senior roles in sporting organisations.',
    outcomes: [
      'Manage sport programs and facilities',
      'Develop and implement sport policies',
      'Coordinate major sporting events',
      'Lead and manage sport teams and staff',
      'Apply strategic planning in sport organisations',
    ],
    units: [
      { code: 'SISXMGT001', name: 'Lead and manage organisational change', type: 'core' },
      { code: 'BSBMGT517', name: 'Manage operational plan', type: 'core' },
      { code: 'SISSSCO006', name: 'Develop sport pathways programs', type: 'core' },
      { code: 'SISXEVT003', name: 'Coordinate sport and recreation events', type: 'core' },
      { code: 'SISXMGT002', name: 'Manage human resources', type: 'elective' },
      { code: 'SISXFAC004', name: 'Manage facility operations', type: 'elective' },
    ],
    entryRequirements: [
      'Certificate IV in Sport Coaching or equivalent',
      'Minimum 2 years industry experience (recommended)',
      'Completion of Year 12 or equivalent',
      'LLN assessment',
    ],
    careerOutcomes: [
      'Sport Manager',
      'Sport Administrator',
      'Events Coordinator',
      'Sport Development Officer',
      'Recreation Manager',
    ],
    fees: [
      { label: 'Domestic (Full Fee)', amount: 'AUD $8,500' },
      { label: 'International', amount: 'AUD $14,000' },
      { label: 'Payment Plans', amount: 'Available' },
    ],
    deliveryMode: 'Blended (face-to-face + online)',
    location: 'Sydney Campus',
  },
  'certificate-iv-sport-coaching': {
    ...courses[3],
    overview:
      'The Certificate IV in Sport Coaching (SIS40321) develops advanced coaching skills for community and competitive sport. This qualification covers coaching methodology, athlete development, performance analysis, and sports science application.',
    outcomes: [
      'Plan and deliver sport coaching programs',
      'Analyse and improve athlete performance',
      'Apply sports science principles to coaching',
      'Manage athlete wellbeing and injury prevention',
      'Lead and mentor junior coaches',
    ],
    units: [
      { code: 'SISSSCO007', name: 'Plan and conduct coaching sessions', type: 'core' },
      { code: 'SISSSCO008', name: 'Implement competition strategies', type: 'core' },
      { code: 'SISSSCO009', name: 'Plan athlete development programs', type: 'core' },
      { code: 'HLTAID011', name: 'Provide First Aid', type: 'core' },
      { code: 'SISSSCO010', name: 'Apply sport science to coaching', type: 'elective' },
      { code: 'SISXCAI012', name: 'Develop activity programs', type: 'elective' },
    ],
    entryRequirements: [
      'Certificate III in Sport and Recreation or equivalent',
      'Current sport-specific coaching accreditation (recommended)',
      'Minimum age of 17 years',
      'LLN assessment',
    ],
    careerOutcomes: [
      'Sport Coach',
      'Athletic Development Coach',
      'Junior Development Officer',
      'Sport Coordinator',
      'School Sport Coordinator',
    ],
    fees: [
      { label: 'Domestic (Full Fee)', amount: 'AUD $5,500' },
      { label: 'International', amount: 'AUD $10,000' },
      { label: 'Payment Plans', amount: 'Available' },
    ],
    deliveryMode: 'Blended (face-to-face + online)',
    location: 'Sydney Campus',
  },
  'certificate-iii-sport-recreation': {
    ...courses[4],
    overview:
      'The Certificate III in Sport and Recreation (SIS30121) provides foundational skills for working in community sport and recreation. You will learn to organise activities, coordinate events, supervise participants, and support people of all ages in achieving their physical activity goals.',
    outcomes: [
      'Coordinate and deliver sport and recreation activities',
      'Supervise participants in safe environments',
      'Organise small-scale sporting events',
      'Apply customer service skills in recreation settings',
      'Support participants with special needs',
    ],
    units: [
      { code: 'SISXCAI004', name: 'Instruct and facilitate sport and recreation activities', type: 'core' },
      { code: 'SISXPLD003', name: 'Conduct non-instructional sport and recreation activities', type: 'core' },
      { code: 'SISXCCS001', name: 'Provide quality customer service', type: 'core' },
      { code: 'HLTAID011', name: 'Provide First Aid', type: 'core' },
      { code: 'SISXEVT001', name: 'Assist with sport and recreation events', type: 'elective' },
      { code: 'SISXCAI003', name: 'Work effectively with young people in a sport and recreation context', type: 'elective' },
    ],
    entryRequirements: [
      'Completion of Year 10 or equivalent',
      'Minimum age of 16 years',
      'Basic fitness and physical capability',
      'LLN assessment',
    ],
    careerOutcomes: [
      'Recreation Officer',
      'Sport & Recreation Assistant',
      'Community Activity Coordinator',
      'School Sport Assistant',
      'Aquatic Centre Officer',
    ],
    fees: [
      { label: 'Domestic (Full Fee)', amount: 'AUD $3,500' },
      { label: 'International', amount: 'AUD $7,000' },
      { label: 'Payment Plans', amount: 'Available' },
    ],
    deliveryMode: 'Face-to-face with online theory components',
    location: 'Sydney Campus',
  },
};
