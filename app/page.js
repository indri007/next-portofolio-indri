import React from 'react'
import profilePhoto from '../public/profile.png'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  const developer = {
    name: 'Indri Anjar Kartika Sari',
    title: 'Full-Stack Web Developer',
    intro:
      'Building scalable and high-performance web solutions for your business needs.',
    photo: profilePhoto, 
    skills: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      devops: ['Git', 'Docker', 'CI/CD', 'Vercel', 'AWS']
    }
  }

  const portfolio = [
    {
      title: 'E-commerce Platform for XYZ Retail',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      situation:
        'XYZ Retail needed a scalable e-commerce platform to expand online sales and automate inventory.',
      task:
        'Build front-end and back-end, integrate payments, and optimize for performance and mobile.',
      action:
        'Designed responsive UI with React, built RESTful APIs with Node.js, integrated AWS CDN and set up CI/CD.',
      result:
        'Delivered in 4 months — 35% increase in online sales in 3 months and reduced manual inventory tasks.'
    },
    {
      title: 'Dashboard Analytics for Acme Corp',
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      situation:
        'Acme Corp needed real-time insights to monitor sales and operations across regions.',
      task: 'Create a performant analytics dashboard with role-based access.',
      action:
        'Implemented Next.js SSR pages for performance, optimized queries, and created interactive charts.',
      result:
        'Reduced time-to-insight by 60% and improved decision-making speed.'
    }
  ]

  const experience = [
    {
      role: 'Regional Manager (DevOps & Infra) — ISP Company',
      company: 'ISP Corp',
      period: '2020 - 2024',
      responsibilities: [
        'Manage regional deployment and monitoring',
        'Coordinate cross-team releases and incident response',
        'Mentor junior engineers'
      ]
    },
    {
      role: 'Full-Stack Developer (Freelance)',
      company: 'Self-employed',
      period: '2018 - 2020',
      responsibilities: [
        'Delivered websites & web apps for SMEs',
        'Handled end-to-end project lifecycle'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Client A',
      quote:
        "Highly professional, delivered ahead of schedule and exceeded expectations."
    },
    {
      name: 'Colleague B',
      quote: "Great communicator and problem solver — a reliable teammate." 
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
             <Image
                priority
                src={developer.photo}
                height={32}
                width={32}
                alt="Follow us on Twitter"
                />
            </div>
            <div>
              <h1 className="font-semibold">{developer.name}</h1>
              <p className="text-sm text-gray-500">{developer.title}</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" className="text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* HERO */}
        <section id="hero" className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold leading-tight">
              Hi, I’m <span className="text-blue-600">{developer.name}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">{developer.intro}</p>

            <div className="mt-6 flex gap-4">
              <a href="https://company-profile-digimetashop.vercel.app/" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg shadow">
                View Portfolio
              </a>
              {/* <a href="https://wa.me/6287754786544" className="inline-flex items-center px-5 py-3 border rounded-lg">
                Contact Me
              </a> */}
              <Link
                href="https://wa.me/6287754786544"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <strong>Core:</strong> React · Next.js · Node.js · Tailwind CSS · Docker
            </div>
          </div>

          <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg">
             <Image
                priority
                src={developer.photo}
                alt="Follow us on Twitter"
                className="w-full h-full object-cover"
                />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-3 text-gray-600">
            Saya seorang developer dengan fokus pada pengembangan web full-stack. Saya tertarik membangun
            solusi yang scalable, maintainable, dan cepat. Pengalaman mencakup bekerja pada tim cross-functional,
            membangun API, dan mengoptimalkan performa aplikasi.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium">Core Skills</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {developer.skills.frontend.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Key Values</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Timeliness</li>
                <li>• Attention to detail</li>
                <li>• Clear communication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Interested In</h4>
              <p className="mt-2 text-sm text-gray-600">Web Performance, Scalable APIs, UX & Accessibility, Mentoring.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Front-End</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {developer.skills.frontend.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Back-End</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {developer.skills.backend.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">DevOps & Tools</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {developer.skills.devops.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-4">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.map((p) => (
              <article key={p.title} className="p-4 border rounded-lg">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Technologies:</strong> {p.tech.join(', ')}</p>

                <div className="mt-3 text-sm space-y-2">
                  <div>
                    <strong>Situation:</strong>
                    <div className="text-gray-600">{p.situation}</div>
                  </div>
                  <div>
                    <strong>Task:</strong>
                    <div className="text-gray-600">{p.task}</div>
                  </div>
                  <div>
                    <strong>Action:</strong>
                    <div className="text-gray-600">{p.action}</div>
                  </div>
                  <div>
                    <strong>Result:</strong>
                    <div className="text-gray-600">{p.result}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.role} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{e.role}</h4>
                    <p className="text-sm text-gray-500">{e.company} • {e.period}</p>
                  </div>
                </div>

                <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                  {e.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
                <p className="text-gray-700">“{t.quote}”</p>
                <cite className="block mt-2 text-sm text-gray-600">— {t.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-600 text-sm">Want to work together? Send a message — I usually respond within 24–48 hours.</p>

          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required className="p-3 border rounded" placeholder="Your name" />
            <input required type="email" className="p-3 border rounded" placeholder="Your email" />
            <input className="p-3 border rounded col-span-1 md:col-span-2" placeholder="Subject" />
            <textarea required className="p-3 border rounded col-span-1 md:col-span-2" rows={5} placeholder="Message" />
            <button type="submit" className="col-span-1 md:col-span-2 px-4 py-3 bg-blue-600 text-white rounded">Send Message</button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            <p>Email: <a href="mailto:youremail@example.com" className="text-blue-600">youremail@example.com</a></p>
            <p className="mt-2">Social: <a href="#" className="mr-2 text-blue-600">GitHub</a> <a href="#" className="text-blue-600">LinkedIn</a></p>
          </div>
        </section>

      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {developer.name}. Built with Next.js & Tailwind CSS.
        </div>
      </footer>
    </div>
  )
}
