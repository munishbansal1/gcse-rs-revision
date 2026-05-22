import { Link } from 'react-router-dom';

const topics = [
  {
    to: '/experiencing-god',
    icon: '🙏',
    title: 'Experiencing God',
    desc: 'How people encounter God through revelation, prayer, miracles, visions, and religious experience.',
    color: 'var(--t1)',
    bg: 'var(--t1-bg)',
    subs: ['General & Special Revelation', 'Prayer', 'Miracles', 'Visions', 'Sacred Texts'],
  },
  {
    to: '/life-after-death',
    icon: '♾️',
    title: 'Life After Death',
    desc: 'What different religions and secular views say happens after we die.',
    color: 'var(--t2)',
    bg: 'var(--t2-bg)',
    subs: ['Resurrection', 'Reincarnation', 'Near Death Experiences', 'Non-Religious Views'],
  },
  {
    to: '/existence-of-god',
    icon: '🔭',
    title: 'The Existence of God',
    desc: 'Arguments for and against the existence of God, including scientific alternatives.',
    color: 'var(--t3)',
    bg: 'var(--t3-bg)',
    subs: ['First Cause', 'Design Argument', 'Religious Experience', 'Big Bang & Evolution'],
  },
  {
    to: '/nature-of-god',
    icon: '✨',
    title: 'The Nature of God',
    desc: 'What God is like — attributes, knowability, and how different faiths understand God.',
    color: 'var(--t4)',
    bg: 'var(--t4-bg)',
    subs: ['Omnipotence / Omniscience', 'Immanence & Transcendence', 'Trinity & Tawhid', 'Brahman'],
  },
  {
    to: '/problem-of-evil',
    icon: '⚖️',
    title: 'The Problem of Evil',
    desc: 'Why evil exists if God is good and powerful — theodicies and the inconsistent triad.',
    color: 'var(--t5)',
    bg: 'var(--t5-bg)',
    subs: ["Augustine's Theodicy", "Irenaeus' Theodicy", 'Inconsistent Triad', 'Natural vs Moral Evil'],
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <h1>GCSE <span>Religious Studies</span><br />Revision Notes</h1>
        <p>Everything you need to revise for your RS exam — clear notes, key terms, arguments, and exam tips.</p>
        <span className="topic-count">5 Topics &nbsp;·&nbsp; AQA Specification</span>
      </section>
      <div className="topics-grid">
        {topics.map(t => (
          <Link key={t.to} to={t.to} className="topic-card">
            <div className="t-bar" style={{ background: t.color }} />
            <div className="t-icon">{t.icon}</div>
            <h2 style={{ color: t.color }}>{t.title}</h2>
            <p>{t.desc}</p>
            <div className="subtopics">
              {t.subs.map(s => <span key={s} className="sub-tag">{s}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
