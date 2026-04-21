import { experience, profile, projects, skills, stats, strengths } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.16),_transparent_32%)]" />

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-slate-950">
            YUNUSEMRE SEVINC
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#projects" className="transition hover:text-slate-950">Projects</a>
            <a href="#experience" className="transition hover:text-slate-950">Experience</a>
            <a href="#about" className="transition hover:text-slate-950">About</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>

          <a
            href={profile.resumePath}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                {profile.title}
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.04]">
                  Building AI and software projects with clear technical depth and measurable outcomes.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">
                  {profile.intro} {profile.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore projects
                </a>
                <a
                  href={profile.resumePath}
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                >
                  Open resume
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                >
                  GitHub
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {stats.slice(0, 2).map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                    <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                    <p className="mt-2 font-medium text-slate-800">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Snapshot</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm text-slate-500">Based in</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{profile.location}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Focus areas</p>
                  <p className="mt-2 text-lg font-semibold leading-8 text-slate-950">
                    AI products, semantic search, dashboards, and full-stack delivery
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Open to</p>
                  <p className="mt-2 text-lg font-semibold leading-8 text-slate-950">
                    AI engineering, software engineering, internship, and junior roles
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Contact</p>
                  <a href={`mailto:${profile.email}`} className="mt-3 block text-lg font-semibold text-white">
                    {profile.email}
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-cyan-300"
                  >
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                <p className="mt-2 font-medium text-slate-800">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionTitle
              eyebrow="Projects"
              title="Selected work"
              description="Projects are presented with real implementation scope and measurable outcomes from the current codebase."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-soft"
                >
                  <div className={`p-8 text-white ${project.visualClass}`}>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/80">{project.category}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/90">{project.hero}</p>
                  </div>

                  <div className="space-y-8 p-8">
                    <p className="text-base leading-7 text-slate-600">{project.description}</p>

                    <div className="grid gap-3">
                      {project.results.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                          <p className="text-sm font-medium leading-6 text-slate-800">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Implementation notes</p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Tech stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        View repository
                      </a>
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                        >
                          View demo
                        </a>
                      ) : (
                        <span className="rounded-full border border-dashed border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-500">
                          Demo asset can be added next
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Next flagship case study</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Medical AI project recovery</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                The portfolio structure is ready for a third flagship AI case study. Once the missing medical project folder is recovered, it can be added without changing the design system or content hierarchy.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle
            eyebrow="Experience"
            title="Internship and research exposure"
            description="Early-stage experience shaped around AI implementation, research support, and practical software delivery."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{item.role}</h3>
                <p className="mt-2 text-base font-medium text-blue-700">{item.company}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionTitle
                eyebrow="About"
                title="What I bring"
                description="I prefer explaining projects with scope, constraints, and evidence. That makes the work easier to trust and easier to discuss in interviews."
              />

              <div className="space-y-10">
                <div className="grid gap-4 md:grid-cols-3">
                  {strengths.map((item) => (
                    <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.map((group) => (
                    <div key={group.title} className="rounded-[2rem] border border-slate-200 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{group.title}</p>
                      <p className="mt-4 leading-7 text-slate-700">{group.items.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-soft md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Contact</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Looking for an AI or software engineering role where I can build and learn fast.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  If you want someone who can connect product thinking with implementation details, feel free to reach out.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <ContactCard label="Email" value={profile.email} href={`mailto:${profile.email}`} dark />
                <ContactCard label="GitHub" value="github.com/yunussvnc" href={profile.github} dark />
                <ContactCard label="LinkedIn" value="linkedin.com/in/sevinc-yunusemre-23a926257" href={profile.linkedin} dark />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  )
}

type ContactCardProps = {
  label: string
  value: string
  href: string
  dark?: boolean
}

function ContactCard({ label, value, href, dark = false }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className={[
        'rounded-[1.5rem] border p-5 transition hover:-translate-y-1',
        dark
          ? 'border-slate-800 bg-slate-900 text-white hover:border-slate-700'
          : 'border-slate-200 bg-white text-slate-900 shadow-soft',
      ].join(' ')}
    >
      <p className={['text-sm font-semibold uppercase tracking-[0.2em]', dark ? 'text-slate-500' : 'text-slate-400'].join(' ')}>
        {label}
      </p>
      <p className="mt-3 text-base font-medium leading-7">{value}</p>
    </a>
  )
}

export default App
