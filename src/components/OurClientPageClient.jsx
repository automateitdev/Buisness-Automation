'use client';
import PageHero from './PageHero';
import { CLIENTS_UI_EN } from './routeUi';
import { CLIENTS_UI_BN } from '@/i18n/bn/routeUi';
import { CLIENT_INSTITUTIONS } from '@/data/clientsData';
import { useLocalized } from '@/i18n/LanguageProvider';

export const CLIENTS = CLIENT_INSTITUTIONS;



/** Client institutions (shared with the home strip). Names are the official English names in both languages. */
export function useLocalizedClients() {
  return CLIENTS;
}

export default function OurClientPageClient() {
  const t = useLocalized(CLIENTS_UI_EN, CLIENTS_UI_BN);
  const clients = useLocalizedClients();
  return (
    <>
      <PageHero
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        theme="navy"
      />

      <section className="ocl-clients-section">
        <div className="container">
          <div className="ocl-section-head">
            <h2 className="ocl-heading">{t.meetClients}</h2>
          </div>
          <div className="ocl-grid">
            {clients.map((client) => (
              <div key={client.name} className="ocl-card">
                <div className="ocl-logo ocl-logo-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={client.logo} alt="" loading="lazy" width="64" height="64" />
                </div>
                <p className="ocl-name">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
