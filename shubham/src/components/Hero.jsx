import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

  :root {
    --bg:      #020b18;
    --bg2:     #041020;
    --ink:     #e8f4fd;
    --ink2:    #a8ccdf;
    --accent:  #38bdf8;
    --accent2: #0ea5e9;
    --glow:    rgba(56,189,248,0.18);
    --font:    'Outfit', sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .home-root {
    min-height: 100vh;
    background: var(--bg);
    font-family: var(--font);
    color: var(--ink);
    overflow-x: hidden;
    position: relative;
  }

  /* ── STARFIELD ── */
  .home-stars {
    position: fixed; inset: 0; z-index: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(14,165,233,.08) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(56,189,248,.06) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 80%, rgba(6,182,212,.05) 0%, transparent 40%),
      var(--bg);
  }
  .home-stars::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 25% 35%, rgba(255,255,255,.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 40% 10%, rgba(255,255,255,.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 55% 60%, rgba(255,255,255,.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,.5) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 85% 75%, rgba(255,255,255,.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 15% 80%, rgba(255,255,255,.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 45%, rgba(255,255,255,.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 35% 90%, rgba(255,255,255,.3) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 60% 45%, rgba(255,255,255,.45) 0%, transparent 100%),
      radial-gradient(1px 1px at 75% 85%, rgba(255,255,255,.35) 0%, transparent 100%),
      radial-gradient(1px 1px at 5%  55%, rgba(255,255,255,.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 48% 28%, rgba(255,255,255,.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 92% 12%, rgba(255,255,255,.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,.35) 0%, transparent 100%);
  }

  /* ── GRID LINES ── */
  .home-grid {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(56,189,248,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56,189,248,.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, rgba(0,0,0,.4) 0%, transparent 75%);
  }

  /* ── CONTENT WRAPPER ── */
  .home-content {
    position: relative; z-index: 2;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* ── HERO ── */
  .home-hero {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0;
    padding: 80px 80px 60px;
    min-height: 100vh;
  }

  /* LEFT TEXT */
  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-right: 40px;
  }

  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 10px; font-weight: 700; letter-spacing: .22em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 20px;
    opacity: 0; animation: fadeUp .6s .1s both;
  }
  .hero-eyebrow-line {
    width: 28px; height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }

  .hero-name {
    font-size: clamp(44px, 6vw, 80px);
    font-weight: 900;
    line-height: .95;
    letter-spacing: -3px;
    color: var(--ink);
    margin-bottom: 6px;
    opacity: 0; animation: fadeUp .6s .2s both;
  }
  .hero-name-accent {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(56,189,248,.55);
    font-size: clamp(42px, 5.5vw, 76px);
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(16px, 2vw, 22px);
    font-weight: 400;
    color: var(--ink2);
    margin-bottom: 24px;
    opacity: 0; animation: fadeUp .6s .3s both;
  }

  .hero-desc {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(168,204,223,.65);
    max-width: 400px;
    margin-bottom: 40px;
    opacity: 0; animation: fadeUp .6s .4s both;
  }

  .hero-ctas {
    display: flex; align-items: center; gap: 14px;
    flex-wrap: wrap;
    opacity: 0; animation: fadeUp .6s .5s both;
  }

  .hero-btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 13px 28px;
    background: var(--accent2);
    color: #020b18;
    border-radius: 999px;
    font-family: var(--font);
    font-size: 11px; font-weight: 800;
    letter-spacing: .12em; text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 0 28px rgba(56,189,248,.35), 0 4px 16px rgba(0,0,0,.3);
    transition: transform .2s, box-shadow .2s;
  }
  .hero-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(56,189,248,.5), 0 8px 24px rgba(0,0,0,.35);
  }

  .hero-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px;
    border: 1px solid rgba(56,189,248,.3);
    color: var(--ink2);
    border-radius: 999px;
    font-family: var(--font);
    font-size: 11px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    text-decoration: none;
    transition: border-color .2s, color .2s, background .2s;
  }
  .hero-btn-ghost:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(56,189,248,.06);
  }

  /* STATS ROW */
  .hero-stats {
    display: flex; gap: 32px;
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid rgba(56,189,248,.1);
    opacity: 0; animation: fadeUp .6s .6s both;
  }
  .hero-stat-val {
    font-size: 26px; font-weight: 900;
    color: var(--ink); letter-spacing: -1px; line-height: 1;
    margin-bottom: 3px;
  }
  .hero-stat-val span { color: var(--accent); }
  .hero-stat-lbl {
    font-size: 9.5px; font-weight: 600;
    letter-spacing: .14em; text-transform: uppercase;
    color: rgba(168,204,223,.5);
  }

  /* RIGHT — SPACESHIP */
  .hero-right {
    position: relative;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; animation: fadeIn .9s .3s both;
  }

  /* glow behind ship */
  .hero-glow {
    position: absolute;
    width: 480px; height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,.12) 0%, rgba(14,165,233,.06) 40%, transparent 70%);
    pointer-events: none;
    animation: pulse 4s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { transform: scale(1);   opacity: 1;   }
    50%      { transform: scale(1.1); opacity: 0.7; }
  }

  /* orbit ring */
  .hero-ring {
    position: absolute;
    width: 520px; height: 520px;
    border-radius: 50%;
    border: 1px solid rgba(56,189,248,.08);
    animation: spin 30s linear infinite;
  }
  .hero-ring::after {
    content: '';
    position: absolute;
    top: -3px; left: 50%;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
    transform: translateX(-50%);
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .hero-ship-frame {
    position: relative; z-index: 1;
    width: 520px; height: 520px;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(56,189,248,.12);
    box-shadow:
      0 0 0 1px rgba(56,189,248,.06),
      0 24px 80px rgba(0,0,0,.6),
      inset 0 1px 0 rgba(255,255,255,.04);
    background: rgba(4,16,32,.4);
  }

  .hero-ship-frame iframe {
    width: 100%; height: 100%;
    border: none;
  }

  /* corner accents */
  .hero-ship-frame::before,
  .hero-ship-frame::after {
    content: '';
    position: absolute; z-index: 2;
    width: 20px; height: 20px;
    border-color: rgba(56,189,248,.5);
    border-style: solid;
    pointer-events: none;
  }
  .hero-ship-frame::before {
    top: 12px; left: 12px;
    border-width: 1.5px 0 0 1.5px;
    border-radius: 3px 0 0 0;
  }
  .hero-ship-frame::after {
    bottom: 12px; right: 12px;
    border-width: 0 1.5px 1.5px 0;
    border-radius: 0 0 3px 0;
  }

  /* ship label */
  .hero-ship-label {
    position: absolute;
    bottom: -30px; left: 50%;
    transform: translateX(-50%);
    font-size: 9px; font-weight: 600;
    letter-spacing: .18em; text-transform: uppercase;
    color: rgba(168,204,223,.35);
    white-space: nowrap;
  }

  /* ── SCROLL HINT ── */
  .home-scroll {
    position: absolute;
    bottom: 32px; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    font-size: 9px; font-weight: 600; letter-spacing: .18em;
    text-transform: uppercase; color: rgba(168,204,223,.3);
    opacity: 0; animation: fadeUp .6s 1s both;
  }
  .home-scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(180deg, rgba(56,189,248,.4), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%,100% { opacity: 1; transform: scaleY(1); }
    50%      { opacity: .4; transform: scaleY(.7); }
  }

  /* ── SKILLS STRIP ── */
  .home-strip {
    position: relative; z-index: 2;
    border-top: 1px solid rgba(56,189,248,.08);
    border-bottom: 1px solid rgba(56,189,248,.08);
    padding: 18px 0;
    overflow: hidden;
    background: rgba(4,16,32,.6);
  }
  .home-strip-track {
    display: flex; gap: 48px;
    width: max-content;
    animation: marquee 22s linear infinite;
  }
  .home-strip-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    color: rgba(168,204,223,.4);
    white-space: nowrap;
  }
  .home-strip-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: var(--accent); opacity: .5;
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .home-hero {
      grid-template-columns: 1fr;
      padding: 100px 32px 60px;
      text-align: center;
      gap: 48px;
    }
    .hero-left { padding-right: 0; align-items: center; }
    .hero-desc { text-align: left; }
    .hero-right { order: -1; }
    .hero-ship-frame { width: 340px; height: 340px; }
    .hero-glow, .hero-ring { width: 360px; height: 360px; }
    .hero-stats { justify-content: center; }
    .home-scroll { display: none; }
  }
  @media (max-width: 480px) {
    .home-hero { padding: 90px 20px 48px; }
    .hero-ship-frame { width: 280px; height: 280px; }
    .hero-glow, .hero-ring { width: 300px; height: 300px; }
  }
`;

const SKILLS = [
  "React.js", "Tailwind CSS", "JavaScript", "Python",
  "TensorFlow", "OpenCV", "Three.js", "Machine Learning",
  "Deep Learning", "UI / UX Design", "Node.js", "YOLOv8",
  "React.js", "Tailwind CSS", "JavaScript", "Python",
  "TensorFlow", "OpenCV", "Three.js", "Machine Learning",
  "Deep Learning", "UI / UX Design", "Node.js", "YOLOv8",
];

export default function Home() {
  return (
    <>
      <style>{css}</style>

      {/* Background layers */}
      <div className="home-stars" />
      <div className="home-grid" />

      <div className="home-root">
        <div className="home-content">

          {/* ── HERO ── */}
          <section className="home-hero">

            {/* Left — text */}
            <div className="hero-left">

              <div className="hero-eyebrow">
                <span className="hero-eyebrow-line" />
                Frontend Developer · ML Enthusiast
              </div>

              <h1 className="hero-name">
                Shubham
                <span className="hero-name-accent">Verma</span>
              </h1>

              <p className="hero-title">
                Building interfaces that think.
              </p>

              <p className="hero-desc">
                I craft elegant, high-performance web experiences and intelligent
                systems — blending clean UI with the power of machine learning.
              </p>

              <div className="hero-ctas">
                <Link to="/projects" className="hero-btn-primary">
                  View Projects →
                </Link>
                <Link to="/contact" className="hero-btn-ghost">
                  Let's Talk
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-val">7<span>+</span></div>
                  <div className="hero-stat-lbl">Projects</div>
                </div>
                <div>
                  <div className="hero-stat-val">2<span>+</span></div>
                  <div className="hero-stat-lbl">Years</div>
                </div>
                <div>
                  <div className="hero-stat-val">4<span>+</span></div>
                  <div className="hero-stat-lbl">Tech Stacks</div>
                </div>
                <div>
                  <div className="hero-stat-val">3</div>
                  <div className="hero-stat-lbl">Hackathons</div>
                </div>
              </div>

            </div>

            {/* Right — Spaceship */}
            <div className="hero-right">
              <div className="hero-glow" />
              <div className="hero-ring" />
              <div className="hero-ship-frame">
                <iframe
                  title="Spaceship"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/382e829e1da044dbae3bdbf5c7891860/embed?autostart=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
                />
              </div>
              <div className="hero-ship-label">Interactive 3D · Drag to explore</div>
            </div>

          </section>

          {/* ── SCROLL HINT ── */}
          <div className="home-scroll">
            <span>Scroll</span>
            <div className="home-scroll-line" />
          </div>

          {/* ── SKILLS MARQUEE ── */}
          <div className="home-strip">
            <div className="home-strip-track">
              {SKILLS.map((s, i) => (
                <div key={i} className="home-strip-item">
                  <span className="home-strip-dot" />
                  {s}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
