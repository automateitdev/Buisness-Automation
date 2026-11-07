'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { LanguageProvider } from '@/i18n/LanguageProvider';

export default function ClientShell({ children }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main" style={{ paddingTop: '72px', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </LanguageProvider>
  );
}
