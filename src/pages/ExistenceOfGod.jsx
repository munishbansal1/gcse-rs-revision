function S({ title, children, open = false }) {
  return (
    <details className="section-card" open={open}>
      <summary>{title}</summary>
      <div className="card-body">{children}</div>
    </details>
  );
}

export default function ExistenceOfGod() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #065f46, #059669)' }}>
        <h1>🔭 The Existence of God</h1>
        <p>Arguments for and against God's existence — from philosophy, science, and religious experience.</p>
      </div>
      <div className="content">

        <S title="📖 Key Definitions" open>
          <div className="key-terms">
            {[
              ['Theist', 'Someone who believes God exists.'],
              ['Atheist', 'Someone who does not believe God exists.'],
              ['Agnostic', 'Someone who believes it is impossible to know whether God exists.'],
              ['Cosmological', 'Relating to the origin of the universe.'],
              ['Teleological', 'Relating to purpose or design (telos = Greek for purpose).'],
              ['A priori', 'Reasoning from logic alone, before experience — e.g. the Ontological Argument.'],
              ['A posteriori', 'Reasoning based on observation and evidence — e.g. the Design Argument.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t3)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
        </S>

        <S title="⚡ Argument 1: The First Cause Argument (Cosmological)" open>
          <div className="argument-card">
            <h4>The Argument — Thomas Aquinas (1225–1274)</h4>
            <ol>
              <li>Everything that exists has a cause.</li>
              <li>The universe exists, so it must have a cause.</li>
              <li>You cannot have an infinite chain of causes — there must be a first cause.</li>
              <li>That first cause is God — the <strong>Uncaused Cause</strong> or <strong>Prime Mover</strong>.</li>
            </ol>
          </div>
          <div className="info-grid">
            <div className="info-box">
              <h4 style={{ color: 'var(--t3)' }}>Strengths</h4>
              <ul>
                <li>Logical and intuitive — everything we know has a cause</li>
                <li>Supported by science: the Big Bang implies the universe had a beginning</li>
                <li>Backed by scripture: "In the beginning God created the heavens and the earth" (Genesis 1:1)</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t4)' }}>Weaknesses</h4>
              <ul>
                <li><strong>David Hume:</strong> Why can't the universe itself be the uncaused cause?</li>
                <li><strong>Bertrand Russell:</strong> "The universe just is" — no explanation needed</li>
                <li>Even if valid, doesn't tell us anything about what God is like</li>
                <li>Stephen Hawking: time itself began at the Big Bang — so asking "what caused it" is meaningless</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> Always name Aquinas (or Aristotle) for the First Cause, and Hume or Russell for the counter-argument. Using specific philosopher names gains extra marks.
          </div>
        </S>

        <S title="🎨 Argument 2: The Design Argument (Teleological)">
          <div className="argument-card">
            <h4>Paley's Watch Analogy (William Paley, 1802)</h4>
            <ol>
              <li>If you found a watch on the ground, you wouldn't assume it assembled itself — its complexity implies a designer.</li>
              <li>The universe is far more complex than a watch — the eye, the laws of physics, ecosystems.</li>
              <li>Therefore the universe must have a designer.</li>
              <li>That designer is God.</li>
            </ol>
          </div>
          <div className="argument-card">
            <h4>Fine-Tuning Argument (Modern version)</h4>
            <p>The physical constants of the universe (gravity, speed of light, strength of nuclear forces) are set with extraordinary precision. If any were slightly different, life would be impossible. This looks like intentional design.</p>
          </div>
          <div className="info-grid">
            <div className="info-box">
              <h4 style={{ color: 'var(--t3)' }}>Strengths</h4>
              <ul>
                <li>The universe does appear ordered and fine-tuned for life</li>
                <li>Intuitive — humans naturally see design in complex things</li>
                <li>Supported by religious experience — God seen through nature</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t4)' }}>Weaknesses</h4>
              <ul>
                <li><strong>Darwin's Evolution:</strong> complexity arises from natural selection — no designer needed</li>
                <li><strong>David Hume:</strong> the universe is unlike a watch — it's organic, not mechanical</li>
                <li>If the universe needs a designer, who designed God?</li>
                <li><strong>Multiverse theory:</strong> if infinite universes exist, one will be fine-tuned by chance</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="🌟 Argument 3: Religious Experience">
          <div className="argument-card">
            <h4>The Argument from Religious Experience</h4>
            <ol>
              <li>Millions of people across all cultures and times report experiencing God directly.</li>
              <li>The cumulative effect of so many experiences is powerful evidence.</li>
              <li>The best explanation for these experiences is that God is real.</li>
            </ol>
          </div>
          <p><strong>William James</strong> identified 4 qualities of genuine religious experiences (PNOT):</p>
          <div className="key-terms">
            {[
              ['Passivity', 'The person feels taken over — not in control of the experience.'],
              ['Noetic quality', 'A sense of deep knowledge or insight is gained.'],
              ['Otto\'s "Numinous"', 'A feeling of awe, mystery, and the presence of something "wholly other."'],
              ['Transitoriness', 'The experience is short-lived but has a lasting impact.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t3)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
          <div className="info-grid" style={{ marginTop: '0.5rem' }}>
            <div className="info-box">
              <h4 style={{ color: 'var(--t3)' }}>Strengths</h4>
              <ul>
                <li>Millions of people across all cultures report similar experiences</li>
                <li>Often life-changing — hard to dismiss as mere imagination</li>
                <li>Principle of Testimony: we generally accept what others report experiencing</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t4)' }}>Weaknesses</h4>
              <ul>
                <li>Freud: religious experience is wish-fulfilment / psychological projection</li>
                <li>Neuroscience: temporal lobe stimulation produces similar experiences</li>
                <li>Different religions report contradictory experiences of "God"</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="⚖️ Argument 4: The Moral Argument">
          <div className="argument-card">
            <h4>The Argument (Kant &amp; C.S. Lewis)</h4>
            <ol>
              <li>All humans have an innate moral sense — we all feel some things are right and wrong.</li>
              <li>This universal moral law must have a source — it can't come from evolution or society alone.</li>
              <li>The most logical source of objective morality is God.</li>
              <li>Therefore God exists.</li>
            </ol>
          </div>
          <div className="info-grid">
            <div className="info-box">
              <h4 style={{ color: 'var(--t3)' }}>Strengths</h4>
              <ul>
                <li>Explains why basic morality is consistent across cultures</li>
                <li>C.S. Lewis: felt the moral law led him from atheism to belief in God</li>
                <li>Supports the idea of divine judgement and justice</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t4)' }}>Weaknesses</h4>
              <ul>
                <li>Morality can be explained by evolution (social cooperation improves survival)</li>
                <li>Moral views vary greatly across cultures — not truly universal</li>
                <li>Even if there is objective morality, it doesn't have to come from God</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="💥 The Big Bang Theory">
          <p>The <strong>Big Bang Theory</strong> is the dominant scientific explanation for the origin of the universe. Around 13.8 billion years ago, all matter, energy, space and time began from an incredibly hot, dense point called a <strong>singularity</strong> and expanded rapidly.</p>
          <div className="info-grid">
            <div className="info-box">
              <h4>Evidence for the Big Bang</h4>
              <ul>
                <li><strong>Red-shift:</strong> galaxies moving away — universe expanding</li>
                <li><strong>Cosmic Microwave Background Radiation:</strong> afterglow of the Big Bang detected</li>
                <li>Abundance of hydrogen and helium matches predictions</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Religious responses</h4>
              <ul>
                <li>Many believers accept the Big Bang — God could have <em>caused</em> it</li>
                <li>"What caused the Big Bang?" still points to a First Cause</li>
                <li>The Bible's "Let there be light" seen as metaphor for the Big Bang</li>
                <li>Pope Francis: "The Big Bang, which today we hold to be the origin of the world, does not contradict the intervention of the divine creator."</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="🦕 Evolution and Creation">
          <div className="argument-card">
            <h4>Darwin's Theory of Evolution (1859)</h4>
            <p>All species evolved from simpler organisms over millions of years through <strong>natural selection</strong> — organisms with beneficial traits survive and reproduce; others die out. This explains the complexity and diversity of life without needing a designer.</p>
          </div>
          <div className="info-grid">
            <div className="info-box">
              <h4><span className="badge badge-christian">Christian</span> Responses</h4>
              <ul>
                <li><strong>Literalists / Creationists:</strong> Genesis is literally true — the world created in 6 days ~6,000 years ago. Evolution is false.</li>
                <li><strong>Liberal Christians:</strong> Genesis is symbolic / poetic — Evolution is how God created life. The "days" are eras, not 24-hour periods.</li>
                <li><strong>Theistic Evolution:</strong> God guides the process of evolution. Science and faith are compatible.</li>
              </ul>
            </div>
            <div className="info-box">
              <h4><span className="badge badge-islam">Islamic</span> Responses</h4>
              <ul>
                <li>Some Muslims accept evolution for animals but not humans — Adam was created directly by Allah</li>
                <li>Other Muslims are Creationists and reject evolution entirely</li>
                <li>The Quran says Allah shaped humans with His own hands (Quran 38:75)</li>
                <li>Growing number accept Theistic Evolution</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> Don't say "religious people reject science." Many do accept evolution. Show you understand the range of views within Christianity and Islam for higher-level evaluation.
          </div>
        </S>

      </div>
    </>
  );
}
