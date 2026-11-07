export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Team', href: '/about/our-team', description: 'Leadership, culture, and specialists behind our delivery.' },
      { label: 'Our Company', href: '/about/our-company', description: 'Our story, capabilities, and operating approach.' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Dynamic Academic ERP', href: '/products/dynamic-academic-erp', description: 'Education workflow automation from admission to result publishing.' },
      { label: 'Hospital ERP', href: '/products/hospital-erp', description: 'Connected patient, billing, lab, and pharmacy operations.' },
      { label: 'Accounting Solution', href: '/products/accounting-solution', description: 'Finance, billing, compliance, and reporting in one system.' },
      { label: 'HR and Payroll', href: '/products/hr-payroll', description: 'Attendance, salary, leave, and employee lifecycle tools.' },
      { label: 'SMS System', href: '/products/sms-system', description: 'Campaign, alert, and transactional messaging management.' },
      { label: 'Dynamic AMS', href: '/products/dynamic-ams', description: 'Association and membership administration made digital.' },
    ],
  },
  {
    label: 'Service',
    href: '/services',
    children: [
      { label: 'Software Development', href: '/services/software-development', description: 'Tailored software for business processes and operations.' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Android and iOS experiences connected to your platform.' },
      { label: 'Web Application Development', href: '/services/web-application-development', description: 'Responsive portals, dashboards, and business applications.' },
      { label: 'Bulk SMS Service', href: '/services/bulk-sms-service', description: 'Promotional and transactional SMS delivery at scale.' },
      { label: 'Domain Registration & Web Hosting', href: '/services/domain-registration-web-hosting', description: 'Domain, hosting, deployment, and uptime support.' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Tutorials', href: '/resources/tutorials', description: 'Step-by-step platform guidance and onboarding help.' },
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
    ctaText: 'Explore our company story and the people behind the delivery from the About Us menu.',
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
  services: {
    title: 'Service',
    eyebrow: 'Digital Services',
    summary: 'Implementation, development, hosting, and messaging services that help organizations move from idea to dependable operation.',
    introTitle: 'Services delivered with product thinking',
    introText: [
      'Our services are designed to support both custom initiatives and the successful rollout of existing platforms.',
      'We combine discovery, design, development, infrastructure support, and post-launch assistance so delivery remains coordinated from start to finish.',
    ],
    highlights: ['Custom builds and platform integrations', 'Delivery plans with clear milestones', 'Support after deployment'],
    detailCards: [
      { title: 'Consult Before Build', text: 'We clarify requirements, constraints, and expected outcomes before committing to scope.' },
      { title: 'Build for Use', text: 'Solutions are structured around reliability, maintainability, and the user journey, not only technical delivery.' },
      { title: 'Support for Continuity', text: 'After launch, we stay involved with issue resolution, change requests, and optimization guidance.' },
    ],
    pillars: ['Planning and discovery', 'Development execution', 'Deployment and hosting', 'Operational support'],
    ctaTitle: 'Looking for a specific service?',
    ctaText: 'Use the Service dropdown to open each service page directly.',
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
};

export const PRODUCT_PAGES = {
  'dynamic-academic-erp': {
    title: 'Dynamic Academic ERP',
    eyebrow: 'Products / Dynamic Academic ERP',
    summary: 'An education-focused ERP that connects admissions, academics, fees, attendance, communication, and reporting.',
    introTitle: 'A structured system for academic operations',
    introText: [
      'Dynamic Academic ERP is designed for schools, colleges, and training institutions that need better visibility across academic and administrative work.',
      'It supports connected workflows so admissions, routine operations, and communication all stay organized in one platform.',
    ],
    highlights: ['Admission to graduation support', 'Parent and student communication', 'Academic records and reporting'],
    detailCards: [
      { title: 'Academic Control', text: 'Manage routine academic operations with clearer schedules, records, and process tracking.' },
      { title: 'Administrative Efficiency', text: 'Reduce manual coordination around fees, attendance, and staff communication.' },
      { title: 'Better Visibility', text: 'Give leadership teams a stronger view of day-to-day performance and exceptions.' },
    ],
    pillars: ['Admissions', 'Attendance', 'Fees', 'Results and communication'],
    ctaTitle: 'Want to see Dynamic Academic ERP in action?',
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

export const SERVICE_SUBPAGES = {
  'software-development': {
    title: 'Software Development',
    eyebrow: 'Service / Software Development',
    summary: 'Custom business software planned and delivered around your workflows, processes, and operational goals.',
    introTitle: 'Custom software with business context built in',
    introText: [
      'We develop software that reflects how your organization actually works rather than forcing teams into generic tooling.',
      'That means understanding the process first, then shaping the application around usability, maintainability, and business outcomes.',
    ],
    highlights: ['Requirement-led delivery', 'Workflow-based application design', 'Support after deployment'],
    detailCards: [
      { title: 'Discovery', text: 'We map needs, users, and constraints before development begins.' },
      { title: 'Implementation', text: 'Features are built with a focus on clarity, scale, and maintainability.' },
      { title: 'Refinement', text: 'Post-launch support helps the solution stay useful as needs evolve.' },
    ],
    pillars: ['Requirement mapping', 'Application design', 'Development', 'Support'],
    ctaTitle: 'Need custom software for a business process?',
    ctaText: 'We can scope a practical build based on your current operations.',
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    eyebrow: 'Service / Mobile App Development',
    summary: 'Mobile experiences that connect users to your services, workflows, and data through a clear interface.',
    introTitle: 'Mobile delivery focused on real user journeys',
    introText: [
      'We design and build mobile applications for organizations that need stronger reach, convenience, and field accessibility.',
      'The work focuses on usability, integration, and the day-to-day tasks users need to complete quickly on mobile devices.',
    ],
    highlights: ['Android and iOS-oriented experience design', 'Integration with web systems and APIs', 'Scalable mobile workflows'],
    detailCards: [
      { title: 'User-Centered Flow', text: 'We simplify frequent tasks so the app feels natural from first use.' },
      { title: 'Connected Experience', text: 'Mobile apps are aligned with the larger system instead of treated as an afterthought.' },
      { title: 'Growth Ready', text: 'The application structure can expand as new use cases emerge.' },
    ],
    pillars: ['UX planning', 'Interface design', 'API integration', 'App delivery'],
    ctaTitle: 'Thinking about a mobile product or companion app?',
    ctaText: 'We can help define the right mobile scope for your audience and workflow.',
  },
  'web-application-development': {
    title: 'Web Application Development',
    eyebrow: 'Service / Web Application Development',
    summary: 'Responsive web applications for dashboards, portals, management tools, and process-heavy business platforms.',
    introTitle: 'Web applications designed for clarity and control',
    introText: [
      'Web application development is ideal for organizations that need browser-based tools for staff, customers, members, or administrators.',
      'We focus on responsive design, practical task flow, and system reliability so the application feels useful across devices and teams.',
    ],
    highlights: ['Responsive interface design', 'Business process dashboards and portals', 'Scalable architecture support'],
    detailCards: [
      { title: 'Portal Experiences', text: 'Build internal or external portals that organize important actions and information clearly.' },
      { title: 'Operational Dashboards', text: 'Give teams stronger visibility into task status, metrics, and bottlenecks.' },
      { title: 'Platform Consistency', text: 'Design and code stay aligned so the experience remains dependable and coherent.' },
    ],
    pillars: ['Responsive UI', 'Dashboards', 'Portals', 'Workflow tools'],
    ctaTitle: 'Need a browser-based business system?',
    ctaText: 'We can help define the right web application scope and rollout path.',
  },
  'bulk-sms-service': {
    title: 'Bulk SMS Service',
    eyebrow: 'Service / Bulk SMS Service',
    summary: 'Messaging infrastructure and campaign support for alerts, announcements, promotions, and customer follow-up.',
    introTitle: 'Bulk messaging with operational structure',
    introText: [
      'Bulk SMS Service helps organizations reach audiences quickly for both marketing and operational communication.',
      'It is especially useful where timing, volume, and clarity matter, such as reminders, notices, and campaign outreach.',
    ],
    highlights: ['Campaign messaging support', 'Transactional and notice-based communication', 'Audience management workflows'],
    detailCards: [
      { title: 'Fast Outreach', text: 'Reach large groups quickly when important information must be shared without delay.' },
      { title: 'Structured Messaging', text: 'Keep lists, campaigns, and operational notices more organized and easier to manage.' },
      { title: 'Service Reliability', text: 'Support repeatable communication processes instead of ad hoc manual sending.' },
    ],
    pillars: ['Audience setup', 'Campaign flow', 'Alert sending', 'Message management'],
    ctaTitle: 'Need a messaging service for campaigns or alerts?',
    ctaText: 'We can recommend the right setup for your volume and communication goals.',
  },
  'domain-registration-web-hosting': {
    title: 'Domain Registration & Web Hosting',
    eyebrow: 'Service / Domain Registration & Web Hosting',
    summary: 'Domain setup, hosting, deployment support, and foundational web infrastructure for reliable online presence.',
    introTitle: 'A dependable foundation for your online systems',
    introText: [
      'This service supports organizations that want a smooth path to launching and maintaining a web presence or hosted application.',
      'We help cover the practical setup work needed for domains, hosting, and operational continuity so teams can stay focused on the business itself.',
    ],
    highlights: ['Domain and hosting setup', 'Deployment support', 'Operational reliability focus'],
    detailCards: [
      { title: 'Launch Support', text: 'Get domain, hosting, and deployment tasks aligned so launch happens cleanly.' },
      { title: 'Uptime Awareness', text: 'Hosting decisions are guided by reliability, speed, and support considerations.' },
      { title: 'Growth Flexibility', text: 'The foundation can evolve as traffic, application complexity, and service needs grow.' },
    ],
    pillars: ['Domains', 'Hosting', 'Deployment', 'Maintenance'],
    ctaTitle: 'Need help getting your site or app online?',
    ctaText: 'We can guide you through setup, launch, and hosting decisions.',
  },
};

export const RESOURCE_SUBPAGES = {
  tutorials: {
    title: 'Tutorials',
    eyebrow: 'Resources / Tutorials',
    summary: 'Guided learning materials that help users adopt systems faster and use features with confidence.',
    introTitle: 'Practical tutorials for smoother onboarding',
    introText: [
      'Tutorials are designed to lower the learning curve for both new and returning users.',
      'They focus on real tasks, not just features, so people can quickly understand how to complete meaningful work inside the product.',
    ],
    highlights: ['Step-by-step explanations', 'Task-oriented guidance', 'Helpful onboarding structure'],
    detailCards: [
      { title: 'User Onboarding', text: 'Support new users with a clear path through the basics and common routines.' },
      { title: 'Feature Confidence', text: 'Make advanced features easier to adopt with focused and practical guidance.' },
      { title: 'Support Reduction', text: 'Good tutorials reduce repeated support questions and increase self-sufficiency.' },
    ],
    pillars: ['Getting started', 'Routine workflows', 'Advanced tasks', 'Troubleshooting help'],
    ctaTitle: 'Need help learning the platform?',
    ctaText: 'Tutorials are the fastest place to start for guided product understanding.',
  },
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
    // Leadership. Add real people:
    //   { id, name, position, photo, speech, fullSpeech, summary }
    // Emptied deliberately: the previous entries were names carried over from the
    // source template, not Automate IT Limited leadership.
    teamMembers: [],
  },
  'our-company': {
    heroTitle: 'Our Company',
    heroSubtitle: 'Automate IT Limited builds the academic ERP, business software and messaging systems that institutions across Bangladesh run on every working day.',
    badgeItems: [],
    introTitle: 'Automate IT Limited: an ERP partner for Bangladeshi institutions',
    introText: [
      'Automate IT Limited is a Dhaka-based software company working with schools, colleges, madrasahs, hospitals, businesses and associations. Our flagship product, Dynamic Academic ERP, carries an institution from the admission form through attendance, fees and mark entry to the printed tabulation sheet.',
      'We do the parts that decide whether an ERP actually gets used: configuring it around your own class and fee structure, migrating the records you already keep, training staff by role, and answering the phone afterwards.',
    ],
    showCta: false,
    narrativeLayout: true,
    sections: [
      {
        title: 'One Partner For The Whole Stack',
        text: 'ERP and custom software development, mobile apps, web applications, bulk SMS, domain registration, web hosting and annual IT support all come from the same company. That matters on the day a result SMS does not reach a guardian: there is one number to call instead of three vendors pointing at each other. We work directly and through a dealer network that reaches institutions across all eight divisions of Bangladesh.',
      },
      {
        title: 'Education First',
        text: 'Most of our work is in education, and the product shows it. Class, section, group, roll and the optional and fourth subject are first-class concepts. Marks are entered as CQ, MCQ and practical, and grade points are calculated on the 5.00 scale by your own grading rule. Guardian SMS goes out in Bangla or English with delivery reports. Fees collect through bKash, Nagad and bank, and post straight to the student ledger, with waivers and stipends recorded against the reason they were given.',
      },
      {
        title: 'How We Deliver',
        text: 'An ERP fails at migration and training, not at installation. We assess your office for a day, configure classes, fee heads, grading rules and user roles to match, migrate your student, guardian, staff and dues data and reconcile it against your registers, then train staff by role. Go-live starts with one term and one class set, running alongside the old register, before the whole institution switches over.',
      },
      {
        title: 'After Go-Live',
        text: 'The contract does not end at handover. Support runs on phone and WhatsApp during office hours and is busiest exactly when an ERP is really tested, at admission and exam time. Version upgrades, backups and server monitoring stay on our side under an annual support agreement.',
      },
      {
        title: 'What We Hold To',
        text: 'Clear scope: you know what is being built, in what order, and what it costs.\n\nNo abandoned installs: a system nobody was trained on is not a delivery, and we do not count it as one.\n\nYour data is yours: exports in open formats, on request, without a negotiation.\n\nHonest timelines: we would rather quote four weeks and hold to it than quote two and miss.\n\nAccountability: when something we built breaks, fixing it is our cost, not a change request.',
      },
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
