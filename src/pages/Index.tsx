import { useEffect, useRef, useState } from "react";
import logo from "@/assets/trust/trust-logo.png";
import wearableOverview from "@/assets/trust/wearable-overview.png";
import wearableVideo from "@/assets/trust/wearable.mp4";
import brainVault from "@/assets/trust/brain-vault.jpg";
import agneloImg from "@/assets/trust/agnelo.jpg";
import alvinImg from "@/assets/trust/alvin.jpg";
import vijayImg from "@/assets/trust/vijayanand.jpg";
import trustBanner from "@/assets/trust/trust-banner.png";
import trustDemoVideo from "@/assets/trust/Trust demo video.mp4";
import {
  Activity,
  AlertTriangle,
  Award,
  Bot,
  Brain,
  Building2,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  Eye,
  FlaskConical,
  Globe2,
  GraduationCap,
  Heart,
  HeartPulse,
  Layers,
  Lock,
  Mail,
  MapPin,
  Menu,
  Mic,
  MousePointer2,
  Navigation,
  Network,
  Phone,
  Pill,
  Radio,
  Send,
  Shield,
  ShieldCheck,
  Siren,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Wifi,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";

/* ---------- Reveal-on-scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Nav ---------- */

const NAV = [
  { label: "Crisis", href: "#crisis" },
  { label: "Platform", href: "#platform" },
  { label: "Wearable", href: "#wearable" },
  { label: "Technology", href: "#tech" },
  { label: "Team", href: "#team" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container-trust">
        <div className={`flex items-center justify-between rounded-full px-4 lg:px-6 py-2.5 transition-all ${scrolled ? "glass-dark shadow-2xl" : ""}`}>
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="TRUST logo" className="h-14 w-auto object-contain" />
            <span className="font-semibold tracking-[0.25em] text-sm text-white">TRUST</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="px-3.5 py-2 text-sm font-medium text-white/75 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <a href="#contact" className="btn-ghost !py-2.5 !px-4 !text-xs !text-white !border-white/25 hover:!text-sunset hover:!border-sunset">
              <Navigation className="h-4 w-4" /> Locate Us
            </a>
            <a href="#cta" className="btn-primary !py-2.5 !px-5 !text-xs">Request a Demo <ChevronRight className="h-4 w-4" /></a>
          </div>
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-3 rounded-2xl glass p-4 space-y-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-ghost w-full mt-2"><Navigation className="h-4 w-4" /> Locate Us</a>
            <a href="#cta" onClick={() => setOpen(false)} className="btn-primary w-full mt-2">Request a Demo</a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-grad-hero text-white">
      {/* ambient orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-grad-sunset opacity-30 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-grad-ocean opacity-30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(184_80%_38%/0.3),transparent_50%)]" />

      <div className="container-trust relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="reveal pill bg-white/10 border border-white/15 text-white/90">
              <Sparkles className="h-3.5 w-3.5" /> Predictive · Personalised · Researched · AI Driven
            </div>
            <h1 className="reveal mt-7 text-5xl md:text-6xl lg:text-[4.75rem] font-semibold leading-[0.95]">
              Better <span className="font-serif italic text-sunset">Mental Health</span>,<br />
              For Everyone.
            </h1>
            <p className="reveal mt-7 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              TRUST replaces reactive treatment with predictive, personalised intervention —
              an AI-assisted Digital Therapeutics platform for early risk detection,
              relapse prevention, and real-time safety.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <a href="#cta" className="btn-primary">Request a Pilot <ChevronRight className="h-4 w-4" /></a>
              <a href="#platform" className="btn-ghost !text-white !border-white/20 hover:!text-sunset hover:!border-sunset">Explore the Platform</a>
            </div>
          </div>

{/* Hero Video — Phone Mockup */}
<div className="lg:col-span-5 flex justify-center">
  <div className="reveal relative w-[280px] sm:w-[320px] rounded-[2.5rem] bg-white p-3 shadow-2xl border border-white/20">
    <div className="overflow-hidden rounded-[2rem] bg-black aspect-[9/19.5]">
      <video
        src={trustDemoVideo}
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>          


        </div>

        {/* stat strip */}
        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {[
            ["1 in 8", "globally affected"],
            ["40–60%", "1-year relapse rate"],
            ["70–85%", "untreated in LMICs"],
            ["$1T", "lost annually"],
          ].map(([n, l]) => (
            <div key={l} className="bg-midnight/40 p-6">
              <div className="text-3xl md:text-4xl font-semibold grad-text">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Agenda ---------- */
function Agenda() {
  const items = [
    { icon: AlertTriangle, title: "The Critical Gap", body: "1 in 8 globally face mental health challenges, with a 40–60% relapse rate within the first year post-diagnosis." },
    { icon: Brain, title: "Our Solution", body: "A clinically grounded, AI-assisted platform for early risk detection and relapse prevention — shifting care from reactive to proactive." },
    { icon: Sparkles, title: "Key Features", body: "AI-driven risk stratification, correlation of behavioral & biometric data, and closed-loop care with clinician escalation." },
  ];
  return (
    <section id="agenda" className="section">
      <div className="container-trust">
        <div className="max-w-2xl reveal">
          <div className="eyebrow"><Target className="h-3.5 w-3.5" /> Why · What · How</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">TRUST's agenda for proactive mental health care.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="reveal trust-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Crisis ---------- */
function Crisis() {
  const metrics = [
    { label: "Prevalence", value: "1 in 8", desc: "globally are battling mental health disorders.", color: "from-orange-500 to-red-500" },
    { label: "Treatment Gap", value: "70–85%", desc: "in low- and middle-income countries receive no professional help.", color: "from-pink-500 to-rose-500" },
    { label: "Chronicity", value: "40–60%", desc: "relapse rates — comparable to diabetes and hypertension.", color: "from-amber-500 to-orange-500" },
    { label: "Economic Burden", value: "$1 Trillion", desc: "lost annually due to the impact of mental health disorders.", color: "from-cyan-500 to-teal-500" },
  ];
  return (
    <section id="crisis" className="section bg-secondary/40">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><AlertTriangle className="h-3.5 w-3.5" /> The Mental Health Crisis</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">A system in <span className="font-serif italic text-sunset">failure</span>.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Four signals describe the scale of a global emergency — and the urgency for a smarter, predictive layer of care.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div key={m.label} className="reveal trust-card relative overflow-hidden" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.color}`} />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.label}</div>
              <div className="mt-4 text-5xl font-semibold grad-text">{m.value}</div>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Building TRUST ---------- */
function Building() {
  return (
    <section className="section">
      <div className="container-trust grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="eyebrow"><Layers className="h-3.5 w-3.5" /> Building TRUST</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">Improving mental health — across conditions and care models.</h2>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-sunset grid place-items-center text-white"><Heart className="h-6 w-6" /></div>
              <div>
                <h3 className="font-semibold text-lg">Comprehensive Condition Coverage</h3>
                <p className="mt-1.5 text-muted-foreground">Substance Use Disorders (alcohol, opioids, nicotine), Behavioral Addictions (gaming, internet), and Comorbid Mental Health Conditions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white"><Brain className="h-6 w-6" /></div>
              <div>
                <h3 className="font-semibold text-lg">AI Layer Functionality</h3>
                <p className="mt-1.5 text-muted-foreground">An Intelligent Clinical Decision Support Tool aligned with ICD-11 / DSM-5-TR, supporting CBT, Motivational Enhancement Therapy, and Contingency Management — not a standalone diagnostic system.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiated Approach */}
        <div className="reveal grid grid-cols-2 gap-4">
          {[
            { icon: Heart, title: "Emotion-Informed", sub: "Personalization", desc: "Tailors interventions to a nuanced understanding of user emotions." },
            { icon: Brain, title: "AI-Assisted", sub: "Risk Modeling", desc: "Proactively identifies and mitigates the probability of relapse." },
            { icon: Stethoscope, title: "Clinician", sub: "Connectivity", desc: "Seamless communication and timely professional intervention." },
            { icon: Users, title: "Supporter", sub: "Alerts", desc: "Informs sponsors, family or friends with critical, timely information." },
          ].map(({ icon: Icon, title, sub, desc }) => (
            <div key={title} className="trust-card">
              <Icon className="h-7 w-7 text-teal" />
              <div className="mt-4 text-sm font-semibold">{title}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{sub}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mission / Vision ---------- */
function Mission() {
  const items = [
    { icon: Target, title: "Mission", body: "Replace reactive treatment with predictive, personalized intervention — empowering stakeholders with real-time intelligence to prevent relapse." },
    { icon: Eye, title: "Vision", body: "Build the global intelligence layer for mental health." },
    { icon: TrendingUp, title: "Near-Term Goal", body: "Set a new standard for adult addiction recovery." },
    { icon: GraduationCap, title: "Long-Term Goal", body: "Expand to Mindful AI for Youth (ages 13–22) for scalable early intervention." },
    { icon: FlaskConical, title: "Core Philosophy", body: "Medical evidence meets AI; recovery requires intelligence, not just willpower." },
  ];
  return (
    <section className="section bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(18_100%_60%/0.25),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(184_80%_38%/0.25),transparent_50%)]" />
      <div className="container-trust relative">
        <div className="max-w-3xl reveal">
          <div className="pill bg-white/10 text-white border border-white/15"><Sparkles className="h-3.5 w-3.5" /> TRUST For A Better World</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">Our purpose <span className="font-serif italic text-sunset">& philosophy</span>.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={it.title} className="reveal glass-dark rounded-2xl p-7" style={{ transitionDelay: `${i * 60}ms` }}>
              <it.icon className="h-7 w-7 text-sunset" />
              <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Outcomes ---------- */
function Outcomes() {
  const cols = [
    { title: "User Needs", body: "Personalized, predictive tools that go beyond basic habit tracking." },
    { title: "Family & Therapist", body: "Early relapse alerts based on real behavioral and emotional data." },
    { title: "Healthcare Network", body: "AI-driven, medically validated relapse prediction integrated into care systems." },
    { title: "Connectivity", body: "Real-time relapse risk data connected with doctors, therapists, and sponsors." },
  ];
  return (
    <section className="section">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><Activity className="h-3.5 w-3.5" /> TRUST In Better Outcomes</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">Closing the gaps across every stakeholder.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cols.map((c, i) => (
            <div key={c.title} className="reveal trust-card border-t-4" style={{ borderTopColor: "hsl(var(--teal))", transitionDelay: `${i * 60}ms` }}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Framework */}
        <div className="mt-20 reveal rounded-3xl overflow-hidden border border-border">
          <div className="bg-grad-ocean text-white p-6 lg:p-8">
            <div className="text-xs uppercase tracking-[0.3em] opacity-80">The TRUST Framework</div>
            <h3 className="mt-2 text-2xl lg:text-3xl font-semibold">Transformative impact — evidence, AI & stakeholder intelligence.</h3>
          </div>
          <div className="grid md:grid-cols-3">
            {[
              { t: "Powerful Combination", b: "Integrates medical evidence, AI, personalization, and wearable vital signs." },
              { t: "Predictive Insights", b: "Creates a shared intelligence layer for Patient, Provider, and Insurer." },
              { t: "Scalable Outcomes", b: "Leverages WHO frameworks for 'task shifting' to ensure transparency and trackable results." },
            ].map((x) => (
              <div key={x.t} className="p-7 lg:p-8 bg-card border-t md:border-t-0 md:border-l border-border first:border-0">
                <h4 className="font-semibold text-lg">{x.t}</h4>
                <p className="mt-3 text-muted-foreground leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary text-primary-foreground p-5 text-center text-xs uppercase tracking-[0.25em]">
            Aligning stakeholders through shared intelligence and measurable results
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Platform ---------- */
function Platform() {
  const stack = [
    { icon: Smartphone, label: "User & Device Layer", desc: "End-User applications and device integrations." },
    { icon: Brain, label: "AI Intelligence & API Core", desc: "Central hub for AI-driven analytics and seamless API access." },
    { icon: Shield, label: "Secure Data & Compliance Vault", desc: "Robust data protection and adherence to regulatory standards." },
    { icon: Globe2, label: "Global Cloud Infrastructure", desc: "Scalable and reliable cloud services for global reach." },
  ];
  return (
    <section id="platform" className="section bg-secondary/40">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><Cpu className="h-3.5 w-3.5" /> TRUST Platform</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">TRUST at <span className="font-serif italic text-sunset">every stage</span> of the stack.</h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal relative rounded-3xl overflow-hidden aspect-square bg-midnight">
            <img src={brainVault} alt="The Brain & The Vault — TRUST architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-xs uppercase tracking-[0.3em] opacity-80">The Brain & The Vault</div>
              <div className="mt-1 text-2xl font-semibold font-serif italic">Tech that's trustworthy</div>
            </div>
          </div>
          <div className="reveal space-y-3">
            {stack.map((s, i) => (
              <div key={s.label} className="trust-card flex gap-5 items-start">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Layer {i + 1}</div>
                  <h3 className="mt-1 text-lg font-semibold">{s.label}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

/* ---------- Wearable ---------- */
function Wearable() {
  const features = [
    { icon: Siren, t: "One-Touch SOS Alert" },
    { icon: MapPin, t: "Real-Time GPS Tracking" },
    { icon: HeartPulse, t: "Heart Rate Monitoring" },
    { icon: Wind, t: "SpO₂ Monitoring" },
    { icon: Activity, t: "HRV Stress Detection" },
    { icon: Mic, t: "Cognitive Speech Recognition" },
    { icon: Wifi, t: "eSIM Connectivity" },
    { icon: Radio, t: "Geo-Fencing & Safe Zones" },
    { icon: ShieldCheck, t: "Dashboard Integration" },
  ];
  const steps = [
    { t: "Emergency Trigger", d: "The user presses the SOS button during an emergency." },
    { t: "Instant Location Sharing", d: "GPS coordinates are securely transmitted to the TrustAI platform." },
    { t: "Vital Signs Assessment", d: "Heart rate, oxygen saturation, and stress indicators are captured and analyzed." },
    { t: "Intelligent Escalation", d: "Alerts sent to parents, school admins, safety officers, and emergency response teams." },
    { t: "Continuous Monitoring", d: "Location and status updates continue until the incident is resolved." },
  ];
  return (
    <section id="wearable" className="section bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(18_100%_60%/0.2),transparent_50%),radial-gradient(circle_at_10%_80%,hsl(184_80%_38%/0.2),transparent_50%)]" />
      <div className="container-trust relative">
        <div className="max-w-3xl reveal">
          <div className="pill bg-white/10 border border-white/15 text-white"><Shield className="h-3.5 w-3.5" /> Children & Women Safety Wearable</div>
          <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05]">
            Real-Time Protection.<br />
            Instant Response.<br />
            <span className="font-serif italic text-sunset">Peace of Mind.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            A smart safety wearable for school children, college students, women, and vulnerable individuals.
            GPS tracking, SOS alerts, and vital-sign monitoring — with AI distress detection that triggers help even when the user can't.
          </p>
        </div>

        {/* Video */}
        <div className="reveal mt-14 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black relative">
          <video
            src={wearableVideo}
            autoPlay
            loop
            playsInline
            controls
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 pill bg-black/40 border border-white/20 text-white text-[10px] pointer-events-none">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Live demo · tap <Mic className="h-3 w-3 inline" /> to unmute
          </div>
        </div>

        {/* Solution overview image */}
        <div className="reveal mt-12 rounded-3xl bg-white p-6 lg:p-10">
          <img src={wearableOverview} alt="Solution overview — SOS device, GPS, vitals, dashboards" className="w-full h-auto" />
        </div>

        {/* Features grid */}
        <div className="reveal mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.t} className="glass-dark rounded-2xl p-5 flex items-center gap-4">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-grad-sunset grid place-items-center"><f.icon className="h-5 w-5 text-white" /></div>
              <div className="font-medium">{f.t}</div>
            </div>
          ))}
        </div>

        {/* How it works timeline */}
        <div className="mt-20">
          <div className="reveal max-w-2xl">
            <div className="pill bg-white/10 border border-white/15 text-white"><Activity className="h-3.5 w-3.5" /> How it Works</div>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold">From distress to dispatch — in seconds.</h3>
          </div>
          <ol className="mt-12 relative border-l border-white/10 ml-4 space-y-10">
            {steps.map((s, i) => (
              <li key={s.t} className="reveal pl-8 relative" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute -left-[18px] top-1 h-9 w-9 rounded-full bg-grad-sunset grid place-items-center text-sm font-bold text-white ring-4 ring-midnight">
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold">{s.t}</h4>
                <p className="mt-2 text-white/70 max-w-2xl">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Specs */}
        <div className="reveal mt-20 rounded-3xl glass-dark p-8 lg:p-10">
          <h3 className="text-xl font-semibold">Device Specifications</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
            {[
              ["GPS", "Real-Time Tracking"],
              ["SOS Button", "Dedicated Emergency Alert"],
              ["Connectivity", "Integrated eSIM Cellular"],
              ["Heart Rate", "Continuous Monitoring"],
              ["SpO₂", "Oxygen Saturation"],
              ["HRV", "Stress Indicator Analysis"],
              ["Cognitive Speech", "Distress Detection"],
              ["Battery Life", "Up to 5 Days"],
              ["Integration", "API / MQTT / HTTPS"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/60">{k}</span>
                <span className="font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Data Mission Pillars ---------- */
function DataMission() {
  const items = [
    { icon: Heart, t: "Lived Experience", d: "Personal biomarkers become real-time 'early warnings' to prevent relapse." },
    { icon: Lock, t: "Without Exploitation", d: "Consent-first model; data is fully anonymized, user-owned, and never sold." },
    { icon: Users, t: "Without Exclusion", d: "Equitable access designed to lower costs and serve underserved communities." },
  ];
  return (
    <section className="section">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Our Data Mission Pillars</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">Building <span className="font-serif italic text-sunset">trust</span> through action.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Foundational principles for ethical data use.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={it.t} className="reveal trust-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="h-12 w-12 rounded-xl bg-grad-sunset grid place-items-center text-white"><it.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-semibold">{it.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Validation, Market, Business, Roadmap ---------- */
function Research() {
  return (
    <section className="section bg-secondary/40">
      <div className="container-trust grid lg:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <div className="eyebrow"><FlaskConical className="h-3.5 w-3.5" /> Validation & Research</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">TRUST is <span className="font-serif italic text-sunset">scientifically validated</span>.</h2>
        </div>
        <div className="reveal space-y-5">
          {[
            { icon: Award, t: "University of Pittsburgh", d: "Developing and validating TRUST in partnership with leading researchers." },
            { icon: FlaskConical, t: "Registered Clinical Trial", d: "CTRI/2023/05/052534 — rigorous methodology and transparency." },
            { icon: Building2, t: "VA Pittsburgh Symposium", d: "Key results presented at a symposium in March 2026." },
            { icon: ShieldCheck, t: "Publication Plans", d: "Outcomes to be published in leading medical journals using a HIPAA-compliant dataset." },
          ].map((x) => (
            <div key={x.t} className="trust-card flex gap-5">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white"><x.icon className="h-6 w-6" /></div>
              <div>
                <h4 className="font-semibold">{x.t}</h4>
                <p className="mt-1.5 text-muted-foreground">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Market() {
  const items = [
    { v: "1.8B+", t: "Global Impact", d: "people worldwide suffer from mental health disorders." },
    { v: "Gap", t: "Unmet Need", d: "Existing solutions lack predictive capabilities and seamless healthcare integration." },
    { v: "4.3×", t: "Adult Market", d: "Expected market expansion for adults." },
    { v: "8.3×", t: "Adolescent Market", d: "Expected market expansion for adolescents." },
  ];
  return (
    <section className="section">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><TrendingUp className="h-3.5 w-3.5" /> Market & Growth</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">Potential for TRUST.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((m, i) => (
            <div key={m.t} className="reveal trust-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="text-5xl font-semibold grad-text">{m.v}</div>
              <div className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">{m.t}</div>
              <p className="mt-3 text-foreground/80">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Business() {
  const phases = [
    { phase: "Phase 1", t: "Strategic Platform Partnerships", d: "Leverage early-adopter platforms (BenefitHub, American Airlines, LinkedIn) for traction and brand validation — employee wellness, member benefits, integrated health." },
    { phase: "Phase 2", t: "Insurers", d: "Target wellness components of insurance providers. Revenue: $100–$150 per user annually. Integrated mental health support and reduced long-term costs." },
    { phase: "Phase 2", t: "Educational Institutions", d: "Schools, colleges, and universities for student well-being. Proactive intervention and adolescent mental health support." },
  ];
  return (
    <section className="section bg-secondary/40">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><Building2 className="h-3.5 w-3.5" /> Business Model & Revenue</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">Opportunities for TRUST.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {phases.map((p, i) => (
            <div key={p.t} className="reveal trust-card relative" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="pill bg-grad-sunset text-white">{p.phase}</div>
              <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const items = [
    { q: "Q2 2026", t: "MVP Launch", d: "Core AI relapse prediction." },
    { q: "Q3 2026", t: "Integration", d: "Healthcare networks and sponsor alert systems." },
    { q: "Q3 2027", t: "Expansion", d: "Youth segment (13–22) and multilingual support." },
    { q: "Q1 2028", t: "Compliance & Partnerships", d: "FDA/DTx compliance and insurance partnership tie-ups." },
  ];
  return (
    <section className="section">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Product Roadmap · 2026–2030</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">Evolving TRUST.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {items.map((it, i) => (
            <div key={it.q} className="reveal trust-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">{it.q}</div>
              <h3 className="mt-3 text-xl font-semibold">{it.t}</h3>
              <p className="mt-2 text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech / Architecture ---------- */
function TechArch() {
  return (
    <section id="tech" className="section bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(184_80%_38%/0.25),transparent_50%)]" />
      <div className="container-trust relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="pill bg-white/10 border border-white/15 text-white"><Cpu className="h-3.5 w-3.5" /> Technology Architecture</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">The Brain <span className="font-serif italic text-sunset">& the Vault</span>.</h2>
          <p className="mt-5 text-white/70 text-lg">Engineered for global scale, clinical-grade reliability, and uncompromising privacy.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { v: "HIPAA", l: "Encrypted Storage" },
              { v: "EKS", l: "Auto-scaling" },
              { v: "Kafka", l: "Real-time Streams" },
              { v: "AWS", l: "Geo-redundant" },
            ].map((s) => (
              <div key={s.l} className="glass-dark rounded-xl p-4">
                <div className="text-2xl font-semibold text-sunset">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative aspect-square rounded-3xl overflow-hidden border border-white/10">
          <img src={brainVault} alt="The Brain & The Vault" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */
function TeamIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="h-full w-full grid place-items-center bg-grad-ocean text-white">
      <Icon className="h-7 w-7" strokeWidth={1.75} />
    </div>
  );
}

function Team() {
const leadership = [
  {
    name: "Agnelo Vijayan",
    role: "CEO",
    img: agneloImg,
    bullets: [
      "30+ years of multi-sector experience in healthcare innovation and global partnerships",
      "Founding member, India Innovations Labs",
      "Led an $85M health benefits program for the US Federal Government",
    ],
  },
  {
    name: "Dr. Alvin Joseph",
    role: "Chief Medical Officer & Product Head",
    img: alvinImg,
    bullets: [
      "Specialist in psychiatry, mental health and addiction longitudinal research",
      "Addiction & Mental Health Research Fellow at St. John's Medical College & Hospital",
    ],
  },
  {
    name: "B. Vijayanand",
    role: "President & CIO",
    img: vijayImg,
    bullets: [
      "Senior Healthcare Technology executive with 25+ years of leadership",
      "Expertise across enterprise IT, cyber security and digital transformation",
      "Leading global CIO in Healthcare Solutions",
    ],
  },
];
  const product: { name: string; role: string; d: string; icon: LucideIcon }[] = [
    { name: "Manish Dash Sharma", role: "AI Lead", icon: Bot, d: "Specialist in scalable cloud architectures and AI-driven systems. Expert in Mental Health Chatbot innovation." },
    { name: "Arnav Jain", role: "Wearables & Cognitive Speech Lead", icon: Database, d: "Deep-tech wearables and cognitive speech systems development." },
    { name: "Raghav Kaushik", role: "Frontend Architecture", icon: MousePointer2, d: "Leads frontend architecture using React, Next.js, and TypeScript for scalable UI systems." },
    { name: "Denzil Haniel", role: "Chief Growth Officer", icon: Users, d: "AI Specialist with a focus on digital marketing and marketing strategies.Leads techno-commercial engagements and drives growth initiatives, partnerships and market outreach " },

  ];
  const ops: { name: string; role: string; d: string; icon: LucideIcon }[] = [
    { name: "Sunny Yadav", role: "AI/ML Specialist", icon: Network, d: "Developer focusing on the Relapse Prediction model for real-world deployment." },
    { name: "Swarnaa R.", role: "AI / Technical Researcher", icon: Network, d: "Full-stack developer focused on secure and ethical AI workflows." },
    { name: "Balraj Kapini",   role: "Content & Marketing", icon: Pill, d: "30+ years in Communication, Marketing and Media." },
    { name: "Shakshitha S.", role: "HR Lead", icon: Users, d: "Specialist in applying behavioral science to build people systems." },
  ];

  return (
    <section id="team" className="section">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><Users className="h-3.5 w-3.5" /> People Behind Building TRUST</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">A team of <span className="font-serif italic text-sunset">clinicians, engineers</span> & builders.</h2>
        </div>

        {/* Leadership */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {leadership.map((p, i) => (
            <div key={p.name} className="reveal trust-card !p-0 overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="text-sm uppercase tracking-widest text-teal mt-1">{p.role}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {(p.bullets ?? []).map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-sunset mt-1">•</span>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Product, Engineering & Technology Ops */}
        <div className="mt-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Product · Engineering · Technology Ops</div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {product.map((p) => (
    <div key={p.name} className="trust-card">
      <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-border">
        <TeamIcon icon={p.icon} />
      </div>

      <h4 className="mt-4 font-semibold">{p.name}</h4>

      <div className="text-xs uppercase tracking-widest text-teal mt-1">
        {p.role}
      </div>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {p.d}
      </p>
    </div>
  ))}
</div>
        </div>

        {/* AI Innovation & Organizational Excellence */}
        <div className="mt-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">AI Innovation · Organizational Excellence</div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ops.map((p) => (
              <div key={p.name} className="trust-card">
                <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-border"><TeamIcon icon={p.icon} /></div>
                <h4 className="mt-4 font-semibold">{p.name}</h4>
                <div className="text-xs uppercase tracking-widest text-teal mt-1">{p.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Challenges ---------- */
function Challenges() {
  const items = [
    { icon: Shield, t: "Regulatory Risk", d: "Mitigated by early engagement with FDA/HIPAA consultants." },
    { icon: Lock, t: "Data Privacy", d: "Ensured through robust encryption tunnels and global compliance." },
    { icon: TrendingUp, t: "Market Adoption", d: "Addressed by clinical validation and partnership incentives for traditional providers." },
    { icon: Sparkles, t: "Competition", d: "Differentiated by a unique AI-driven approach and deep healthcare integration." },
  ];
  return (
    <section className="section bg-secondary/40">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow"><Shield className="h-3.5 w-3.5" /> Challenges & Solutions</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">How TRUST turns challenges into <span className="font-serif italic text-sunset">solutions</span>.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((x, i) => (
            <div key={x.t} className="reveal trust-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <x.icon className="h-7 w-7 text-teal" />
              <h3 className="mt-5 text-lg font-semibold">{x.t}</h3>
              <p className="mt-3 text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Contact ---------- */
const OFFICES = [
  {
    tag: "Trust Office",
    city: "Bangalore, IN",
    address: "F-15 Mana Placido, ECC Road, Whitefield, Bangalore 560066",
    
  },
  {
    tag: "Trust Office",
    city: "Chennai, IN",
    address: "No. 2, Kumarasamy St, Lakshmipuram, Chromepet, Chennai, Tamil Nadu 600044",
    
  },
];

function mapsUrl(addr: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
}
function dirUrl(addr: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addr)}`;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(184_80%_38%/0.25),transparent_55%),radial-gradient(circle_at_85%_90%,hsl(18_100%_60%/0.22),transparent_55%)]" />
      <div className="container-trust relative">
        <div className="max-w-3xl reveal">
          <div className="pill bg-white/10 border border-white/15 text-white"><Navigation className="h-3.5 w-3.5" /> Find &amp; Reach Us</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Two labs. One mission — <span className="font-serif italic text-sunset">closer than you think</span>.
          </h2>
          <p className="mt-5 text-white/70 text-lg">Drop by, send a note, or open directions in one tap. We respond within one working day.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Office cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {OFFICES.map((o, i) => (
              <div key={o.address} className="reveal glass-dark rounded-2xl p-6 flex flex-col group hover:border-sunset/40 transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-sunset font-semibold">{o.tag}</span>
                  <div className="h-9 w-9 rounded-full bg-grad-ocean grid place-items-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="mt-5 text-xl font-semibold">{o.city}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{o.address}</p>


                {/* Mini map preview */}
                <a
                  href={mapsUrl(o.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-black/40 relative"
                  aria-label={`Open ${o.city} on Google Maps`}
                >
                  <iframe
                    title={`Map of ${o.city}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(o.address)}&output=embed`}
                    className="absolute inset-0 w-full h-full grayscale-[40%] group-hover:grayscale-0 transition-all pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>

                <div className="mt-5 flex gap-2">
                  <a href={dirUrl(o.address)} target="_blank" rel="noreferrer" className="btn-primary flex-1 !py-2.5 !text-xs justify-center">
                    <Navigation className="h-4 w-4" /> Directions
                  </a>
                  <a href={mapsUrl(o.address)} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5 !text-xs !text-white !border-white/20 hover:!text-sunset hover:!border-sunset justify-center">
                    View Map
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 reveal">
            <div className="glass-dark rounded-2xl p-6 lg:p-7 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-grad-sunset grid place-items-center"><Send className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-lg font-semibold">Send a message</div>
                  <div className="text-xs text-white/60">Pilots · partnerships · press</div>
                </div>
              </div>

              {sent ? (
                <div className="mt-8 rounded-xl border border-teal/30 bg-teal/10 p-6 text-center">
                  <div className="h-12 w-12 mx-auto rounded-full bg-grad-ocean grid place-items-center"><Sparkles className="h-6 w-6 text-white" /></div>
                  <div className="mt-4 font-semibold">Message received</div>
                  <p className="mt-1.5 text-sm text-white/70">We'll get back to you within one working day.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", org: "", message: "" }); }} className="mt-5 text-xs uppercase tracking-widest text-sunset hover:text-white transition-colors">Send another</button>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4 flex-1 flex flex-col"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                      className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all"
                    />
                    <input
                      value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                      placeholder="Organisation"
                      className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <input
                    required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Work email"
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all"
                  />
                  <textarea
                    required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us a little about what you're exploring…"
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all resize-none flex-1"
                  />
                  <button type="submit" className="btn-primary justify-center">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                  <p className="text-[11px] text-white/50 text-center">By submitting, you agree to be contacted by the TRUST team about your enquiry.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- CTA + Footer ---------- */
function CTA() {
  return (
    <section id="cta" className="section bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grad-hero opacity-90" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-grad-sunset blur-3xl opacity-40 animate-float" />
      <div className="container-trust relative text-center max-w-4xl">
        <div className="reveal pill bg-white/10 border border-white/15 text-white mx-auto"><Sparkles className="h-3.5 w-3.5" /> Get in Touch</div>
        <h2 className="reveal mt-6 text-4xl md:text-6xl font-semibold leading-[1.05]">
          Join us in building the <span className="font-serif italic text-sunset">global intelligence layer</span> for mental health.
        </h2>
        <p className="reveal mt-6 text-lg text-white/70">Request a pilot, schedule a demo, or partner with us on the future of predictive care.</p>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@trust.health" className="btn-primary">Request a Pilot <ChevronRight className="h-4 w-4" /></a>
          <a href="mailto:hello@trust.health" className="btn-ghost !text-white !border-white/20 hover:!text-sunset hover:!border-sunset">Schedule a Demo</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-midnight text-white/60 border-t border-white/10">
      <div className="container-trust py-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
<img src={logo} alt="TRUST logo" className="h-14 w-auto object-contain" />          <div>
            <div className="font-semibold text-white tracking-[0.25em] text-sm">TRUST</div>
            <div className="text-xs">Therapeutic Recovery Understanding Support Technology</div>
          </div>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} TRUST. Better Mental Health, For Everyone.</div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function Index() {
  useReveal();

  return (
    <main id="main-content" className="min-h-screen">
      <Nav />
      <Hero />
      <section className="py-8 bg-background">
  <div className="container-trust">
    <img
      src={trustBanner}
      alt="Trust Quote Banner"
      className="w-full rounded-2xl shadow-lg"
    />
  </div>
</section>
      <Agenda />
      <Crisis />
      <Building />
      <Mission />
      <Outcomes />
      <Platform />
      <Wearable />
      <DataMission />
      <Research />
      <Market />
      <Business />
      <Roadmap />
      <TechArch />
      <Team />
      <Challenges />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
