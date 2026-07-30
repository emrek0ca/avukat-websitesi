import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PracticeAreas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.practice-fade',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.1, 
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

  const areas = [
    { 
      name: 'Ceza Hukuku',
      desc: 'Özellikle beyaz yaka suçları, ekonomik suçlar ve ağır ceza davalarında, titiz bir delil analizi ve güçlü savlarla savunma veya şikayet süreçlerinin yürütülmesi.'
    },
    { 
      name: 'Şirketler & Ticaret',
      desc: 'Birleşme ve devralmalar (M&A), ticari uyuşmazlıklar, kurumsal yönetim danışmanlığı ve karmaşık ticari sözleşmelerin hazırlanmasında uçtan uca destek.'
    },
    { 
      name: 'Gayrimenkul Hukuku',
      desc: 'Büyük ölçekli inşaat projeleri, kentsel dönüşüm süreçleri, tapu iptal ve tescil davaları ile yabancıların mülk edinimine dair stratejik danışmanlık.'
    },
    { 
      name: 'İdare & Vergi',
      desc: 'Kamu ihaleleri, imar mevzuatı kaynaklı ihtilaflar, vergi cezalarının iptali ve idari yargıda görülen tam yargı davalarında emsal niteliğinde sonuçlar.'
    },
    { 
      name: 'Fikri Mülkiyet',
      desc: 'Marka, patent ve telif haklarının korunması, haksız rekabetin önlenmesi ve teknoloji odaklı yeni nesil ihlallerin yargıya taşınması.'
    }
  ];

  return (
    <section ref={containerRef} className="section-container" style={{ padding: '8rem 2rem', borderBottom: '1px solid var(--border-delicate)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Header - Editorial Style */}
        <div className="practice-fade" style={{ borderBottom: '4px solid var(--text-main)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <h2 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Uzmanlık Alanları</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--text-main)', paddingTop: '0.5rem' }}>
            <span className="editorial-meta text-gold">Bölüm II.</span>
            <span className="editorial-meta">Faaliyet Kapsamı</span>
          </div>
        </div>

        {/* Content - Newspaper Box Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {areas.map((area, idx) => (
            <div key={idx} className="practice-fade" style={{ 
              border: '1px solid var(--border-delicate)', 
              padding: '2rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <h3 className="editorial-title" style={{ fontSize: '1.8rem', color: 'var(--text-main)', lineHeight: '1.1', maxWidth: '80%' }}>
                  {area.name}
                </h3>
                <div className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontStyle: 'italic', lineHeight: '0.8', opacity: '0.8' }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem', textAlign: 'justify', borderTop: '1px solid var(--border-delicate)', paddingTop: '1.5rem' }}>
                {area.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
