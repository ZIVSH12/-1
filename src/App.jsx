// src/App.jsx
import { motion } from 'framer-motion'
import {
  ArrowRight, Phone, Mail, Instagram, Facebook, Linkedin,
  Sparkles, CheckCircle, Palette, PenTool, Images
} from 'lucide-react'

const BRAND = {
  name: 'TALI GRAPIC',
  headline: 'סטודיו לעיצוב גרפי מודרני',
  tagline: 'מיתוג חכם • עיצוב עכשווי • תוצאות מהירות',
  sub: 'לוגואים, זהות מותג, עיצוב לרשתות, אתרים ודפי נחיתה',
  phone: '0523941832',
  email: 'studio@taligrapic.com',
  instagram: '#',
  facebook: '#',
  linkedin: '#',
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-slate-900 [direction:rtl] font-sans">
      <Nav />
      <Hero />
      <Trusted />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

function Container({ children, className='' }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

/* --------------------- NAV --------------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Tali Grapic" className="h-10 object-contain" />
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-slate-600 hover:text-slate-900">שירותים</a>
            <a href="#portfolio" className="text-slate-600 hover:text-slate-900">עבודות</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">חבילות</a>
            <a href="#contact" className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:opacity-90">דברו איתי</a>
          </nav>
        </div>
      </Container>
    </header>
  )
}

/* --------------------- HERO --------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-28">
      {/* רקע רך; אם תעלו /public/hero.jpg יוצג אוטומטית מעל הגרדיינט */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[image:var(--hero)] bg-cover bg-center opacity-15"
          style={{ ['--hero']: "url('/hero.jpg')" }}
        />
        <div className="pointer-events-none absolute inset-0 blur-3xl">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-gradient-to-r from-pink-300 via-fuchsia-200 to-rose-200 opacity-60" />
        </div>
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
              <Sparkles className="size-4" /> איכות • מהירות • יחס אישי
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              {BRAND.headline}
            </h1>
            <p className="mt-3 text-xl text-pink-700">{BRAND.tagline}</p>
            <p className="mt-3 text-lg text-slate-600">{BRAND.sub}</p>

            <ul className="mt-6 grid gap-2 text-slate-700">
              {['אסטרטגיית מותג מותאמת', 'UI/UX ממוקד המרה', 'ביצוע פיקסל-פרפקט'].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-pink-600" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${BRAND.phone}`} className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white">
                התקשרו עכשיו — {formatPhone(BRAND.phone)}
                <ArrowRight className="size-4 transition-transform group-hover:-translate-x-0.5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 hover:bg-slate-50">
                צפו בעבודות
              </a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:0.6,delay:.1}}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="aspect-[4/3] w-full rounded-[2rem] border bg-white shadow-2xl grid place-items-center text-slate-400">
                העלה/י hero.jpg ל־/public לקבלת תצוגת רקע
              </div>
              <div className="absolute -bottom-8 -left-6 hidden w-44 rotate-[-6deg] rounded-2xl border bg-white p-4 shadow-xl md:block">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold"><Palette className="size-4"/> צבעוניות</div>
                <div className="flex gap-2">
                  <div className="size-6 rounded-md bg-pink-600" />
                  <div className="size-6 rounded-md bg-rose-400" />
                  <div className="size-6 rounded-md bg-slate-900" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* --------------------- TRUST BAR --------------------- */
function Trusted() {
  return (
    <section aria-label="trusted" className="py-6">
      <Container>
        <p className="text-center text-sm text-slate-500">
          נבנה ב־React + Tailwind • מותאם ל־Vercel • טעינה מהירה ונגישות גבוהה
        </p>
      </Container>
    </section>
  )
}

/* --------------------- SERVICES --------------------- */
function Services() {
  const items = [
    { icon: PenTool, title: 'מיתוג וזהות', desc: 'לוגו, צבעוניות, טיפוגרפיה ושפה אחידה לעסק' },
    { icon: Images,  title: 'עיצוב סושיאל', desc: 'סטים לפוסטים/סטוריז/באנרים — קונסיסטנטיות שמביאה קהל' },
    { icon: Palette, title: 'אתרים ודפי נחיתה', desc: 'עיצוב ממיר עם חוויית משתמש נקייה ומודרנית' },
  ]
  return (
    <section id="services" className="py-16">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">מה אני מציעה</h2>
          <p className="mt-2 text-slate-600">עיצוב שמחבר יופי לתוצאות עסקיות.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(s => (
            <div key={s.title} className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-rose-400 text-white">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------- PORTFOLIO --------------------- */
function Portfolio() {
  const works = [
    'from-rose-100 to-rose-200', 'from-fuchsia-100 to-fuchsia-200', 'from-amber-100 to-yellow-200',
    'from-indigo-100 to-sky-200', 'from-emerald-100 to-teal-200', 'from-slate-100 to-slate-200'
  ]
  return (
    <section id="portfolio" className="py-16">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">עבודות נבחרות</h2>
          <p className="mt-2 text-slate-600">טעימות — את הקבצים המלאים נעלה בהמשך.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((g,i) => (
            <div key={i} className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              <div className={`aspect-[4/3] w-full bg-gradient-to-br ${g}`} />
              <div className="p-5 text-sm text-slate-600">מקרה בוחן #{i+1}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------- PROCESS --------------------- */
function Process() {
  const steps = ['שיחת היכרות קצרה', 'אפיון וקריאייטיב', 'סקיצות', 'דיוקים', 'מסירה מלאה']
  return (
    <section className="py-16 bg-pink-50/50">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-center">איך זה עובד</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((t,i) => (
            <div key={t} className="rounded-2xl border bg-white p-4 text-center text-sm">
              <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-pink-600 text-white">{i+1}</div>
              {t}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------- PRICING --------------------- */
function Pricing() {
  const items = [
    { name:'לוגו בסיס', price:'₪ 1,200', points:['2 סקיצות','קובץ וקטורי','זמן אספקה מהיר'] },
    { name:'מיתוג עסקי', price:'₪ 3,900', points:['לוגו מלא','צבעוניות וטיפוגרפיה','ערכת סושיאל'] },
    { name:'דף נחיתה', price:'₪ 2,400', points:['UX/UI','גרסאות מובייל','העלאה ל־Vercel'] },
  ]
  return (
    <section id="pricing" className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-center">חבילות</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(p => (
            <div key={p.name} className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-1 text-2xl font-bold text-pink-700">{p.price}</div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                {p.points.map(pt => <li key={pt} className="flex items-center gap-2"><CheckCircle className="size-4 text-pink-600" /> {pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------- FAQ --------------------- */
function FAQ() {
  const qa = [
    {q:'מה זמן האספקה?', a:'לרוב 3–7 ימי עסקים, תלוי בהיקף.'},
    {q:'איך מתחילים?', a:'שיחת היכרות קצרה, אפיון והצעת מחיר — ואז יוצאים לדרך.'},
    {q:'אפשר חשבונית?', a:'כן, עם מסירה מלאה של כל הקבצים.'},
  ]
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-center">שאלות נפוצות</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {qa.map(item => (
            <div key={item.q} className="rounded-2xl border bg-white p-5 text-sm shadow-sm">
              <div className="font-semibold">{item.q}</div>
              <div className="mt-1 text-slate-600">{item.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* --------------------- CONTACT --------------------- */
function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">יש פרויקט? בואו נדבר</h2>
            <p className="mt-2 text-slate-600">אשמח לשיחת ייעוץ קצרה והכוונה חינם.</p>

            <div className="mt-6 grid gap-3 text-slate-700">
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2">
                <Phone className="size-5" /> {formatPhone(BRAND.phone)}
              </a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2">
                <Mail className="size-5" /> {BRAND.email}
              </a>
              <div className="flex gap-4 pt-2 text-slate-600">
                <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900"><Instagram className="size-5" /> Instagram</a>
                <a href={BRAND.facebook}  target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900"><Facebook className="size-5" /> Facebook</a>
                <a href={BRAND.linkedin}  target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900"><Linkedin className="size-5" /> LinkedIn</a>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border bg-white p-6 shadow-sm" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm">שם מלא</label>
                <input className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" placeholder="הקלד/י שם" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">אימייל</label>
                <input type="email" className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">הודעה</label>
                <textarea rows={4} className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" placeholder="כמה מילים על הפרויקט" />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white" type="submit">
                שלחו הודעה <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

/* --------------------- FOOTER --------------------- */
function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} {BRAND.name}. כל הזכויות שמורות.</p>
          <span className="text-sm text-slate-600">Hebrew • RTL • Vite</span>
        </div>
      </Container>
    </footer>
  )
}

function formatPhone(p){ return [p.slice(0,3), p.slice(3,6), p.slice(6)].join('-') }
