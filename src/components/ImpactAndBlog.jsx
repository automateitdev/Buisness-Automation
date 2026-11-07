'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { blogsData, testimonialsData, tutorialsData } from '@/components/resources/resourcesData';

function getYoutubeVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/);
  return match?.[1] ?? '';
}

export default function ImpactAndBlog() {
  const ref = useRef(null);
  const [blogPage, setBlogPage] = useState(0);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogsData.featuredPosts.length / postsPerPage);
  const tutorialVideo = tutorialsData.videos[0] ?? null;
  const testimonialVideo = testimonialsData.videos[0] ?? null;
  const visiblePosts = blogsData.featuredPosts.slice(
    blogPage * postsPerPage,
    blogPage * postsPerPage + postsPerPage,
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <section id="tutorial-center" className="impact-section impact-section-refined home-media-section" aria-labelledby="tutorial-center-heading">
        <div className="container">
          <div className="home-media-grid">
            <div className="home-media-copy animate-slide-left">
              <span className="section-label">Product Tutorial Center</span>
              <h2 className="section-h2" id="tutorial-center-heading">Product Tutorial Center</h2>
              <p className="section-sub">
                Learning videos, onboarding guidance, and quick product walkthroughs to help teams train faster and use every module with confidence.
              </p>
              <Link href="/tutorial" className="btn-secondary">Watch Now →</Link>
            </div>

            {tutorialVideo && (
              <a className="home-video-preview animate-slide-right" href={tutorialVideo.youtubeUrl} target="_blank" rel="noreferrer">
                <div className="home-video-thumb">
                  <Image
                    src={`https://img.youtube.com/vi/${getYoutubeVideoId(tutorialVideo.youtubeUrl)}/hqdefault.jpg`}
                    alt={tutorialVideo.title}
                    width={640}
                    height={360}
                    unoptimized
                  />
                  <span className="home-video-play">▶</span>
                </div>
                <div className="home-video-meta">
                  <span>Tutorial Preview</span>
                  <strong>{tutorialVideo.title}</strong>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      <section id="testimonials" className="impact-section impact-section-refined home-media-section home-media-section-alt" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="home-media-grid">
            <div className="home-media-copy animate-slide-right">
              <span className="section-label">Customer Testimonials</span>
              <h2 className="section-h2" id="testimonials-heading">Customer Testimonials</h2>
              <p className="section-sub">
                Institutions across Bangladesh run admissions, fees, exams and guardian communication on our systems. We can arrange a reference call with one of them.
              </p>
              <Link href="/testimonials" className="btn-secondary">Read Client Stories →</Link>
            </div>

            {testimonialVideo && (
              <a className="home-video-preview animate-slide-left" href={testimonialVideo.youtubeUrl} target="_blank" rel="noreferrer">
                <div className="home-video-thumb">
                  <Image
                    src={`https://img.youtube.com/vi/${getYoutubeVideoId(testimonialVideo.youtubeUrl)}/hqdefault.jpg`}
                    alt={testimonialVideo.title}
                    width={640}
                    height={360}
                    unoptimized
                  />
                  <span className="home-video-play">▶</span>
                </div>
                <div className="home-video-meta">
                  <span>Video Testimonial</span>
                  <strong>{testimonialVideo.title}</strong>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      <section id="blog" className="blogs-grid-section" aria-labelledby="blog-heading">
        <div className="container">
          <div className="blogs-section-head animate-on-scroll text-center" style={{textAlign: 'center', marginBottom: '40px'}}>
            <span className="blogs-section-label">Blogs</span>
            <h2 className="blogs-section-h2" id="blog-heading">Recent updates and practical insights</h2>
          </div>

          <div className="blog-posts-grid">
            {visiblePosts.map((post, index) => (
              <article key={post.slug} className="blog-card blog-card-animated animate-on-scroll" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="blog-card-inner">
                  <div className="blog-card-top">
                    <span className="blog-category-pill">
                      <span className="blog-category-dot" style={{ backgroundColor: '#38bdf8' }}></span>
                      {post.category}
                    </span>
                    <span className="blog-date-chip">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read-time">🕒 {post.readTime}</span>
                    <Link href={`/resources/blogs/${post.slug}`} className="blog-read-link">Read More →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-blog-dots animate-on-scroll" aria-label="Blog pagination" style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px'}}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                style={{
                  width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer', transition: 'all 0.3s',
                  backgroundColor: blogPage === index ? '#0057A8' : '#dbeafe'
                }}
                onClick={() => setBlogPage(index)}
                aria-label={`Show blog slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
