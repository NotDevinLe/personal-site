import Link from 'next/link'

const projects = [
  {
    name: 'project one',
    description: 'short description of what it is and why it matters.',
    href: '#',
  },
  {
    name: 'project two',
    description: 'short description of what it is and why it matters.',
    href: '#',
  },
  {
    name: 'project three',
    description: 'short description of what it is and why it matters.',
    href: '#',
  },
]

const socials = [
  { name: 'github', href: '#' },
  { name: 'linkedin', href: '#' },
  { name: 'x', href: '#' },
]

export default function Home() {
  return (
    <div>
      <h1 className="font-serif text-[2rem] font-bold leading-tight mb-6">
        devin le
      </h1>

      <div className="article-content mb-14">
        <p>
          short intro placeholder — write a sentence or two about who you are,
          what you work on, and what you&apos;re currently thinking about.
        </p>
      </div>

      <section className="mb-14">
        <h2 className="font-serif text-[1.4rem] font-bold mb-5">projects</h2>
        <div className="post-list">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              className="group block"
            >
              <article>
                <h3 className="post-title group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h3>
                <p className="post-excerpt">{project.description}</p>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-serif text-[1.4rem] font-bold mb-5">writing</h2>
        <Link
          href="/blog"
          className="text-[0.95rem] underline underline-offset-2 hover:text-[color:var(--fg-muted)]"
        >
          read the blog →
        </Link>
      </section>

      <section>
        <h2 className="font-serif text-[1.4rem] font-bold mb-5">elsewhere</h2>
        <ul className="flex flex-col gap-2 text-[0.95rem]">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                className="underline underline-offset-2 hover:text-[color:var(--fg-muted)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/about"
              className="underline underline-offset-2 hover:text-[color:var(--fg-muted)]"
            >
              about
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
