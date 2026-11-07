import { redirect } from 'next/navigation';

// /about has no landing page of its own; send visitors to the company page.
export default function AboutIndexPage() {
  redirect('/about/our-company');
}
