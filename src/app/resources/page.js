import { redirect } from 'next/navigation';

// /resources has no landing page of its own; send visitors to the blog list.
export default function ResourcesIndexPage() {
  redirect('/resources/blogs');
}
