'use client';

import { useEffect, useRef } from 'react';

export default function WhyUs() {
  const ref = useRef(null);

  const strengths = [
    { title: 'Built For Bangladeshi Institutions', text: 'EIIN and board registration data, GPA on the 5.00 scale, Bangla SMS, and fee collection through bKash, Nagad and bank — in the product, not bolted on.' },
    { title: 'One-Stop Shop', text: 'Products, services, implementation, and support are handled together for smoother delivery.' },
    { title: 'Long-Term Support', text: 'We stay involved after deployment with issue handling, optimization, and guided follow-up.' },
    { title: 'Cross-Sector Experience', text: 'Education, healthcare, finance, associations, and business teams use our systems every day.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll('.animate-on-scroll').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="whyus-section whyus-section-refined" ref={ref} aria-labelledby="whyus-heading">
      <div className="container">
        <div className="whyus-layout-refined">
          <div className="whyus-intro-refined animate-on-scroll">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-h2" id="whyus-heading">A technology partner built around clarity, performance, and service</h2>
            <p className="section-sub whyus-sub-refined">
              We combine product capability, implementation ownership, and long-term support so organizations can move forward with confidence.
            </p>
          </div>

          <div className="whyus-grid-refined">
            {strengths.map((item, index) => (
              <article key={item.title} className="whyus-card-refined animate-on-scroll" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="whyus-card-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
