// Route /, design reference: design/Home.dc.html
export default function Home() {
  return (
    <>
      <section style={{ maxWidth: 1260, margin: '0 auto', padding: '96px clamp(20px,5vw,56px)' }}>
        <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: -1.6, lineHeight: 1.04 }}>Home</h1>
        <p style={{ marginTop: 16, color: '#475569' }}>Port the sections of <code>design/Home.dc.html</code> here, one component per section.</p>
      </section>
    </>
  );
}
