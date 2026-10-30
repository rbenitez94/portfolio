import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular, SiApacheairflow, SiCypress, SiDocker, SiFastapi, SiGit, SiGooglecloud,
  SiHtml5, SiIonic, SiJasmine, SiJavascript, SiNgrx, SiNodedotjs,
  SiPython, SiReact, SiSpringboot, SiTypescript, SiClaude,
} from "react-icons/si";
import { FaAws, FaCss3Alt, FaJava } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  LuBot, LuBriefcase, LuCheckCheck, LuCloud, LuCode, LuFileText, LuGraduationCap,
  LuLayers, LuLayoutTemplate, LuMail, LuMapPin, LuMenu, LuServer, LuSparkles,
  LuTerminal, LuX, LuArrowDown, LuStethoscope, LuAward, LuLanguages, LuUsers,
  LuHospital, LuLandmark, LuTruck, LuShoppingCart, LuUtensils, LuBuilding2, LuTag,
} from "react-icons/lu";
import { content, EMAIL, type Lang } from "./content";

const techIcons: Record<string, IconType> = {
  Angular: SiAngular, "Angular 8": SiAngular, "Angular Material": SiAngular, AngularJS: SiAngular,
  NgRx: SiNgrx, Nebular: SiAngular, React: SiReact, Ionic: SiIonic, "Ionic 4": SiIonic, "Ionic 5": SiIonic,
  HTML: SiHtml5, CSS: FaCss3Alt, Java: FaJava, "Java 11": FaJava, "Java EE": FaJava,
  Python: SiPython, TypeScript: SiTypescript, JavaScript: SiJavascript, "Node.js": SiNodedotjs,
  "Spring Boot": SiSpringboot, FastAPI: SiFastapi, Cypress: SiCypress, Jasmine: SiJasmine,
  Docker: SiDocker, "Google Cloud": SiGooglecloud, AWS: FaAws, "Apache Airflow": SiApacheairflow,
  Git: SiGit, "Claude Code": SiClaude, "OpenAI Codex": RiOpenaiFill, Codex: RiOpenaiFill,
  "REST APIs": LuServer, "APIs REST": LuServer, REST: LuServer, MyBatis: LuServer, "Jasper Reports": LuFileText,
  "LLM APIs": LuBot, "APIs de LLM": LuBot, SDD: LuFileText,
};

const groupIcons: Record<string, IconType> = {
  code: LuCode, layout: LuLayoutTemplate, server: LuServer, sparkles: LuSparkles,
  bot: LuBot, check: LuCheckCheck, cloud: LuCloud, terminal: LuTerminal, file: LuFileText, layers: LuLayers,
};

const domainIcons: IconType[] = [LuHospital, LuLandmark, LuTruck, LuShoppingCart, LuUtensils, LuBuilding2];

function TechChip({ name }: { name: string }) {
  const Icon = techIcons[name] ?? LuTag;
  return (
    <li className="chip">
      <Icon aria-hidden="true" />
      <span>{name}</span>
    </li>
  );
}

function FlagUS() {
  return (
    <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true" focusable="false">
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => <rect key={i} y={i * 20 / 13} width="28" height={20 / 13} fill="#b22234" />)}
      <rect width="12" height={20 * 7 / 13} fill="#3c3b6e" />
    </svg>
  );
}

function FlagES() {
  return (
    <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true" focusable="false">
      <rect width="28" height="20" fill="#aa151b" />
      <rect y="5" width="28" height="10" fill="#f1bf00" />
    </svg>
  );
}

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, t]);

  const navItems: [string, string][] = [
    ["about", t.nav.about],
    ["skills", t.nav.skills],
    ["experience", t.nav.experience],
    ["ai", t.nav.ai],
    ["projects", t.nav.projects],
    ["education", t.nav.education],
    ["contact", t.nav.contact],
  ];

  return (
    <>
      <a className="skip" href="#main">{t.skipLink}</a>

      <header className="site-header">
        <div className="flag" aria-hidden="true" />
        <div className="bar wrap">
          <a className="brand" href="#top" aria-label="Rodrigo Benitez">
            <span className="mark" aria-hidden="true">RB</span>
            <span className="brand-name">Rodrigo Benitez</span>
          </a>

          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main">
            <ul>
              {navItems.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bar-actions">
            <div className="lang" role="group" aria-label={t.langLabel}>
              <button type="button" className={lang === "en" ? "on" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")} lang="en" aria-label="English" title="English"><FlagUS /></button>
              <button type="button" className={lang === "es" ? "on" : ""} aria-pressed={lang === "es"} onClick={() => setLang("es")} lang="es" aria-label="Español" title="Español"><FlagES /></button>
            </div>
            <button type="button" className="menu-btn" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <img className="avatar" src={`${import.meta.env.BASE_URL}avatar.jpg`} alt={t.hero.name} width={120} height={120} />
              <p className="greeting">{t.hero.greeting}</p>
              <h1>{t.hero.name}</h1>
              <p className="role">{t.hero.role}</p>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta">
                <a className="btn primary" href="#contact"><LuMail aria-hidden="true" />{t.hero.ctaContact}</a>
                <a className="btn ghost" href="#experience"><LuArrowDown aria-hidden="true" />{t.hero.ctaWork}</a>
              </div>
              <p className="where"><LuMapPin aria-hidden="true" />{t.hero.location}</p>
            </div>

            <aside className="hero-stack" aria-label="Core stack">
              <ul className="stack-icons">
                {[SiAngular, FaJava, SiSpringboot, SiPython, SiReact, SiTypescript, SiDocker, FaAws, SiClaude].map((Icon, i) => (
                  <li key={i} className="stack-tile"><Icon aria-hidden="true" /></li>
                ))}
              </ul>
              <dl className="facts">
                {t.hero.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.value}</dt>
                    <dd>{f.label}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="wrap two-col">
            <div>
              <h2><LuUsers aria-hidden="true" />{t.about.title}</h2>
              {t.about.paragraphs.map((p, i) => <p className="prose" key={i}>{p}</p>)}
            </div>
            <div className="panel">
              <h3>{t.about.domainsTitle}</h3>
              <ul className="domains">
                {t.about.domains.map((d, i) => {
                  const Icon = domainIcons[i] ?? LuBriefcase;
                  return <li key={d}><Icon aria-hidden="true" />{d}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section alt" id="skills">
          <div className="wrap">
            <h2><LuCode aria-hidden="true" />{t.skills.title}</h2>
            <div className="skill-grid">
              {t.skills.groups.map((g) => {
                const GIcon = groupIcons[g.icon] ?? LuCode;
                return (
                  <article className="skill-card" key={g.title}>
                    <h3><GIcon aria-hidden="true" />{g.title}</h3>
                    <ul className="chips">
                      {g.items.map((it) => <TechChip key={it} name={it} />)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="wrap">
            <h2><LuBriefcase aria-hidden="true" />{t.experience.title}</h2>
            <p className="intro">{t.experience.intro}</p>
            <ol className="timeline">
              {t.experience.jobs.map((job) => (
                <li className="job" key={job.company}>
                  <div className="job-head">
                    <h3>{job.company}</h3>
                    <p className="period">{job.period}</p>
                  </div>
                  <p className="blurb">{job.blurb}</p>
                  {job.projects.map((p) => (
                    <article className={p.highlight ? "project hl" : "project"} key={p.title}>
                      <h4>
                        {p.highlight && <LuStethoscope aria-hidden="true" />}
                        {p.title}
                        <span className="role-tag">{p.role}</span>
                      </h4>
                      <ul className="bullets">
                        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                      <ul className="chips small" aria-label={t.experience.techLabel}>
                        {p.tech.map((x) => <TechChip key={x} name={x} />)}
                      </ul>
                    </article>
                  ))}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* AI */}
        <section className="section dark" id="ai">
          <div className="wrap">
            <h2><LuSparkles aria-hidden="true" />{t.ai.title}</h2>
            <p className="intro">{t.ai.intro}</p>
            <div className="ai-grid">
              {t.ai.cards.map((c) => {
                const Icon = groupIcons[c.icon] ?? LuSparkles;
                return (
                  <article className="ai-card" key={c.title}>
                    <Icon aria-hidden="true" />
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="wrap">
            <h2><LuLayers aria-hidden="true" />{t.projects.title}</h2>
            <p className="intro">{t.projects.intro}</p>
            <div className="proj-grid">
              {t.projects.items.map((p) => {
                const Icon = groupIcons[p.icon] ?? LuLayers;
                return (
                  <article className="proj-card" key={p.title}>
                    <div className="proj-icon"><Icon aria-hidden="true" /></div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <ul className="chips small">
                      {p.tech.map((x) => <TechChip key={x} name={x} />)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section alt" id="education">
          <div className="wrap">
            <h2><LuGraduationCap aria-hidden="true" />{t.education.title}</h2>
            <div className="edu-grid">
              <article className="edu-card">
                <LuGraduationCap aria-hidden="true" />
                <div>
                  <h3>{t.education.degree}</h3>
                  <p>{t.education.school}</p>
                  <p className="muted">{t.education.years}</p>
                </div>
              </article>
              <article className="edu-card">
                <LuAward aria-hidden="true" />
                <div>
                  <h3>{t.education.cert}</h3>
                  <p>{t.education.certBy}</p>
                  <p className="muted">{t.education.certDate}</p>
                </div>
              </article>
              <article className="edu-card">
                <LuLanguages aria-hidden="true" />
                <div>
                  <h3>{t.education.langsTitle}</h3>
                  <ul className="plain">
                    {t.education.langs.map((l) => <li key={l.name}>{l.name} <span className="muted">· {l.level}</span></li>)}
                  </ul>
                </div>
              </article>
              <article className="edu-card">
                <LuUsers aria-hidden="true" />
                <div>
                  <h3>{t.education.soft}</h3>
                  <ul className="plain">
                    {t.education.softItems.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="wrap contact-box">
            <div>
              <h2><LuMail aria-hidden="true" />{t.contact.title}</h2>
              <p className="prose">{t.contact.text}</p>
              <a className="btn primary" href={`mailto:${EMAIL}`}><LuMail aria-hidden="true" />{t.contact.button}</a>
            </div>
            <ul className="contact-list">
              <li><LuMail aria-hidden="true" /><div><span>{t.contact.email}</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
              <li><LuMapPin aria-hidden="true" /><div><span>{t.contact.location}</span><p>{t.contact.locationValue}</p></div></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} Rodrigo Benitez. {t.footer}</p>
        </div>
      </footer>
    </>
  );
}
