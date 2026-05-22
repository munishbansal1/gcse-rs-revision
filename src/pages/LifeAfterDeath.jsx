function S({ title, children, open = false }) {
  return (
    <details className="section-card" open={open}>
      <summary>{title}</summary>
      <div className="card-body">{children}</div>
    </details>
  );
}

export default function LifeAfterDeath() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #5b21b6, #7c3aed)' }}>
        <h1>♾️ Life After Death</h1>
        <p>What happens when we die? Explore Christian, Islamic, Hindu, Buddhist, and secular views.</p>
      </div>
      <div className="content">

        <S title="📖 Key Terms" open>
          <div className="key-terms">
            {[
              ['Resurrection', 'Rising from the dead with a new or transformed body — key Christian and Islamic belief.'],
              ['Reincarnation', 'The soul is reborn into a new body after death — Hindu and Buddhist belief.'],
              ['Heaven', 'A place of eternal happiness in God\'s presence after death.'],
              ['Hell', 'A place of punishment or separation from God for those who have rejected Him.'],
              ['Purgatory', 'Catholic belief — a place of purification before entering heaven.'],
              ['Soul', 'The spiritual, non-physical part of a person that survives death.'],
              ['Judgement', 'God assessing how a person lived and determining their afterlife.'],
              ['Nirvana', 'Buddhist goal — release from the cycle of rebirth (samsara) into a state of perfect peace.'],
              ['Moksha', 'Hindu equivalent of nirvana — liberation from the cycle of reincarnation.'],
              ['Karma', 'The moral law of cause and effect — good actions lead to good future lives.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t2)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
        </S>

        <S title="✝️ Christian Views on Life After Death" open>
          <h3>Resurrection of the Body</h3>
          <p>Most Christians believe in the <strong>resurrection of the body</strong> — the dead will rise bodily at the end of time, just as Jesus rose on Easter Sunday. The body will be transformed and glorified, not just the spirit.</p>
          <blockquote>"I am the resurrection and the life. The one who believes in me will live, even though they die." — John 11:25</blockquote>

          <h3>Heaven, Hell, and Purgatory</h3>
          <div className="key-terms">
            {[
              ['Heaven', 'Eternal life with God — for those who have faith and lived according to God\'s will.'],
              ['Hell', 'Eternal separation from God — result of rejecting God\'s love. Some see it as annihilation rather than torture.'],
              ['Purgatory (Catholic)', 'A temporary purification state for those who die in God\'s grace but still need to be cleansed of lesser sins before entering heaven.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t2)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>

          <h3>Final Judgement</h3>
          <p>Christians believe that at the end of time, God will judge all people — the living and the dead. Those who followed Jesus and showed love will enter eternal life; others will face eternal punishment. Some Christians believe in a <strong>personal judgement</strong> immediately after death as well.</p>
          <blockquote>"For we must all appear before the judgement seat of Christ, so that each of us may receive what is due us for the things done while in the body." — 2 Corinthians 5:10</blockquote>

          <div className="exam-tip">
            <strong>Exam Tip:</strong> Remember the difference between Catholics and Protestants — Catholics believe in Purgatory, most Protestants do not. This can score extra marks in evaluation questions.
          </div>
        </S>

        <S title="☪️ Islamic Views on Life After Death">
          <p>Belief in <strong>Akhirah</strong> (life after death) is one of the Six Articles of Faith in Islam — essential to being a Muslim.</p>

          <h3>Barzakh — The Intermediate State</h3>
          <p>After death, the soul enters <strong>Barzakh</strong> — a barrier or waiting place between death and the Day of Judgement. Angels Munkar and Nakir question the deceased in the grave about their faith.</p>

          <h3>Yawm al-Qiyamah — The Day of Judgement</h3>
          <ul>
            <li>All people are resurrected bodily on this day</li>
            <li>Everyone's deeds are weighed on a set of scales (<em>Mizan</em>)</li>
            <li>Each person receives a scroll recording every action they ever did</li>
            <li>The righteous cross the <em>Sirat</em> (bridge over Hell) safely into Paradise (<em>Jannah</em>)</li>
            <li>Those who rejected God fall into Hell (<em>Jahannam</em>)</li>
          </ul>

          <div className="info-grid">
            <div className="info-box">
              <h4><span className="badge badge-islam">Jannah (Paradise)</span></h4>
              <ul>
                <li>Eternal garden of pleasure and peace</li>
                <li>God's presence and approval</li>
                <li>No pain, sorrow, or death</li>
                <li>Reward for faith and good deeds</li>
              </ul>
            </div>
            <div className="info-box">
              <h4><span className="badge badge-islam">Jahannam (Hell)</span></h4>
              <ul>
                <li>A place of fire and suffering</li>
                <li>Punishment for rejecting Allah and wrongdoing</li>
                <li>Some scholars say it is temporary for Muslims who sinned; permanent for disbelievers</li>
              </ul>
            </div>
          </div>

          <blockquote>"Every soul shall have a taste of death: and only on the Day of Judgement shall you be paid your full recompense." — Quran 3:185</blockquote>
        </S>

        <S title="🕉️ Hindu Views — Reincarnation & Moksha">
          <p>Hinduism teaches that the <strong>Atman</strong> (soul/self) is eternal and passes through many lives in the cycle of <strong>Samsara</strong> (reincarnation).</p>

          <h3>How Reincarnation Works</h3>
          <ul>
            <li>At death, the Atman leaves the body and is reborn into a new one — could be human, animal, or higher being</li>
            <li>The type of rebirth is determined by <strong>Karma</strong> — the moral consequences of past actions</li>
            <li>Good karma → higher rebirth; bad karma → lower rebirth</li>
            <li>The goal is to escape Samsara altogether</li>
          </ul>

          <h3>Moksha — Liberation</h3>
          <p><strong>Moksha</strong> is the ultimate goal — liberation from the cycle of birth, death, and rebirth. The Atman merges back with <strong>Brahman</strong> (the universal soul / ultimate reality). Three paths to Moksha: <em>Karma Yoga</em> (action), <em>Jnana Yoga</em> (knowledge), <em>Bhakti Yoga</em> (devotion).</p>

          <div className="exam-tip">
            <strong>Exam Tip:</strong> Karma in Hinduism is NOT simply "what goes around comes around" — it is a spiritual law governing rebirth across multiple lifetimes, not just this life.
          </div>
        </S>

        <S title="☸️ Buddhist Views — Rebirth & Nirvana">
          <p>Buddhism teaches <strong>rebirth</strong> (not exactly reincarnation) — there is no permanent self (Anatta), so what passes on is a stream of consciousness shaped by karma, not a soul.</p>

          <h3>The Cycle of Samsara</h3>
          <ul>
            <li>All living beings are trapped in a cycle of suffering and rebirth</li>
            <li>The <strong>Three Poisons</strong> (greed, hatred, delusion) cause karma and keep us in Samsara</li>
            <li>Rebirth can occur in 6 realms: gods, humans, animals, hungry ghosts, hell beings, demi-gods</li>
          </ul>

          <h3>Nirvana — The Goal</h3>
          <p><strong>Nirvana</strong> is the extinguishing of desire and the end of the cycle of rebirth. It is not a place but a state of perfect peace and freedom from suffering. Achieved by following the <strong>Noble Eightfold Path</strong> and the Four Noble Truths.</p>
        </S>

        <S title="🔬 Non-Religious Views on Life After Death">
          <div className="argument-card">
            <h4>Materialism / Physicalism</h4>
            <p>The mind and consciousness are products of the brain. When the brain dies, the person ceases to exist. There is no soul and no afterlife — death is the end. This is the most common secular view.</p>
          </div>
          <div className="argument-card">
            <h4>Humanism</h4>
            <p>Life has meaning and value even without an afterlife. We live on through our actions, the memories others hold of us, and the impact we had on the world. There is no need for God or resurrection to live a good life.</p>
          </div>
          <div className="info-grid" style={{ marginTop: '0.75rem' }}>
            <div className="info-box">
              <h4>Arguments against life after death</h4>
              <ul>
                <li>No scientific evidence for souls or resurrection</li>
                <li>Brain damage can change personality — suggests mind = brain</li>
                <li>No verified accounts of the afterlife</li>
                <li>Wish-fulfilment: belief in afterlife is comforting but not true</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Arguments for life after death</h4>
              <ul>
                <li>Near Death Experiences reported worldwide</li>
                <li>Cases of children remembering past lives</li>
                <li>The resurrection of Jesus — historical claim with eyewitness accounts</li>
                <li>If God is omnibenevolent, justice requires recompense after death</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="💡 Near Death Experiences (NDEs)">
          <p>A <strong>Near Death Experience (NDE)</strong> is a reported experience by people who have been clinically dead or close to death and then revived.</p>
          <h3>Common Features of NDEs</h3>
          <ul>
            <li>A bright, warm light</li>
            <li>Feelings of peace and joy</li>
            <li>A tunnel or pathway</li>
            <li>Meeting deceased relatives or spiritual beings</li>
            <li>Life review ("seeing your life flash before you")</li>
            <li>A point of no return before being brought back</li>
          </ul>
          <div className="info-grid" style={{ marginTop: '0.75rem' }}>
            <div className="info-box">
              <h4>Religious interpretation</h4>
              <ul>
                <li>Evidence that the soul survives death</li>
                <li>Glimpse of heaven or the divine</li>
                <li>Consistent with accounts of afterlife in scripture</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Scientific interpretation</h4>
              <ul>
                <li>Caused by oxygen deprivation to the brain</li>
                <li>Release of endorphins and DMT</li>
                <li>Cultural expectations shape the vision seen</li>
                <li>No objective proof they correspond to a real afterlife</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="🔄 Remembered Past Lives">
          <p>Some children spontaneously report memories of a previous life — names, places, and events that they could not normally know. Researcher <strong>Ian Stevenson</strong> documented over 3,000 such cases, with some verified by investigation.</p>
          <div className="info-grid">
            <div className="info-box">
              <h4>Evidence in favour</h4>
              <ul>
                <li>Children provide verifiable details about deceased strangers</li>
                <li>Birthmarks matching described fatal wounds of the previous person</li>
                <li>Cases reported worldwide — not culturally limited</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Sceptical responses</h4>
              <ul>
                <li>Could be coincidence or cryptomnesia (forgotten memories)</li>
                <li>Investigators may unconsciously confirm details</li>
                <li>Does not prove a soul — could be other explanations</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> NDEs and remembered past lives are useful evaluation points — reference them as "evidence that challenges purely materialist views" but note the scientific counter-explanations.
          </div>
        </S>

      </div>
    </>
  );
}
