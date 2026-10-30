export type Lang = "en" | "es";

export const EMAIL = "rorobenm@gmail.com";

export interface Job {
  company: string;
  period: string;
  blurb: string;
  projects: {
    title: string;
    role: string;
    bullets: string[];
    tech: string[];
    highlight?: boolean;
  }[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; skills: string; experience: string; ai: string; projects: string; education: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    role: string;
    lead: string;
    ctaContact: string;
    ctaWork: string;
    location: string;
    facts: { value: string; label: string }[];
  };
  about: { title: string; paragraphs: string[]; domainsTitle: string; domains: string[] };
  skills: { title: string; groups: { title: string; icon: string; items: string[] }[] };
  experience: { title: string; intro: string; jobs: Job[]; techLabel: string };
  ai: { title: string; intro: string; cards: { title: string; text: string; icon: string }[] };
  projects: { title: string; intro: string; items: { title: string; text: string; tech: string[]; icon: string }[] };
  education: { title: string; degree: string; school: string; years: string; cert: string; certBy: string; certDate: string; soft: string; softItems: string[]; langsTitle: string; langs: { name: string; level: string }[] };
  contact: { title: string; text: string; button: string; email: string; location: string; locationValue: string };
  footer: string;
  skipLink: string;
  langLabel: string;
}

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Rodrigo Benitez — Full Stack Developer",
      description:
        "Full Stack Developer with 10+ years building web apps, APIs and mobile solutions in healthcare, finance, logistics and e-commerce. Angular, Java, Python, and AI-assisted development.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      ai: "AI workflow",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Rodrigo Benitez",
      role: "Full Stack Developer",
      lead:
        "I build web applications, APIs and mobile apps for healthcare, finance, logistics and e-commerce. Angular and Java are my home turf, and I work daily with Claude Code and Codex to ship faster without lowering the bar.",
      ctaContact: "Get in touch",
      ctaWork: "See my experience",
      location: "Asunción area, Paraguay",
      facts: [
        { value: "10+", label: "years building production software" },
        { value: "4", label: "industries: health, finance, logistics, retail" },
        { value: "2", label: "languages: English and Spanish" },
      ],
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a full stack developer with more than ten years of experience designing and delivering web applications, RESTful APIs and mobile solutions. My strongest ground is the Angular and Java ecosystem, with Python, React and Node.js alongside it.",
        "I use agentic and AI-assisted development every day: Claude Code and OpenAI Codex plan, implement and test code, and I review every change. I apply Spec-Driven Development (SDD) so requirements become clear, verifiable specs before any code is written.",
        "I also build AI-powered applications that integrate LLM APIs with FastAPI and React, and I hold the AWS Certified Cloud Practitioner credential.",
      ],
      domainsTitle: "Where I've worked",
      domains: ["Healthcare", "Finance & banking", "Logistics", "E-commerce", "Food industry", "Government"],
    },
    skills: {
      title: "Skills & technologies",
      groups: [
        { title: "Languages", icon: "code", items: ["Java", "Python", "TypeScript", "JavaScript"] },
        { title: "Frontend", icon: "layout", items: ["Angular", "NgRx", "Angular Material", "AngularJS", "React", "Ionic", "HTML", "CSS"] },
        { title: "Backend", icon: "server", items: ["Spring Boot", "Java EE", "Node.js", "FastAPI", "REST APIs"] },
        { title: "AI-assisted & agentic", icon: "sparkles", items: ["Claude Code", "OpenAI Codex", "Agentic development", "Spec-Driven Development", "Prompt & context engineering"] },
        { title: "AI integration", icon: "bot", items: ["LLM APIs (Anthropic, OpenAI)", "AI-first design", "Streaming & structured outputs", "LLM tooling"] },
        { title: "Testing", icon: "check", items: ["Cypress", "Jasmine", "Unit testing", "AI-assisted test generation"] },
        { title: "Cloud & DevOps", icon: "cloud", items: ["Docker", "Google Cloud", "AWS", "Apache Airflow", "Git"] },
      ],
    },
    experience: {
      title: "Experience",
      intro: "Ten years across product teams, consultancies and client projects, from a hospital system to a digital bank.",
      techLabel: "Tech",
      jobs: [
        {
          company: "AssureSoft",
          period: "2023 – Present",
          blurb: "Staffing firm delivering offshore engineering talent worldwide.",
          projects: [
            {
              title: "Food Industry Software",
              role: "Full Stack Developer",
              bullets: [
                "Develop and maintain features across several Angular web applications serving the food industry.",
                "Write unit and e2e tests with Jasmine and Cypress for critical business logic, improving release confidence.",
                "Architect solutions for new product features, working directly with stakeholders on requirements.",
                "Lead Angular version migrations, reducing technical debt and keeping the stack current.",
                "Use Claude Code and Codex as development partners for feature delivery, code exploration, refactoring and tests, reviewing every change before merge.",
                "Apply Spec-Driven Development: write specs and acceptance criteria first, then drive AI agents to implement against them.",
              ],
              tech: ["Angular", "NgRx", "Cypress", "Jasmine", "Google Cloud", "Git", "Claude Code", "Codex"],
            },
          ],
        },
        {
          company: "ITTI",
          period: "2021 – 2023",
          blurb: "Paraguayan fintech company: core banking systems and digital banking services.",
          projects: [
            {
              title: "Digital Banking Platform",
              role: "Backend Developer",
              bullets: [
                "Integrated a third-party payment-processing provider to enable debit and credit card operations.",
                "Designed and built RESTful endpoints for card management, connected to database stored procedures.",
                "Automated scheduled data-processing tasks with Apache Airflow, reducing manual operational work.",
                "Worked in a microservices architecture containerized with Docker.",
              ],
              tech: ["Java 11", "Spring Boot", "Apache Airflow", "Python", "Docker", "Git"],
            },
          ],
        },
        {
          company: "Centro de Desarrollo Sostenible S.A.",
          period: "2016 – 2021",
          blurb: "Paraguayan software company building solutions for healthcare, retail and government.",
          projects: [
            {
              title: "Hospital Management System",
              role: "Full Stack Developer",
              highlight: true,
              bullets: [
                "Designed and built a system that digitized daily hospital operations and replaced paper-based records.",
                "Managed patient medical histories, diagnoses, admissions, discharges and bed assignment.",
                "Recorded medical and surgical procedures, studies and physiotherapy sessions.",
                "Developed the REST API in Java EE and the AngularJS frontend, with Jasper Reports for business intelligence.",
              ],
              tech: ["AngularJS", "Java EE", "Docker", "Jasper Reports", "Git"],
            },
            {
              title: "Van Sharing App",
              role: "Frontend Lead & Backend Contributor",
              bullets: [
                "Built a mobile app and web admin panel to manage employee commute logistics.",
                "Integrated the Google Maps API for route and schedule management and contributed to backend services.",
              ],
              tech: ["Angular 8", "Angular Material", "Node.js", "Ionic 4"],
            },
            {
              title: "Credit Management System",
              role: "Full Stack Developer",
              bullets: [
                "Delivered a web application for a major car dealership to manage credit applications end to end.",
                "Integrated a third-party financial services API and generated PDF reports for business review.",
              ],
              tech: ["Angular 8", "Nebular", "Spring Boot", "MyBatis", "Jasper Reports"],
            },
            {
              title: "E-Commerce Mobile App",
              role: "Team Lead & Frontend Developer",
              bullets: [
                "Led a team building an e-commerce mobile app with a custom UX and ERP backend integration.",
                "Coordinated task breakdown and service integrations, and contributed to Python and FastAPI backend services.",
              ],
              tech: ["Ionic 5", "Python", "FastAPI"],
            },
          ],
        },
        {
          company: "Facultad Politécnica, UNA",
          period: "2015",
          blurb: "Internship at the Universidad Nacional de Asunción.",
          projects: [
            {
              title: "Package Tracking System",
              role: "Frontend Developer",
              bullets: ["Built a web application for the Paraguayan post office to track packages by code through RESTful services."],
              tech: ["AngularJS", "HTML", "CSS"],
            },
          ],
        },
      ],
    },
    ai: {
      title: "Working with AI agents",
      intro: "AI doesn't replace review, tests or judgment in how I work. It speeds up the parts around them.",
      cards: [
        {
          icon: "terminal",
          title: "Agentic development",
          text: "I delegate scoped tasks to Claude Code and OpenAI Codex, run multi-step implementations, and review the diffs, tests and results.",
        },
        {
          icon: "file",
          title: "Spec-Driven Development",
          text: "I define specs, constraints and acceptance criteria up front, so agents build against a clear contract and automated tests verify the output.",
        },
        {
          icon: "layers",
          title: "Prompt & context engineering",
          text: "I structure project instructions and context so agent output stays consistent, maintainable and ready for production.",
        },
      ],
    },
    projects: {
      title: "Personal projects",
      intro: "Outside client work, I build AI-augmented tools and refine how I work with coding agents.",
      items: [
        {
          icon: "sparkles",
          title: "AI API integration",
          text: "Productivity and automation tools that call LLM APIs, with prompt engineering, streaming responses and structured outputs. Flows are designed around AI from the start.",
          tech: ["Python", "FastAPI", "React", "LLM APIs"],
        },
        {
          icon: "layers",
          title: "FastAPI & React tooling",
          text: "Full stack side projects pairing lightweight FastAPI backends with React frontends, plus Python scripts that automate repetitive workflows.",
          tech: ["FastAPI", "React", "Python", "REST"],
        },
        {
          icon: "terminal",
          title: "Agentic, spec-driven workflow",
          text: "A day-to-day practice with Claude Code and Codex: specs first, scoped delegation, and automated verification of everything the agents produce.",
          tech: ["Claude Code", "Codex", "SDD", "Git"],
        },
      ],
    },
    education: {
      title: "Education & certifications",
      degree: "Bachelor's degree in Computer Science",
      school: "Facultad Politécnica, Universidad Nacional de Asunción",
      years: "2013 – 2018",
      cert: "AWS Certified Cloud Practitioner",
      certBy: "Amazon Web Services",
      certDate: "Obtained September 2025",
      soft: "How I work",
      softItems: ["Team player", "Problem solver", "Fast learner", "Self-managed"],
      langsTitle: "Languages",
      langs: [
        { name: "English", level: "Fluent" },
        { name: "Spanish", level: "Native" },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "I'm open to full stack roles, especially Angular and Java, and to projects that involve AI-assisted development. Send me a message and I'll reply soon.",
      button: "Email me",
      email: "Email",
      location: "Location",
      locationValue: "Lambaré, Paraguay",
    },
    footer: "Built with React and Vite.",
    skipLink: "Skip to content",
    langLabel: "Language",
  },

  es: {
    meta: {
      title: "Rodrigo Benitez — Desarrollador Full Stack",
      description:
        "Desarrollador Full Stack con más de 10 años creando aplicaciones web, APIs y soluciones móviles en salud, finanzas, logística y e-commerce. Angular, Java, Python y desarrollo asistido por IA.",
    },
    nav: {
      about: "Perfil",
      skills: "Habilidades",
      experience: "Experiencia",
      ai: "Trabajo con IA",
      projects: "Proyectos",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Rodrigo Benitez",
      role: "Desarrollador Full Stack",
      lead:
        "Desarrollo aplicaciones web, APIs y apps móviles para salud, finanzas, logística y e-commerce. Angular y Java son mi terreno, y trabajo a diario con Claude Code y Codex para entregar más rápido sin bajar la calidad.",
      ctaContact: "Contactarme",
      ctaWork: "Ver mi experiencia",
      location: "Zona de Asunción, Paraguay",
      facts: [
        { value: "10+", label: "años creando software en producción" },
        { value: "4", label: "industrias: salud, finanzas, logística y retail" },
        { value: "2", label: "idiomas: inglés y español" },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador full stack con más de diez años de experiencia diseñando y entregando aplicaciones web, APIs REST y soluciones móviles. Mi base más sólida es el ecosistema Angular y Java, complementado con Python, React y Node.js.",
        "Practico a diario el desarrollo agéntico y asistido por IA: Claude Code y OpenAI Codex planifican, implementan y prueban código, y yo reviso cada cambio. Aplico Spec-Driven Development (SDD) para convertir los requisitos en especificaciones claras y verificables antes de escribir código.",
        "También desarrollo aplicaciones con IA que integran APIs de LLM con FastAPI y React, y cuento con la certificación AWS Certified Cloud Practitioner.",
      ],
      domainsTitle: "Sectores en los que trabajé",
      domains: ["Salud", "Finanzas y banca", "Logística", "E-commerce", "Industria alimentaria", "Gobierno"],
    },
    skills: {
      title: "Habilidades y tecnologías",
      groups: [
        { title: "Lenguajes", icon: "code", items: ["Java", "Python", "TypeScript", "JavaScript"] },
        { title: "Frontend", icon: "layout", items: ["Angular", "NgRx", "Angular Material", "AngularJS", "React", "Ionic", "HTML", "CSS"] },
        { title: "Backend", icon: "server", items: ["Spring Boot", "Java EE", "Node.js", "FastAPI", "APIs REST"] },
        { title: "Desarrollo agéntico y con IA", icon: "sparkles", items: ["Claude Code", "OpenAI Codex", "Desarrollo agéntico", "Spec-Driven Development", "Ingeniería de prompts y contexto"] },
        { title: "Integración de IA", icon: "bot", items: ["APIs de LLM (Anthropic, OpenAI)", "Diseño AI-first", "Streaming y salidas estructuradas", "Herramientas con LLM"] },
        { title: "Testing", icon: "check", items: ["Cypress", "Jasmine", "Pruebas unitarias", "Generación de tests asistida por IA"] },
        { title: "Cloud y DevOps", icon: "cloud", items: ["Docker", "Google Cloud", "AWS", "Apache Airflow", "Git"] },
      ],
    },
    experience: {
      title: "Experiencia",
      intro: "Diez años en equipos de producto, consultoras y proyectos para clientes, desde un sistema hospitalario hasta un banco digital.",
      techLabel: "Tecnologías",
      jobs: [
        {
          company: "AssureSoft",
          period: "2023 – Actualidad",
          blurb: "Empresa de staffing que provee talento de ingeniería offshore a todo el mundo.",
          projects: [
            {
              title: "Software para la industria alimentaria",
              role: "Desarrollador Full Stack",
              bullets: [
                "Desarrollar y mantener funcionalidades en varias aplicaciones web Angular para la industria alimentaria.",
                "Escribir pruebas unitarias y e2e con Jasmine y Cypress para la lógica de negocio crítica, aumentando la confianza en cada release.",
                "Diseñar la arquitectura de nuevas funcionalidades, trabajando directamente con los stakeholders en los requisitos.",
                "Liderar migraciones de versión de Angular, reduciendo la deuda técnica y manteniendo el stack actualizado.",
                "Usar Claude Code y Codex como socios de desarrollo en la entrega de funcionalidades, exploración de código, refactorización y tests, revisando cada cambio antes del merge.",
                "Aplicar Spec-Driven Development: escribir primero especificaciones y criterios de aceptación, y guiar a los agentes de IA para implementar según ellos.",
              ],
              tech: ["Angular", "NgRx", "Cypress", "Jasmine", "Google Cloud", "Git", "Claude Code", "Codex"],
            },
          ],
        },
        {
          company: "ITTI",
          period: "2021 – 2023",
          blurb: "Empresa fintech paraguaya: sistemas core bancarios y servicios de banca digital.",
          projects: [
            {
              title: "Plataforma de banca digital",
              role: "Desarrollador Backend",
              bullets: [
                "Integrar un proveedor externo de procesamiento de pagos para habilitar operaciones con tarjetas de débito y crédito.",
                "Diseñar y construir endpoints REST para la gestión de tarjetas, conectados a procedimientos almacenados.",
                "Automatizar tareas programadas de procesamiento de datos con Apache Airflow, reduciendo el trabajo operativo manual.",
                "Trabajar en una arquitectura de microservicios contenerizada con Docker.",
              ],
              tech: ["Java 11", "Spring Boot", "Apache Airflow", "Python", "Docker", "Git"],
            },
          ],
        },
        {
          company: "Centro de Desarrollo Sostenible S.A.",
          period: "2016 – 2021",
          blurb: "Empresa de software paraguaya que desarrolla soluciones para salud, retail y gobierno.",
          projects: [
            {
              title: "Sistema de gestión hospitalaria",
              role: "Desarrollador Full Stack",
              highlight: true,
              bullets: [
                "Diseñar y construir un sistema que digitalizó la operación diaria del hospital y reemplazó los registros en papel.",
                "Gestionar historiales médicos de pacientes, diagnósticos, internaciones, altas y asignación de camas.",
                "Registrar procedimientos médicos y quirúrgicos, estudios y sesiones de fisioterapia.",
                "Desarrollar la API REST en Java EE y el frontend en AngularJS, con Jasper Reports para inteligencia de negocio.",
              ],
              tech: ["AngularJS", "Java EE", "Docker", "Jasper Reports", "Git"],
            },
            {
              title: "App de transporte compartido",
              role: "Líder de Frontend y colaborador de Backend",
              bullets: [
                "Crear una app móvil y un panel web de administración para gestionar el transporte de empleados.",
                "Integrar la API de Google Maps para rutas y horarios, y colaborar en los servicios de backend.",
              ],
              tech: ["Angular 8", "Angular Material", "Node.js", "Ionic 4"],
            },
            {
              title: "Sistema de gestión de créditos",
              role: "Desarrollador Full Stack",
              bullets: [
                "Entregar una aplicación web para una importante concesionaria de autos que gestiona las solicitudes de crédito de punta a punta.",
                "Integrar una API financiera externa y generar reportes en PDF para el análisis del negocio.",
              ],
              tech: ["Angular 8", "Nebular", "Spring Boot", "MyBatis", "Jasper Reports"],
            },
            {
              title: "App móvil de e-commerce",
              role: "Líder de equipo y Desarrollador Frontend",
              bullets: [
                "Liderar un equipo en el desarrollo de una app móvil de e-commerce con UX propia e integración con el ERP.",
                "Coordinar la división de tareas y las integraciones de servicios, y colaborar en servicios backend con Python y FastAPI.",
              ],
              tech: ["Ionic 5", "Python", "FastAPI"],
            },
          ],
        },
        {
          company: "Facultad Politécnica, UNA",
          period: "2015",
          blurb: "Pasantía en la Universidad Nacional de Asunción.",
          projects: [
            {
              title: "Sistema de seguimiento de paquetes",
              role: "Desarrollador Frontend",
              bullets: ["Desarrollar una aplicación web para el correo paraguayo que permite rastrear paquetes por código mediante servicios REST."],
              tech: ["AngularJS", "HTML", "CSS"],
            },
          ],
        },
      ],
    },
    ai: {
      title: "Trabajo con agentes de IA",
      intro: "En mi forma de trabajar, la IA no reemplaza la revisión, los tests ni el criterio. Acelera lo que los rodea.",
      cards: [
        {
          icon: "terminal",
          title: "Desarrollo agéntico",
          text: "Delego tareas acotadas a Claude Code y OpenAI Codex, ejecuto implementaciones de varios pasos y reviso los diffs, los tests y los resultados.",
        },
        {
          icon: "file",
          title: "Spec-Driven Development",
          text: "Defino especificaciones, restricciones y criterios de aceptación desde el inicio, para que los agentes construyan sobre un contrato claro y los tests automatizados verifiquen el resultado.",
        },
        {
          icon: "layers",
          title: "Ingeniería de prompts y contexto",
          text: "Estructuro las instrucciones del proyecto y el contexto para que la salida de los agentes sea consistente, mantenible y lista para producción.",
        },
      ],
    },
    projects: {
      title: "Proyectos personales",
      intro: "Fuera del trabajo con clientes, creo herramientas con IA y perfecciono mi forma de trabajar con agentes de código.",
      items: [
        {
          icon: "sparkles",
          title: "Integración de APIs de IA",
          text: "Herramientas de productividad y automatización que usan APIs de LLM, con ingeniería de prompts, respuestas en streaming y salidas estructuradas. Los flujos se diseñan en torno a la IA desde el comienzo.",
          tech: ["Python", "FastAPI", "React", "APIs de LLM"],
        },
        {
          icon: "layers",
          title: "Herramientas con FastAPI y React",
          text: "Proyectos full stack que combinan backends livianos en FastAPI con frontends en React, además de scripts en Python que automatizan tareas repetitivas.",
          tech: ["FastAPI", "React", "Python", "REST"],
        },
        {
          icon: "terminal",
          title: "Flujo agéntico guiado por especificaciones",
          text: "Una práctica diaria con Claude Code y Codex: primero las especificaciones, delegación acotada y verificación automatizada de todo lo que producen los agentes.",
          tech: ["Claude Code", "Codex", "SDD", "Git"],
        },
      ],
    },
    education: {
      title: "Formación y certificaciones",
      degree: "Licenciatura en Ciencias de la Computación",
      school: "Facultad Politécnica, Universidad Nacional de Asunción",
      years: "2013 – 2018",
      cert: "AWS Certified Cloud Practitioner",
      certBy: "Amazon Web Services",
      certDate: "Obtenida en septiembre de 2025",
      soft: "Cómo trabajo",
      softItems: ["Trabajo en equipo", "Resolución de problemas", "Aprendizaje rápido", "Autogestión"],
      langsTitle: "Idiomas",
      langs: [
        { name: "Inglés", level: "Fluido" },
        { name: "Español", level: "Nativo" },
      ],
    },
    contact: {
      title: "Hablemos",
      text: "Estoy abierto a roles full stack, en especial con Angular y Java, y a proyectos de desarrollo asistido por IA. Escríbeme y te responderé pronto.",
      button: "Enviar un correo",
      email: "Correo",
      location: "Ubicación",
      locationValue: "Lambaré, Paraguay",
    },
    footer: "Hecho con React y Vite.",
    skipLink: "Saltar al contenido",
    langLabel: "Idioma",
  },
};
