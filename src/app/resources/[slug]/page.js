import { notFound } from 'next/navigation';

import Blogs from '@/components/resources/Blogs';
import Dealership from '@/components/resources/Dealership';
import MediaCoverage from '@/components/resources/MediaCoverage';
import Testimonials from '@/components/resources/Testimonials';
import Tutorials from '@/components/resources/Tutorials';
import RoutePageTemplate from '@/components/RoutePageTemplate';
import { RESOURCE_SUBPAGES_BN } from '@/i18n/bn/siteContent';
import { getRelatedLinks, getResourcePage, resourceSlugs } from '@/lib/routeData';

const componentMap = {
  tutorials: Tutorials,
  blogs: Blogs,
  testimonials: Testimonials,
  'media-coverage': MediaCoverage,
  dealership: Dealership,
};

export function generateStaticParams() {
  return resourceSlugs.map((slug) => ({ slug }));
}

export default async function ResourceSubpage({ params }) {
  const { slug } = await params;
  const page = getResourcePage(slug);

  if (!page) {
    notFound();
  }

  const Component = componentMap[slug];
  if (Component) {
    return <Component />;
  }

  return (
    <RoutePageTemplate
      {...page}
      bn={RESOURCE_SUBPAGES_BN[slug]}
      relatedLinks={getRelatedLinks('/resources', slug)}
      badgeItems={page.highlights}
    />
  );
}
