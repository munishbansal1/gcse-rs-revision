function S({ title, children, open = false }) {
  return (
    <details className="section-card" open={open}>
      <summary>{title}</summary>
      <div className="card-body">{children}</div>
    </details>
  );
}

export default function ProblemOfEvil() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #c2410c, #ea580c)' }}>
        <h1>⚖️ The Problem of Evil</h1>
        <p>If God is all-good and all-powerful, why does evil exist? Theodicies, arguments, and responses.</p>
      </div>
      <div className="content">

        <S title="📖 Key Terms" open>
          <div className="key-terms">
            {[
              ['Evil', 'Anything that causes suffering, pain, or harm.'],
              ['Natural Evil', 'Suffering caused by natural events — earthquakes, disease, floods.'],
              ['Moral Evil', 'Suffering caused by human free choices — murder, war, abuse.'],
              ['Theodicy', 'An attempt to justify the existence of God despite the existence of evil.'],
              ['The Inconsistent Triad', 'The contradiction: God is omnipotent + omnibenevolent, yet evil exists. All three cannot be true at once.'],
              ['Free Will', 'The ability to make genuine choices — including the choice to do evil.'],
              ['Soul-Making', 'Irenaeus\' idea that suffering helps humans develop virtues and grow towards God\'s image.'],
            ].map(([t, d]) => (
              <div key={t} className="term" style={{ color: 'var(--t5)' }}>
                <strong>{t}</strong><span>{d}</span>
              </div>
            ))}
          </div>
        </S>

        <S title="🔺 Natural Evil vs Moral Evil" open>
          <div className="info-grid">
            <div className="info-box">
              <h4>Natural Evil</h4>
              <ul>
                <li>Caused by nature — not by human choice</li>
                <li>Earthquakes, tsunamis, volcanoes, hurricanes</li>
                <li>Disease, cancer, birth defects</li>
                <li>Famine and drought</li>
                <li><strong>Why this is a problem:</strong> Humans cannot be blamed — if God created nature, He is responsible for natural evil</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Moral Evil</h4>
              <ul>
                <li>Caused by human free choices</li>
                <li>Murder, torture, genocide, theft, abuse</li>
                <li>War and terrorism</li>
                <li>The Holocaust — 6 million Jews murdered</li>
                <li><strong>Why this is a problem:</strong> God could have created humans who always chose good — why didn't He?</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> When asked about types of evil, give a clear example for each. "The 2004 Indian Ocean tsunami" (natural) and "the Holocaust" (moral) are commonly cited examples.
          </div>
        </S>

        <S title="⚠️ The Inconsistent Triad" open>
          <div className="argument-card">
            <h4>The Logical Problem of Evil (J.L. Mackie)</h4>
            <p>Philosopher J.L. Mackie argued that the following three claims <strong>cannot all be true at the same time</strong>:</p>
            <ol>
              <li><strong>God is omnipotent</strong> — He has the power to prevent all evil.</li>
              <li><strong>God is omnibenevolent</strong> — He wants to prevent all evil.</li>
              <li><strong>Evil exists.</strong></li>
            </ol>
            <p style={{ marginTop: '0.5rem' }}>If God is able to stop evil and wants to stop evil, then evil should not exist. Since evil <em>does</em> exist, either God is not all-powerful, not all-good, or does not exist at all.</p>
          </div>
          <div className="argument-card">
            <h4>The Evidential Problem of Evil</h4>
            <p>Even if God and evil <em>can</em> logically coexist, the sheer <strong>amount and intensity</strong> of suffering in the world makes it highly unlikely an all-loving God exists. Why would God allow the suffering of innocent children or animals who cannot benefit from it?</p>
          </div>
        </S>

        <S title="🌱 Augustine's Theodicy">
          <div className="argument-card">
            <h4>Key Idea: Evil as the Absence of Good (privatio boni)</h4>
            <p>Augustine argued that <strong>evil is not a "thing" God created</strong> — it is the absence or corruption of good, just as darkness is the absence of light. God created a perfect world; evil entered through <strong>the Fall</strong>.</p>
          </div>

          <h3>The Argument in Steps</h3>
          <ol style={{ paddingLeft: '1.3rem', marginBottom: '0.75rem' }}>
            <li>God created a perfect world — "God saw all that he had made, and it was very good" (Genesis 1:31)</li>
            <li>God gave humans and angels free will</li>
            <li>Adam and Eve disobeyed God in the Garden of Eden (Genesis 3) — <strong>the Fall</strong></li>
            <li>This brought sin, suffering, and death into the world — <strong>moral evil</strong></li>
            <li>Natural evil resulted from the disruption of God's perfect order caused by the Fall</li>
            <li>God is not to blame — humans misused their freedom</li>
          </ol>

          <div className="info-grid">
            <div className="info-box">
              <h4 style={{ color: 'var(--t3)' }}>Strengths</h4>
              <ul>
                <li>Based on scripture — consistent with the Bible</li>
                <li>Preserves God's goodness — He did not create evil</li>
                <li>Explains why evil exists without blaming God</li>
                <li>Free will is a great good — worth the risk of misuse</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t4)' }}>Weaknesses</h4>
              <ul>
                <li>If God is omniscient, He knew the Fall would happen — why create the world anyway?</li>
                <li>Evolution shows suffering and death existed long before humans</li>
                <li>Doesn't explain natural evil fully — why does an earthquake happen?</li>
                <li>If God's original creation was perfect, how could imperfect choices even arise?</li>
                <li>John Hick: a "ready-made perfect world" couldn't produce moral growth</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> The key phrase is <em>privatio boni</em> (privation of good). Use it — it shows precise knowledge and gains marks.
          </div>
        </S>

        <S title="🏗️ Irenaeus' Theodicy (Soul-Making)">
          <div className="argument-card">
            <h4>Key Idea: God is still making us</h4>
            <p>Irenaeus argued that humans were not created perfect — we were created <strong>in God's image</strong> (Genesis 1:26) but must grow into God's <strong>likeness</strong> through experience, choices, and challenges. Evil and suffering are necessary for this growth.</p>
          </div>

          <h3>The Argument in Steps</h3>
          <ol style={{ paddingLeft: '1.3rem', marginBottom: '0.75rem' }}>
            <li>God created humans as immature, with potential — not fully formed</li>
            <li>We must develop virtues like courage, compassion, and patience — but these cannot grow without challenges</li>
            <li>Evil and suffering provide the environment in which we develop these qualities</li>
            <li>Struggle leads to moral and spiritual growth — <strong>soul-making</strong></li>
            <li>The process leads us toward full union with God</li>
            <li>Developed by John Hick in the 20th century</li>
          </ol>

          <div className="info-grid">
            <div className="info-box">
              <h4 style={{ color: 'var(--t3)' }}>Strengths</h4>
              <ul>
                <li>Explains why a good God allows suffering — it has a purpose</li>
                <li>Consistent with a God who wants genuine relationship, not programmed obedience</li>
                <li>Humans regularly do grow through hardship — it's observable</li>
                <li>Universal salvation — eventually all will be saved (John Hick)</li>
              </ul>
            </div>
            <div className="info-box">
              <h4 style={{ color: 'var(--t4)' }}>Weaknesses</h4>
              <ul>
                <li>Doesn't explain <em>extreme</em> suffering — babies dying, animals in pain</li>
                <li>Much suffering seems pointless — it destroys rather than builds</li>
                <li>Could God not achieve soul-making with less suffering?</li>
                <li>Dostoyevsky: "No harmony justifies the tears of a single child"</li>
                <li>Not based on original sin — conflicts with traditional Christian teaching</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> Contrast Augustine and Irenaeus directly: Augustine says humans were <em>once perfect but fell</em>; Irenaeus says humans are <em>not yet perfected</em>. That contrast is a classic exam question.
          </div>
        </S>

        <S title="💬 Religious Responses to Evil & Suffering">
          <div className="argument-card">
            <h4>Free Will Defence</h4>
            <p>God gave humans genuine free will because a world of free moral agents is more valuable than a world of robots. Evil is the price of freedom — God will not override human choices even when they cause suffering.</p>
          </div>
          <div className="argument-card">
            <h4>God's Ways are Beyond Human Understanding</h4>
            <p>God's perspective is infinite; ours is limited. What seems like pointless suffering may serve a divine purpose we cannot grasp. "For my thoughts are not your thoughts" (Isaiah 55:8). The story of Job — God allows suffering to test and strengthen faith.</p>
          </div>
          <div className="argument-card">
            <h4>Suffering as a Test / Path to Heaven</h4>
            <p>In Islam, suffering is a test from Allah (Quran 2:155-157). Responding to hardship with patience (<em>sabr</em>) and gratitude brings spiritual reward. Life is temporary; the eternal life in Jannah far outweighs earthly pain.</p>
          </div>
          <div className="argument-card">
            <h4>Karma and Reincarnation (Hindu/Buddhist)</h4>
            <p>Suffering in this life is the result of negative karma from past actions. It is not random or unjust — it is part of a moral universe. The goal is to generate good karma and eventually escape suffering entirely through Moksha/Nirvana.</p>
          </div>
        </S>

        <S title="❌ Atheist Response to the Problem of Evil">
          <div className="argument-card">
            <h4>Evil as Evidence Against God's Existence</h4>
            <p>Richard Dawkins and other atheists argue that the scale of suffering in the world — especially innocent suffering — is strong evidence that no loving God exists. Evolution produces suffering as a by-product, not a God-designed lesson.</p>
          </div>
          <div className="info-grid">
            <div className="info-box">
              <h4>The argument</h4>
              <ul>
                <li>If an all-powerful, all-loving God existed, He would prevent pointless suffering</li>
                <li>Children dying of cancer — no conceivable soul-making purpose</li>
                <li>Animal suffering predates humans — cannot be due to the Fall</li>
                <li>The amount and distribution of suffering looks like a godless universe</li>
              </ul>
            </div>
            <div className="info-box">
              <h4>Believer's response</h4>
              <ul>
                <li>God's reasons may be beyond our understanding</li>
                <li>The existence of evil doesn't prove God doesn't exist — just that He allows it</li>
                <li>Without God there is no objective standard of "evil" — the very concept of evil points to God</li>
                <li>C.S. Lewis: "My argument against God was that the universe seemed so cruel and unjust. But how had I got this idea of just and unjust? A man does not call a line crooked unless he has some idea of a straight line."</li>
              </ul>
            </div>
          </div>
          <div className="exam-tip">
            <strong>Exam Tip:</strong> For 12-mark evaluation questions, use the C.S. Lewis quote — it's powerful and shows how the existence of evil could actually <em>support</em> belief in God by presupposing a moral standard.
          </div>
        </S>

      </div>
    </>
  );
}
