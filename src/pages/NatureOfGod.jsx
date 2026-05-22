function S({ title, children, open = false }) {
  return (
    <details className="section-card" open={open}>
      <summary>{title}</summary>
      <div className="card-body">{children}</div>
    </details>
  );
}

export default function NatureOfGod() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #991b1b, #dc2626)' }}>
        <h1>✨ The Nature of God</h1>
        <p>What is God like? Explore divine attributes, how different faiths understand God, and whether God can be known.</p>
      </div>
      <div className="content">

        <S title="📖 Key Terms" open>
          <div className="key-terms">
            {[
              ['Omnipotent', 'All-powerful — God can do anything.'],
              ['Omniscient', 'All-knowing — God knows everything, including the future.'],
              ['Omnipresent', 'Present everywhere at all times.'],
              ['Omnibenevolent', 'All-loving and perfectly good.'],
              ['Eternal', 'God exists outside of time — no beginning or end.'],
              ['Immanent', 'God is present and active within the world and human experience.'],
              ['Transcendent', 'God exists beyond and above the physical universe.'],
              ['Monotheism', 'Belief in one God — Christianity, Islam, Judaism, Sikhism.'],
              ['Polytheism', 'Belief in many gods — e.g. ancient Greek religion, some forms of Hinduism.'],
              ['Pantheism', 'God is everything — God is identical with the universe (e.g. some Hindu views).'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t4)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
        </S>

        <S title="⚡ The 4 Omni-Attributes" open>
          <div className="info-grid">
            <div className="info-box">
              <h4>Omnipotent — All-Powerful</h4>
              <ul>
                <li>God can do anything that is logically possible</li>
                <li>He created the universe from nothing (ex nihilo)</li>
                <li>He performs miracles — overriding natural law</li>
                <li><strong>Paradox:</strong> Can God create a stone so heavy He can't lift it? — challenges absolute omnipotence</li>
                <li>Aquinas: God cannot do what is logically contradictory — but this doesn't limit His power, it just means illogical things aren't "things"</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Omniscient — All-Knowing</h4>
              <ul>
                <li>God knows all past, present, and future events</li>
                <li>He knows our thoughts, feelings, and intentions</li>
                <li><strong>Problem:</strong> If God knows the future, can humans have free will?</li>
                <li>Middle Knowledge view: God knows all possible choices — foreknowledge doesn't force our choices</li>
                <li>"O Lord, you have searched me and you know me" — Psalm 139:1</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Omnipresent — Everywhere</h4>
              <ul>
                <li>God is present in all places at all times</li>
                <li>Not limited to a body or location</li>
                <li>"Where can I go from your Spirit? Where can I flee from your presence?" — Psalm 139:7</li>
                <li>Supports the belief God can hear all prayers simultaneously</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Omnibenevolent — All-Good</h4>
              <ul>
                <li>God is perfectly and completely good — he loves all creation</li>
                <li>Everything God does is morally perfect</li>
                <li><strong>Tension:</strong> If God is all-good, why does He allow suffering? → The Problem of Evil</li>
                <li>"God is love" — 1 John 4:8</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> The 4 omni-attributes are the foundation of the Problem of Evil. Learn them thoroughly — you'll need them in that topic too.
          </div>
        </S>

        <S title="🌍 Immanence vs Transcendence">
          <div className="info-grid">
            <div className="info-box">
              <h4>Immanence — God within the world</h4>
              <ul>
                <li>God is close to and involved in creation and human life</li>
                <li>He hears prayers and responds</li>
                <li>The Holy Spirit is the immanent presence of God in Christians (Christianity)</li>
                <li>Allah is closer to us "than our jugular vein" — Quran 50:16</li>
                <li>The Incarnation — God becoming human in Jesus — ultimate immanence</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Transcendence — God beyond the world</h4>
              <ul>
                <li>God is beyond and above the universe — wholly other</li>
                <li>Not limited by time, space, or physical laws</li>
                <li>Rudolf Otto called this the <strong>"Numinous"</strong> — a sense of awe at encountering the divine</li>
                <li>Islam emphasises transcendence strongly: Allah cannot be represented in images (no idolatry)</li>
                <li>"For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord." — Isaiah 55:8</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '0.75rem' }}>Most traditions hold that God is <strong>both</strong> immanent and transcendent — involved in the world yet beyond it. The tension between these attributes is a rich exam topic.</p>
        </S>

        <S title="❓ Can God be Known? — Knowable vs Unknowable">
          <div className="info-grid">
            <div className="info-box">
              <h4>God is Knowable (Cataphatic Theology)</h4>
              <ul>
                <li>We can make <strong>positive statements</strong> about God ("God is loving")</li>
                <li>God reveals himself through scripture, creation, Jesus (Christianity), the Quran (Islam)</li>
                <li>Supported by the idea that God wants a relationship with humanity</li>
                <li>"This is eternal life: that they know you, the only true God" — John 17:3</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>God is Unknowable (Apophatic / Negative Theology)</h4>
              <ul>
                <li>God is so different from anything in our experience that we cannot truly describe him</li>
                <li>We can only say what God is <strong>not</strong> ("God is not limited," "God is not evil")</li>
                <li>Associated with Pseudo-Dionysius and Maimonides</li>
                <li>Islam: Allah's full nature is beyond human comprehension — we know only what He has revealed</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="✝️ The Trinity — Christian View">
          <p>Christianity teaches that God is <strong>One God in Three Persons</strong> (the Trinity):</p>
          <div className="key-terms">
            {[
              ['God the Father', 'The creator and ruler of the universe. Transcendent, all-powerful.'],
              ['God the Son (Jesus)', 'The Word of God made flesh (John 1:14). Fully human and fully divine. Died to save humanity from sin.'],
              ['God the Holy Spirit', 'The immanent presence of God in the world and in believers. Guides, comforts, and empowers Christians.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t4)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '0.75rem' }}>The Trinity is a <strong>monotheistic</strong> belief — Christians believe in one God, not three separate gods. This is one of the most distinctive and debated Christian doctrines.</p>
          <blockquote>"Go and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit." — Matthew 28:19</blockquote>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> Islam directly rejects the Trinity as shirk (associating partners with God). Muslims say Jesus was a great prophet but not divine. This contrast is examinable.
          </div>
        </S>

        <S title="☪️ Tawhid — Islamic View of God">
          <p><strong>Tawhid</strong> is the central teaching of Islam: the absolute, indivisible <strong>Oneness of God</strong>. Allah is utterly unique and has no partners, no son, no equal.</p>

          <div className="argument-card">
            <h4>Surah Al-Ikhlas (Quran 112) — The Oneness of God</h4>
            <blockquote style={{ fontStyle: 'normal' }}>
              "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there any equivalent to Him."
            </blockquote>
            <p>This short surah is considered worth a third of the Quran — it perfectly summarises Tawhid.</p>
          </div>

          <div className="key-terms">
            {[
              ['Shirk', 'The greatest sin in Islam — associating partners with Allah (e.g. believing Jesus is God).'],
              ['99 Names of Allah', 'The Asmaul Husna — 99 names describing Allah\'s attributes, e.g. Al-Rahman (the Most Merciful), Al-Alim (the All-Knowing).'],
              ['Allah', 'The Arabic word for God — used by Arab Christians too. Not a different God, but the same God of Abraham.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t4)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
        </S>

        <S title="🕉️ Brahman — Hindu View">
          <p>In Hinduism, <strong>Brahman</strong> is the ultimate reality — the universal soul or supreme cosmic spirit from which all existence comes and to which all returns.</p>
          <div className="info-grid">
            <div className="info-box">
              <h4>Nirguna Brahman (without attributes)</h4>
              <ul>
                <li>Brahman without form or qualities — beyond description</li>
                <li>The Impersonal Absolute</li>
                <li>Associated with Advaita Vedanta philosophy (Adi Shankaracharya)</li>
                <li>The Atman (individual soul) is ultimately identical to Brahman</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Saguna Brahman (with attributes)</h4>
              <ul>
                <li>Brahman with form and personal qualities</li>
                <li>Manifested as the Trimurti (three main gods): Brahma (creator), Vishnu (preserver), Shiva (destroyer)</li>
                <li>Many forms help humans relate to the divine</li>
                <li>All Hindu gods are aspects of the one Brahman</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '0.75rem' }}>This means Hinduism can be seen as both <strong>monotheistic</strong> (one ultimate reality) and <strong>polytheistic</strong> (many gods) depending on how you look at it.</p>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> On "Is Hinduism polytheistic?" — the answer is nuanced. Yes, there are many deities, but most Hindus see them as manifestations of one ultimate reality, Brahman. Show this complexity for high marks.
          </div>
        </S>

      </div>
    </>
  );
}
