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
    heading: 'Automate IT Limited',
    paragraphs: [
      'Automate IT Limited is a Bangladeshi software company founded in 2022. We build software that makes the daily work of educational and financial institutions simpler, more transparent and paperless.',
      'It all started with a simple question: why do admissions, attendance, exam results, fee collection and accounts at schools and colleges still run on notebooks, spreadsheets and repeated phone calls? To remove that burden, we built the Academy Institute Management System, a web-based platform that brings everything an institution does into one place. Working with schools and colleges, we saw another need: fee collection has to be safe and easy. So we also build and maintain fee collection and management systems for banks.',
      'Today we work with more than 550 institutions, serving over 500,000 students in total. We believe good software is not just something you sell. You have to stay beside the customer through setup, training and everyday support.',
    ],
    chip: 'Since 2022',
    mission: 'A Bangladeshi software company for educational and financial institutions',
    badges: ['Education', 'Financial institutions', 'Paperless'],
    stats: [
      { value: '2022', label: 'Founded in Dhaka' },
      { value: '550+', label: 'Institutions we work with' },
      { value: '500,000+', label: 'Students' },
    ],
    readMore: 'Read More →',
  },
};
