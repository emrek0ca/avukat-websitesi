import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-fade',
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

  return (
    <section ref={containerRef} className="section-container" style={{ padding: '8rem 2rem', borderBottom: '1px solid var(--border-delicate)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Header - Editorial Style */}
        <div className="about-fade" style={{ borderBottom: '4px solid var(--text-main)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <h2 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Büromuz Hakkında</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--text-main)', paddingTop: '0.5rem' }}>
            <span className="editorial-meta text-gold">Bölüm I.</span>
            <span className="editorial-meta">Kuruluş: 1998</span>
          </div>
        </div>

        {/* Content Layout - Strict Magazine Columns */}
        <div className="about-fade" style={{ columnCount: 2, columnGap: '4rem', columnRule: '1px solid var(--border-delicate)' }}>
          <p className="editorial-dropcap text-gold" style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
            Yılların getirdiği birikim ve köklü hukuki prensiplerimizle, müvekkillerimizin en karmaşık hukuki ihtilaflarında onlara sadece bir temsilci değil, aynı zamanda stratejik bir çözüm ortağı oluyoruz. Globalleşen ticaret hayatı ve sürekli değişen yerel mevzuat, hukuki risklerin ancak çok boyutlu bir vizyonla yönetilebileceğini göstermektedir.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'justify', marginBottom: '1.5rem' }}>
            Biz, hukukun lafzına olduğu kadar ruhuna da hakim bir ekiple, müvekkillerimizin hedeflerine güvenle ulaşmalarını sağlayan hukuki altyapıyı inşa ediyoruz. Butik bir hizmet anlayışıyla yola çıktık; zira seri üretilen standart çözümlerin, karmaşık hukuki sorunları çözmeye yetmediğine inanıyoruz.
          </p>
          <blockquote style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.6rem', 
            fontStyle: 'italic', 
            color: 'var(--text-silver)',
            lineHeight: '1.4',
            borderTop: '1px solid var(--border-delicate)',
            borderBottom: '1px solid var(--border-delicate)',
            padding: '1.5rem 0',
            margin: '2rem 0',
            textAlign: 'center'
          }}>
            <span className="text-gold">"</span>Hukuk, zayıfın kalkanı, haklının en keskin kılıcıdır.<span className="text-gold">"</span>
          </blockquote>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'justify' }}>
            Her müvekkilimizin davası, kendine has dinamikleri olan benzersiz bir vaka olarak değerlendirilir. Titizlik, entelektüel derinlik ve sarsılmaz etik kurallar, çalışmalarımızın değişmez omurgasıdır. Adaletin tecellisi için, gücümüzü sadece ve sadece hukuktan alıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
