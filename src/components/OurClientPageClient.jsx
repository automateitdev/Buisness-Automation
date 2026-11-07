'use client';
import PageHero from './PageHero';

// Client list. Add your own entries and both the homepage section and the
// /our-client page pick them up automatically:
//   { name: 'Institution name', abbr: 'IN', color: '#0057A8' }
// Emptied deliberately: the previous entries were inherited from the template
// this site was rebranded from and were not Automate IT Limited clients.
export const CLIENTS = [];



const SECTORS = [
  { name: 'Schools', abbr: 'SCH', color: '#0057A8' },
  { name: 'Colleges', abbr: 'COL', color: '#0072c3' },
  { name: 'Madrasahs', abbr: 'MAD', color: '#0096D6' },
  { name: 'Hospitals & Clinics', abbr: 'HOS', color: '#1B7F5A' },
  { name: 'Businesses & SMEs', abbr: 'BIZ', color: '#0057A8' },
  { name: 'Associations', abbr: 'ASN', color: '#0072c3' },
];

export default function OurClientPageClient() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="Schools, colleges, madrasahs, hospitals, businesses and associations across Bangladesh run their daily operations on our systems."
        theme="navy"
      />

      <section className="ocl-clients-section">
        <div className="container">
          <div className="ocl-section-head">
            <h2 className="ocl-heading">Who We Work With</h2>
          </div>

          {CLIENTS.length > 0 ? (
            <div className="ocl-grid">
              {CLIENTS.map((client) => (
                <div key={client.name} className="ocl-card">
                  <div className="ocl-logo" style={{ background: client.color }}>
                    <span className="ocl-abbr">{client.abbr}</span>
                  </div>
                  <p className="ocl-name">{client.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="ocl-grid">
              {SECTORS.map((sector) => (
                <div key={sector.name} className="ocl-card">
                  <div className="ocl-logo" style={{ background: sector.color }}>
                    <span className="ocl-abbr">{sector.abbr}</span>
                  </div>
                  <p className="ocl-name">{sector.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
