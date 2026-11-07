// English source for the hardcoded text of home sections
// (ImpactAndBlog, StatsBar, WhyUs, About). Bangla: src/i18n/bn/home.js (same shape).
export const HOME_EN = {
  impact: {
    tutorial: {
      label: 'Product Tutorial Center',
      heading: 'Product Tutorial Center',
      text: 'Learning videos, onboarding guidance, and quick product walkthroughs to help teams train faster and use every module with confidence.',
      cta: 'Watch Now →',
      preview: 'Tutorial Preview',
    },
    testimonial: {
      label: 'Customer Testimonials',
      heading: 'Customer Testimonials',
      text: 'Watch success stories from clients who trust our products, our implementation process, and our long-term support.',
      cta: 'Watch Now →',
      preview: 'Video Testimonial',
    },
    blog: {
      label: 'Blogs',
      heading: 'Recent updates and practical insights',
      readMore: 'Read More →',
      paginationLabel: 'Blog pagination',
      slideLabel: 'Show blog slide {n}',
    },
  },
  stats: {
    label: 'Our Impact',
    heading: 'By the numbers',
    sub: 'Our mission: To make every educational institution in Bangladesh transparent, efficient and digital.',
    items: [
      { target: 2022, suffix: '', label: 'Serving customers since', icon: 'YR', noGrouping: true },
      { target: 550, suffix: '+', label: 'Educational institutions', icon: 'EI' },
      { target: 500000, suffix: '+', label: 'Students', icon: 'ST' },
      { target: 5, suffix: '+', label: 'Banks and public organizations on our fee systems', icon: 'BK' },
    ],
  },
  whyUs: {
    label: 'Why Choose Us',
    heading: 'A technology partner built around clarity, performance, and service',
    sub: 'We combine product capability, implementation ownership, and long-term support so organizations can move forward with confidence.',
    strengths: [
      { title: 'IRD Certified ERP', text: 'A trusted platform approach shaped around dependable compliance and business process clarity.' },
      { title: 'One-Stop Shop', text: 'Products, services, implementation, and support are handled together for smoother delivery.' },
      { title: 'Long-Term Support', text: 'We stay involved after deployment with issue handling, optimization, and guided follow-up.' },
      { title: 'Cross-Sector Experience', text: 'Education, healthcare, finance, associations, and business teams use our systems every day.' },
    ],
  },
  about: {
    eyebrow: 'About Us',
    heading: 'A trusted partner in digitizing education and financial services',
    paragraphs: [
      'Automate IT Limited is a Bangladeshi software company founded in 2022, headquartered in Dhaka. Our mission is to make the daily work of educational institutions and financial organizations simpler, more transparent and more accurate.',
      'Our flagship product is the Academy-Institute Management System. Today, 550+ institutions across the country use it, managing the records and operations of more than 500,000 students. Student management, attendance, exams, fee collection, accounts and SMS all run on one platform.',
      'Beyond education, we build fee collection and management systems for banks. Rupali Bank, Sonali Bank, UCB, Islami Bank Bangladesh and Chattogram City Corporation are among the organizations that rely on our technology.',
      'We believe good software should do more than save time: it should build trust. That is why we stay with our customers after delivery, with training and support that help every institution move forward.',
    ],
    chip: 'Our mission',
    mission: 'To make every educational institution in Bangladesh transparent, efficient and digital.',
    badges: ['Founded in 2022', 'Education & Banking'],
    statsTitle: 'By the numbers',
    stats: [
      { value: '2022', label: 'Serving customers since' },
      { value: '550+', label: 'Educational institutions' },
      { value: '500,000+', label: 'Students' },
      { value: '5+', label: 'Banks and public organizations on our fee systems' },
    ],
    readMore: 'Read More →',
  },
};
