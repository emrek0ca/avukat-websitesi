import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const JusticeSeal = () => {
  return (
    <div className="justice-seal" style={{ position: 'relative', width: '280px', height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Rotating Outer Text/Ring */}
      <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%', animation: 'spin 40s linear infinite' }}>
        <defs>
          <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--gold-light)" />
            <stop offset="40%" stopColor="var(--gold-dark)" />
            <stop offset="100%" stopColor="var(--gold-main)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        <text fill="url(#goldGrad)" fontSize="12" letterSpacing="4" fontFamily="var(--font-sans)" opacity="0.9" style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.5)' }}>
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            • DÜRÜSTLÜK • İTİBAR • ADALET • HAKİKAT
          </textPath>
        </text>
      </svg>
      
      {/* Central Emblem - Elegant Abstract Scale */}
      <svg viewBox="0 0 100 100" style={{ width: '45%', height: '45%', color: 'currentColor' }}>
        {/* Pillar */}
        <path d="M50 15 L50 85 M35 85 L65 85" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Beam */}
        <path d="M20 35 Q50 20 80 35" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Top Diamond */}
        <path d="M50 15 L46 22 L50 29 L54 22 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        
        {/* Left Pan & Chains */}
        <line x1="20" y1="35" x2="10" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="35" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="35" x2="20" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <path d="M10 60 Q20 68 30 60 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        
        {/* Right Pan & Chains */}
        <line x1="80" y1="35" x2="70" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <line x1="80" y1="35" x2="90" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <line x1="80" y1="35" x2="80" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <path d="M70 60 Q80 68 90 60 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        
        {/* Base Details */}
        <path d="M40 85 L44 75 L56 75 L60 85" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="45" y1="80" x2="55" y2="80" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.editorial-fade',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.8, stagger: 0.3, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-icon',
        { opacity: 0, scale: 0.8, rotate: -15 },
        { opacity: 1, scale: 1, rotate: 0, duration: 2.5, ease: 'power2.out', delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4rem 2rem' }}>

      {/* Top Meta Bar */}
      <div className="editorial-fade" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-delicate)', paddingBottom: '1rem', marginBottom: '4rem' }}>
        <span className="editorial-meta">İstanbul, TR</span>
      </div>

      {/* Main Editorial Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center', flexGrow: 1 }}>

        {/* Mobile-first / Responsive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Typography Section */}
          <div style={{ paddingRight: '2rem' }}>
            <h1 className="editorial-title editorial-fade" style={{ color: 'var(--text-main)', marginBottom: '2rem' }}>
              MUTLAK <br />
              <span className="text-silver" style={{ fontStyle: 'italic', fontWeight: 300, display: 'inline-block', marginTop: '-10px' }}>Adalet</span>
            </h1>
            <div className="editorial-rule editorial-fade" style={{ width: '50px' }}></div>
            <p className="editorial-fade" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '400px' }}>
              Yılların getirdiği tecrübe ve tavizsiz etik değerlerle haklarınızı en üst düzeyde savunuyoruz. Adaletin tecellisi için buradayız.
            </p>
          </div>

          {/* Central Custom SVG Emblem */}
          <div className="hero-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-main)' }}>
            <JusticeSeal />
          </div>

        </div>

      </div>

      {/* Bottom Anchor / Scroll Down */}
      <div className="editorial-fade" style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'var(--border-delicate)' }}></div>
        <span className="editorial-meta">Aşağı Kaydırın</span>
        <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'var(--border-delicate)' }}></div>
      </div>

    </section>
  );
}
