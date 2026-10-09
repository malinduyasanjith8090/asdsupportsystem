import { 
  TeamMember, 
  Supervisor, 
  MilestoneItem, 
  ProjectDocument, 
  PresentationDeck, 
  LiteraturePaper, 
  SystemModuleInfo 
} from '../types';

export const PROJECT_METADATA = {
  title: 'Support System for Children with Autism Spectrum Disorder (ASD)',
  subtitle: 'An Integrated AI-Powered Assistive Mobile Platform for Personalized Learning, Behavioral Training, Gamified Cognition, and Daily Routine Management in Sri Lanka',
  projectId: 'R26-IT-037',
  academicYear: '2025/2026',
  batch: '2026 Regular Batch (CDAP)',
  faculty: 'Faculty of Computing',
  department: 'Department of Information Technology',
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  location: 'Malabe Campus, New Kandy Road, Malabe, Sri Lanka',
  researchGroup: 'TIM - Technology Integration and Management',
  clusters: ['AIMS (Autonomous Intelligent Machines and Systems)', 'SST (Software Systems & Technologies)'],
  industryVerticals: ['HealthTech', 'EdTech', 'Assistive Technology', 'Digital Healthcare'],
  targetAgeGroup: 'Children aged 5–10 years diagnosed with ASD',
  sdgs: [
    { code: 'SDG 3', title: 'Good Health & Well-Being', desc: 'Improves mental health support, early intervention, and stress reduction during transitions.' },
    { code: 'SDG 4', title: 'Quality Education', desc: 'Inclusive, adaptive, and culturally localized education for neurodiverse learners.' },
    { code: 'SDG 10', title: 'Reduced Inequalities', desc: 'Affordable mobile alternative overcoming expensive private clinical therapy barriers in rural Sri Lanka.' }
  ]
};

export const SUPERVISORS: Supervisor[] = [
  {
    name: 'Mrs. Uthpala Samarakoon',
    role: 'Primary Project Supervisor',
    department: 'Department of Information Technology',
    faculty: 'Faculty of Computing',
    institution: 'Sri Lanka Institute of Information Technology',
    email: 'uthpala.s@sliit.lk'
  },
  {
    name: 'Ms. Suriyaa Kumari',
    role: 'Co-Supervisor',
    department: 'Department of Information Technology',
    faculty: 'Faculty of Computing',
    institution: 'Sri Lanka Institute of Information Technology',
    email: 'suriyaa.k@sliit.lk'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'it22224484',
    name: 'U. M. Yasanjith',
    studentId: 'IT22224484',
    email: 'it22224484@mysliit.lk',
    role: 'Group Leader & AI Architecture Lead',
    moduleName: 'Personalized Learning Module',
    avatarColor: 'from-blue-600 to-indigo-700',
    initials: 'UY',
    degree: 'B.Sc. (Hons) in Information Technology',
    tasks: [
      'Design adaptive difficulty algorithm based on observable child accuracy and response time',
      'Integrate Augmented Reality (AR) 3D objects (e.g., interactive 3D elephant, balloons) for multisensory engagement',
      'Engineer child-friendly lessons covering numbers, letters, colors, and daily living skills in English & Sinhala',
      'Incorporate positive reinforcement feedback (stars, joyful audio chimes, celebratory confetti)',
      'Construct caregiver customization controls with sliders balancing safety, learning pace, and fun'
    ],
    novelty: 'Delivers customized learning using real-time adaptive difficulty and AR 3D visuals with local Sri Lankan contexts, enabling children to learn at their own pace instead of following rigid one-size-fits-all curricula.',
    bio: 'Specializing in assistive intelligent interfaces, machine learning optimization, and mobile computing. Led project charter formulation, proposal integration, and the adaptive personalization engine.'
  },
  {
    id: 'it22227072',
    name: 'Jayalath N. N',
    studentId: 'IT22227072',
    email: 'it22227072@mysliit.lk',
    role: 'Game Systems & Evaluation Lead',
    moduleName: 'Games and Activities Module & Evaluation',
    avatarColor: 'from-emerald-600 to-teal-700',
    initials: 'JN',
    degree: 'B.Sc. (Hons) in Information Technology',
    tasks: [
      'Conceptualize and develop ASD-friendly mini-games (matching, sorting, memory, pattern recognition)',
      'Implement emotion recognition games identifying feelings from facial expressions and real-world social contexts',
      'Engineer daily life story activities that present social scenarios for positive decision making',
      'Develop back-end analytics system tracking session length, accuracy rates, and error patterns',
      'Conduct rigorous system evaluation measuring engagement, usability, and measurable cognitive learning outcomes'
    ],
    novelty: 'Combines serious game principles with sensory-calm UI, real-time difficulty recalibration, and continuous objective analytics, providing clinical-level insight without intimidating test environments.',
    bio: 'Passionate about cognitive game engineering and data analytics. Focused on designing therapeutic gamification systems tailored to sensory-sensitive children with neurodiverse profiles.'
  },
  {
    id: 'it22156488',
    name: 'Premarathna G.D.B.S',
    studentId: 'IT22156488',
    email: 'it22156488@mysliit.lk',
    role: 'Routine Support & Biosensing Lead',
    moduleName: 'Daily Routine Support Module',
    avatarColor: 'from-purple-600 to-violet-700',
    initials: 'GP',
    degree: 'B.Sc. (Hons) in Information Technology',
    tasks: [
      'Develop customizable visual schedule builder allowing parents to structure morning, school, and bedtime routines',
      'Implement gentle reminder alerts with clear pictograms, soft chimes, and optional voiceover prompts',
      'Design calming support toolkit (guided breathing exercises, soothing sounds, visual relaxation) for stressful transitions',
      'Integrate optional wearable smart device connection to monitor physiological arousal indicators without medical over-diagnosis',
      'Manage cloud and local offline data synchronization via Firebase Firestore and SQLite'
    ],
    novelty: 'Bridges daily visual schedules with proactive calming suggestions and optional physiological arousal awareness, transforming static paper charts into a living, responsive transition assistant.',
    bio: 'Focuses on mobile user experience design, assistive habit frameworks, and IoT/sensor telemetry. Directed user research with local special educators and speech therapists.'
  },
  {
    id: 'it22181374',
    name: 'Savindi W.K.D',
    studentId: 'IT22181374',
    email: 'it22181374@mysliit.lk',
    role: 'Behavioral & Social Training Lead',
    moduleName: 'Behavioral Training Module',
    avatarColor: 'from-amber-600 to-orange-700',
    initials: 'WS',
    degree: 'B.Sc. (Hons) in Information Technology',
    tasks: [
      'Design interactive fine motor tracing exercises with cultural Sri Lankan shapes and letterforms',
      'Develop command response scenarios (e.g., sit, sleep, point) and greeting exercises (e.g., good morning, thank you)',
      'Engineer computer vision-assisted feedback for observing interactive response cues under caregiver supervision',
      'Implement visual distinction games teaching appropriate vs inappropriate behavioral choices',
      'Build parent dashboard controls and long-term dexterity improvement charts'
    ],
    novelty: 'Integrates cognitive finger control tracing with social interaction practice in a safe virtual space, enabling repeated trials without anxiety, punishment, or real-world social pressure.',
    bio: 'Dedicated to human-computer interaction, computer vision applications in special education, and behavioral feedback systems for children with developmental delay.'
  }
];

export const MODULES_INFO: SystemModuleInfo[] = [
  {
    id: 'learning',
    name: 'Personalized Learning Module',
    leadMember: 'U. M. Yasanjith',
    studentId: 'IT22224484',
    themeColor: 'blue',
    description: 'An AI-powered adaptive educational environment delivering custom lessons in numbers, letters, colors, and daily life skills with 3D Augmented Reality assets and bilingual Sinhala/English support.',
    researchProblem: 'Many children with ASD in Sri Lanka lack access to expensive private therapy and specialized schools. Existing mobile apps provide static, one-size-fits-all lessons that fail to adjust when a child learns faster or slower, causing boredom or meltdown.',
    researchQuestion: 'How can a mobile app deliver personalized, adaptive academic and daily-life skill lessons for children with ASD, making learning engaging and accessible for families in Sri Lanka who cannot afford expensive therapies?',
    researchObjective: 'To build a Personalized Learning Module that teaches school subjects and daily skills using AR, real-time adaptive difficulty algorithms, and positive feedback in both Sinhala and English.',
    noveltyFeatures: [
      'Real-time adaptive difficulty adjusting task complexity based on consecutive successes and hints',
      'Interactive 3D Augmented Reality objects (e.g., counting with a 3D elephant on camera plane)',
      'Culturally relevant examples tailored to Sri Lankan cultural contexts and local language phonetics',
      'Sensory-safe positive reinforcement (stars, cheerful chimes, soft animations, no jarring sirens)'
    ],
    technologies: ['React Native', 'Node.js', 'Firebase Firestore', 'Expo AR Tools', 'SQLite', 'node-cron'],
    completedFeatures: [
      'Requirements & user stories finalized with clinical input',
      'Sensory-friendly UI wireframes and visual tokens designed',
      'Core lesson structure completed (Numbers, Letters, Colors, Animals, Daily Habits)',
      'Adaptive difficulty algorithm logic implemented & tested',
      'Positive reward sound & visual celebration system built',
      'Sinhala voiceover and translation integration initiated',
      'Backend cloud synchronization with offline caching'
    ],
    nextSteps: [
      'Classroom usability validations with special education teachers',
      'Formal pre- and post-intervention learning improvement trials'
    ]
  },
  {
    id: 'games',
    name: 'Games and Activities Module & Evaluation',
    leadMember: 'Jayalath N. N',
    studentId: 'IT22227072',
    themeColor: 'emerald',
    description: 'A sensory-safe suite of gamified cognitive exercises, emotion recognition scenarios, and interactive social stories equipped with continuous back-end analytics to quantify learning gains.',
    researchProblem: 'Children with ASD struggle with cognitive focus, recognizing emotions, and understanding social rules. Most apps feature rigid gameplay with no emotional context and lack meaningful analytics to track genuine developmental progress over time.',
    researchQuestion: 'How can adaptive, gamified mini-games and activities effectively support the cognitive, emotional, and social development of children with ASD, while tracking their learning progress over time?',
    researchObjective: 'To create an engaging, adaptive Games and Activities module that improves thinking, emotion identification, and social choices for children aged 5–10 using personalized gameplay and data analytics.',
    noveltyFeatures: [
      'Multi-category ASD-friendly mini-games: matching, color/shape sorting, gentle memory grids',
      'Emotion recognition scenarios identifying facial expressions and situational context',
      'Daily life social story exercises teaching real-world routines like sharing and waiting turns',
      'Comprehensive telemetry logging accuracy, latency, attempt patterns, and attention span'
    ],
    technologies: ['React Native', 'Firebase Firestore', 'Firebase Cloud Functions', 'Expo', 'SQLite', 'Postman'],
    completedFeatures: [
      'Cognitive mini-games engine implemented (Matching, Sorting, Memory, Pattern Recognition)',
      'Real-time difficulty adjustment engine connected to gameplay latency',
      'Multi-tier reward & collectible sticker system deployed',
      'Sensory-muted palette and non-flashing animation guidelines enforced',
      'Voiceover instructions and step-by-step audio prompts recorded'
    ],
    nextSteps: [
      'Expansion of Sinhala-language interactive social stories',
      'Controlled clinical evaluation with parent & therapist cohorts'
    ]
  },
  {
    id: 'routine',
    name: 'Daily Routine Support Module',
    leadMember: 'Premarathna G.D.B.S',
    studentId: 'IT22156488',
    themeColor: 'purple',
    description: 'An intelligent visual schedule manager and transition companion that pairs customizable pictographic timelines with proactive calming exercises and optional physiological arousal awareness.',
    researchProblem: 'Children with ASD experience severe anxiety and distress during activity transitions (e.g., from playtime to school or dinner to bed). Traditional static paper schedules cannot adapt in real-time or assist the child when overstimulated.',
    researchQuestion: 'How can a mobile app help children with ASD in Sri Lanka follow daily routines independently, reduce stress during transitions, and give calming support using visual schedules, smart reminders, and stress detection?',
    researchObjective: 'To develop a Daily Routine Support Module that helps children follow daily routines comfortably, reduce anxiety during transitions, and build independence using visual schedules, reminders, and calming tools.',
    noveltyFeatures: [
      'Visual schedule builder for caregivers with child-friendly icon cards and voice instructions',
      'Gradual countdown reminders with gentle audio-visual transition alerts',
      'Integrated calming toolkit (deep breathing animations, nature audio, relaxing visuals)',
      'Optional wearable sensor integration to detect elevated physiological arousal conservatively'
    ],
    technologies: ['React Native', 'Node.js Express', 'Firebase Firestore', 'SQLite', 'Flutter/Expo', 'Postman'],
    completedFeatures: [
      'Caregiver visual schedule configuration dashboard completed',
      'Visual timeline and child-facing routine checklist operational',
      'Calming activity library (4 breathing guides, 6 soothing audio tracks, slow visuals)',
      'Large child-accessible touch target interface verified',
      'Voiceover reminders for daily routines recorded in Sinhala & English'
    ],
    nextSteps: [
      'Advanced mood-correlated schedule suggestions',
      'Field testing with family caregivers in Colombo and Western Province'
    ]
  },
  {
    id: 'behavior',
    name: 'Behavioral Training Module',
    leadMember: 'Savindi W.K.D',
    studentId: 'IT22181374',
    themeColor: 'amber',
    description: 'A cognitive and behavioral training module focusing on fine-motor dexterity, following basic instructions, and practicing social interactions through safe virtual roleplay scenarios.',
    researchProblem: 'Fine motor control (handwriting, buttoning clothes) and social cues (greeting, turn-taking) are difficult for children with ASD. In Sri Lanka, occupational and behavioral therapies are concentrated in metropolitan centers and prohibitively expensive for rural families.',
    researchQuestion: 'How can a mobile app effectively teach social skills (command response and greeting) and fine motor dexterity to children with ASD in Sri Lanka using real-time assistive camera and voice feedback?',
    researchObjective: 'To create a Cognitive and Behavioral Training Module with adaptive mobile games that improve fine motor dexterity, visual attention, and recognition of appropriate behaviors for children with ASD in Sri Lanka.',
    noveltyFeatures: [
      'Fine motor tracing exercises with cultural Sri Lankan motifs and letter strokes',
      'Command response practice (sit, sleep, point) with real-time encouraging feedback',
      'Greeting and polite interaction training scenarios (good morning, thank you, sharing)',
      'Assistive computer-vision feedback with non-judgmental, gentle reinforcement'
    ],
    technologies: ['React Native', 'Node.js', 'Firebase Authentication & Firestore', 'OpenCV / MediaPipe', 'Expo', 'SQLite'],
    completedFeatures: [
      'Fine motor stroke tracing activities designed with cultural themes',
      'Command response and greeting training roleplay scenes programmed',
      'Behavioral discrimination cards (appropriate vs inappropriate actions)',
      'Adaptive difficulty scoring based on tracing accuracy and response timing',
      'Caregiver progress monitoring charts'
    ],
    nextSteps: [
      'Incorporate additional Sinhala audio guides for rural community trials',
      'Usability and stress-reduction validation with primary school support units'
    ]
  }
];

export const RESEARCH_PAPERS: LiteraturePaper[] = [
  {
    id: 'lit-1',
    citation: '[1] Mechling & Savidge (2011)',
    authors: 'L. Mechling and E. Savidge',
    year: 2011,
    title: 'Using a personal digital assistant to increase completion of novel tasks and independent transitioning of students with autism spectrum disorder',
    source: 'Journal of Autism and Developmental Disorders, vol. 41, no. 5, pp. 687–704',
    focusArea: 'Visual Schedules & Transition Support',
    keyFindings: 'Demonstrated that handheld digital prompts and visual schedules significantly improved task completion and reduced reliance on adult supervision.',
    limitationIdentified: 'Used static devices without adaptive difficulty, real-time stress detection, or multilingual localization for low-resource environments.',
    url: 'https://doi.org/10.1007/s10803-010-1088-6'
  },
  {
    id: 'lit-2',
    citation: '[2] Knight et al. (2015)',
    authors: 'V. Knight, B. McKissick, and A. Saunders',
    year: 2015,
    title: 'A review of technology-based interventions to teach academic skills to students with autism spectrum disorder',
    source: 'Journal of Autism and Developmental Disorders, vol. 43, no. 11, pp. 2628–2648',
    focusArea: 'Academic Technology Interventions',
    keyFindings: 'Confirmed high effectiveness of multimedia and digital instructional formats for literacy and numeracy learning among autistic students.',
    limitationIdentified: 'Isolated academic tasks without integrating daily routines, behavioral feedback, or parent-mediated real-time adjustments.',
    url: 'https://doi.org/10.1007/s10803-013-1811-9'
  },
  {
    id: 'lit-3',
    citation: '[3] Goodwin et al. (2018)',
    authors: 'M. Goodwin, M. Velicer, and C. Intille',
    year: 2018,
    title: 'Wearable sensor technology for monitoring autism-related behaviors and emotional states',
    source: 'IEEE Transactions on Affective Computing, vol. 9, no. 2, pp. 1–12',
    focusArea: 'Physiological Sensing & Emotion Detection',
    keyFindings: 'Wearable sensors tracking heart rate and motion patterns can identify autonomic arousal prior to observable behavioral meltdowns.',
    limitationIdentified: 'High rate of false positives when used as a clinical diagnostic tool; must be treated as gentle assistive cues rather than medical labeling.',
    url: 'https://doi.org/10.1109/TAFFC.2018.2818625'
  },
  {
    id: 'lit-4',
    citation: '[4] Duda et al. (2016)',
    authors: 'M. Duda, R. Ma, N. Haber, and D. P. Wall',
    year: 2016,
    title: 'Use of machine learning for behavioral distinction of autism and ADHD',
    source: 'Translational Psychiatry, vol. 6, no. 2, e732',
    focusArea: 'Machine Learning & Behavioral Analysis',
    keyFindings: 'Machine learning algorithms can evaluate behavioral markers to tailor intervention pathways effectively.',
    limitationIdentified: 'Complex opaque models create distrust among parents; transparent rule-based systems are far more acceptable in home therapy.',
    url: 'https://doi.org/10.1038/tp.2015.221'
  },
  {
    id: 'lit-5',
    citation: '[5] Perera et al. (2016)',
    authors: 'H. Perera, K. C. Jeewandara, S. Seneviratne, and C. Guruge',
    year: 2016,
    title: 'Outcome of home-based early intervention for autism in Sri Lanka: Follow-up of a cohort and comparison with a nonintervention group',
    source: 'BioMed Res. Int., Art. no. 3284087',
    focusArea: 'Sri Lankan Local Clinical Context',
    keyFindings: 'Home-based early intervention conducted by parents in Sri Lanka yields marked developmental improvements despite scarcity of specialist clinics.',
    limitationIdentified: 'Relied purely on manual paper-based tracking; highlighted urgent necessity for affordable digital support systems in Sri Lanka.',
    url: 'https://doi.org/10.1155/2016/3284087'
  },
  {
    id: 'lit-6',
    citation: '[6] Bandara et al. - SIPNENA (2020)',
    authors: 'S. Bandara, S. Pathirana, et al.',
    year: 2020,
    title: 'SIPNENA: Mobile platform for Sinhala-speaking autistic children',
    source: 'International Journal of Healthcare Information Systems',
    focusArea: 'Sinhala Language Localization',
    keyFindings: 'Demonstrated that mother-tongue Sinhala language and local cultural context substantially improve communication comprehension in autistic children.',
    limitationIdentified: 'Focused exclusively on speech therapy; lacked visual routines, AR-enhanced lessons, cognitive games, and sensor integration.',
    url: 'https://doi.org/10.1145/3411764'
  }
];

export const RESEARCH_GAP_MATRIX = [
  { feature: 'Focus on Daily Routine Scheduling', p1: true, p2: true, p3: true, p4: false, p5: false, p6: true, proposed: true },
  { feature: 'Visual Schedules & Gentle Reminders', p1: true, p2: true, p3: true, p4: false, p5: false, p6: false, proposed: true },
  { feature: 'Emotional Stress Detection via Sensors', p1: false, p2: false, p3: false, p4: true, p5: true, p6: false, proposed: true },
  { feature: 'Caregiver Routine Customization', p1: false, p2: true, p3: false, p4: false, p5: false, p6: false, proposed: true },
  { feature: 'Adaptive Difficulty on Performance Data', p1: false, p2: false, p3: false, p4: false, p5: false, p6: true, proposed: true },
  { feature: 'Positive Reward & Gamification System', p1: true, p2: true, p3: false, p4: false, p5: true, p6: false, proposed: true },
  { feature: 'AR 3D Interactive Educational Objects', p1: false, p2: false, p3: false, p4: true, p5: true, p6: false, proposed: true },
  { feature: 'Bilingual Localization (Sinhala & English)', p1: false, p2: false, p3: false, p4: false, p5: false, p6: true, proposed: true },
  { feature: 'All-in-One Integrated Mobile Platform', p1: false, p2: false, p3: false, p4: false, p5: false, p6: false, proposed: true },
  { feature: 'Offline-First Low-Cost Device Operation', p1: false, p2: false, p3: false, p4: false, p5: false, p6: false, proposed: true }
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: 'm1',
    title: 'Project Proposal Submission',
    deadline: '2026-03-15',
    dateDisplay: '15th March 2026',
    allocatedMarks: '6%',
    percentage: 6,
    status: 'completed',
    category: 'document',
    description: 'Submission of formal Topic Assessment Form (TAF) and individual component proposal reports detailing research objectives, background, methodology, and feasibility.',
    deliverables: ['Topic Assessment Form (TAF V2.0)', 'Individual Project Proposal Reports (4 Documents)', 'Ethical clearance outline and supervisor declaration'],
    feedbackNotes: 'Proposal approved by supervisory panel with positive endorsement on clinical relevance and Sri Lankan localization.'
  },
  {
    id: 'm2',
    title: 'Proposal Presentation',
    deadline: '2026-03-18',
    dateDisplay: '16th – 18th March 2026',
    allocatedMarks: '6%',
    percentage: 6,
    status: 'completed',
    category: 'presentation',
    description: 'Formal oral defense in front of the academic evaluation panel presenting literature analysis, system architecture, research gaps, and division of individual sub-objectives.',
    deliverables: ['Proposal Presentation Slide Deck', 'Oral defense of individual modules', 'Work Breakdown Structure (WBS) & Gantt chart'],
    feedbackNotes: 'Panel commended the clear division of technical tasks and emphasized keeping emotion detection strictly assistive rather than diagnostic.'
  },
  {
    id: 'm3',
    title: 'Check List Submission',
    deadline: '2026-05-13',
    dateDisplay: '13th May 2026',
    allocatedMarks: 'Required',
    status: 'completed',
    category: 'checklist',
    description: 'Mid-term verification checklist verifying initial codebase setup, GitHub repository branching, preliminary UI mockups, and caregiver survey design.',
    deliverables: ['Progress checklist signed by supervisor', 'GitHub repository setup evidence', 'UI wireframes and prototype flowcharts'],
    feedbackNotes: 'All checklist milestones verified by supervisor Mrs. Uthpala Samarakoon.'
  },
  {
    id: 'm4',
    title: 'Progress Presentation 1 (50%)',
    deadline: '2026-05-13',
    dateDisplay: '11th – 13th May 2026',
    allocatedMarks: '15%',
    percentage: 15,
    status: 'completed',
    category: 'presentation',
    description: 'Presentation of 50% implementation milestones: UI interactive mockups, core lesson structure, initial mini-game mechanics, and Firebase backend integration.',
    deliverables: ['Progress Presentation 1 Deck', 'Working prototype of Personalized Learning & Routine screens', 'Database schema & API endpoints demonstration'],
    feedbackNotes: 'Commended on early UI accessibility compliance (calm colors, muted audio). Advised to focus next on adaptive difficulty algorithms.'
  },
  {
    id: 'm5',
    title: 'Progress Presentation 2 (90%)',
    deadline: '2026-09-02',
    dateDisplay: '31st August – 02nd September 2026',
    allocatedMarks: '18%',
    percentage: 18,
    status: 'completed',
    category: 'presentation',
    isHighlighted: true,
    description: 'Major capstone review presenting near-complete (90%) system implementation across all four sub-modules: Adaptive difficulty engine, AR lessons, Routine countdowns, and Game analytics.',
    deliverables: [
      'Progress Presentation 2 Deck (R26-IT-037)',
      'Live demonstration of all 4 working modules',
      'Integration testing reports and preliminary usability analytics',
      'Initial feedback from special education teachers and parents'
    ],
    feedbackNotes: 'Successfully completed! Evaluators highlighted strong technical integration across all 4 modules. Recommended finalizing Draft Thesis and preparation for research paper publication.'
  },
  {
    id: 'm6',
    title: 'Draft Thesis Submission',
    deadline: '2026-10-11',
    dateDisplay: '11th October 2026',
    allocatedMarks: 'Review Stage',
    status: 'completed',
    category: 'document',
    description: 'Submission of comprehensive draft thesis documents comprising the main cohesive group dissertation alongside individual technical reports for each researcher.',
    deliverables: ['Main Group Draft Thesis Document', '4 Individual Chapter Draft Theses', 'Turnitin Similarity Verification Reports'],
    feedbackNotes: 'Draft theses compiled and uploaded to university SharePoint repository for supervisor final review.'
  },
  {
    id: 'm7',
    title: 'Website Submission',
    deadline: '2026-10-11',
    dateDisplay: '11th October 2026',
    allocatedMarks: '2%',
    percentage: 2,
    status: 'completed',
    category: 'evaluation',
    isHighlighted: true,
    description: 'Delivery of the dedicated academic research information website conforming strictly to SLIIT CDAP guidelines (domain documentation, deliverables, downloads, team, and milestones).',
    deliverables: ['Comprehensive Academic Research Portal', 'Full documentation download repository', 'Interactive system architecture & simulation viewer', 'Mobile-responsive deployment'],
    feedbackNotes: 'Current milestone active. Website developed to provide transparent academic documentation of research.'
  },
  {
    id: 'm8',
    title: 'Final Check List Submission',
    deadline: '2026-10-14',
    dateDisplay: '14th October 2026',
    allocatedMarks: 'Required',
    status: 'in_progress',
    category: 'checklist',
    description: 'Final checklist submission confirming completeness of code deliverables, documentation, viva readiness, and supervisor sign-offs.',
    deliverables: ['Final Project Checklist Document', 'Supervisor certification signatures', 'Repository code freeze release tag'],
    feedbackNotes: 'Checklist compilation underway prior to final viva examination.'
  },
  {
    id: 'm9',
    title: 'Final Presentation and Viva',
    deadline: '2026-10-21',
    dateDisplay: '19th – 21st October 2026',
    allocatedMarks: '20%',
    percentage: 20,
    status: 'upcoming',
    category: 'presentation',
    description: 'Final comprehensive defense of the research project, live demonstration of complete software architecture, and viva voce with external examiners and departmental panel.',
    deliverables: ['Final Presentation Slide Deck', 'Live system demonstration under testing conditions', 'Individual oral defense of technical contributions'],
    feedbackNotes: 'Scheduled for October 2026 defense window.'
  },
  {
    id: 'm10',
    title: 'Website Evaluation & Logbook Submission',
    deadline: '2026-10-21',
    dateDisplay: '19th – 21st October 2026',
    allocatedMarks: 'Assessment',
    status: 'upcoming',
    category: 'evaluation',
    description: 'Formal academic evaluation of the project website by the CDAP grading committee along with submission of supervisor-reviewed student research logbooks.',
    deliverables: ['Live hosted portal inspection', 'Completed and verified research logbooks (all 4 members)'],
    feedbackNotes: 'Evaluated concurrently with final presentation period.'
  },
  {
    id: 'm11',
    title: 'IEEE Research Paper Submission',
    deadline: '2026-10-23',
    dateDisplay: '23rd October 2026',
    allocatedMarks: '10%',
    percentage: 10,
    status: 'upcoming',
    category: 'publication',
    description: 'Submission of formal academic research paper titled "Support System for Children With Autism Spectrum Disorder in Sri Lanka" formatted to IEEE conference standards.',
    deliverables: ['Camera-ready IEEE formatted paper PDF', 'Co-author supervisor endorsements', 'Originality and plagiarism clearance certificates'],
    feedbackNotes: 'Paper drafted following IEEE transactions template.'
  },
  {
    id: 'm12',
    title: 'Final Thesis Submission',
    deadline: '2026-10-28',
    dateDisplay: '28th October 2026',
    allocatedMarks: '23%',
    percentage: 23,
    status: 'upcoming',
    category: 'document',
    description: 'Hardbound and digital submission of the definitive final research thesis incorporating viva panel recommendations, final data analysis, and university archival copies.',
    deliverables: ['Final Thesis (Group Dissertation & 4 Individual Volumes)', 'Source code archive with reproducible setup instructions', 'Supervisor final approval forms'],
    feedbackNotes: 'Final academic milestone for the award of B.Sc. (Hons) in Information Technology.'
  },
  {
    id: 'm13',
    title: 'Research Paper Publication Evidence Submission',
    deadline: '2026-12-01',
    dateDisplay: '1st December 2026',
    allocatedMarks: 'Evidence',
    status: 'upcoming',
    category: 'publication',
    description: 'Submission of publication acceptance letter, peer review comments, and conference registration receipts for the IEEE research paper.',
    deliverables: ['Peer review acceptance letter', 'Conference registration confirmation', 'Indexed digital object identifier (DOI) proof'],
    feedbackNotes: 'Concluding research dissemination milestone.'
  }
];

export const PROJECT_DOCUMENTS: ProjectDocument[] = [
  {
    id: 'doc-charter',
    title: 'Project Charter',
    category: 'charter',
    author: 'Group R26-IT-037',
    date: 'February 2026',
    fileType: 'PDF',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQDUCqyCbhovQ7ySRfIEyxHcAZ8eBrtF-mO9Hk_IYuWiP3I?e=6yxbjL',
    description: 'Initial founding document formally establishing the scope, objectives, stakeholders, budget constraints (Rs. 150,000 total), ethical clearances, and work breakdown for the ASD support system.',
    highlights: [
      'Comprehensive project scope definition for children aged 5-10',
      'Stakeholder analysis: Children, caregivers, special educators, clinical therapists',
      'High-level risk management matrix and ethics guidelines'
    ]
  },
  {
    id: 'doc-proposal-yasanjith',
    title: 'Project Proposal Report – Personalized Learning Module',
    category: 'proposal',
    author: 'U. M. Yasanjith',
    studentId: 'IT22224484',
    date: 'March 2026',
    fileType: 'PDF',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQCpzHRFEbTGTo7sNoyRA35sAYhgvsua4SwUBTnoOQvNUAA?e=hb4WVE',
    description: 'Detailed proposal report investigating multi-objective adaptive learning algorithms, AR 3D interactive educational objects, and local cultural localization for ASD learners.',
    highlights: [
      'In-depth literature survey on adaptive learning for neurodiverse children',
      'Algorithmic design of the adaptive difficulty cost engine',
      'Hardware and software system requirements (React Native, Firebase, SQLite)'
    ]
  },
  {
    id: 'doc-proposal-jayalath',
    title: 'Project Proposal Report – Games and Activities Module',
    category: 'proposal',
    author: 'Jayalath N. N',
    studentId: 'IT22227072',
    date: 'March 2026',
    fileType: 'PDF',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQDXG61wLwmhQb09-M_Bd_C8AaYSYbDlSvKRrU5rgSE9tyQ?e=indaKL',
    description: 'Proposal report covering serious game design principles for autism, emotion recognition exercises, daily life stories, and the back-end evaluation analytics framework.',
    highlights: [
      'Evidence-based serious game mechanics for cognitive training',
      'Emotion recognition interface design using non-overstimulating visual tokens',
      'System evaluation metrics framework (engagement, usability, learning retention)'
    ]
  },
  {
    id: 'doc-proposal-premarathna',
    title: 'Project Proposal Report – Daily Routine Support Module',
    category: 'proposal',
    author: 'Premarathna G.D.B.S',
    studentId: 'IT22156488',
    date: 'March 2026',
    fileType: 'PDF',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQBZphv0CmxrR7yy-zISckUcAZTVoyaZMh60-wgFUhR_s_I?e=gStoPA',
    description: 'Proposal report presenting the visual daily schedule builder, gentle transition countdowns, calming activity library, and wearable sensor integration.',
    highlights: [
      'Analysis of transition anxiety and meltdown prevention techniques',
      'Architecture of the visual schedule manager with caregiver remote control',
      'Conservative physiological arousal detection protocol'
    ]
  },
  {
    id: 'doc-thesis-main',
    title: 'Main Draft Thesis Document (Group Dissertation)',
    category: 'thesis',
    author: 'Group R26-IT-037',
    date: 'October 2026',
    fileType: 'DOCX',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:w:/g/personal/it22224484_my_sliit_lk/IQDSbkQycUMDSaELT_53GEzLARXlzjwgB5Mzp1v9s6vVLmQ?e=fvk4j3',
    description: 'The master comprehensive draft thesis synthesizing the entire research endeavor, overall system architecture, cross-module communication, and collective evaluation findings.',
    highlights: [
      'Comprehensive system architecture uniting all 4 support dimensions',
      'End-to-end data pipeline from local device storage to Firebase cloud',
      'Synthesized evaluation results across usability, engagement, and accessibility'
    ]
  },
  {
    id: 'doc-thesis-yasanjith',
    title: 'Draft Thesis – Personalized Learning Module',
    category: 'thesis',
    author: 'U. M. Yasanjith',
    studentId: 'IT22224484',
    date: 'October 2026',
    fileType: 'DOCX',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:w:/g/personal/it22224484_my_sliit_lk/IQBgw5MfFFJ0RKQJR93pJm5lAaZxITpCbiUp2JAZ8ASjYfQ?e=DLu4bQ',
    description: 'Technical dissertation volume documenting implementation of the adaptive lesson engine, AR visual models, Sinhala speech datasets, and experimental testing results.',
    highlights: [
      'Detailed implementation of rule-based adaptive difficulty logic',
      'Augmented reality rendering performance analysis on low-end Android smartphones',
      'Usability survey results from special education instructors'
    ]
  },
  {
    id: 'doc-thesis-jayalath',
    title: 'Draft Thesis – Games and Activities Module',
    category: 'thesis',
    author: 'Jayalath N. N',
    studentId: 'IT22227072',
    date: 'October 2026',
    fileType: 'DOCX',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:w:/g/personal/it22224484_my_sliit_lk/IQCetXX7npAeS4oXj_dtigtSAaj8zThkdI7Q42VJ9GR8_RA?e=ie0Cfw',
    description: 'Technical dissertation volume presenting evaluation analytics algorithms, game interaction telemetry, emotion identification tasks, and child engagement data.',
    highlights: [
      'Empirical analysis of cognitive game performance across trial sessions',
      'Evaluation of positive reinforcement mechanisms on attention maintenance',
      'Caregiver satisfaction questionnaire outcomes'
    ]
  },
  {
    id: 'doc-thesis-savindi',
    title: 'Draft Thesis – Behavioral Training Module',
    category: 'thesis',
    author: 'W. K. D. Savindi',
    studentId: 'IT22181374',
    date: 'October 2026',
    fileType: 'DOCX',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:w:/g/personal/it22224484_my_sliit_lk/IQA2xp55MnwMRZYP5JkfXx6QAUtcTOXgQPvCaBwHKVlVJ_Q?e=xXoONF',
    description: 'Technical dissertation volume exploring fine motor dexterity stroke tracing, command response scenarios, computer vision assistive integration, and social training.',
    highlights: [
      'Stroke deviation analysis algorithms for fine motor tracing evaluation',
      'Virtual scenario roleplay architecture for greeting and command compliance',
      'Ethical considerations in camera-based interaction with autistic minors'
    ]
  },
  {
    id: 'doc-thesis-premarathna',
    title: 'Draft Thesis – Daily Routine Support Module',
    category: 'thesis',
    author: 'Premarathna G.D.B.S',
    studentId: 'IT22156488',
    date: 'October 2026',
    fileType: 'DOCX',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:w:/g/personal/it22224484_my_sliit_lk/IQDAwKgEdLGTQKjzUZhOns-ZAdC2zu_mNtOGzb1x7LYaD2o?e=LR2s7R',
    description: 'Technical dissertation volume detailing visual routine scheduling, transition countdown timers, calming audio-visual intervention design, and caregiver controls.',
    highlights: [
      'Caregiver routine editor design patterns and visual timeline rendering',
      'Calming protocol effectiveness during simulated high-stress activity transitions',
      'Data protection compliance under Sri Lanka Personal Data Protection Act No. 9'
    ]
  },
  {
    id: 'doc-ieee-paper',
    title: 'IEEE Research Paper – Support System for Children With Autism Spectrum Disorder in Sri Lanka',
    category: 'paper',
    author: 'U. M. Yasanjith, Jayalath N. N, G. D. B. S. Premarathna, W. K. D. Savindi, Uthpala Samarakoon, Suriyaa Kumari',
    date: 'October 2026',
    fileType: 'PDF',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22224484_my_sliit_lk/IQAG-F69EUv9QJ7Ohu61l8f7Acd68aYNsuDcfJU5of_oPEs?e=DP66Qd',
    description: 'Formal 6-page IEEE peer-reviewed format manuscript presenting the conceptual framework, system architecture, Sri Lankan socio-clinical context, and proposed evaluation methodology.',
    highlights: [
      'Full IEEE conference publication structure with abstract, methodology, and citations',
      'Addresses digital divide in developing countries with low-resource phone support',
      'Presents comprehensive system architecture linking all 4 modules'
    ]
  }
];

export const PRESENTATIONS: PresentationDeck[] = [
  {
    id: 'pres-proposal',
    title: 'Project Proposal Presentation',
    date: '16th – 18th March 2026',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22224484_my_sliit_lk/IQBTxkr8OylmR6FZxtPG0v9hAZKvM1m8m_VNX6SEEQcPu6I?e=i6DKWD',
    status: 'completed',
    allocatedMarks: '6%',
    slideCount: 28,
    summary: 'The initial project defense presenting the motivation, 1 in 93 prevalence in Sri Lanka, existing system limitations, four proposed modules, and research methodology.',
    agendaItems: [
      'Introduction & ASD prevalence in Sri Lanka',
      'Research Problem, Questions, and Main Objectives',
      'Existing solutions & identified literature gap (Table 1.1)',
      'Sub-objectives allocated to each group member',
      'Proposed system architecture & initial WBS / Gantt chart'
    ],
    keyTopics: ['Topic Approval', 'Architecture Definition', 'Resource Allocation']
  },
  {
    id: 'pres-progress-1',
    title: 'Progress Presentation 1 (50%)',
    date: '11th – 13th May 2026',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22224484_my_sliit_lk/IQCpMKeMGH6LS73uvI1qByKZAd-p3MboOU5jtn2ITqitbtc?e=I1Nlzy',
    status: 'completed',
    allocatedMarks: '15%',
    slideCount: 34,
    summary: 'Demonstrated 50% milestone progress including mobile UI prototype, database schemas in Firebase, core lesson content, and initial mini-game mechanics.',
    agendaItems: [
      'Module status review (Personalized Learning, Routine, Games, Behavior)',
      'Mobile interface UI demos (Child-facing & Parent dashboard)',
      'Backend REST API architecture & Firebase Firestore setup',
      'Usability guidelines implementation (sensory-friendly colors & fonts)',
      'Revised project timeline towards 90% milestone'
    ],
    keyTopics: ['50% Milestone', 'UI Prototype Demo', 'Cloud Architecture']
  },
  {
    id: 'pres-progress-2',
    title: 'Progress Presentation 2 (90%)',
    date: '31st August – 02nd September 2026',
    sharepointUrl: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22224484_my_sliit_lk/IQCpMKeMGH6LS73uvI1qByKZAd-p3MboOU5jtn2ITqitbtc?e=iHmaVU',
    status: 'completed',
    allocatedMarks: '18%',
    slideCount: 42,
    summary: 'The key 90% capstone evaluation presentation demonstrating functional cross-module integration, adaptive difficulty engine, AR object display, routine countdowns, and commercialization potential.',
    agendaItems: [
      'Comprehensive system architecture & cross-module interaction',
      'Individual module deep-dives (Yasanjith, Jayalath, Premarathna, Savindi)',
      'Novelty demonstration: Real-time difficulty logic & positive feedback',
      'Ethics, validations, and Personal Data Protection Act compliance',
      'Commercialization potential (Freemium model, SDGs 3, 4, 10, IP rights)',
      'Gantt chart status & roadmap to final submission'
    ],
    keyTopics: ['90% Milestone (Featured)', 'Live Multi-Module Demo', 'Commercialization Plan']
  },
  {
    id: 'pres-final',
    title: 'Final Presentation and Viva (In Progress)',
    date: '19th – 21st October 2026',
    sharepointUrl: '#',
    status: 'in_progress',
    allocatedMarks: '20%',
    slideCount: 45,
    summary: 'The culminating defense deck preparing for the viva voce with external examiners. Synthesizes complete system validation, usability testing results, and future research directions.',
    agendaItems: [
      'Executive research overview & project impact in Sri Lanka',
      'Live demonstration of end-to-end mobile system on Android/iOS',
      'Comprehensive evaluation results & statistical analysis',
      'Research limitations, clinical boundaries & ethical safeguards',
      'Publications, patent considerations, and long-term deployment'
    ],
    keyTopics: ['Viva Voce Preparation', 'Final System Demonstration', 'Evaluation Findings']
  }
];

export const TECHNOLOGIES_STACK = [
  {
    category: 'Mobile Application',
    items: [
      { name: 'React Native', purpose: 'Cross-platform native mobile application engine ensuring smooth 60fps performance on Android and iOS devices.' },
      { name: 'Expo Framework', purpose: 'Rapid tooling and native module access for mobile camera (AR) and sensor integration.' },
      { name: 'Sensory-Friendly UI Tokens', purpose: 'Strict calm color palette, large touch targets (≥44px), zero flashing animations to prevent overstimulation.' }
    ]
  },
  {
    category: 'Backend & Services',
    items: [
      { name: 'Node.js & Express', purpose: 'RESTful API gateway orchestrating user requests, routine updates, and personalization data.' },
      { name: 'Firebase Cloud Functions', purpose: 'Automated event triggers for schedule alerts, push notifications, and analytics rollup.' }
    ]
  },
  {
    category: 'Databases & Storage',
    items: [
      { name: 'Firebase Firestore', purpose: 'Scalable cloud NoSQL database storing child profiles, routine schedules, and encrypted progress.' },
      { name: 'Firebase Authentication', purpose: 'Secure role-based access control separating child play mode from caregiver settings.' },
      { name: 'SQLite / Local Storage', purpose: 'Local on-device persistence enabling all core lessons and routines to function without internet connectivity.' }
    ]
  },
  {
    category: 'Testing & Tooling',
    items: [
      { name: 'Postman', purpose: 'Rigorous API testing, schema validation, and endpoint stress testing.' },
      { name: 'Firebase Emulator Suite', purpose: 'Hermetic local test environment for security rules and cloud function execution.' },
      { name: 'GitHub', purpose: 'Distributed version control with collaborative pull-request workflows across all 4 researchers.' }
    ]
  }
];
