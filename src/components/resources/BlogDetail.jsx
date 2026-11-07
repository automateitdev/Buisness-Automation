'use client';

import Link from 'next/link';
import { useLocalized } from '@/i18n/LanguageProvider';
import { RESOURCES_BN, RESOURCES_UI_BN } from '@/i18n/bn/resources';
import { blogsData } from './resourcesData';
import { RESOURCES_UI_EN } from './resourcesUi';

export default function BlogDetail({ slug }) {
  const data = useLocalized(blogsData, RESOURCES_BN.blogs);
  const ui = useLocalized(RESOURCES_UI_EN, RESOURCES_UI_BN);
  const post = data.featuredPosts.find((p) => p.slug === slug);

  if (!post) return null;

  return (
    <section className="blog-detail-page">
      <div className="container blog-detail-container">
        <span className="blog-section-label">{post.category}</span>
        <h1 className="blog-detail-title">{post.title}</h1>
        <p className="blog-detail-meta">{post.date} · {post.readTime}</p>
        <p className="blog-detail-excerpt">{post.excerpt}</p>
        <div className="blog-detail-body">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </div>
        <div className="blog-detail-actions">
          <Link href="/resources/blogs" className="btn-primary">{ui.backToBlogs}</Link>
          <Link href="/contact" className="btn-outline-blue">{ui.contactUs}</Link>
        </div>
      </div>
    </section>
  );
}
