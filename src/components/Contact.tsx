export default function Contact() {
  return (
    <section className="section-container" style={{ paddingBottom: '8rem' }}>
      
      <div className="editorial-rule-heavy" style={{ marginBottom: '4rem' }}></div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
        
        {/* Left Side: Info */}
        <div>
          <h2 className="editorial-title" style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>İletişim</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            Hukuki meselelerinizi gizlilik prensipleri çerçevesinde tartışmak ve stratejik bir yol haritası belirlemek için bizimle iletişime geçin.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 className="editorial-meta" style={{ marginBottom: '0.5rem', color: 'var(--accent-silver)' }}>Makam</h4>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontFamily: 'var(--font-serif)' }}>Büyükdere Cad. No: 123<br/>Levent, İstanbul</p>
            </div>
            
            <div>
              <h4 className="editorial-meta" style={{ marginBottom: '0.5rem', color: 'var(--accent-silver)' }}>Telefon</h4>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontFamily: 'var(--font-serif)' }}>+90 (212) 555 01 23</p>
            </div>
            
            <div>
              <h4 className="editorial-meta" style={{ marginBottom: '0.5rem', color: 'var(--accent-silver)' }}>Telgraf / E-Posta</h4>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontFamily: 'var(--font-serif)' }}>evrak@hukukburosu.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Vintage Typewriter Form */}
        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ borderBottom: '1px solid var(--border-heavy)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px' }}>Resmi Talep Formu</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="editorial-meta" style={{ marginBottom: '0.5rem' }}>İsim Soyisim</label>
              <input type="text" style={{ padding: '0.5rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-delicate)', color: 'var(--text-main)', outline: 'none', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="editorial-meta" style={{ marginBottom: '0.5rem' }}>İletişim Adresi</label>
              <input type="email" style={{ padding: '0.5rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-delicate)', color: 'var(--text-main)', outline: 'none', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="editorial-meta" style={{ marginBottom: '0.5rem' }}>Beyan / Mesaj</label>
              <textarea rows={4} style={{ padding: '0.5rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-delicate)', color: 'var(--text-main)', outline: 'none', fontFamily: 'var(--font-serif)', resize: 'vertical', fontSize: '1.2rem', lineHeight: '1.6' }}></textarea>
            </div>
            
            <button style={{ padding: '1rem', marginTop: '1rem', background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-heavy)', fontSize: '0.9rem', letterSpacing: '3px', cursor: 'pointer', transition: 'all 0.3s ease', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--text-main)';
                e.currentTarget.style.color = 'var(--bg-base)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
            >
              Arz Et
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
