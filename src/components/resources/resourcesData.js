// ─────────────────────────────────────────────
//  Resources – All Pages Data
//  Each resource page has its own named export.
//  Replace placeholder values with real content.
// ─────────────────────────────────────────────

export const tutorialsData = {
  slug: 'tutorials',
  hero: {
    eyebrow: 'Resources · Tutorials',
    title: 'Tutorials',
    subtitle:
      'Step-by-step video tutorials to help your team configure, use, and get the most from every Automate IT Limited product.',
    badges: ['Video Tutorials', 'Step-by-Step', 'Beginner to Advanced'],
    color: 'blue',
  },
  intro: {
    heading: 'Learn at your own pace with practical walkthroughs',
    paragraphs: [
      'Our tutorial library is built around real tasks that schools, hospitals, offices, and partner teams need to complete every day.',
      'Each video is designed to be easy to follow so new users can get started quickly and experienced teams can refresh important workflows whenever needed.',
    ],
  },
  library: {
    label: 'Video Tutorials',
    heading: 'Watch and learn with guided product videos',
    description:
      'Open any tutorial video to watch the walkthrough on YouTube. We show the first six videos by default and reveal the rest with an animated see more button when additional content is available.',
  },
  // Client videos. Add real recordings only.
  // Emptied: every previous youtubeUrl was an unrelated stand-in video.
  videos: [],
  cta: {
    heading: 'Need a tutorial for something not listed here?',
    text: 'Our support team can create custom guidance or walk you through any feature live.',
  },
};

export const blogsData = {
  slug: 'blogs',
  hero: {
    eyebrow: 'Resources · Blogs',
    title: 'Blogs',
    subtitle:
      'Updates, implementation insight, and practical business technology articles from the Automate IT Limited team.',
    badges: ['Product Updates', 'Industry Insights', 'Implementation Tips'],
    color: 'green',
  },
  intro: {
    heading: 'Perspectives that help you make better decisions',
    paragraphs: [
      'Our blog is written for decision-makers, IT managers, and operational leaders who want to stay informed about software trends, implementation strategies, and product development.',
      'We publish regularly on topics that matter to our clients — from choosing the right ERP to understanding mobile-first strategies and digital transformation in specific sectors.',
    ],
  },
  listing: {
    label: 'Latest Articles',
    heading: 'Browse our recent blogs',
    description:
      'Each post includes a quick summary and a details page so readers can open the full article. Additional posts appear with an animated see more button when the list is longer than six items.',
  },
  featuredPosts: [
    {
      slug: 'dynamic-academic-erp-reduces-school-admin-load',
      category: 'Product',
      title: 'How Academy IMS Reduces Administrative Load in Schools',
      excerpt: 'A practical look at which modules deliver the most time savings for school administrators in their first year of use.',
      readTime: '6 min read',
      date: 'April 2026',
      content: [
        'Academy IMS reduces manual coordination by connecting admissions, attendance, fee management, exam records, and parent communication inside one workflow.',
        'Schools usually feel the first impact in recurring administrative work. Staff no longer need to re-enter the same student information across multiple registers, and reporting becomes much faster at the end of each term.',
        'The biggest improvement often comes from visibility. Principals and coordinators can monitor pending fees, class attendance, and result publishing status from one system instead of collecting updates manually.',
      ],
    },
    {
      slug: 'healthcare-institutions-moving-to-integrated-erp',
      category: 'Industry',
      title: 'Why Bangladeshi Healthcare Institutions Are Moving to Integrated ERP',
      excerpt: 'The operational pressures driving hospitals and clinics to adopt connected systems, and what to look for in a vendor.',
      readTime: '8 min read',
      date: 'March 2026',
      content: [
        'Hospitals and clinics are under growing pressure to serve more patients without increasing administrative friction between departments.',
        'An integrated ERP helps connect registration, billing, pharmacy, diagnostics, and management reporting so teams can work from shared information.',
        'When evaluating vendors, healthcare institutions should pay close attention to implementation support, training quality, reporting flexibility, and how easily the system adapts to real operational flow.',
      ],
    },
    {
      slug: 'common-erp-implementation-mistakes',
      category: 'Implementation',
      title: 'The Five Most Common ERP Implementation Mistakes (and How to Avoid Them)',
      excerpt: 'Insights from real deployments that help organizations plan better and set realistic expectations from day one.',
      readTime: '7 min read',
      date: 'February 2026',
      content: [
        'ERP implementation projects usually struggle when teams underestimate process mapping, training time, or internal ownership.',
        'A successful rollout depends on having a clear champion inside the client organization, realistic milestone planning, and early alignment on what success should look like after launch.',
        'The strongest implementations treat training, support, and process cleanup as part of delivery rather than afterthoughts.',
      ],
    },
    {
      slug: 'sms-vs-app-push-notifications',
      category: 'Technology',
      title: 'SMS vs. App Push Notifications: Choosing the Right Channel for Your Audience',
      excerpt: 'A comparison of communication strategies to help organizations reach their audience reliably and cost-effectively.',
      readTime: '5 min read',
      date: 'January 2026',
      content: [
        'SMS remains one of the most reliable communication channels when message urgency and reach matter more than rich interaction.',
        'Push notifications work well when users already have the app installed and actively engage with it, especially for repeated reminders and in-app actions.',
        'Many organizations benefit from using both channels strategically: SMS for critical notices and push notifications for lower-cost engagement.',
      ],
    },
    {
      slug: 'dynamic-ams-2-feature-overview',
      category: 'Product',
      title: 'What\'s New in Dynamic AMS 2.0: A Feature Overview',
      excerpt: 'An overview of the latest updates to our association management platform including the new member portal and reporting module.',
      readTime: '4 min read',
      date: 'December 2025',
      content: [
        'Dynamic AMS 2.0 introduces a cleaner member portal, improved renewal tracking, and stronger reporting for association administrators.',
        'The updated interface helps members manage profiles, submit renewals, and stay informed about notices and events with fewer support requests.',
        'For management teams, the enhanced dashboard makes it easier to identify renewal trends, membership status, and engagement activity.',
      ],
    },
    {
      slug: 'technology-roadmap-for-growing-organizations',
      category: 'Business',
      title: 'Building a Technology Roadmap for Small and Medium Organizations',
      excerpt: 'A framework for prioritizing digital investments when budget and team capacity are limited.',
      readTime: '9 min read',
      date: 'November 2025',
      content: [
        'A strong technology roadmap starts with business pain points, not a list of tools. Teams should identify which bottlenecks cost the most time, money, or customer confidence.',
        'Once priorities are clear, investments can be staged so foundational systems come first and more advanced automation follows when the team is ready.',
        'The best roadmaps balance ambition with adoption capacity, making sure each investment can actually be supported by the people who use it.',
      ],
    },
    {
      slug: 'why-training-matters-after-software-go-live',
      category: 'Implementation',
      title: 'Why Training Matters Even After Software Go-Live',
      excerpt: 'Post-launch learning keeps teams confident, reduces support dependency, and helps organizations adopt advanced features sooner.',
      readTime: '5 min read',
      date: 'October 2025',
      content: [
        'Go-live is not the finish line for user learning. Teams usually need reinforcement as real operational scenarios appear after launch.',
        'Follow-up training helps staff use the platform with confidence, especially when roles, reports, or approval flows become more advanced.',
        'Organizations that continue learning after deployment tend to unlock more value from the same software investment.',
      ],
    },
    {
      slug: 'dealer-network-growth-through-local-partnerships',
      category: 'Business',
      title: 'Growing a Software Dealer Network Through Local Partnerships',
      excerpt: 'How local partner relationships can expand market reach while maintaining service quality and customer trust.',
      readTime: '6 min read',
      date: 'September 2025',
      content: [
        'A healthy dealer network grows when product training, lead handling, and support expectations are clear from the beginning.',
        'Local partnerships create trust because dealers understand their markets, communicate in context, and stay closer to prospects during decision-making.',
        'The strongest programs combine revenue opportunity with practical enablement so dealers can represent the brand confidently.',
      ],
    },
  ],
  categories: ['All', 'Product', 'Implementation', 'Industry', 'Technology', 'Business'],
  cta: {
    heading: 'Have a topic you would like us to write about?',
    text: 'We welcome suggestions for blog topics from our clients, partners, and readers.',
  },
};

export const testimonialsData = {
  slug: 'testimonials',
  hero: {
    eyebrow: 'Resources · Testimonials',
    title: 'Testimonials',
    subtitle:
      'Real feedback from organizations that have used our products and services to improve operations, simplify administration, and support their teams more effectively.',
    badges: ['Verified Clients', 'Cross-Industry', 'Long-Term Partners'],
    color: 'amber',
  },
  intro: {
    heading: 'See What Our Client Say\'s',
    paragraphs: [
      'Automate IT Limited builds ERP, business software and messaging systems for institutions across Bangladesh.',
      'Watch client stories and success videos to see how organizations describe their experience with our team, our products, and our support.',
    ],
  },
  videoSection: {
    label: 'Client Videos',
    heading: 'Testimonials in motion',
    description: 'Open any video to hear directly from our clients and partners. Each card includes a clickable YouTube video and a clear title.',
  },
  // Client videos. Add real recordings only.
  // Emptied: every previous youtubeUrl was an unrelated stand-in video.
  videos: [],
  // Client stories. Add real, permitted entries only.
  // Emptied: the previous entries were invented people at placeholder
  // organisations, carried over from the source template.
  testimonials: [],
  stats: [
    { value: '550+', label: 'Institutions Served' },
    { value: '98%', label: 'Client Satisfaction' },
        { value: '2022', label: 'Serving Since' },
  ],
  cta: {
    heading: 'Ready to become a success story?',
    text: 'Talk to our team and let us map the right solution to your organization\'s specific operational needs.',
  },
};

export const mediaCoverageData = {
  slug: 'media-coverage',
  hero: {
    eyebrow: 'Resources · Media Coverage',
    title: 'Media Coverage',
    subtitle:
      'Press mentions, announcements, industry recognition, and notable moments that document the growth and visibility of Automate IT Limited.',
    badges: ['Press Mentions', 'Industry Recognition', 'Company Milestones'],
    color: 'purple',
  },
  intro: {
    heading: 'Our story out in the world',
    paragraphs: [
      'Over the years, Automate IT Limited has been covered by technology publications, business journals, and event organizers recognizing our contribution to Bangladesh\'s digital landscape.',
      'This page brings together press features, award recognitions, conference appearances, and milestone announcements.',
    ],
  },
  coverageSection: {
    label: 'Media Highlights',
    heading: 'Selected media coverage',
    description: 'Explore published mentions, interviews, and recognition pieces from external platforms and event organizers.',
  },
  // Press, awards and event mentions. Add real entries with real links.
  // Emptied: the previous entries named Nepali outlets, pointed at
  // example.com, and claimed an award from the source template.
  featured: [],
  milestones: [
    { year: '2025', title: 'Expanded Academic ERP Delivery Across Bangladesh' },
    { year: '2024', title: 'Launched Dynamic AMS for Association Management' },
    { year: '2023', title: 'Expanded to Hospital ERP market segment' },
    { year: '2022', title: 'Team expanded to 50+ specialists' },
    { year: '2020', title: 'Achieved ISO-aligned delivery processes' },
  ],
  cta: {
    heading: 'Want to feature us or collaborate on a story?',
    text: 'Our communications team welcomes media inquiries, interview requests, and press collaboration opportunities.',
  },
};

export const dealershipData = {
  slug: 'dealership',
  hero: {
    eyebrow: 'Resources · Dealership',
    title: 'Dealership',
    subtitle:
      'We are seeking partners who share our interest in assisting us in our endeavor to transform the education industry.',
    badges: ['Revenue Sharing', 'Full Training', 'Co-Marketing Support'],
    color: 'teal',
  },
  intro: {
    heading: 'Provide the information below, and one of our experts will contact you within the next day.',
    paragraphs: [
      'Automate IT Limited works with partners who want to expand access to modern software solutions and serve schools with confidence.',
      'Submit your dealership request with your business details, target market, and current interest level so our partnership team can follow up quickly.',
    ],
  },
  heroVideo: {
    title: 'Dealership Program Overview',
    youtubeUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
  },
  form: {
    heading: 'Dealership Request Form',
    description: 'Fill in your details and our team will review your request.',
    fields: [
      { name: 'fullName', label: 'Full Name', placeholder: 'Enter your name', type: 'text' },
      { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email' },
      { name: 'phone', label: 'Phone', placeholder: 'Enter your phone number', type: 'tel' },
      { name: 'designation', label: 'Designation', placeholder: 'Enter your designation', type: 'text' },
      { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text' },
      { name: 'organizationName', label: 'Organization Name', placeholder: 'Enter organization name', type: 'text' },
      { name: 'organizationEmail', label: 'Organization Email', placeholder: 'Enter organization email', type: 'email' },
      { name: 'organizationPhone', label: 'Organization Phone', placeholder: 'Enter organization phone', type: 'tel' },
      { name: 'organizationAddress', label: 'Organization Address', placeholder: 'Enter organization address', type: 'text' },
      { name: 'targetedSchools', label: 'Targeted Schools per month', placeholder: 'Enter targeted No. of Schools', type: 'text' },
      { name: 'marketingMediums', label: 'What marketing mediums do you utilize?', placeholder: 'Enter your marketing mediums', type: 'text' },
    ],
    interestLabel: 'Please describe: your current interest level in becoming a Automate IT Limited dealer.',
    interestOptions: [
      'Highly Interested',
      'Moderately Interested',
      'Neutral/Exploratory Interested',
      'Slightly Interested',
      'Not Interested at This Time',
    ],
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message here',
    submitLabel: 'Send',
  },
  benefits: [
    { icon: '💰', title: 'Competitive Commission', description: 'Earn attractive recurring commissions on every software license and service contract you close.' },
    { icon: '🎓', title: 'Full Product Training', description: 'Deep product training for your sales and technical team so you can demo and support confidently.' },
    { icon: '📢', title: 'Co-Marketing Support', description: 'Access marketing materials, case studies, presentations, and product brochures.' },
    { icon: '🛟', title: 'Technical Backing', description: 'Our team supports you during client demos, pre-sales scoping, and post-sales implementation.' },
    { icon: '📋', title: 'Lead Sharing', description: 'Active dealers may receive qualified leads from our marketing and referral networks.' },
    { icon: '🌱', title: 'Growth Aligned', description: 'As you bring in more clients, your partnership tier and benefits can grow with your performance.' },
  ],
  eligibility: [
    'Registered business operating in technology, consulting, or related sectors.',
    'Minimum one dedicated sales representative for product demonstration.',
    'Willingness to complete the Automate IT Limited dealer training program.',
    'Ability to provide first-line client support with our technical backup.',
    'Alignment with our service quality and ethics standards.',
  ],
  tiers: [
    {
      name: 'Registered Partner',
      requirements: '1–3 deals per year',
      benefits: ['Product access', 'Training certification', 'Marketing materials', 'Email support'],
      highlight: false,
    },
    {
      name: 'Silver Dealer',
      requirements: '4–10 deals per year',
      benefits: ['All Registered benefits', 'Priority lead allocation', 'Co-branded materials', 'Quarterly business review'],
      highlight: false,
    },
    {
      name: 'Gold Dealer',
      requirements: '11+ deals per year',
      benefits: ['All Silver benefits', 'Dedicated partner manager', 'Revenue bonuses', 'Early feature access'],
      highlight: true,
    },
  ],
  process: [
    { step: '01', title: 'Submit Application', description: 'Fill out the partnership form with your business details and market focus.' },
    { step: '02', title: 'Screening Call', description: 'A brief call with our business development team to assess fit and answer questions.' },
    { step: '03', title: 'Sign Agreement', description: 'Complete the dealer agreement with transparent commission and support terms.' },
    { step: '04', title: 'Training & Onboarding', description: 'Complete product training and receive your sales kit, demo access, and support contacts.' },
    { step: '05', title: 'Start Selling', description: 'Begin presenting to prospects with our backing at every stage of the cycle.' },
  ],
  cta: {
    heading: 'Ready to become a Automate IT Limited dealer?',
    text: 'Contact our partnerships team to discuss your market, your clients, and the right dealership tier for your business.',
  },
};

export function getBlogPostBySlug(slug) {
  return blogsData.featuredPosts.find((post) => post.slug === slug);
}
