import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.value-fade',
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

  const values = [
    {
      title: 'Tavizsiz Etik',
      desc: 'Hukukun evrensel ilkelerine ve meslek kurallarına sıkı sıkıya bağlı kalarak, her dosyada adaletin tecellisi için tavizsiz bir duruş sergiliyoruz.'
    },
    {
      title: 'Mutlak Gizlilik',
      desc: 'Müvekkillerimizle aramızdaki güven ilişkisi her şeyin temelidir. Bizimle paylaşılan her bilgi, mesleki sır kapsamında en üst düzeyde korunur.'
    },
    {
      title: 'Derin Strateji',
      desc: 'Hukuki ihtilafları yüzeysel değil, çok katmanlı ve stratejik bir bakış açısıyla ele alıyor; riskleri önceden öngörerek kalıcı çözümler üretiyoruz.'
    }
  ];

  return (
    <section ref={containerRef} className="section-container" style={{ padding: '8rem 2rem', borderBottom: '1px solid var(--border-delicate)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Header - Editorial Style */}
        <div className="value-fade" style={{ borderBottom: '4px solid var(--text-main)', paddingBottom: '1rem' }}>
          <h2 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Manifesto & Değerler</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--text-main)', paddingTop: '0.5rem' }}>
            <span className="editorial-meta text-gold">Bölüm III.</span>
            <span className="editorial-meta">Kurumsal İlkeler</span>
          </div>
        </div>

        {/* Top Feature Article (Manifesto) */}
        <div className="value-fade" style={{ borderBottom: '1px solid var(--border-delicate)', paddingBottom: '3rem', columnCount: 2, columnGap: '4rem', columnRule: '1px solid var(--border-delicate)' }}>
          <p className="editorial-dropcap text-gold" style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
            Bizim için avukatlık, sadece yasal metinleri yorumlamak değil; adaletin tesisinde aktif ve belirleyici bir rol üstlenmektir. Kurulduğumuz günden bu yana, hukukun üstünlüğünü savunmayı bir meslek kuralı değil, bir yaşam felsefesi olarak benimsedik. 
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'justify' }}>
            Müvekkillerimizin haklarını, kendi itibarımız olarak görüyor; bu bilinçle her bir davaya aynı titizlik, kararlılık ve entelektüel derinlikle yaklaşıyoruz. Hukukun sürekli evrilen dinamikleri içerisinde, köklü geleneklerimizi modern ve yenilikçi hukuki çözümlerle harmanlayarak kusursuz bir müdafaa ve danışmanlık hizmeti sunuyoruz.
          </p>
        </div>

        {/* Bottom 3 Columns for Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
          {values.map((v, i) => (
            <div key={i} className="value-fade" style={{ 
              padding: '0 2rem', 
              borderRight: i !== values.length - 1 ? '1px solid var(--border-delicate)' : 'none',
              borderLeft: i === 0 ? 'none' : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-delicate)', paddingBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-main)' }}>
                  {v.title}
                </h3>
                <div className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.8 }}>
                  0{i+1}.
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem', textAlign: 'justify' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
