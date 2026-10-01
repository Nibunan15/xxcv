// Replaces the prototype's <image-slot>: renders the photo that was placed in the design,
// with the same pan/zoom framing. Usage: <SlotImage id="ab-founder" alt="Founder" />
import slots from '../data/imageSlots.json';
export default function SlotImage({ id, src, alt = '', fit = 'cover', style }) {
  const s = slots[id] || {};
  const url = src || s.src;
  if (!url) return <div style={{ width: '100%', height: '100%', background: '#eef3f9', ...style }} />;
  const scale = s.scale || 1, x = s.x || 0, y = s.y || 0;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      <img src={url} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: fit, transform: `translate(${x}%, ${y}%) scale(${scale})` }} />
    </div>
  );
}
