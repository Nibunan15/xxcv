// Route /contact, design reference: design/Contact.dc.html
import { useState } from 'react';
import { api } from '../lib/api.js';
export default function GetStarted() {
  const [f, setF] = useState({ name: '', email: '', phone: '', role: 'student', message: '' });
  const [state, setState] = useState('idle');
  const inp = { padding: '13px 16px', borderRadius: 12, border: '1px solid #DCE3EC', font: 'inherit' };
  const submit = async (e) => { e.preventDefault(); setState('sending'); try { await api('/leads', { method: 'POST', body: { ...f, source: 'contact' } }); setState('done'); } catch { setState('error'); } };
  return (
    <>
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '96px 20px' }}>
        <h1 style={{ fontSize: 'clamp(34px,5vw,56px)', letterSpacing: -1.4 }}>Get started</h1>
        <p style={{ marginTop: 12, color: '#475569' }}>Full visual design: <code>design/Contact.dc.html</code>. This form is already wired to <code>POST /api/leads</code>.</p>
        <form onSubmit={submit} style={{ display: 'grid', gap: 14, marginTop: 28 }}>
          {['name', 'email', 'phone'].map((k) => (
            <input key={k} required={k !== 'phone'} type={k === 'email' ? 'email' : 'text'} placeholder={k[0].toUpperCase() + k.slice(1)} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} style={inp} />
          ))}
          <select value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })} style={inp}>
            <option value="student">I'm a student</option><option value="college">I'm from a college</option><option value="business">I'm a business</option>
          </select>
          <textarea rows={4} placeholder="Message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} style={inp} />
          <button disabled={state === 'sending'} style={{ padding: '14px 24px', borderRadius: 100, border: 0, color: '#fff', fontWeight: 600, background: 'linear-gradient(135deg,#2F7BFF,#1FD3E8)', cursor: 'pointer' }}>{state === 'sending' ? 'Sending…' : 'Contact us'}</button>
          {state === 'done' && <p style={{ color: '#059669' }}>Thanks! We'll reach out soon.</p>}
          {state === 'error' && <p style={{ color: '#dc2626' }}>Something went wrong. Please try again.</p>}
        </form>
      </section>
    </>
  );
}
