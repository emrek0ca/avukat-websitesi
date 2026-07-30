import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-fade',
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

  const team = [
    {
      name: 'Av. Cihan Soylu',
      title: 'Kurucu Ortak',
      desc: 'Ceza Hukuku ve Beyaz Yaka Suçları alanında 25 yılı aşkın tecrübe. Yüksek Mahkeme nezdinde görülen çok sayıda emsal davada baş hukuk müşaviri olarak görev almıştır.'
    },
    {
      name: 'Av. Elif E. Arslan',
      title: 'Yönetici Ortak',
      desc: 'Şirketler Hukuku, Uluslararası Birleşme ve Devralmalar (M&A). Çok uluslu şirketlerin Türkiye pazarındaki stratejik hukuki yapılanmalarını yönetmektedir.'
    }
  ];

  return (
    <section ref={containerRef} className="section-container" style={{ padding: '8rem 2rem', borderBottom: '1px solid var(--border-delicate)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        {/* Header */}
        <div className="team-fade" style={{ borderBottom: '1px solid var(--border-delicate)', paddingBottom: '2rem' }}>
          <h2 className="editorial-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Yönetim & Kadro</h2>
          <span className="editorial-meta">Bölüm IV.</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {team.map((member, i) => (
            <div key={i} className="team-fade" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
              <div>
                <h3 className="editorial-title" style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {member.name}
                </h3>
                <span className="editorial-meta" style={{ fontStyle: 'italic', letterSpacing: '2px', color: 'var(--text-silver)' }}>
                  — {member.title}
                </span>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.2rem', maxWidth: '500px' }}>
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
