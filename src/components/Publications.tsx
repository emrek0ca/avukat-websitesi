import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Publications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pub-fade',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const publications = [
    {
      year: '2025',
      title: 'Uluslararası Ticaret Hukukunda Tahkim Kararlarının İcrası',
      type: 'Akademik Makale / Hukuk Dergisi',
      desc: 'Tahkim kararlarının tanınması ve tenfizi sürecinde karşılaşılan yargısal engellerin analizine dair kapsamlı inceleme.'
    },
    {
      year: '2024',
      title: 'Yapay Zeka ve Fikri Mülkiyet Haklarının Çatışması',
      type: 'Emsal Karar / İçtihat',
      desc: 'Yapay zeka tarafından üretilen eserlerin telif hakkı sahipliğine ilişkin Yüksek Mahkeme nezdinde kazandığımız emsal niteliğindeki dava özeti.'
    },
    {
      year: '2023',
      title: 'Şirket Birleşmelerinde Rekabet Hukuku Sınırları',
      type: 'Mevzuat İncelemesi',
      desc: 'Global ölçekli şirket birleşmelerinde yerel rekabet kurullarının müdahale sınırları ve eşik değerlerinin yorumlanması.'
    }
  ];

  return (
    <section ref={containerRef} className="section-container" style={{ padding: '8rem 2rem', borderBottom: '1px solid var(--border-delicate)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Header - Editorial Style */}
        <div className="pub-fade" style={{ borderBottom: '4px solid var(--text-main)', paddingBottom: '1rem' }}>
          <h2 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>İçtihatlar & Yayınlar</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--text-main)', paddingTop: '0.5rem' }}>
            <span className="editorial-meta text-gold">Bölüm V.</span>
            <span className="editorial-meta">Akademik Makaleler & Emsal Kararlar</span>
          </div>
        </div>

        {/* Publications Grid (3 columns) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {publications.map((pub, i) => (
            <div key={i} className="pub-fade" style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              borderTop: '2px solid var(--border-delicate)',
              paddingTop: '1.5rem'
            }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="editorial-meta" style={{ letterSpacing: '1px', color: 'var(--text-silver)', fontSize: '0.75rem', maxWidth: '70%', lineHeight: '1.4' }}>
                  {pub.type}
                </span>
                <div className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 400 }}>
                  {pub.year}
                </div>
              </div>
              
              <h3 className="editorial-title" style={{ fontSize: '1.6rem', color: 'var(--text-main)', lineHeight: '1.2', borderBottom: '1px solid var(--border-delicate)', paddingBottom: '1.5rem' }}>
                {pub.title}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem', textAlign: 'justify' }}>
                {pub.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
