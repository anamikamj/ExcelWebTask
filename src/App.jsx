import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Sparkles, Trophy, Mic2, Satellite, Orbit, Users, CalendarDays, Mail, Phone } from 'lucide-react'

const events = [
  {
    title: 'Cosmic Launchpad',
    time: '09:00 AM',
    desc: 'A high-energy opening ceremony with keynote talks, live demos, and a stellar DJ set.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Orbit Hackathon',
    time: '11:30 AM',
    desc: 'Build futuristic solutions in teams under a cosmic countdown and futuristic constraints.',
    icon: Orbit,
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Starlight Showdown',
    time: '07:00 PM',
    desc: 'A grand finale featuring innovation pitches, awards, and immersive visuals.',
    icon: Sparkles,
    image: 'https://img.pikbest.com/backgrounds/20180925/fantasy-purple-starlight-background_2779681.jpg!bw700',
  },
]

const competitions = [
  { name: 'Moonshot Pitch', type: 'Innovation', prize: '₹25K', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Nebula Design', type: 'UI/UX', prize: '₹15K', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' },
  { name: 'Astro Coding', type: 'Development', prize: '₹20K', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80' },
]

const highlights = [
  { label: 'Workshops', value: '18+' },
  { label: 'Participants', value: '2k+' },
  { label: 'Awards', value: '50+' },
]

const stars = [
  { left: '8%', top: '15%', size: 8 },
  { left: '20%', top: '28%', size: 4 },
  { left: '72%', top: '12%', size: 6 },
  { left: '84%', top: '24%', size: 5 },
  { left: '38%', top: '18%', size: 3 },
  { left: '60%', top: '40%', size: 4 },
]

function App() {
  return (
    <div className="min-h-screen text-stardust">
      <header className="relative min-h-[90vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/854347/854347-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {stars.map((star, index) => (
            <motion.span
              key={`${star.left}-${star.top}`}
              className="absolute rounded-full bg-white/80"
              style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
              animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="text-xl font-semibold tracking-[0.3em] text-emerald-300">IGNITO</div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-emerald-300">Home</a>
            <a href="#events" className="transition hover:text-emerald-300">Events</a>
            <a href="#competitions" className="transition hover:text-emerald-300">Competitions</a>
            <a href="#contact" className="transition hover:text-emerald-300">Contact</a>
          </div>
        </nav>

        <section id="home" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <Satellite size={16} />
              Ignite your future among the stars
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Welcome to the <span className="text-emerald-300">Cosmos</span> of Innovation.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              IGNITO is a spectacular techfest where ideas launch, creators collaborate, and imagination becomes reality under a galaxy of possibilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#events" className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">Explore Events</a>
              <a href="#competitions" className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-emerald-300">See Competitions</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-emerald-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-4 shadow-glow backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.25),_transparent_40%),linear-gradient(135deg,#0f172a_0%,#111827_100%)] p-8">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Mission: 2040</span>
                  <span>Live now</span>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-white">27th Sept</div>
                    <div className="mt-2 text-slate-400">Galaxy Hall, Delhi</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300">
                    <Rocket size={28} />
                  </div>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex items-center gap-2 text-emerald-300"><Mic2 size={16} /> Talks</div>
                    <div className="mt-2 text-sm text-slate-400">Industry experts and visionary founders.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex items-center gap-2 text-emerald-300"><Trophy size={16} /> Awards</div>
                    <div className="mt-2 text-sm text-slate-400">Cash prizes and internship opportunities.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <section id="events" className="mb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-300">Events</p>
              <h2 className="text-3xl font-bold sm:text-4xl">A constellation of experiences</h2>
            </div>
            <a href="#contact" className="hidden text-sm text-slate-300 hover:text-emerald-300 md:block">Register now</a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((event, index) => {
              const Icon = event.icon
              return (
                <motion.article key={event.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">
                  <img src={event.image} alt={event.title} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3 text-emerald-300"><Icon size={20} /></div>
                    <div className="mb-2 text-sm text-slate-400">{event.time}</div>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{event.desc}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="competitions" className="mb-20 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8 backdrop-blur lg:p-10">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-300">Competitions</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Launch your talent into orbit</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {competitions.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70">
                <img src={item.image} alt={item.name} className="h-36 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-emerald-300"><Trophy size={16} /> {item.type}</div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="mt-3 text-sm text-slate-400">Compete with the brightest minds and win exciting rewards.</p>
                  <div className="mt-5 text-sm font-semibold text-emerald-300">Prize: {item.prize}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-emerald-500/10 to-slate-900/70 p-8">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-300">Why join?</p>
            <h2 className="text-3xl font-bold">A universe of learning and networking</h2>
            <p className="mt-4 text-slate-400">Meet collaborators, explore ideas, and experience a festival designed to feel like a journey beyond the ordinary.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6">
              <Users className="mb-3 text-emerald-300" />
              <h3 className="text-lg font-semibold text-white">Community</h3>
              <p className="mt-2 text-sm text-slate-400">Build lasting friendships with innovators and creators.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6">
              <CalendarDays className="mb-3 text-emerald-300" />
              <h3 className="text-lg font-semibold text-white">Curated Schedule</h3>
              <p className="mt-2 text-sm text-slate-400">Plan your day effortlessly through a polished event experience.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-300">Contact</p>
            <h2 className="text-2xl font-bold text-white">Ready to launch with IGNITO?</h2>
            <p className="mt-2 text-slate-400">Join the experience and become part of the future.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="mailto:hello@ignito.in" className="flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 hover:border-emerald-300"><Mail size={16} /> hello@ignito.in</a>
            <a href="tel:+919999999999" className="flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 hover:border-emerald-300"><Phone size={16} /> +91 99999 99999</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
