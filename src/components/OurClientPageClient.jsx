'use client';
import PageHero from './PageHero';
import { CLIENTS_UI_EN } from './routeUi';
import { CLIENTS_UI_BN, CLIENTS_BN } from '@/i18n/bn/routeUi';
import { useLocalized } from '@/i18n/LanguageProvider';

export const CLIENTS = [
  { name: 'Bangladesh Rastra Bank', abbr: 'NRB', color: '#0057A8' },
  { name: 'FNCCI', abbr: 'FNCCI', color: '#0072c3' },
  { name: 'Godawari', abbr: 'GDW', color: '#0096D6' },
  { name: 'Little Buddha', abbr: 'LB', color: '#006fb8' },
  { name: 'Mero TV', abbr: 'MTV', color: '#0057A8' },
  { name: 'Banijay Udhyog', abbr: 'BU', color: '#0096D6' },
  { name: 'JME', abbr: 'JME', color: '#0072c3' },
  { name: 'John Deere', abbr: 'JD', color: '#367C2B' },
  { name: 'GIZ', abbr: 'GIZ', color: '#E2001A' },
  { name: 'Dabur Bangladesh', abbr: 'DNP', color: '#C41E3A' },
  { name: 'FWEAN', abbr: 'FWN', color: '#0057A8' },
  { name: 'CSI', abbr: 'CSI', color: '#0096D6' },
  { name: 'Hulas Steel', abbr: 'HLS', color: '#555' },
  { name: 'Asian Paints', abbr: 'AP', color: '#B31942' },
  { name: 'Urban Bangladesh', abbr: 'URN', color: '#0072c3' },
  { name: 'Tata Hitachi', abbr: 'TH', color: '#003087' },
  { name: 'Tests', abbr: 'TST', color: '#0096D6' },
  { name: 'KL Dugar', abbr: 'KLD', color: '#0057A8' },
  { name: 'Sumo', abbr: 'SMO', color: '#333' },
  { name: 'MG Motors', abbr: 'MG', color: '#1B1B1B' },
  { name: 'Mahindra', abbr: 'MHN', color: '#C41E3A' },
  { name: 'Royal Enfield', abbr: 'RE', color: '#4B0008' },
  { name: 'City College', abbr: 'CC', color: '#0057A8' },
  { name: 'Sunrise Group', abbr: 'SRG', color: '#E8431A' },
];



/** Clients list with Bangla names when the site language is Bangla (shared with the home strip). */
export function useLocalizedClients() {
  return useLocalized(CLIENTS, CLIENTS_BN);
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
                <div className="ocl-logo" style={{ background: client.color }}>
                  <span className="ocl-abbr">{client.abbr}</span>
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
