export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Team', href: '/about/our-team', description: 'Leadership, culture, and specialists behind our delivery.' },
      { label: 'Our Company', href: '/about/our-company', description: 'Our story, capabilities, and operating approach.' },
      { label: 'Dynamic Group', href: '/about/dynamic-group', description: 'The wider group vision, units, and shared strengths.' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Academy IMS', href: '/products/academy-ims', description: 'Education workflow automation from admission to result publishing.' },
      { label: 'Hospital ERP', href: '/products/hospital-erp', description: 'Connected patient, billing, lab, and pharmacy operations.' },
      { label: 'Accounting Solution', href: '/products/accounting-solution', description: 'Finance, billing, compliance, and reporting in one system.' },
      { label: 'HR and Payroll', href: '/products/hr-payroll', description: 'Attendance, salary, leave, and employee lifecycle tools.' },
      { label: 'SMS System', href: '/products/sms-system', description: 'Campaign, alert, and transactional messaging management.' },
      { label: 'Dynamic AMS', href: '/products/dynamic-ams', description: 'Association and membership administration made digital.' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blogs', href: '/resources/blogs', description: 'Product updates, explainers, and business technology articles.' },
      { label: 'Testimonials', href: '/resources/testimonials', description: 'Client voices and outcomes across industries.' },
      { label: 'Media Coverage', href: '/resources/media-coverage', description: 'Press mentions, announcements, and company highlights.' },
      { label: 'Dealership', href: '/resources/dealership', description: 'Partner with us to distribute and support our solutions.' },
    ],
  },
  { label: 'Our Client', href: '/our-client' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Account', href: '/account' },
];

export const TOP_LEVEL_PAGES = {
  about: {
    title: 'About Us',
    eyebrow: 'About Automate IT Limited',
    summary: 'We build practical business software, long-term relationships, and dependable digital services for growing organizations.',
    introTitle: 'A technology partner shaped by delivery discipline',
    introText: [
      'Automate IT Limited helps organizations modernize how they operate with software that feels clear, useful, and reliable in day-to-day work.',
      'Our teams combine product thinking, implementation experience, and support coverage so clients can launch confidently and keep improving after go-live.',
    ],
    highlights: ['Experienced cross-functional delivery team', 'ERP, web, mobile, and messaging expertise', 'Support model built around responsiveness'],
    detailCards: [
      { title: 'What We Believe', text: 'Technology should reduce complexity, not add to it. We design systems that teams can adopt quickly and use confidently.' },
      { title: 'How We Work', text: 'We start with requirements, map workflows carefully, and deliver in stages so every project stays visible and measurable.' },
      { title: 'Why Clients Stay', text: 'Clear communication, reliable support, and solutions aligned to business reality keep partnerships strong over time.' },
    ],
    pillars: ['Business-first discovery', 'Implementation ownership', 'Training and onboarding', 'Continuous support'],
    ctaTitle: 'Want to know more about how we work?',
    ctaText: 'Explore our company structure, our team, and the Dynamic Group vision from the About Us menu.',
  },
  products: {
    title: 'Products',
    eyebrow: 'Business Software Portfolio',
    summary: 'A focused suite of ERP and communication products designed for education, healthcare, finance, HR, member management, and messaging.',
    introTitle: 'Products built around real operational workflows',
    introText: [
      'Each product is shaped around a specific operational context, with modules that support the work teams actually do every day.',
      'From admissions and patient flow to accounting, payroll, and broadcast messaging, our systems aim to simplify coordination and improve reporting visibility.',
    ],
    highlights: ['Industry-specific workflows', 'Configurable modules and permissions', 'Scalable deployment and support'],
    detailCards: [
      { title: 'Fast Familiarization', text: 'Interfaces are organized around common tasks so users spend less time navigating and more time completing work.' },
      { title: 'Connected Data', text: 'Shared records, dashboards, and process visibility help departments stay aligned without duplicate entry.' },
      { title: 'Expandable Structure', text: 'Products can evolve with branch growth, new modules, and changing approval requirements.' },
    ],
    pillars: ['Education systems', 'Healthcare systems', 'Finance and HR systems', 'Association and messaging systems'],
    ctaTitle: 'Need help choosing the right product?',
    ctaText: 'Browse the product submenu to compare the right fit for your organization.',
  },
  resources: {
    title: 'Resources',
    eyebrow: 'Learning And Support',
    summary: 'Helpful materials, customer stories, media mentions, and partner information collected in one place.',
    introTitle: 'Resources that support buying, onboarding, and growth',
    introText: [
      'The resources section helps visitors understand our products, see how clients use them, and discover ways to work with us.',
      'It is organized for different stages of the relationship, from research and evaluation through implementation, advocacy, and partnership.',
    ],
    highlights: ['Learning content and explainers', 'Social proof and client outcomes', 'Press and partner materials'],
    detailCards: [
      { title: 'For New Visitors', text: 'Tutorials and blogs explain concepts, features, and implementation ideas in straightforward language.' },
      { title: 'For Decision Makers', text: 'Testimonials and media coverage provide credibility, context, and proof of execution.' },
      { title: 'For Partners', text: 'Dealership information outlines how organizations can collaborate with us in a structured way.' },
    ],
    pillars: ['Tutorials', 'Blogs', 'Testimonials', 'Media and partnership assets'],
    ctaTitle: 'Need a specific resource quickly?',
    ctaText: 'Open any item under Resources to go directly to the content category you need.',
  },
  ourClient: {
    title: 'Our Client',
    eyebrow: 'Client Relationships',
    summary: 'Organizations trust us for software that supports daily work, adapts to change, and stays backed by responsive service.',
    introTitle: 'Partnerships built on consistency and trust',
    introText: [
      'We work with clients who need dependable systems and a vendor that stays engaged beyond the initial implementation.',
      'That means listening carefully, resolving issues quickly, and improving the experience as operations evolve.',
    ],
    highlights: ['Cross-industry experience', 'Long-term support orientation', 'Solutions tailored to operational needs'],
    detailCards: [
      { title: 'Client Onboarding', text: 'We focus on implementation planning, user guidance, and practical rollout support for smoother adoption.' },
      { title: 'Retention Through Service', text: 'Strong support and incremental improvement help maintain trust after launch.' },
      { title: 'Outcome Visibility', text: 'We structure systems so teams can see work status, performance, and accountability more clearly.' },
    ],
    pillars: ['Education clients', 'Healthcare clients', 'Business clients', 'Associations and service organizations'],
    ctaTitle: 'Want to discuss your organization’s needs?',
    ctaText: 'Our team can recommend the right mix of product and service based on your workflow.',
  },
  contact: {
    title: 'Contact Us',
    eyebrow: 'Reach The Team',
    summary: 'Start a conversation about products, services, demos, support, or partnership opportunities.',
    introTitle: 'A clear path to the right conversation',
    introText: [
      'Whether you are evaluating a product, planning a custom build, or asking for support, we make it easy to connect with the right team.',
      'We use a straightforward contact experience so inquiries can move quickly from first message to useful next step.',
    ],
    highlights: ['Sales and demo inquiries', 'Support and onboarding requests', 'Partnership and dealership discussions'],
    detailCards: [
      { title: 'Quick Response Flow', text: 'Messages are grouped by need so product, service, and support conversations can be handled efficiently.' },
      { title: 'Demo Ready', text: 'We can guide you through the right product flows based on your organization size and process needs.' },
      { title: 'Project Discussions', text: 'If you need custom work, we can start with business goals, required features, and expected timeline.' },
    ],
    pillars: ['Inquiry routing', 'Demo coordination', 'Project scoping', 'Support follow-up'],
    ctaTitle: 'Ready to get started?',
    ctaText: 'Use the contact page to reach the team for your next step.',
  },
  account: {
    title: 'Account',
    eyebrow: 'Client Access',
    summary: 'A dedicated account area for support requests, product follow-up, onboarding progress, and service coordination.',
    introTitle: 'One place for ongoing client interactions',
    introText: [
      'The account experience is positioned as a practical service hub where clients can manage requests and stay informed.',
      'It supports continuity after implementation by giving teams a structured place to track support, communication, and next actions.',
    ],
    highlights: ['Support case visibility', 'Product and project follow-up', 'Structured communication flow'],
    detailCards: [
      { title: 'Ticket-Friendly Structure', text: 'Clients can use the account area to organize requests and keep conversations tied to clear status.' },
      { title: 'Implementation Follow-Up', text: 'Progress milestones, onboarding updates, and pending actions can be surfaced in one place.' },
      { title: 'Client Confidence', text: 'A well-designed account area helps reinforce that support continues after delivery.' },
    ],
    pillars: ['Support requests', 'Implementation status', 'Renewal and service follow-up', 'Knowledge access'],
    ctaTitle: 'Need account support or portal access?',
    ctaText: 'Contact the team and we can guide you to the right access path.',
  },
};

export const ABOUT_SUBPAGES = {
  'our-team': {
    title: 'Our Team',
    eyebrow: 'About Us / Our Team',
    summary: 'Designers, developers, strategists, support specialists, and coordinators working together around practical delivery.',
    introTitle: 'A team structure built for collaboration',
    introText: [
      'Our team combines product, engineering, implementation, and support capabilities so projects move smoothly from planning to launch.',
      'We work across functions to keep requirements, delivery, and client communication aligned throughout the engagement.',
    ],
    highlights: ['Cross-functional collaboration', 'Delivery and support coordination', 'Domain-focused implementation knowledge'],
    detailCards: [
      { title: 'Engineering', text: 'Builds dependable web, mobile, and platform features with attention to maintainability.' },
      { title: 'Implementation', text: 'Handles onboarding, configuration, training, and rollout planning for client teams.' },
      { title: 'Support', text: 'Keeps post-launch operations steady with issue response and guided follow-up.' },
    ],
    pillars: ['Developers', 'Design and QA', 'Implementation specialists', 'Client support'],
    ctaTitle: 'Looking for the people behind the delivery?',
    ctaText: 'Our team page highlights the collaboration structure that supports each project.',
  },
  'our-company': {
    title: 'Our Company',
    eyebrow: 'About Us / Our Company',
    summary: 'A company focused on dependable software delivery, service quality, and long-term client relationships.',
    introTitle: 'A company model built around clarity and execution',
    introText: [
      'We position ourselves as a practical technology company that helps organizations operate more efficiently through better systems.',
      'That includes product development, custom services, and ongoing support delivered with clear communication and measurable intent.',
    ],
    highlights: ['Software and service under one roof', 'Operationally focused solutions', 'Long-term growth mindset'],
    detailCards: [
      { title: 'Mission', text: 'Help organizations work better through software that is clear, capable, and dependable.' },
      { title: 'Vision', text: 'Be the technology partner businesses trust when they want both innovation and execution.' },
      { title: 'Approach', text: 'Combine thoughtful design, practical implementation, and responsive support in every engagement.' },
    ],
    pillars: ['Mission-led execution', 'Client trust', 'Solution quality', 'Continuous improvement'],
    ctaTitle: 'Want the bigger picture behind our work?',
    ctaText: 'Our company page explains the principles that shape our products and services.',
  },
  'dynamic-group': {
    title: 'Dynamic Group',
    eyebrow: 'About Us / Dynamic Group',
    summary: 'A broader brand story that connects capabilities, business units, and a shared commitment to service quality.',
    introTitle: 'A connected group with shared standards',
    introText: [
      'Dynamic Group communicates a wider ecosystem of expertise while keeping a consistent focus on execution and client support.',
      'It allows different capabilities to reinforce each other without losing the clarity of a unified service experience.',
    ],
    highlights: ['Shared operating values', 'Complementary business capabilities', 'Unified delivery standards'],
    detailCards: [
      { title: 'Brand Cohesion', text: 'A shared group identity helps communicate trust, consistency, and broader capability.' },
      { title: 'Specialized Units', text: 'Different service or product areas can grow while still aligning with the same quality expectations.' },
      { title: 'Collaborative Advantage', text: 'Combined expertise creates better outcomes for clients with multi-layered needs.' },
    ],
    pillars: ['Shared direction', 'Complementary strengths', 'Service continuity', 'Growth-ready structure'],
    ctaTitle: 'Exploring the wider Dynamic story?',
    ctaText: 'Dynamic Group shows how our broader capability stays connected by one standard of delivery.',
  },
};

export const PRODUCT_PAGES = {
  'academy-ims': {
    title: 'Academy IMS',
    eyebrow: 'Products / Academy IMS',
    summary: 'An education-focused ERP that connects admissions, academics, fees, attendance, communication, and reporting.',
    introTitle: 'A structured system for academic operations',
    introText: [
      'Academy IMS is designed for schools, colleges, and training institutions that need better visibility across academic and administrative work.',
      'It supports connected workflows so admissions, routine operations, and communication all stay organized in one platform.',
    ],
    highlights: ['Admission to graduation support', 'Parent and student communication', 'Academic records and reporting'],
    detailCards: [
      { title: 'Academic Control', text: 'Manage routine academic operations with clearer schedules, records, and process tracking.' },
      { title: 'Administrative Efficiency', text: 'Reduce manual coordination around fees, attendance, and staff communication.' },
      { title: 'Better Visibility', text: 'Give leadership teams a stronger view of day-to-day performance and exceptions.' },
    ],
    pillars: ['Admissions', 'Attendance', 'Fees', 'Results and communication'],
    ctaTitle: 'Want to see Academy IMS in action?',
    ctaText: 'Contact us for a tailored walkthrough based on your institution type.',
  },
  'hospital-erp': {
    title: 'Hospital ERP',
    eyebrow: 'Products / Hospital ERP',
    summary: 'A connected hospital management platform for registration, billing, departments, reporting, and operational coordination.',
    introTitle: 'A better flow for patient and operational work',
    introText: [
      'Hospital ERP supports institutions that need smoother movement between front-desk processes, departments, and management oversight.',
      'By keeping patient and operational data connected, the system helps reduce delays and improve coordination across teams.',
    ],
    highlights: ['Department coordination', 'Billing and operational flow', 'Management-level reporting'],
    detailCards: [
      { title: 'Front Desk Efficiency', text: 'Help registration and routing happen faster and with less confusion.' },
      { title: 'Department Connectivity', text: 'Support information flow between units that depend on shared records.' },
      { title: 'Operational Reporting', text: 'Surface the metrics administrators need to monitor activity and performance.' },
    ],
    pillars: ['Registration', 'Billing', 'Department workflow', 'Reporting'],
    ctaTitle: 'Need a hospital-focused workflow demo?',
    ctaText: 'We can map the system against your facility’s process model.',
  },
  'accounting-solution': {
    title: 'Accounting Solution',
    eyebrow: 'Products / Accounting Solution',
    summary: 'A finance and accounting platform for billing, transactions, records, compliance support, and reporting clarity.',
    introTitle: 'Accounting operations with stronger visibility',
    introText: [
      'Our accounting solution is built for organizations that need control over financial processes without relying on fragmented spreadsheets and manual coordination.',
      'It supports day-to-day recording, reporting, and operational discipline so finance teams can work with greater confidence.',
    ],
    highlights: ['Billing and transaction tracking', 'Structured reporting output', 'Workflow support for finance teams'],
    detailCards: [
      { title: 'Day-to-Day Accounting', text: 'Keep routine finance work structured, searchable, and easier to review.' },
      { title: 'Management Reporting', text: 'Create a stronger line of sight between finance activity and business decisions.' },
      { title: 'Compliance Readiness', text: 'Support better documentation and reporting consistency across key activities.' },
    ],
    pillars: ['Billing', 'Transactions', 'Ledger structure', 'Reports'],
    ctaTitle: 'Comparing finance platforms?',
    ctaText: 'We can show how the accounting solution fits your workflow and reporting needs.',
  },
  'hr-payroll': {
    title: 'HR and Payroll',
    eyebrow: 'Products / HR and Payroll',
    summary: 'A workforce platform for employee records, attendance, leave, payroll processing, and HR process visibility.',
    introTitle: 'People operations organized in one place',
    introText: [
      'HR and Payroll helps organizations manage employee lifecycle tasks with less duplication and stronger process consistency.',
      'It gives HR and finance teams a clearer structure for routine approvals, payroll preparation, and workforce record management.',
    ],
    highlights: ['Attendance and leave coordination', 'Payroll processing support', 'Employee record visibility'],
    detailCards: [
      { title: 'Workforce Records', text: 'Keep employee information easy to access and maintain in a structured system.' },
      { title: 'Routine HR Processes', text: 'Support daily approvals, attendance review, and leave handling with more clarity.' },
      { title: 'Payroll Confidence', text: 'Organize payroll-related data so salary processing is easier to manage and verify.' },
    ],
    pillars: ['Employee data', 'Attendance', 'Leave', 'Payroll'],
    ctaTitle: 'Need a better HR workflow?',
    ctaText: 'We can tailor the platform walkthrough to your company structure and payroll process.',
  },
  'sms-system': {
    title: 'SMS System',
    eyebrow: 'Products / SMS System',
    summary: 'A communication product for alerts, promotions, reminders, and operational messaging at scale.',
    introTitle: 'Fast communication for time-sensitive workflows',
    introText: [
      'The SMS System is built for organizations that need dependable outbound communication for updates, reminders, and campaigns.',
      'It helps teams organize messaging activity, maintain audience lists, and communicate quickly when timing matters.',
    ],
    highlights: ['Bulk campaign messaging', 'Transactional alerts and reminders', 'Audience and message organization'],
    detailCards: [
      { title: 'Campaign Reach', text: 'Coordinate broadcast messaging for promotions, notices, and announcements efficiently.' },
      { title: 'Operational Alerts', text: 'Send timely reminders and status updates that support ongoing workflows.' },
      { title: 'Communication Control', text: 'Keep content, audiences, and messaging activity easier to manage over time.' },
    ],
    pillars: ['Promotional SMS', 'Transactional SMS', 'Audience management', 'Message tracking'],
    ctaTitle: 'Planning large-scale messaging?',
    ctaText: 'Talk with us about how the SMS System fits your engagement or notification needs.',
  },
  'dynamic-ams': {
    title: 'Dynamic AMS',
    eyebrow: 'Products / Dynamic AMS',
    summary: 'Association management software for memberships, records, communication, subscriptions, and organizational coordination.',
    introTitle: 'Membership operations with less manual overhead',
    introText: [
      'Dynamic AMS supports associations, clubs, organizations, and member-driven groups that need clearer administration and better communication.',
      'It brings member records and recurring operational work into one place so coordination becomes easier and more transparent.',
    ],
    highlights: ['Member record management', 'Subscription and communication support', 'Administrative visibility for organizers'],
    detailCards: [
      { title: 'Member Organization', text: 'Keep profiles, history, and status easier to track across the membership lifecycle.' },
      { title: 'Administrative Simplicity', text: 'Reduce manual work around renewals, updates, and general coordination.' },
      { title: 'Stronger Engagement', text: 'Support more consistent communication between the organization and its members.' },
    ],
    pillars: ['Members', 'Subscriptions', 'Communication', 'Coordination'],
    ctaTitle: 'Looking for a membership-focused platform?',
    ctaText: 'We can walk you through Dynamic AMS based on your association model.',
  },
};

export const RESOURCE_SUBPAGES = {
  blogs: {
    title: 'Blogs',
    eyebrow: 'Resources / Blogs',
    summary: 'Articles that explain product updates, implementation thinking, industry trends, and business technology topics.',
    introTitle: 'A place for ideas, updates, and useful context',
    introText: [
      'Blogs help visitors stay informed about what we are building, how clients use it, and where technology can make a difference.',
      'They also support trust by showing how we think about product decisions, workflows, and digital transformation topics.',
    ],
    highlights: ['Product announcements and explainers', 'Business technology insight', 'Implementation-oriented content'],
    detailCards: [
      { title: 'Product Stories', text: 'Explain improvements, launches, and practical use cases in a way buyers can understand.' },
      { title: 'Industry Perspective', text: 'Share thinking that helps organizations connect tools with business needs.' },
      { title: 'SEO Support', text: 'Consistent blog content also strengthens discoverability and thought leadership.' },
    ],
    pillars: ['Updates', 'Explainers', 'Industry perspective', 'Implementation ideas'],
    ctaTitle: 'Looking for recent thinking or updates?',
    ctaText: 'Blogs are ideal for visitors who want broader context before making a decision.',
  },
  testimonials: {
    title: 'Testimonials',
    eyebrow: 'Resources / Testimonials',
    summary: 'Client stories and endorsements that show how our products and services perform in real working environments.',
    introTitle: 'Proof through client experience',
    introText: [
      'Testimonials help prospective clients understand the value of our work from the perspective of organizations already using it.',
      'They add credibility by showing that the systems hold up in real operational settings, not just in demonstrations.',
    ],
    highlights: ['Client voice and trust signals', 'Real-world outcome stories', 'Cross-industry credibility'],
    detailCards: [
      { title: 'Decision Support', text: 'Buyers gain confidence when they can see how other organizations describe the experience.' },
      { title: 'Outcome Visibility', text: 'Stories help make product and service value easier to understand.' },
      { title: 'Trust Building', text: 'Consistent positive feedback strengthens the overall brand impression.' },
    ],
    pillars: ['Client voice', 'Use-case evidence', 'Outcome snapshots', 'Trust reinforcement'],
    ctaTitle: 'Want to see how others describe working with us?',
    ctaText: 'Testimonials show the practical results behind the promise.',
  },
  'media-coverage': {
    title: 'Media Coverage',
    eyebrow: 'Resources / Media Coverage',
    summary: 'Press mentions, announcements, and external recognition that reflect the visibility of our work and brand.',
    introTitle: 'External visibility that reinforces trust',
    introText: [
      'Media coverage helps communicate that our work is recognized outside our own channels.',
      'It supports credibility by connecting the company to public announcements, stories, and moments of industry visibility.',
    ],
    highlights: ['Press mentions', 'Recognition and announcements', 'Brand credibility support'],
    detailCards: [
      { title: 'Public Trust', text: 'External mentions can strengthen confidence among new prospects and partners.' },
      { title: 'Milestone Visibility', text: 'Coverage highlights launches, growth, and notable company activity.' },
      { title: 'Brand Context', text: 'Media stories help frame the company within the broader business landscape.' },
    ],
    pillars: ['Announcements', 'Press mentions', 'Recognition', 'Brand visibility'],
    ctaTitle: 'Looking for company highlights in the public sphere?',
    ctaText: 'Media coverage gives a wider view of how the brand is being seen and discussed.',
  },
  dealership: {
    title: 'Dealership',
    eyebrow: 'Resources / Dealership',
    summary: 'Information for organizations interested in representing, distributing, or supporting our products in the market.',
    introTitle: 'A partnership path for growth-minded collaborators',
    introText: [
      'The dealership page introduces how partners can work with us to expand product reach and local support capability.',
      'It is structured to speak to organizations that want a clear, credible, and commercially aligned partnership model.',
    ],
    highlights: ['Channel partnership opportunity', 'Support and market collaboration', 'Growth-oriented alignment'],
    detailCards: [
      { title: 'Market Expansion', text: 'Partners can help bring solutions to regions, sectors, or audiences with local familiarity.' },
      { title: 'Structured Collaboration', text: 'A clear dealership model helps define expectations and support responsibilities.' },
      { title: 'Shared Opportunity', text: 'Partnership works best when both sides can grow through strong service and local execution.' },
    ],
    pillars: ['Partner eligibility', 'Collaboration model', 'Market support', 'Growth alignment'],
    ctaTitle: 'Interested in becoming a dealership partner?',
    ctaText: 'Use the contact page to begin the partnership discussion.',
  },
};

export const ABOUT_DETAIL_PAGES = {
  'our-team': {
    showHero: false,
    showIntro: false,
    heroTitle: '',
    heroSubtitle: '',
    badgeItems: [],
    introTitle: '',
    introText: [
      '',
    ],
    showCta: false,
    teamSectionLabel: '',
    teamSectionTitle: 'Our Best Expertise',
    teamSectionDescription: 'When your mission is to be better, faster and smarter, you need the best people driving your vision forward.',
    teamMembers: [
      {
        id: 'deepak-sah',
        name: 'Deepak Sah',
        position: 'Chief Executive Officer',
        photo: '',
        speech: 'For many years we have witnessed consistent growth and achieved long-term success.',
        fullSpeech: 'For the last decade, Dynamic Technosoft has provided the Bangladeshi market with unique IT services that have allowed various businesses to maximize their profit. For many years we have witnessed consistent growth and achieved long-term success.',
        summary: '',
      },
      {
        id: 'sachin-sah',
        name: 'Sachin Sah',
        position: 'Chief Technical Officer',
        photo: '',
        speech: 'Technology should make business simpler, stronger, and more dependable.',
        fullSpeech: 'Technology should make business simpler, stronger, and more dependable. At Dynamic Technosoft, we focus on building modern web solutions that are reliable, scalable, and practical for real business operations. Our goal is to combine smart engineering with clear execution so clients can grow with confidence.',
        summary: 'Guides architecture, engineering standards, and product quality.',
      },
      {
        id: 'arjun-sah',
        name: 'Arjun Sah',
        position: 'Chief Operating Officer',
        photo: '',
        speech: 'Operational excellence turns a good solution into a successful client experience.',
        fullSpeech: 'Operational excellence turns a good solution into a successful client experience. We work to keep our projects organized, responsive, and outcome-focused from planning through delivery. That discipline helps us support clients with consistency, speed, and confidence at every stage.',
        summary: 'Oversees execution, coordination, and smooth service delivery.',
      },
    ],
  },
  'our-company': {
    heroTitle: 'Our Company',
    heroSubtitle: 'Introducing Dynamic Technosoft, your one-stop shop for innovative software and a comprehensive range of IT services.',
    badgeItems: [],
    introTitle: 'Dynamic Technosoft: Your Premier IT Service Provider',
    introText: [
      'Dynamic Technosoft is a renowned leader in the IT services industry, with a track record of over a decade, delivering comprehensive software development and web solutions. Our commitment extends to clients in both the Bangladeshi and international markets, as we endeavor to tackle complex challenges on a global scale.',
      'Our wealth of experience enables us to drive digital innovations that not only achieve exceptional business outcomes but also elevate performance and competitiveness for our valued customers and stakeholders.',
    ],
    showCta: false,
    narrativeLayout: true,
    sections: [
      {
        title: 'One-Stop Shop Convenience',
        text: 'Dynamic Technosoft pioneers the one-stop-shop concept, empowering our clients to conveniently outsource solutions for all their diverse needs. Our diverse range of services includes ERP/Customized Software Development, Mobile App Development, Website Development, Bulk SMS Solutions, Domain Registration and Web Hosting, as well as Online Attendance Solutions. With a network spanning 7 provinces and over 50 dealer connections throughout Bangladesh, we have cultivated an extensive partner ecosystem that fosters collaboration and harnesses technology independence.',
      },
      {
        title: 'Our Vision for the Future',
        text: 'At Dynamic, our vision is to continually adapt and expand our service portfolio to meet the evolving needs of our clients. Our dedicated team of Engineers, Software Developers, IT and Business Professionals boasts years of experience in the field, enabling us to provide tailored solutions for your company\'s unique requirements. This commitment to excellence empowers enterprises at every level to maximize their profitability. We take pride in serving major corporate giants like Hulas Steel, Dugar Group, Nissan Motors, and many others, who rely on our products and services to effectively manage their operations.',
      },
      {
        title: 'More Than IT Services',
        text: 'Dynamic Technosoft transcends being a mere IT service provider. With our Dynamic vision, we are on a mission to digitize Bangladesh and drive economic prosperity. Our groundbreaking products such as Academy IMS and Hospital ERP are revolutionizing vital healthcare and educational institutions, enabling them to offer superior services. As an IT service provider, we understand the pivotal role that technology plays in uplifting businesses. We eagerly anticipate the opportunity to become your trusted partner on the road to success.',
      },
      {
        title: 'Our Mission: Leading with Vision, Performance, & Integrity',
        text: 'Dynamic Technosoft is firmly committed to a vision that boldly addresses the challenges of the future. Our mission is to cultivate a culture centered on exceptional performance, steadfastly paired with unwavering integrity. Our guiding light, the CLEAR Values, drives us to continually adapt and elevate our standards. Our clients are the cornerstone of our existence. In unison with our clients, we tackle complex issues, strategically minimizing business risk while seizing the full spectrum of opportunities. At Dynamic Technosoft, our core belief is that we are only as strong as our client partnerships.',
      },
      {
        title: 'Our Visions',
        text: 'Client-Centric Focus: Our success hinges on the utmost satisfaction of our valued customers. We are unwaveringly dedicated to delivering exceptional service and unmatched value.\n\nIndustry Leadership: Our innovative services spearhead a digital revolution, effectively addressing significant challenges within our communities and companies.\n\nEfficacy and Solutions: We are wholeheartedly committed to providing 100% effective solutions to our clients\' most pressing challenges.\n\nContinuous Aspiration: We continually aspire to elevate the quality of our services and fortify our collective growth as a company.\n\nAccountability for Results: We take full responsibility for our commitments and remain steadfastly accountable for delivering the expected results.',
      },
    ],
  },
  'dynamic-group': {
    heroTitle: 'Discover Excellence with Our Dynamic Group',
    heroSubtitle: 'Our group of enthusiastic professionals is bound together by a common dedication to excellence, innovation, and advancement.',
    badgeItems: [],
    introTitle: 'Dynamic Group: Empowering Societies Through IT and Modern Skills',
    introText: [
      'Dynamic Technosoft Pvt. Ltd stands as a pivotal member of the Dynamic Group, a consortium of companies dedicated to making a positive impact on society. Our collective focus on IT and contemporary skills aims to drive societal progress and empowerment.',
      'Within the Dynamic Group, several companies work tirelessly to enhance education systems and impart cutting-edge tech knowledge to the younger generation, while others specialize in offering technology-driven solutions to complex challenges.',
    ],
    showCta: false,
    narrativeLayout: true,
    sections: [
      {
        title: 'Empowering Through Skills And Education',
        text: 'Dynamic Skills Pvt. Ltd, Dynamic Media Networks & Communication Pvt. Ltd., Gyan Mandir Academy Pvt. Ltd., and Dynamic Enterprises are committed to equipping the youth with essential 21st-century skills and strengthening education with modern capability.',
      },
      {
        title: 'Technology-Driven Solutions',
        text: 'Dynamic Technosoft Pvt. Ltd., Brainlight Technologies Pvt. Ltd., Pivotal Technologies, and Codeplex IT Enterprises specialize in delivering technology-driven solutions to complex challenges. Their software and products have proven instrumental in enhancing the services and profitability of numerous enterprises.',
      },
      {
        title: 'A Group Built On Shared Values',
        text: 'With a dedicated workforce of over 150 employees who share common values and principles, Dynamic Group stands as a formidable institution in our nation. We are steadfastly committed to serving our clients and stakeholders with the utmost excellence.',
      },
    ],
    logos: [
      { name: 'Dynamic Technosoft Pvt. Ltd.', short: 'DT', tagline: 'Software & ERP Solutions' },
      { name: 'Brainlight Technologies Pvt. Ltd.', short: 'BT', tagline: 'Technology Innovation' },
      { name: 'Pivotal Technologies', short: 'PT', tagline: 'Digital Solutions' },
      { name: 'Codeplex IT Enterprises', short: 'CI', tagline: 'IT Services' },
      { name: 'Dynamic Skills Pvt. Ltd.', short: 'DS', tagline: 'Modern Skills Training' },
      { name: 'Dynamic Media Networks & Communication Pvt. Ltd.', short: 'DM', tagline: 'Media & Communication' },
      { name: 'Gyan Mandir Academy Pvt. Ltd.', short: 'GM', tagline: 'Education Excellence' },
      { name: 'Dynamic Enterprises', short: 'DE', tagline: 'Business Support' },
    ],
  },
};

export const CLIENT_PAGE = {
  spotlight: [
    { title: 'Education Organizations', text: 'Schools, colleges, and academic institutions use our systems to organize admissions, fees, academic records, and communication.' },
    { title: 'Healthcare Providers', text: 'Hospitals and clinics rely on connected workflows that reduce friction between departments and support faster service.' },
    { title: 'Businesses And Enterprises', text: 'Commercial organizations adopt our platforms to bring more control to finance, HR, reporting, and internal coordination.' },
  ],
  quotes: [
    { name: 'Operations Manager', company: 'A Leading School Group', text: 'The new system made routine academic and administrative work much easier to track and manage.' },
    { name: 'Administrative Lead', company: 'A Regional Hospital', text: 'We gained much better visibility across departments and fewer delays in day-to-day coordination.' },
    { name: 'Finance Head', company: 'A Growing Business', text: 'The platform helped our teams work from one structured flow instead of scattered manual processes.' },
  ],
};

export function getChildLinks(parentHref) {
  return NAV_ITEMS.find((item) => item.href === parentHref)?.children ?? [];
}
