function S({ title, children }) {
  return (
    <details className="section-card" open>
      <summary>{title}</summary>
      <div className="card-body">{children}</div>
    </details>
  );
}

export default function ExperiencingGod() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
        <h1>🙏 Experiencing God</h1>
        <p>Revelation, religious experience, prayer, miracles, visions — and the challenges to them.</p>
      </div>
      <div className="content">

        <S title="📖 Key Terms — Revelation">
          <div className="key-terms">
            {[
              ['Revelation', 'God making himself known to humans.'],
              ['General Revelation', 'God revealed to everyone through nature, reason, conscience.'],
              ['Special Revelation', 'God revealed to specific individuals — e.g. visions, scripture, miracles.'],
              ['Transcendent', 'God exists beyond and outside the physical universe.'],
              ['Immanent', 'God is present and active within the world.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t1)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
        </S>

        <S title="📚 General vs Special Revelation">
          <div className="info-grid">
            <div className="info-box">
              <h4 style={{ color: 'var(--t1)' }}>General Revelation</h4>
              <ul>
                <li>Available to <strong>everyone</strong>, not just believers</li>
                <li>Through <strong>nature</strong> — beauty, order, complexity suggest a creator</li>
                <li>Through <strong>conscience</strong> — inner moral sense (God-given?)</li>
                <li>Through <strong>reason</strong> — logic and philosophical argument</li>
                <li>Thomas Aquinas supported this view</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t1)' }}>Special Revelation</h4>
              <ul>
                <li>Given to <strong>specific people</strong> — prophets, saints</li>
                <li><strong>Visions</strong> — e.g. Muhammad (PBUH) receiving the Quran from Angel Jibril</li>
                <li><strong>Miracles</strong> — e.g. Jesus raising Lazarus</li>
                <li><strong>Scripture</strong> — Bible, Quran as the direct word of God</li>
                <li><strong>Incarnation</strong> — God becoming human in Jesus (Christian view)</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> Always apply revelation to both Christianity and Islam when asked. Christians see Jesus as the ultimate special revelation; Muslims see the Quran as the direct word of Allah.
          </div>
        </S>

        <S title="📖 Sacred Texts as Revelation">
          <div className="info-grid">
            <div className="info-box">
              <h4><span className="badge badge-christian">Christianity</span> The Bible</h4>
              <ul>
                <li>66 books — Old and New Testament</li>
                <li>Christians believe it is <strong>inspired by God</strong> (God-breathed — 2 Timothy 3:16)</li>
                <li><strong>Fundamentalists</strong>: Bible is literally true word-for-word</li>
                <li><strong>Liberals</strong>: Bible is inspired but written by humans — may contain errors or metaphor</li>
                <li>Reveals God's nature, commands, and salvation through Jesus</li>
              </ul>
            </div>
            <div className="info-box">
              <h4><span className="badge badge-islam">Islam</span> The Quran</h4>
              <ul>
                <li>The direct, unchanged word of Allah — revealed to Muhammad via Angel Jibril</li>
                <li>Muhammad was <strong>illiterate</strong> — proof the Quran is divine, not man-made</li>
                <li>Preserved in its <strong>original Arabic</strong> — never altered</li>
                <li>Memorised by millions of Hafiz (those who memorise it entirely)</li>
                <li>Also the Hadith — sayings and actions of the Prophet Muhammad</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="🙌 Worship">
          <div className="info-grid">
            <div className="info-box">
              <h4><span className="badge badge-christian">Christianity</span> Worship</h4>
              <ul>
                <li><strong>Liturgical</strong>: formal, structured — e.g. Catholic Mass with set prayers and rituals</li>
                <li><strong>Non-liturgical</strong>: informal, spontaneous — e.g. Evangelical worship with personal prayer and music</li>
                <li><strong>Private worship</strong>: personal prayer, Bible reading at home</li>
                <li><strong>Sacraments</strong>: outward signs of inner grace — Baptism, Eucharist</li>
                <li>Purpose: praise God, seek forgiveness, grow spiritually</li>
              </ul>
            </div>
            <div className="info-box">
              <h4><span className="badge badge-islam">Islam</span> Worship</h4>
              <ul>
                <li><strong>Salah</strong>: 5 daily prayers — one of the Five Pillars</li>
                <li>Prayers at: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), Isha (night)</li>
                <li>Face <strong>Qibla</strong> (towards Mecca) when praying</li>
                <li><strong>Wudu</strong>: ritual washing before prayer</li>
                <li><strong>Jumu'ah</strong>: Friday congregational prayer in mosque</li>
                <li><strong>Du'a</strong>: personal supplication — can be any time</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="🙏 Prayer">
          <h3>Types of Prayer (Christianity)</h3>
          <div className="key-terms">
            {[
              ['Adoration', 'Praising God for who he is.'],
              ['Confession', 'Admitting sins and asking for forgiveness.'],
              ['Thanksgiving', 'Thanking God for blessings.'],
              ['Supplication', 'Asking God for help — for yourself or others (intercession).'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t1)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
          <h3>The Lord's Prayer (Christian)</h3>
          <blockquote>
            "Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven…" — Matthew 6:9-13
          </blockquote>
          <p><strong>Why prayer is important:</strong> Builds a relationship with God, guidance in decisions, comfort in suffering, communal bonding.</p>
          <div className="info-grid" style={{ marginTop: '0.75rem' }}>
            <div className="info-box">
              <h4>Does prayer work? — Arguments FOR</h4>
              <ul>
                <li>Personal testimonies of answered prayer</li>
                <li>Studies suggest prayer reduces anxiety and improves wellbeing</li>
                <li>Jesus taught that God answers prayer (Matthew 7:7)</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Does prayer work? — Arguments AGAINST</h4>
              <ul>
                <li>No scientific proof that prayer changes outcomes</li>
                <li>If God is omniscient, He already knows what we need</li>
                <li>Unanswered prayers raise questions about God's goodness</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="✨ Miracles">
          <p>A <strong>miracle</strong> is an event that cannot be explained by natural laws — believed to be caused by God.</p>
          <div className="argument-card">
            <h4>Examples of Miracles</h4>
            <ul>
              <li><strong>Christianity:</strong> Jesus healing the blind, raising Lazarus, feeding 5,000, the Resurrection</li>
              <li><strong>Islam:</strong> Muhammad splitting the moon, the Quran itself (linguistic miracle), Isra and Mi'raj (night journey)</li>
              <li><strong>General:</strong> Lourdes healings (Catholic shrine in France), modern healing miracles claimed in Charismatic churches</li>
            </ul>
          </div>
          <div className="info-grid">
            <div className="info-box">
              <h4>Arguments FOR miracles</h4>
              <ul>
                <li>Eyewitness accounts from reliable sources</li>
                <li>Medical experts cannot explain some cures</li>
                <li>Show God's love and power</li>
                <li>Strengthen faith of believers</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Arguments AGAINST miracles</h4>
              <ul>
                <li>David Hume: more likely that witnesses are mistaken than natural law broken</li>
                <li>Could be coincidence or misunderstood science</li>
                <li>If God performs miracles for some, why not for all who suffer?</li>
                <li>Different religions claim contradictory miracles</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> David Hume's argument against miracles is a classic — "a miracle is a violation of the laws of nature." Mention it for higher marks.
          </div>
        </S>

        <S title="👁️ Visions">
          <p>A <strong>vision</strong> is an experience where someone believes they have seen or heard from God or a divine being.</p>
          <div className="key-terms">
            {[
              ['Corporeal Vision', 'A physical, bodily vision seen with the eyes — e.g. appearances of Jesus after the resurrection.'],
              ['Imaginative Vision', 'Seen in the mind or in a dream — e.g. Muhammad\'s first revelation from Jibril in a cave.'],
              ['Intellectual Vision', 'A mental understanding of God — a non-visual but deeply felt sense of God\'s presence.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t1)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
          <h3>Famous Examples</h3>
          <ul>
            <li><strong>Bernadette of Lourdes:</strong> 18 apparitions of the Virgin Mary in 1858 — now a major Catholic pilgrimage site</li>
            <li><strong>Muhammad (PBUH):</strong> Received the first revelation in Cave Hira — "Iqra" (Read!) — beginning of the Quran</li>
            <li><strong>Paul on the Road to Damascus:</strong> Blinding light and voice of Jesus — converted him from persecutor to apostle (Acts 9)</li>
            <li><strong>Isaiah's vision:</strong> Saw God seated on a throne, surrounded by seraphim (Isaiah 6)</li>
          </ul>
          <div className="info-grid" style={{ marginTop: '0.75rem' }}>
            <div className="info-box">
              <h4>Why believe visions are genuine?</h4>
              <ul>
                <li>Changed the recipient's life dramatically</li>
                <li>Consistent with scripture and tradition</li>
                <li>Recipient often reluctant or unprepared — not seeking fame</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Challenges to visions</h4>
              <ul>
                <li>Could be psychological — hallucination or mental illness</li>
                <li>Cannot be verified — only the visionary experienced it</li>
                <li>Different visions across religions may cancel each other out</li>
              </ul>
            </div>
          </div>
        </S>

        <S title="🧐 Challenges to Religious Experience">
          <div className="argument-card">
            <h4>Challenge 1: Psychology (Sigmund Freud)</h4>
            <p>Freud argued religion is a <strong>psychological illusion</strong> — a wish-fulfilment. God is an imaginary father figure created by the subconscious to cope with fear and uncertainty. Religious experiences are projections of our own desires, not genuine encounters with God.</p>
          </div>
          <div className="argument-card">
            <h4>Challenge 2: Neuroscience</h4>
            <p>Scientists have stimulated the temporal lobe of the brain and produced feelings of a "presence" or religious awe. This suggests religious experience may be a brain phenomenon, not a genuine encounter with God.</p>
          </div>
          <div className="argument-card">
            <h4>Challenge 3: Different religions = contradictory experiences</h4>
            <p>If God genuinely reveals Himself, why do Christians, Muslims, Hindus, and Buddhists have radically different experiences of Him? This suggests the experience reflects the believer's culture and expectations rather than an objective God.</p>
          </div>
          <div className="argument-card">
            <h4>Response from believers</h4>
            <p>William James argued religious experiences share 4 features (PNOT): <strong>P</strong>assivity, <strong>N</strong>oetic quality, <strong>O</strong>utward unity, <strong>T</strong>ransitoriness. The sheer number and consistency of experiences across all cultures suggests a real source. The brain activity could be the <em>mechanism</em> God uses to communicate.</p>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> William James' 4 qualities and Freud's critique are both commonly examined. Try to use both in evaluation questions.
          </div>
        </S>

      </div>
    </>
  );
}
