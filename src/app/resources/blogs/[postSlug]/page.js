import { notFound } from 'next/navigation';

import { blogsData, getBlogPostBySlug } from '@/components/resources/resourcesData';
import BlogDetail from '@/components/resources/BlogDetail';

export function generateStaticParams() {
  return blogsData.featuredPosts.map((post) => ({ postSlug: post.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { postSlug } = await params;
  const post = getBlogPostBySlug(postSlug);

  if (!post) {
    notFound();
  }

  return <BlogDetail slug={post.slug} />;
}
