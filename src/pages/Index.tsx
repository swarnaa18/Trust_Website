import { useEffect, useRef, useState } from "react";
import logo from "@/assets/trust/HIT Logo.jpeg";
import wearableOverview from "@/assets/trust/wearable-overview.png";
import wearableVideo from "@/assets/trust/wearable.mp4";
import elderCareVideo from "@/assets/trust/elder-care.mp4";
import enterpriseVideo from "@/assets/trust/enterprise.mp4";
import hilBridgeVideo from "@/assets/trust/HIL-Bridge.mp4";
import autismVideo from "@/assets/trust/English Autism.mp4";
import brainVault from "@/assets/trust/brain-vault.jpg";
import alvinImg from "@/assets/trust/alvin.jpg";
import vijayImg from "@/assets/trust/vijayanand.jpg";
import sureshImg from "@/assets/trust/suresh.jpeg";
import trustDemoVideo from "@/assets/trust/Trust demo video.mp4";
import partnershipImg from "@/assets/trust/partnership.jpeg";
import Agnelo from "@/assets/trust/Agnelo.png";
import Arnav from "@/assets/trust/Arnav.jpg";
import Thomas from "@/assets/trust/Thomas.png";
import Subidita from "@/assets/trust/Subidita.jpg";
import Manish from "@/assets/trust/Manish.jpg";
import Balraj from "@/assets/trust/Balraj.jpeg";
import awardsImg from "@/assets/trust/award1.png";
import awardsImg2 from "@/assets/trust/award2.png";
import awardsImg3 from "@/assets/trust/award3.jpeg";
import wearable2 from "@/assets/trust/wearable_2.mp4";
import genixVideo from "@/assets/trust/Genix.mp4";
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
  MonitorSmartphone,
  Mic,
  Handshake,
  Presentation,
  House,
  HeartHandshake,
  ClipboardCheck,
  // LifeBuoy,
  // MousePointer2,
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
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in"),
        ),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Nav ---------- */
const links = [
  { label: "Home", href: "#top" },
  { label: "Health Intelligence", href: "#health-intelligence-wearable" },
  { label: "Eldercare", href: "#elder-care" },
  { label: "Genix NGS", href: "#genix-ngs" },
  { label: "Clinical Applications", href: "#clinical-applications" },
  { label: "Partnership", href: "#partnerships" },
  { label: "Awards", href: "#awards" },
  { label: "Team", href: "#team" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const pointerNearTop = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 20);

      if (currentY < 50 || pointerNearTop.current) {
        setVisible(true);
      } else if (delta > 5) {
        setVisible(false);
        setOpen(false);
      } else if (delta < -5) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointerNearTop.current = event.clientY < 24;

      if (pointerNearTop.current) {
        setVisible(true);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {!visible && (
        <div
          className="fixed inset-x-0 top-0 z-[60] h-3"
          onMouseEnter={() => setVisible(true)}
        />
      )}

      <header
        onMouseEnter={() => setVisible(true)}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`relative border-b transition-all duration-500 ${
            scrolled
              ? "border-teal/20 bg-[#07131D]/95 shadow-[0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
              : "border-white/[0.08] bg-[#07131D]/65 backdrop-blur-xl"
          }`}
        >
          {/* Animated top accent */}
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
            <div className="nav-light-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-teal to-transparent" />
          </div>

          <div className="mx-auto flex min-h-[78px] max-w-[1700px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-10">
            {" "}
            {/* Logo */}
            <a
              href="#top"
              onClick={() => setOpen(false)}
              aria-label="Trust AI home"
              className="group flex shrink-0 items-center"
            >
              <img
                src={logo}
                alt="Health Intelligence Technologies Inc."
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </a>
            {/* Desktop links */}
            {/* ---------- Desktop Navigation ---------- */}
            {/* Desktop Navigation - Single Row */}
            <nav
              aria-label="Main navigation"
              className="hidden xl:flex flex-1 min-w-0 flex-nowrap items-center justify-center gap-0"
            >
              {links.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-word-link whitespace-nowrap px-2.5 py-3 text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-white 2xl:px-3 2xl:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {/* CTA */}
            <a
              href="#contact"
              className="nav-cta group relative hidden shrink-0 items-center gap-2 overflow-hidden rounded-full border border-teal/40 bg-teal/[0.08] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-teal hover:bg-teal hover:text-[#07131D] hover:shadow-[0_0_28px_rgba(45,212,191,0.24)] xl:inline-flex"
            >
              <span className="relative z-10">Let's Connect</span>
              <ChevronRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => {
                setVisible(true);
                setOpen((current) => !current);
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition-all duration-300 hover:border-teal/50 hover:bg-teal/10 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <nav
              aria-label="Mobile navigation"
              className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#07131D] px-5 py-4 sm:px-8 xl:hidden"
            >
              <div className="mx-auto grid max-w-2xl gap-1">
                {links.map((item, index) => (
                  <a
                    key={`${item.label}-${index}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-teal/15 hover:bg-teal/[0.06] hover:text-teal"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3.5 text-sm font-semibold text-[#07131D] transition-all hover:bg-white"
                >
                  Let's Connect
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

/* -------- Updated Hero section -------- */
/* ---------- Video Showcase ---------- */

function VideoShowcase() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-midnight text-white"
    >
      {/* Premium ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_25%,hsl(174_72%_42%/0.13),transparent_42%),radial-gradient(ellipse_at_10%_75%,hsl(200_80%_42%/0.12),transparent_45%)]" />

      <div className="container-trust mx-auto w-full max-w-[1700px] px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-28">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Left: Headline and content */}
          <div className="min-w-0 lg:col-span-6">
            <h1 className="text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              <span className="block">Health Intelligence.</span>
              <span className="mt-1 block font-serif italic font-bold text-teal">
                For Better Care, Every Day.
              </span>
            </h1>

            <h2 className="mt-6 max-w-xl text-lg font-semibold leading-snug text-white sm:text-xl lg:text-2xl">
              Intelligence that connects health, safety and care.
            </h2>

            <div className="mt-5 max-w-xl space-y-4 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-7">
              <p>
                Trust AI develops AI-powered health intelligence technology
                designed to support continuous monitoring, more informed care
                and better-connected healthcare ecosystems.
              </p>

              <p>
                Our Health Intelligence Wearable and Health Intelligence Layer
                bring together multimodal sensor data, personalised analytics,
                safety features and digital care tools to help healthcare
                providers and caregivers gain a more informed view of an
                individual's wellbeing over time.
              </p>

              <p>
                From elder care and assisted living to home-based monitoring and
                clinical applications, our focus is on making health
                intelligence more useful, accessible and actionable in everyday
                care.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#health-intelligence-wearable"
                className="btn-primary justify-center"
              >
                Explore Our Technology
                <ChevronRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="btn-ghost justify-center !border-white/20 !text-white transition-colors hover:!border-teal hover:!text-teal"
              >
                Partner With Us
              </a>
            </div>
          </div>

          {/* Right: Large video */}
          <div className="min-w-0 lg:col-span-6">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-teal/[0.10] blur-2xl" />

              <div className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:rounded-3xl">
                <video
                  src={wearable2}
                  controls
                  playsInline
                  preload="metadata"
                  className="block aspect-video w-full bg-black object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Agenda ---------- */
// function Agenda() {
//   const items = [
//     {
//       icon: AlertTriangle,
//       title: "The Critical Gap",
//       body: "1 in 8 globally face mental health challenges, with a 40–60% relapse rate within the first year post-diagnosis.",
//     },
//     {
//       icon: Brain,
//       title: "Our Solution",
//       body: "A clinically grounded, AI-assisted platform for early risk detection and relapse prevention — shifting care from reactive to proactive.",
//     },
//     {
//       icon: Sparkles,
//       title: "Key Features",
//       body: "AI-driven risk stratification, correlation of behavioral & biometric data, and closed-loop care with clinician escalation.",
//     },
//   ];
//   return (
//     <section id="agenda" className="section">
//       <div className="container-trust">
//         <div className="max-w-2xl reveal">
//           <div className="eyebrow">
//             <Target className="h-3.5 w-3.5" /> Why · What · How
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
//             TRUST's agenda for proactive mental health care.
//           </h2>
//         </div>
//         <div className="mt-14 grid md:grid-cols-3 gap-6">
//           {items.map(({ icon: Icon, title, body }, i) => (
//             <div
//               key={title}
//               className="reveal trust-card"
//               style={{ transitionDelay: `${i * 80}ms` }}
//             >
//               <div className="h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white">
//                 <Icon className="h-6 w-6" />
//               </div>
//               <h3 className="mt-6 text-xl font-semibold">{title}</h3>
//               <p className="mt-3 text-muted-foreground leading-relaxed">
//                 {body}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Health Intelligence Wearable ---------- */

function HealthIntelligenceWearable() {
  const features = [
    {
      icon: Activity,
      title: "Continuous Health Monitoring",
      body: "Collect longitudinal physiological and activity-related signals to help build a more informed picture of individual wellbeing over time.",
    },
    {
      icon: Brain,
      title: "AI-Powered Health Intelligence",
      body: "Analyse multimodal sensor data to identify meaningful patterns and support personalised insights, subject to clinical validation and intended use.",
    },
    {
      icon: ShieldCheck,
      title: "Integrated Safety Features",
      body: "SOS alerts, fall detection and geofencing capabilities support safety workflows for individuals, caregivers and care teams.",
    },
    {
      icon: Radio,
      title: "Standalone Connectivity",
      body: "Integrated cellular connectivity enables the wearable to communicate independently, reducing reliance on a paired smartphone for supported functions.",
    },
    {
      icon: HeartPulse,
      title: "Personalised Digital Support",
      body: "Digital interventions and personalised engagement capabilities can complement care plans and support ongoing interaction between individuals and their care ecosystem.",
    },
    {
      icon: MonitorSmartphone,
      title: "Connected Care Dashboards",
      body: "Clinician and caregiver-facing dashboards bring relevant information together to support monitoring, review and coordinated follow-up.",
    },
  ];

  return (
    <section
      id="health-intelligence-wearable"
      className="relative overflow-hidden bg-background pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle brand accents */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-teal/[0.06] blur-3xl" />

      <div className="container-trust relative">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-4">
              <Activity className="h-3.5 w-3.5" />
              Health Intelligence Wearable
            </div>

            <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              <span className="block">Moving Healthcare Beyond</span>
              <span className="block font-serif italic font-bold text-teal">
                Episodic Observation.
              </span>
            </h2>
          </div>
        </div>

        {/* Introductory content */}
        
{/* Health Intelligence introduction */}
<div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">

  {/* Left column: First and second paragraphs */}
  <div className="space-y-5">
    <p className="text-base leading-8 text-muted-foreground md:text-lg">
      Healthcare often relies on periodic assessments and observations at
      specific points in time. Yet an individual's wellbeing can change
      between appointments, during recovery or throughout daily life.
    </p>

    <p className="text-base leading-8 text-muted-foreground md:text-lg">
      Trust AI is developing an integrated Health Intelligence Wearable and
      AI-powered intelligence layer to help bridge this gap.
    </p>
  </div>

  {/* Right column: Third paragraph */}
  <div>
    <p className="text-base leading-8 text-muted-foreground md:text-lg">
      Designed for connected care environments, the platform combines
      wearable sensing, continuous data collection, AI-driven analysis and
      digital dashboards to support a more comprehensive understanding of
      individual health and safety.
    </p>
  </div>

</div>


        {/* Feature heading */}
        <div className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-12">
          <div className="max-w-3xl">
            <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              One Connected Platform.
              <br />
              <span className="font-serif italic text-teal">
                Multiple Dimensions of Care.
              </span>
            </h3>
          </div>
        </div>

        {/* Responsive feature grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature) => (
            <article className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_18px_45px_-25px_hsl(var(--teal)/0.35)] md:p-7">
              {/* Icon and heading on the same row */}
              <div className="flex min-h-[60px] items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal/20 bg-teal/[0.08] text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <feature.icon className="h-5 w-5" />
                </div>

                <h4 className="min-w-0 text-lg font-semibold leading-snug md:text-xl">
                  {feature.title}
                </h4>
              </div>

              {/* Description below */}
              <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                {feature.body}
              </p>

              {/* Animated accent */}
              <div className="mt-6 h-px w-10 bg-teal/50 transition-all duration-300 group-hover:w-16 group-hover:bg-teal" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------- ElderCare --------------------

function ElderCare() {
  const features = [
    {
      icon: HeartPulse,
      title: "Senior Living and Assisted Care",
      description:
        "Support resident safety and give care teams access to relevant monitoring information and alerts within their workflows.",
    },
    {
      icon: House,
      title: "Home-Based Care",
      description:
        "Extend supported monitoring beyond clinical facilities, helping caregivers stay connected to individuals in their daily environments.",
    },
    {
      icon: Activity,
      title: "Post-Hospital Recovery",
      description:
        "Support longitudinal observation following discharge, helping care teams review relevant changes and coordinate follow-up.",
    },
    {
      icon: HeartHandshake,
      title: "Rehabilitation and Longitudinal Care",
      description:
        "Complement recovery programmes with ongoing information about activity, wellbeing and relevant health patterns.",
    },
    {
      icon: Users,
      title: "Caregiver and Family Connectivity",
      description:
        "Enable appropriate visibility into supported alerts and monitoring information, helping caregivers remain informed without replacing human care.",
    },
    {
      icon: ClipboardCheck,
      title: "Clinical and Operational Oversight",
      description:
        "Provide dashboards that help clinicians and care organisations review information, identify areas requiring attention and support follow-up decisions.",
    },
  ];

  return (
    <section
      id="elder-care"
      className="section relative overflow-hidden bg-midnight text-white"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-blue/10 blur-3xl"
      />

      <div className="container-trust relative z-10">
        {/* Section introduction */}

{/* Elder Care introduction + video */}
<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

  {/* Left: Elder Care content */}
  <div className="lg:col-span-5">
    <p className="eyebrow text-teal">
      Elder Care &amp; Healthcare Monitoring
    </p>

    <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
      Enabling More Connected,{" "}
      <span className="font-serif italic text-teal">
        Proactive Care
      </span>{" "}
      for Older Adults.
    </h2>

    <div className="mt-6 space-y-4 text-sm leading-7 text-white/70 sm:text-base">
      <p>
        As populations age and care increasingly extends beyond hospital
        walls, healthcare organisations need better ways to understand
        changes in wellbeing, support safety and maintain continuity
        between clinical encounters.
      </p>

      <p>
        Trust AI's Health Intelligence Wearable is designed to support
        elder care across assisted living, home care, rehabilitation and
        post-hospital recovery environments.
      </p>

      <p>
        By combining wearable sensing, cellular connectivity, safety
        features and longitudinal health intelligence, the platform helps
        care teams move towards a more continuous and connected approach
        to monitoring.
      </p>
    </div>
  </div>

  {/* Right: Elder Care video */}
  <div className="lg:col-span-7">
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-teal/[0.10] blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:rounded-3xl">
        <video
          src={elderCareVideo}
          controls
          playsInline
          preload="metadata"
className="block aspect-video w-full bg-black object-cover"        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

</div>


        {/* <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-teal">
            Elder Care &amp; Healthcare Monitoring
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Enabling More Connected,{" "}
            <span className="font-serif italic text-teal">Proactive Care</span>{" "}
            for Older Adults.
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-7 text-white/70 sm:text-base">
            <p>
              As populations age and care increasingly extends beyond hospital
              walls, healthcare organisations need better ways to understand
              changes in wellbeing, support safety and maintain continuity
              between clinical encounters.
            </p>

            <p>
              Trust AI's Health Intelligence Wearable is designed to support
              elder care across assisted living, home care, rehabilitation and
              post-hospital recovery environments.
            </p>

            <p>
              By combining wearable sensing, cellular connectivity, safety
              features and longitudinal health intelligence, the platform helps
              care teams move towards a more continuous and connected approach
              to monitoring.
            </p>
          </div>
        </div> */}

        

        {/* Elder care applications */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Applications
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Designed Around Real-World Care Needs
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/[0.07] sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal/20 bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal/15">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="pt-1 text-base font-semibold leading-6 text-white sm:text-lg">
                      {feature.title}
                    </h4>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-12 rounded-2xl border border-teal/20 bg-gradient-to-br from-teal/[0.10] via-white/[0.03] to-blue/[0.10] p-6 sm:mt-16 sm:p-9 lg:p-10">
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                From Monitoring to Meaningful Intelligence
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                The objective is not simply to collect more data. It is to make
                longitudinal information more useful to the people responsible
                for care.{" "}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Trust AI's approach brings together sensing, analytics, safety
                and digital engagement in a connected platform designed to
                complement established clinical and caregiving workflows.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Discuss an Enterprise Pilot
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Health Intelligence Layer ---------- */

function HealthIntelligenceLayer() {
  const capabilities = [
    {
      icon: Layers,
      title: "Multimodal Sensor Architecture",
      description:
        "Bring together multiple streams of sensor data to support a broader understanding of individual health and wellbeing.",
    },
    {
      icon: Activity,
      title: "Longitudinal Data Analysis",
      description:
        "Evaluate health-related information over time to help identify changes, trends and meaningful patterns.",
    },
    {
      icon: Brain,
      title: "AI-Enabled Pattern Recognition",
      description:
        "Apply AI-enabled analytical capabilities to identify relevant patterns across multimodal health data.",
    },
    {
      icon: HeartPulse,
      title: "Personalisation and Digital Interventions",
      description:
        "Support personalised monitoring approaches and digital interventions based on relevant individual insights.",
    },
    {
      icon: MonitorSmartphone,
      title: "Clinician and Caregiver Dashboards",
      description:
        "Bring relevant health information together through connected dashboards for clinicians and caregivers.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Alerts and Escalation Workflows",
      description:
        "Support safety-related notifications and escalation workflows to help connect individuals with appropriate care support.",
    },
    {
      icon: Radio,
      title: "Connected Wearable Communications",
      description:
        "Connect wearable devices with the broader health intelligence ecosystem to support continuous information exchange.",
    },
  ];

  return (
    <section
      id="health-intelligence-layer"
      className="section relative overflow-hidden bg-background"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-teal/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue/[0.06] blur-3xl"
      />

      <div className="container-trust relative z-10">
        {/* Section heading */}
        <div className="max-w-4xl">
          <div className="eyebrow mb-4">
            <Brain className="h-3.5 w-3.5" />
            The Health Intelligence Layer
          </div>

          <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Turning Longitudinal Data Into{" "}
            <span className="font-serif italic font-bold text-teal">
              Actionable Insights.
            </span>
          </h2>

          <div className="mt-7 max-w-3xl space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              A wearable is only one part of a connected health intelligence
              ecosystem.
            </p>

            <p>
              Trust AI&apos;s Health Intelligence Layer is designed to process
              multimodal sensor data over time and translate relevant signals
              into insights that can support personalised monitoring and care
              workflows.
            </p>
          </div>
        </div>

        {/* Platform capabilities */}
        <div className="mt-14">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Platform Capabilities
            </p>

            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              An Integrated Intelligence Ecosystem.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal/20 bg-teal/[0.08] text-teal">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="text-base font-semibold leading-snug sm:text-lg">
                      {item.title}
                    </h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Connected care environments */}
        <div className="mt-16 grid gap-8 rounded-3xl border border-teal/15 bg-gradient-to-br from-teal/[0.07] via-card to-blue/[0.06] p-7 md:grid-cols-12 md:items-center md:p-10">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Built for Connected Care Environments
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
              Designed to Connect Monitoring, Intelligence and Care.
            </h3>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              The architecture is designed to support healthcare organisations
              seeking to integrate continuous monitoring and digital
              intelligence into their service models, including senior care,
              home care, rehabilitation and other longitudinal care settings.
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Explore Our Platform
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Clinical oversight note */}
        <div className="mt-8 flex gap-4 rounded-xl border border-border/60 bg-card/60 p-5">
          <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-teal" />

          <p className="text-sm leading-7 text-muted-foreground">
            The platform is intended to complement clinical judgement and
            existing care processes. Its outputs should be evaluated within the
            relevant clinical context, with appropriate human oversight.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Genix NGS Global Partnership ---------- */

function GenixNGSPartnership() {
  const capabilities = [
    {
      icon: Database,
      title: "Next-Generation Sequencing Data",
      description:
        "Focused on advanced analysis of complex next-generation sequencing datasets.",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Bring AI-powered analytical capabilities into genomic data analysis workflows.",
    },
    {
      icon: Layers,
      title: "Structured Analytical Outputs",
      description:
        "Help transform complex sequencing data into structured analytical outputs and insights.",
    },
  ];

  return (
    <section
      id="genix-ngs"
      className="section relative overflow-hidden bg-midnight text-white"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue/10 blur-3xl"
      />

      <div className="container-trust relative z-10">
        {/* Partnership heading */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            <Globe2 className="h-4 w-4" />
            Global Partnership
          </div>

          <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Genix NGS Analyses —{" "}
            <span className="font-serif italic font-bold text-teal">
              Global Partnership.
            </span>
          </h2>

          <h3 className="mt-7 text-xl font-semibold leading-snug text-white sm:text-2xl">
            Advancing Genomic Data Analysis Through AI.
          </h3>

          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-white/70 sm:text-base">
            <p>
              Trust AI is a Global Partner of Genix NGS Analyses, an
              independent, AI-powered NGS Advanced Analysis
              Software-as-a-Service (SaaS) platform from Genix.
            </p>

            <p>
              The platform is focused on advanced analysis of next-generation
              sequencing (NGS) data, helping make complex genomic datasets more
              accessible for analytical interpretation and research workflows.
            </p>
          </div>
        </div>

        {/* Genix NGS Video */}
        <div className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_24px_70px_-25px_rgba(20,184,166,0.22)] sm:rounded-3xl">
            <video
              src={genixVideo}
              controls
              playsInline
              preload="metadata"
              className="block aspect-video w-full bg-black object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Advanced analysis */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Advanced Analysis. Actionable Insights.
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Bringing Intelligence to Genomic Data.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Genix NGS Analyses brings AI-powered analytical capabilities to
              genomic data workflows, supporting the transformation of complex
              sequencing data into structured analytical outputs and insights.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              The platform represents a complementary offering within Trust
              AI&apos;s broader healthcare technology and innovation ecosystem.
            </p>

            <a
              href="#contact"
              className="btn-primary mt-8 inline-flex items-center justify-center gap-2"
            >
              Enquire About Genix NGS Analyses
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Capability cards */}
          {/* <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal/20 bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div> */}
        </div>

        {/* Independence clarification */}
        <div className="mt-14 flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-teal" />

          <p className="text-sm leading-7 text-white/65">
            Genix NGS Analyses is an independent platform from Genix. It is
            separate from Trust AI&apos;s Health Intelligence Wearable and
            Health Intelligence Layer.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Clinical Applications ---------- */

function ClinicalApplications() {
  const applications = [
    {
      icon: Activity,
      title: "Longitudinal Health Monitoring",
      description:
        "Support the collection and review of relevant health and activity-related signals over time, complementing established clinical assessments.",
    },
    {
      icon: HeartPulse,
      title: "Rehabilitation and Recovery",
      description:
        "Help care teams maintain visibility between encounters and support structured follow-up during recovery programmes.",
    },
    {
      icon: Brain,
      title: "Mental Wellness and Personalised Digital Support",
      description:
        "Combine personalised engagement and digital interventions with appropriate monitoring and care workflows to support ongoing therapeutic programmes.",
    },
    {
      icon: ShieldCheck,
      title: "Alcohol Use Disorder — Relapse Risk Research",
      description:
        "Trust AI has undertaken research into relapse-risk prediction for Alcohol Use Disorder (AUD), including a clinical pilot at St. John's Medical College & Hospital. This work explores how longitudinal wearable-derived signals and AI-based analysis may support research into relapse risk and personalised digital interventions. The application remains subject to the appropriate clinical evidence, validation and intended-use requirements. AI-based outputs are intended to complement, not replace, clinical assessment and professional care.",
    },
  ];

  return (
    <section
      id="clinical-applications"
      className="section relative overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-teal/[0.06] blur-3xl"
      />

      <div className="container-trust relative z-10">
        <div className="max-w-4xl">
          <div className="eyebrow mb-4">
            <Stethoscope className="h-3.5 w-3.5" />
            Clinical Applications
          </div>

          <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Technology Designed Around{" "}
            <span className="font-serif italic font-bold text-teal">
              Evolving Healthcare Needs.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Trust AI&apos;s technology development spans continuous monitoring,
            connected care and personalised digital support. Applications are
            developed and evaluated according to their specific clinical
            requirements and intended use.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_18px_45px_-25px_hsl(var(--teal)/0.35)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal/20 bg-teal/[0.08] text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-10 bg-teal/50 transition-all duration-300 group-hover:w-16 group-hover:bg-teal" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Clinical Research & Innovation ---------- */

function ClinicalResearchInnovation() {
  const researchAreas = [
    {
      icon: Stethoscope,
      title: "Clinical Collaboration",
      description:
        "A clinical pilot with St. John's Medical College & Hospital evaluated Trust AI's approach to relapse-risk prediction in Alcohol Use Disorder. The experience contributes to the company's wider work on wearable sensing and longitudinal health intelligence.",
    },
    {
      icon: ShieldCheck,
      title: "Proprietary Sensor Architecture",
      description:
        "Trust AI's multimodal sensor architecture is associated with Indian patent number 202311085117.",
    },
    {
      icon: FlaskConical,
      title: "Translational Research",
      description:
        "The company's research programme focuses on translating wearable-derived data and AI methods into practical digital health applications, with clinical validation and appropriate oversight guiding the path towards deployment.",
    },
    {
      icon: HeartPulse,
      title: "Responsible Health Intelligence",
      description:
        "We believe healthcare technology should be developed with attention to clinical context, data quality, privacy, intended use and the people who ultimately rely on it.",
    },
  ];

  return (
    <section
      id="clinical-research"
      className="section relative overflow-hidden bg-midnight text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue/10 blur-3xl"
      />

      <div className="container-trust relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            <FlaskConical className="h-4 w-4" />
            Clinical Research & Innovation
          </div>

          <h2 className="mt-5 text-4xl lg:text-[52px] xl:text-[56px] font-semibold leading-tight tracking-tight whitespace-nowrap">
            Research-Led.{" "}
            <span className="font-serif italic text-teal">
              Designed for Real-World Care.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Trust AI&apos;s technology development is informed by a sustained
            medical research programme and real-world clinical collaboration.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {researchAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal/20 bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-10 bg-teal/50 transition-all duration-300 group-hover:w-16 group-hover:bg-teal" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Approach ---------- */

function OurApproach() {
  const principles = [
    {
      icon: Clock,
      title: "Designed for continuity.",
      description:
        "Support a more connected view of wellbeing beyond individual appointments.",
    },
    {
      icon: Building2,
      title: "Built around real care environments.",
      description:
        "Develop technology for hospitals, senior living providers, home-care organisations and clinical partners.",
    },
    {
      icon: HeartPulse,
      title: "Personalised by design.",
      description:
        "Use longitudinal information to support more relevant monitoring and digital engagement.",
    },
    {
      icon: ShieldCheck,
      title: "Grounded in responsible innovation.",
      description:
        "Keep clinical judgement, appropriate validation and human oversight central to the application of AI in healthcare.",
    },
  ];

  return (
    <section
      id="our-approach"
      className="section relative overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal/[0.06] blur-3xl"
      />

      <div className="container-trust relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow justify-center">
            <Target className="h-3.5 w-3.5" />
            Our Approach
          </div>

          <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Intelligence That{" "}
            <span className="font-serif italic font-bold text-teal">
              Complements Human Care.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_18px_45px_-25px_hsl(var(--teal)/0.35)] sm:p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-teal/20 bg-teal/[0.08] text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-10 bg-teal/50 transition-all duration-300 group-hover:w-16 group-hover:bg-teal" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Crisis ---------- */
// function Crisis() {
//   const metrics = [
//     {
//       label: "Prevalence",
//       value: "1 in 8",
//       desc: "globally are battling mental health disorders.",
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       label: "Treatment Gap",
//       value: "70–85%",
//       desc: "in low- and middle-income countries receive no professional help.",
//       color: "from-pink-500 to-rose-500",
//     },
//     {
//       label: "Chronicity",
//       value: "40–60%",
//       desc: "relapse rates — comparable to diabetes and hypertension.",
//       color: "from-amber-500 to-orange-500",
//     },
//     {
//       label: "Economic Burden",
//       value: "$1 Trillion",
//       desc: "lost annually due to the impact of mental health disorders.",
//       color: "from-cyan-500 to-teal-500",
//     },
//   ];
//   return (
//     <section id="crisis" className="section bg-secondary/40">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <AlertTriangle className="h-3.5 w-3.5" /> The Mental Health Crisis
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
//             A system in{" "}
//             <span className="font-serif italic text-sunset">failure</span>.
//           </h2>
//           <p className="mt-5 text-lg text-muted-foreground">
//             Four signals describe the scale of a global emergency — and the
//             urgency for a smarter, predictive layer of care.
//           </p>
//         </div>
//         <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {metrics.map((m, i) => (
//             <div
//               key={m.label}
//               className="reveal trust-card relative overflow-hidden"
//               style={{ transitionDelay: `${i * 60}ms` }}
//             >
//               <div
//                 className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.color}`}
//               />
//               <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
//                 {m.label}
//               </div>
//               <div className="mt-4 text-5xl font-semibold grad-text">
//                 {m.value}
//               </div>
//               <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
//                 {m.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Building TRUST ---------- */
// function Building() {
//   return (
//     <section className="section">
//       <div className="container-trust grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         <div className="reveal">
//           <div className="eyebrow">
//             <Layers className="h-3.5 w-3.5" /> Building TRUST
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
//             Improving mental health — across conditions and care models.
//           </h2>
//           <div className="mt-10 space-y-6">
//             <div className="flex gap-4">
//               <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-sunset grid place-items-center text-white">
//                 <Heart className="h-6 w-6" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">
//                   Comprehensive Condition Coverage
//                 </h3>
//                 <p className="mt-1.5 text-muted-foreground">
//                   Substance Use Disorders (alcohol, opioids, nicotine),
//                   Behavioral Addictions (gaming, internet), and Comorbid Mental
//                   Health Conditions.
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white">
//                 <Brain className="h-6 w-6" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">
//                   AI Layer Functionality
//                 </h3>
//                 <p className="mt-1.5 text-muted-foreground">
//                   An Intelligent Clinical Decision Support Tool aligned with
//                   ICD-11 / DSM-5-TR, supporting CBT, Motivational Enhancement
//                   Therapy, and Contingency Management — not a standalone
//                   diagnostic system.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Differentiated Approach */}
//         <div className="reveal grid grid-cols-2 gap-4">
//           {[
//             {
//               icon: Heart,
//               title: "Emotion-Informed",
//               sub: "Personalization",
//               desc: "Tailors interventions to a nuanced understanding of user emotions.",
//             },
//             {
//               icon: Brain,
//               title: "AI-Assisted",
//               sub: "Risk Modeling",
//               desc: "Proactively identifies and mitigates the probability of relapse.",
//             },
//             {
//               icon: Stethoscope,
//               title: "Clinician",
//               sub: "Connectivity",
//               desc: "Seamless communication and timely professional intervention.",
//             },
//             {
//               icon: Users,
//               title: "Supporter",
//               sub: "Alerts",
//               desc: "Informs sponsors, family or friends with critical, timely information.",
//             },
//           ].map(({ icon: Icon, title, sub, desc }) => (
//             <div key={title} className="trust-card">
//               <Icon className="h-7 w-7 text-teal" />
//               <div className="mt-4 text-sm font-semibold">{title}</div>
//               <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
//                 {sub}
//               </div>
//               <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Mission / Vision ---------- */
// function Mission() {
//   const items = [
//     {
//       icon: Target,
//       title: "Mission",
//       body: "Replace reactive treatment with predictive, personalized intervention — empowering stakeholders with real-time intelligence to prevent relapse.",
//     },
//     {
//       icon: Eye,
//       title: "Vision",
//       body: "Build the global intelligence layer for mental health.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Near-Term Goal",
//       body: "Set a new standard for adult addiction recovery.",
//     },
//     {
//       icon: GraduationCap,
//       title: "Long-Term Goal",
//       body: "Expand to Mindful AI for Youth (ages 13–22) for scalable early intervention.",
//     },
//     {
//       icon: FlaskConical,
//       title: "Core Philosophy",
//       body: "Medical evidence meets AI; recovery requires intelligence, not just willpower.",
//     },
//   ];
//   return (
//     <section className="section bg-midnight text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(18_100%_60%/0.25),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(184_80%_38%/0.25),transparent_50%)]" />
//       <div className="container-trust relative">
//         <div className="max-w-3xl reveal">
//           <div className="pill bg-white/10 text-white border border-white/15">
//             <Sparkles className="h-3.5 w-3.5" /> TRUST For A Better World
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             Our purpose{" "}
//             <span className="font-serif italic text-sunset">& philosophy</span>.
//           </h2>
//         </div>
//         <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {items.map((it, i) => (
//             <div
//               key={it.title}
//               className="reveal glass-dark rounded-2xl p-7"
//               style={{ transitionDelay: `${i * 60}ms` }}
//             >
//               <it.icon className="h-7 w-7 text-sunset" />
//               <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
//               <p className="mt-3 text-white/70 leading-relaxed">{it.body}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Outcomes ---------- */
// function Outcomes() {
//   const cols = [
//     {
//       title: "User Needs",
//       body: "Personalized, predictive tools that go beyond basic habit tracking.",
//     },
//     {
//       title: "Family & Therapist",
//       body: "Early relapse alerts based on real behavioral and emotional data.",
//     },
//     {
//       title: "Healthcare Network",
//       body: "AI-driven, medically validated relapse prediction integrated into care systems.",
//     },
//     {
//       title: "Connectivity",
//       body: "Real-time relapse risk data connected with doctors, therapists, and sponsors.",
//     },
//   ];
//   return (
//     <section className="section">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <Activity className="h-3.5 w-3.5" /> TRUST In Better Outcomes
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             Closing the gaps across every stakeholder.
//           </h2>
//         </div>
//         <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
//           {cols.map((c, i) => (
//             <div
//               key={c.title}
//               className="reveal trust-card border-t-4"
//               style={{
//                 borderTopColor: "hsl(var(--teal))",
//                 transitionDelay: `${i * 60}ms`,
//               }}
//             >
//               <h3 className="text-lg font-semibold">{c.title}</h3>
//               <p className="mt-3 text-muted-foreground leading-relaxed">
//                 {c.body}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Framework */}
//         <div className="mt-20 reveal rounded-3xl overflow-hidden border border-border">
//           <div className="bg-grad-ocean text-white p-6 lg:p-8">
//             <div className="text-xs uppercase tracking-[0.3em] opacity-80">
//               The TRUST Framework
//             </div>
//             <h3 className="mt-2 text-2xl lg:text-3xl font-semibold">
//               Transformative impact — evidence, AI & stakeholder intelligence.
//             </h3>
//           </div>
//           <div className="grid md:grid-cols-3">
//             {[
//               {
//                 t: "Powerful Combination",
//                 b: "Integrates medical evidence, AI, personalization, and wearable vital signs.",
//               },
//               {
//                 t: "Predictive Insights",
//                 b: "Creates a shared intelligence layer for Patient, Provider, and Insurer.",
//               },
//               {
//                 t: "Scalable Outcomes",
//                 b: "Leverages WHO frameworks for 'task shifting' to ensure transparency and trackable results.",
//               },
//             ].map((x) => (
//               <div
//                 key={x.t}
//                 className="p-7 lg:p-8 bg-card border-t md:border-t-0 md:border-l border-border first:border-0"
//               >
//                 <h4 className="font-semibold text-lg">{x.t}</h4>
//                 <p className="mt-3 text-muted-foreground leading-relaxed">
//                   {x.b}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="bg-primary text-primary-foreground p-5 text-center text-xs uppercase tracking-[0.25em]">
//             Aligning stakeholders through shared intelligence and measurable
//             results
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Enterprise ---------- */
// function Enterprise() {
//   return (
//     <section
//       id="enterprise"
//       className="section bg-background relative overflow-hidden"
//     >
//       {/* Background effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(18_100%_60%/0.10),transparent_50%),radial-gradient(circle_at_10%_80%,hsl(184_80%_38%/0.10),transparent_50%)]" />

//       <div className="container-trust relative">
//         {/* Heading */}
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <Building2 className="h-3.5 w-3.5" />
//             Enterprise
//           </div>

//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
//             Enterprise Mental Health{" "}
//             <span className="font-serif italic text-sunset">Solutions</span>
//           </h2>

//           <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
//             AI-powered, personalised digital therapeutics designed to support
//             organisations with proactive mental health and wellbeing solutions.
//           </p>
//         </div>

//         {/* Enterprise Video */}
//         <div className="reveal mt-12 rounded-3xl overflow-hidden border border-border shadow-2xl bg-black">
//           <video
//             src={enterpriseVideo}
//             controls
//             playsInline
//             preload="metadata"
//             className="w-full h-auto"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Platform ---------- */
// function Platform() {
//   const stack = [
//     {
//       icon: Smartphone,
//       label: "User & Device Layer",
//       desc: "End-User applications and device integrations.",
//     },
//     {
//       icon: Brain,
//       label: "AI Intelligence & API Core",
//       desc: "Central hub for AI-driven analytics and seamless API access.",
//     },
//     {
//       icon: Shield,
//       label: "Secure Data & Compliance Vault",
//       desc: "Robust data protection and adherence to regulatory standards.",
//     },
//     {
//       icon: Globe2,
//       label: "Global Cloud Infrastructure",
//       desc: "Scalable and reliable cloud services for global reach.",
//     },
//   ];
//   return (
//     <section id="platform" className="section bg-secondary/40">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <Cpu className="h-3.5 w-3.5" /> TRUST Platform
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             TRUST at{" "}
//             <span className="font-serif italic text-sunset">every stage</span>{" "}
//             of the stack.
//           </h2>
//         </div>
//         <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
//           <div className="reveal relative rounded-3xl overflow-hidden aspect-square bg-midnight">
//             <img
//               src={brainVault}
//               alt="The Brain & The Vault — TRUST architecture"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
//             <div className="absolute bottom-6 left-6 text-white">
//               <div className="text-xs uppercase tracking-[0.3em] opacity-80">
//                 The Brain & The Vault
//               </div>
//               <div className="mt-1 text-2xl font-semibold font-serif italic">
//                 Tech that's trustworthy
//               </div>
//             </div>
//           </div>
//           <div className="reveal space-y-3">
//             {stack.map((s, i) => (
//               <div key={s.label} className="trust-card flex gap-5 items-start">
//                 <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white">
//                   <s.icon className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <div className="text-xs uppercase tracking-widest text-muted-foreground">
//                     Layer {i + 1}
//                   </div>
//                   <h3 className="mt-1 text-lg font-semibold">{s.label}</h3>
//                   <p className="mt-2 text-muted-foreground leading-relaxed">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Wearable ---------- */
// function Wearable() {
//   const features = [
//     { icon: Siren, t: "One-Touch SOS Alert" },
//     { icon: MapPin, t: "Real-Time GPS Tracking" },
//     { icon: HeartPulse, t: "Heart Rate Monitoring" },
//     { icon: Wind, t: "SpO₂ Monitoring" },
//     { icon: Activity, t: "HRV Stress Detection" },
//     { icon: Mic, t: "Cognitive Speech Recognition" },
//     { icon: Wifi, t: "eSIM Connectivity" },
//     { icon: Radio, t: "Geo-Fencing & Safe Zones" },
//     { icon: ShieldCheck, t: "Dashboard Integration" },
//   ];
//   const steps = [
//     {
//       t: "Emergency Trigger",
//       d: "The user presses the SOS button during an emergency.",
//     },
//     {
//       t: "Instant Location Sharing",
//       d: "GPS coordinates are securely transmitted to the TrustAI platform.",
//     },
//     {
//       t: "Vital Signs Assessment",
//       d: "Heart rate, oxygen saturation, and stress indicators are captured and analyzed.",
//     },
//     {
//       t: "Intelligent Escalation",
//       d: "Alerts sent to parents, school admins, safety officers, and emergency response teams.",
//     },
//     {
//       t: "Continuous Monitoring",
//       d: "Location and status updates continue until the incident is resolved.",
//     },
//   ];
//   return (
//     <section
//       id="wearable"
//       className="section bg-midnight text-white relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(18_100%_60%/0.2),transparent_50%),radial-gradient(circle_at_10%_80%,hsl(184_80%_38%/0.2),transparent_50%)]" />
//       <div className="container-trust relative">
//         <div className="max-w-3xl reveal">
//           {/* <div className="pill bg-white/10 border border-white/15 text-white">
//             <Shield className="h-3.5 w-3.5" /> Children & Women Safety Wearable
//           </div> */}
//           <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05]">
//             Real-Time Protection.
//             <br />
//             Instant Response.
//             <br />
//             <span className="font-serif italic text-sunset">
//               Peace of Mind.
//             </span>
//           </h2>
//           <p className="mt-6 text-lg text-white/70 max-w-2xl">
//             A smart safety wearable for vulnerable individuals. GPS tracking,
//             SOS alerts, and vital-sign monitoring — with AI distress detection
//             that triggers help even when the user can't.
//           </p>
//         </div>

//         {/* Video */}
//         {/* Elder Care Video */}
//         <div className="reveal mt-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black relative">
//           <video
//             src={elderCareVideo}
//             controls
//             playsInline
//             preload="metadata"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>

//         <div className="reveal mt-14 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black relative">
//           <video
//             src={wearableVideo}
//             playsInline
//             controls
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute top-4 left-4 pill bg-black/40 border border-white/20 text-white text-[10px] pointer-events-none">
//             <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />{" "}
//             Live demo · tap <Mic className="h-3 w-3 inline" /> to unmute
//           </div>
//         </div>

//         {/* Solution overview image */}
//         <div className="reveal mt-12 rounded-3xl bg-white p-6 lg:p-10">
//           <img
//             src={wearableOverview}
//             alt="Solution overview — SOS device, GPS, vitals, dashboards"
//             className="w-full h-auto"
//           />
//         </div>

//         {/* Features grid */}
//         <div className="reveal mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {features.map((f) => (
//             <div
//               key={f.t}
//               className="glass-dark rounded-2xl p-5 flex items-center gap-4"
//             >
//               <div className="h-11 w-11 shrink-0 rounded-xl bg-grad-sunset grid place-items-center">
//                 <f.icon className="h-5 w-5 text-white" />
//               </div>
//               <div className="font-medium">{f.t}</div>
//             </div>
//           ))}
//         </div>

//         {/* How it works timeline */}
//         <div className="mt-20">
//           <div className="reveal max-w-2xl">
//             <div className="pill bg-white/10 border border-white/15 text-white">
//               <Activity className="h-3.5 w-3.5" /> How it Works
//             </div>
//             <h3 className="mt-4 text-3xl md:text-4xl font-semibold">
//               From distress to dispatch — in seconds.
//             </h3>
//           </div>
//           <ol className="mt-12 relative border-l border-white/10 ml-4 space-y-10">
//             {steps.map((s, i) => (
//               <li
//                 key={s.t}
//                 className="reveal pl-8 relative"
//                 style={{ transitionDelay: `${i * 80}ms` }}
//               >
//                 <div className="absolute -left-[18px] top-1 h-9 w-9 rounded-full bg-grad-sunset grid place-items-center text-sm font-bold text-white ring-4 ring-midnight">
//                   {i + 1}
//                 </div>
//                 <h4 className="text-xl font-semibold">{s.t}</h4>
//                 <p className="mt-2 text-white/70 max-w-2xl">{s.d}</p>
//               </li>
//             ))}
//           </ol>
//         </div>

//         {/* Specs */}
//         <div className="reveal mt-20 rounded-3xl glass-dark p-8 lg:p-10">
//           <h3 className="text-xl font-semibold">Device Specifications</h3>
//           <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
//             {[
//               ["GPS", "Real-Time Tracking"],
//               ["SOS Button", "Dedicated Emergency Alert"],
//               ["Connectivity", "Integrated eSIM Cellular"],
//               ["Heart Rate", "Continuous Monitoring"],
//               ["SpO₂", "Oxygen Saturation"],
//               ["HRV", "Stress Indicator Analysis"],
//               ["Cognitive Speech", "Distress Detection"],
//               ["Battery Life", "Up to 5 Days"],
//               ["Integration", "API / MQTT / HTTPS"],
//             ].map(([k, v]) => (
//               <div
//                 key={k}
//                 className="flex justify-between border-b border-white/10 pb-3"
//               >
//                 <span className="text-white/60">{k}</span>
//                 <span className="font-medium text-right">{v}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Data Mission Pillars ---------- */
// function DataMission() {
//   const items = [
//     {
//       icon: Heart,
//       t: "Lived Experience",
//       d: "Personal biomarkers become real-time 'early warnings' to prevent relapse.",
//     },
//     {
//       icon: Lock,
//       t: "Without Exploitation",
//       d: "Consent-first model; data is fully anonymized, user-owned, and never sold.",
//     },
//     {
//       icon: Users,
//       t: "Without Exclusion",
//       d: "Equitable access designed to lower costs and serve underserved communities.",
//     },
//   ];
//   return (
//     <section className="section">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <ShieldCheck className="h-3.5 w-3.5" /> Our Data Mission Pillars
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             Building{" "}
//             <span className="font-serif italic text-sunset">trust</span> through
//             action.
//           </h2>
//           <p className="mt-5 text-lg text-muted-foreground">
//             Foundational principles for ethical data use.
//           </p>
//         </div>
//         <div className="mt-14 grid md:grid-cols-3 gap-5">
//           {items.map((it, i) => (
//             <div
//               key={it.t}
//               className="reveal trust-card"
//               style={{ transitionDelay: `${i * 80}ms` }}
//             >
//               <div className="h-12 w-12 rounded-xl bg-grad-sunset grid place-items-center text-white">
//                 <it.icon className="h-6 w-6" />
//               </div>
//               <h3 className="mt-5 text-xl font-semibold">{it.t}</h3>
//               <p className="mt-3 text-muted-foreground leading-relaxed">
//                 {it.d}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Validation, Market, Business, Roadmap ---------- */
// function Research() {
//   return (
//     <section className="section bg-secondary/40">
//       <div className="container-trust grid lg:grid-cols-2 gap-12 items-start">
//         <div className="reveal">
//           <div className="eyebrow">
//             <FlaskConical className="h-3.5 w-3.5" /> Validation & Research
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             TRUST is{" "}
//             <span className="font-serif italic text-sunset">
//               scientifically validated
//             </span>
//             .
//           </h2>
//         </div>
//         <div className="reveal space-y-5">
//           {[
//             {
//               icon: Award,
//               t: "University of Pittsburgh",
//               d: "Developing and validating TRUST in partnership with leading researchers.",
//             },
//             {
//               icon: FlaskConical,
//               t: "Registered Clinical Trial",
//               d: "CTRI/2023/05/052534 — rigorous methodology and transparency.",
//             },
//             {
//               icon: Building2,
//               t: "VA Pittsburgh Symposium",
//               d: "Key results presented at a symposium in March 2026.",
//             },
//             {
//               icon: ShieldCheck,
//               t: "Publication Plans",
//               d: "Outcomes to be published in leading medical journals using a HIPAA-compliant dataset.",
//             },
//           ].map((x) => (
//             <div key={x.t} className="trust-card flex gap-5">
//               <div className="shrink-0 h-12 w-12 rounded-xl bg-grad-ocean grid place-items-center text-white">
//                 <x.icon className="h-6 w-6" />
//               </div>
//               <div>
//                 <h4 className="font-semibold">{x.t}</h4>
//                 <p className="mt-1.5 text-muted-foreground">{x.d}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Market() {
//   const items = [
//     {
//       v: "1.8B+",
//       t: "Global Impact",
//       d: "people worldwide suffer from mental health disorders.",
//     },
//     {
//       v: "Gap",
//       t: "Unmet Need",
//       d: "Existing solutions lack predictive capabilities and seamless healthcare integration.",
//     },
//     {
//       v: "4.3×",
//       t: "Adult Market",
//       d: "Expected market expansion for adults.",
//     },
//     {
//       v: "8.3×",
//       t: "Adolescent Market",
//       d: "Expected market expansion for adolescents.",
//     },
//   ];
//   return (
//     <section className="section">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <TrendingUp className="h-3.5 w-3.5" /> Market & Growth
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             Potential for TRUST.
//           </h2>
//         </div>
//         <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
//           {items.map((m, i) => (
//             <div
//               key={m.t}
//               className="reveal trust-card"
//               style={{ transitionDelay: `${i * 60}ms` }}
//             >
//               <div className="text-5xl font-semibold grad-text">{m.v}</div>
//               <div className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
//                 {m.t}
//               </div>
//               <p className="mt-3 text-foreground/80">{m.d}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Business() {
//   const phases = [
//     {
//       phase: "Phase 1",
//       t: "Strategic Platform Partnerships",
//       d: "Leverage early-adopter platforms (BenefitHub, American Airlines, LinkedIn) for traction and brand validation — employee wellness, member benefits, integrated health.",
//     },
//     {
//       phase: "Phase 2",
//       t: "Insurers",
//       d: "Target wellness components of insurance providers. Revenue: $100–$150 per user annually. Integrated mental health support and reduced long-term costs.",
//     },
//     {
//       phase: "Phase 2",
//       t: "Educational Institutions",
//       d: "Schools, colleges, and universities for student well-being. Proactive intervention and adolescent mental health support.",
//     },
//   ];
//   return (
//     <section className="section bg-secondary/40">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <Building2 className="h-3.5 w-3.5" /> Business Model & Revenue
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             Opportunities for TRUST.
//           </h2>
//         </div>
//         <div className="mt-14 grid md:grid-cols-3 gap-5">
//           {phases.map((p, i) => (
//             <div
//               key={p.t}
//               className="reveal trust-card relative"
//               style={{ transitionDelay: `${i * 80}ms` }}
//             >
//               <div className="pill bg-grad-sunset text-white">{p.phase}</div>
//               <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
//               <p className="mt-3 text-muted-foreground leading-relaxed">
//                 {p.d}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Roadmap() {
//   const items = [
//     { q: "Q2 2026", t: "MVP Launch", d: "Core AI relapse prediction." },
//     {
//       q: "Q3 2026",
//       t: "Integration",
//       d: "Healthcare networks and sponsor alert systems.",
//     },
//     {
//       q: "Q3 2027",
//       t: "Expansion",
//       d: "Youth segment (13–22) and multilingual support.",
//     },
//     {
//       q: "Q1 2028",
//       t: "Compliance & Partnerships",
//       d: "FDA/DTx compliance and insurance partnership tie-ups.",
//     },
//   ];
//   return (
//     <section className="section">
//       <div className="container-trust">
//         <div className="max-w-3xl reveal">
//           <div className="eyebrow">
//             <Sparkles className="h-3.5 w-3.5" /> Product Roadmap · 2026–2030
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             Evolving TRUST.
//           </h2>
//         </div>
//         <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
//           {items.map((it, i) => (
//             <div
//               key={it.q}
//               className="reveal trust-card"
//               style={{ transitionDelay: `${i * 80}ms` }}
//             >
//               <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">
//                 {it.q}
//               </div>
//               <h3 className="mt-3 text-xl font-semibold">{it.t}</h3>
//               <p className="mt-2 text-muted-foreground">{it.d}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Tech / Architecture ---------- */
// function TechArch() {
//   return (
//     <section
//       id="tech"
//       className="section bg-midnight text-white relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(184_80%_38%/0.25),transparent_50%)]" />
//       <div className="container-trust relative grid lg:grid-cols-2 gap-12 items-center">
//         <div className="reveal">
//           <div className="pill bg-white/10 border border-white/15 text-white">
//             <Cpu className="h-3.5 w-3.5" /> Technology Architecture
//           </div>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
//             The Brain{" "}
//             <span className="font-serif italic text-sunset">& the Vault</span>.
//           </h2>
//           <p className="mt-5 text-white/70 text-lg">
//             Engineered for global scale, clinical-grade reliability, and
//             uncompromising privacy.
//           </p>
//           <div className="mt-8 grid grid-cols-2 gap-3">
//             {[
//               { v: "HIPAA", l: "Encrypted Storage" },
//               { v: "EKS", l: "Auto-scaling" },
//               { v: "Kafka", l: "Real-time Streams" },
//               { v: "AWS", l: "Geo-redundant" },
//             ].map((s) => (
//               <div key={s.l} className="glass-dark rounded-xl p-4">
//                 <div className="text-2xl font-semibold text-sunset">{s.v}</div>
//                 <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="reveal relative aspect-square rounded-3xl overflow-hidden border border-white/10">
//           <img
//             src={brainVault}
//             alt="The Brain & The Vault"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Incubations & Partnerships ---------- */

function Partnerships() {
  return (
    <section id="partnerships" className="section bg-background">
      <div className="container-trust">
        <div className="max-w-3xl reveal mx-auto text-center">
          <div className="eyebrow">
            <Building2 className="h-3.5 w-3.5" />
            Incubations & Partnerships
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
            Incubations &
            <span className="font-serif italic text-sunset"> Partnerships</span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            TRUST collaborates with leading academic institutions, healthcare
            organizations, innovation labs and strategic partners to build the
            future of AI-powered digital therapeutics.
          </p>
        </div>

        <div className="reveal mt-14 rounded-3xl overflow-hidden border border-border shadow-xl bg-white p-6">
          <img
            src={partnershipImg}
            alt="Incubations and Partnerships"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="section bg-secondary/40">
      <div className="container-trust">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="eyebrow">
            <Award className="h-3.5 w-3.5" />
            Awards & Recognition
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
            Recognized for
            <span className="font-serif italic text-sunset">
              {" "}
              Innovation & Excellence
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            TRUST DTx continues to gain national recognition for its
            contributions to Digital Therapeutics, Artificial Intelligence,
            Healthcare Innovation and Enterprise Digital Transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
          {/* Award 1 */}

          <div className="trust-card overflow-hidden reveal">
            <img
              src={awardsImg}
              alt="CIO Tech Leadership Excellence Awards 2026"
              className="w-full object-cover rounded-t-2xl"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold">
                CIO Tech Leadership Excellence Awards 2026
              </h3>

              <p className="mt-4 text-muted-foreground leading-8">
                Vijay Anand, Co-founder & CIO of TRUST DTx, received the
                <strong> CIO of the Year – Enterprise Transformation </strong>
                award for driving innovation in AI-powered Digital Therapeutics
                and healthcare transformation.
              </p>
            </div>
          </div>

          {/* Award 2 */}

          <div className="trust-card overflow-hidden reveal">
            <img
              src={awardsImg2}
              alt="CIO Accelerator X Awards 2026"
              className="w-full object-cover rounded-t-2xl"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold">
                CIO Accelerator X Awards 2026
              </h3>

              <p className="mt-4 text-muted-foreground leading-8">
                Vijay Anand, CIO of TRUST DTx, was honoured at the
                <strong> CIO Accelerator X Awards 2026 </strong>
                for outstanding leadership in Healthcare Technology, Artificial
                Intelligence and Digital Innovation.
              </p>
            </div>
          </div>

          {/* Award 3 */}

          <div className="trust-card overflow-hidden reveal">
            <img
              src={awardsImg3}
              alt="AIWoW Governing Board Appointment"
              className="w-full object-cover rounded-t-2xl"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                AIWoW Governing Board Leadership
              </h3>

              <p className="mt-3 text-muted-foreground text-sm leading-6">
                Vijay Anand, Co-founder & CIO of TRUST DTx, has been appointed
                to the
                <strong> AIWoW™ Governing Board</strong>, recognizing his
                leadership in AI, digital transformation, cybersecurity, and
                responsible innovation.
              </p>
            </div>
          </div>
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
      role: "Chief Executive Officer (CEO)",
      img: Agnelo,
      bullets: [
        "Leads Trust AI's vision, strategy, fundraising, partnerships, and commercialization, driving the development of evidence-based AI solutions that transform mental healthcare and addiction treatment.",
      ],
    },

    {
      name: "B. Vijayanand",
      role: "Chief Information Officer (CIO)",
      img: vijayImg,
      bullets: [
        "Leads technology strategy, enterprise infrastructure, cybersecurity, and digital transformation, ensuring a secure, scalable, and reliable AI platform.",
      ],
    },
    {
      name: "Suresh Joseph",
      role: "Chief Operating Officer (COO)",
      img: sureshImg,
      bullets: [
        "Suresh Joseph brings over 30 years of experience across Fortune 500 corporations, including HP, with expertise in market research, business strategy, and operational leadership. He will lead Trust AI’s operational excellence and strategic growth, supporting its expansion into the US market.",
      ],
    },

    {
      name: "Dr. Alvin Joseph",
      role: "Chief Medical Officer (CMO)",
      img: alvinImg,
      bullets: [
        "Consultant Psychiatrist and clinical lead behind Trust AI's research and medical innovation. Oversees clinical validation, evidence generation, treatment protocols, and healthcare partnerships.",
      ],
    },
    {
      name: "Arnav Jain",
      role: "CHIEF TECHNOLOGY OFFICER (CTO)",
      img: Arnav,
      icon: Database,
      bullets: [
        "Leads Trust AI’s technology strategy, product engineering, AI integration, and wearable technology, driving the development of scalable, intelligent solutions for continuous health monitoring and longitudinal care.",
      ],
    },
    {
      name: "Thomas 'Tommy' S.",
      role: "Chief Consultant – Americas",
      img: Thomas,
      bullets: [
        "Provides strategic leadership for Trust AI's expansion across the Americas, fostering partnerships, market development, and international collaborations.",
      ],
    },
  ];
  const executiveLeadership = [
    {
      name: "Subidita Chakraborty",
      role: "Senior Vice President – Partnerships & Alliances",
      img: Subidita,
      icon: Users,
      d: "Builds strategic partnerships across healthcare, corporates, governments, research institutions, and global ecosystems to accelerate adoption and strategic growth.",
    },
    // {
    //   name: "Manish Dash Sharma",
    //   role: "Chief Technology Officer (CTO)",
    //   // img: Manish,
    //   icon: Bot,
    //   d: "Leads AI product engineering, platform architecture, and technology innovation, transforming cutting-edge research into scalable, production-ready healthcare solutions.",
    // },
    {
      name: "Balraj Kapini",
      role: "Chief Communications Officer (CCO)",
      img: Balraj,
      icon: Pill,
      d: "Leads corporate communications, brand strategy, multilingual content, public relations, and stakeholder engagement across healthcare, government, and enterprise initiatives.",
    },
  ];
  const aiEngineering = [
    {
      name: "Prathinav Karnala Venkata",
      role: "Pre-Sales Manager",
      icon: Network,
      d: "Prathinav holds a Master’s degree in Information Technology from the University of Maryland. He brings healthcare technology experience from CareStack, along with an understanding of home care and customer relations. Based in New York, he leads pre-sales operations across the East Coast.",
    },
    {
      name: "Vishnu Priyan",
      role: "AI Developer",
      icon: Network,
      d: "Develops AI-powered applications, machine learning workflows, backend services, and intelligent healthcare solutions supporting personalization and predictive care.",
    },
    {
      name: "Swarnaa Ramesh",
      role: "Developer",
      icon: Network,
      d: "Contributes to full-stack development, AI integrations, clinical content delivery, and digital therapeutics workflows across the Trust AI platform.",
    },
  ];

  const operations = [
    {
      name: "Vinodhini Shailender",
      role: "Compliance Officer",
      icon: ShieldCheck,
      d: "Oversees regulatory compliance, governance, quality systems, documentation, and organizational policies, ensuring adherence to healthcare and data protection standards.",
    },
    {
      name: "Anamitra Acharya",
      role: "Head – Management Services",
      icon: Users,
      d: "Supports business operations, administration, strategic coordination, and organizational services to ensure efficient execution across the organization.",
    },
    {
      name: "Denzil Haniel",
      role: "Principal – Human Resources Management",
      icon: Users,
      d: "Drives strategic digital initiatives, employee engagement, and organizational development to support Trust AI's.",
    },
  ];

  return (
    <section id="team" className="section">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow">
            <Users className="h-3.5 w-3.5" /> People Behind Building TRUST
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
            A team of{" "}
            <span className="font-serif italic text-sunset">
              clinicians, engineers
            </span>{" "}
            & builders.
          </h2>
        </div>

        {/* Leadership */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((p, i) => (
            <div
              key={p.name}
              className="reveal trust-card !p-0 overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* <div className="aspect-square overflow-hidden bg-secondary">
<img src={Agnelo} alt="test" className="w-full h-full object-cover" />
              </div> */}

              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="text-sm uppercase tracking-widest text-teal mt-1">
                  {p.role}
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {(p.bullets ?? []).map((b) => (
                    <p key={b} className="leading-relaxed">
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product, Engineering & Technology Ops */}
        <div className="mt-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Executive Leadership
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {executiveLeadership.map((p) => (
              <div key={p.name} className="trust-card !p-0 overflow-hidden">
                {" "}
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{p.name}</h4>

                  <div className="text-sm uppercase tracking-widest text-teal mt-1">
                    {p.role}
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Product Engineering */}
        <div className="mt-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            AI & Product Engineering
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiEngineering.map((p) => (
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
        {/* Operations & Governance */}
        <div className="mt-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Operations & Governance
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {operations.map((p) => (
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
      </div>
    </section>
  );
}
/* ---------- Challenges ---------- */
function Challenges() {
  const items = [
    {
      icon: Shield,
      t: "Regulatory Risk",
      d: "Mitigated by early engagement with FDA/HIPAA consultants.",
    },
    {
      icon: Lock,
      t: "Data Privacy",
      d: "Ensured through robust encryption tunnels and global compliance.",
    },
    {
      icon: TrendingUp,
      t: "Market Adoption",
      d: "Addressed by clinical validation and partnership incentives for traditional providers.",
    },
    {
      icon: Sparkles,
      t: "Competition",
      d: "Differentiated by a unique AI-driven approach and deep healthcare integration.",
    },
  ];
  return (
    <section className="section bg-secondary/40">
      <div className="container-trust">
        <div className="max-w-3xl reveal">
          <div className="eyebrow">
            <Shield className="h-3.5 w-3.5" /> Challenges & Solutions
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
            How TRUST turns challenges into{" "}
            <span className="font-serif italic text-sunset">solutions</span>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((x, i) => (
            <div
              key={x.t}
              className="reveal trust-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
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
    city: "Coppell, TX, USA",
    address: "529 Abbey Ct, Coppell, TX 75019, USA",
  },
  {
    tag: "Trust Office",
    city: "Bangalore, IN",
    address: "F-15 Mana Placido, ECC Road, Whitefield, Bangalore 560066",
  },
  {
    tag: "Trust Office",
    city: "Chennai, IN",
    address:
      "No. 2, Kumarasamy St, Lakshmipuram, Chromepet, Chennai, Tamil Nadu 600044",
  },
];

function mapsUrl(addr: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
}
function dirUrl(addr: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addr)}`;
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="section bg-midnight text-white relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(184_80%_38%/0.25),transparent_55%),radial-gradient(circle_at_85%_90%,hsl(18_100%_60%/0.22),transparent_55%)]" /> */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#07111F] via-[#0B1C30] to-[#073B4C]" />
      <div className="container-trust relative">
        <div className="max-w-3xl reveal">
          <div className="pill bg-white/10 border border-white/15 text-white">
            <Navigation className="h-3.5 w-3.5" /> Find &amp; Reach Us
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Two labs. One mission —{" "}
            <span className="font-serif italic text-sunset">
              closer than you think
            </span>
            .
          </h2>
          <p className="mt-5 text-white/70 text-lg">
            Drop by, send a note, or open directions in one tap. We respond
            within one working day.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {/* Office cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICES.map((o, i) => (
              <div
                key={o.address}
                className="reveal glass-dark rounded-2xl p-6 flex flex-col group hover:border-sunset/40 transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-sunset font-semibold">
                    {o.tag}
                  </span>
                  <div className="h-9 w-9 rounded-full bg-grad-ocean grid place-items-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="mt-5 text-xl font-semibold">{o.city}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {o.address}
                </p>

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
                  <a
                    href={dirUrl(o.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1 !py-2.5 !text-xs justify-center"
                  >
                    <Navigation className="h-4 w-4" /> Directions
                  </a>
                  <a
                    href={mapsUrl(o.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !py-2.5 !text-xs !text-white !border-white/20 hover:!text-sunset hover:!border-sunset justify-center"
                  >
                    View Map
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}

          <section className="mt-14">
            <div className="trust-card p-10 reveal">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-semibold">Contact Us</h2>

                <p className="mt-5 text-lg text-muted-foreground leading-8">
                  For inquiries, partnerships, product demonstrations our team
                  is here to help.
                </p>

                <div className="mt-10">
                  <div className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-4 bg-card shadow">
                    <Mail className="h-6 w-6 text-sunset" />

                    <a
                      href="mailto:agnelo@trustdtx.ai"
                      className="text-xl font-semibold text-sunset hover:underline"
                    >
                      agnelo@trustdtx.ai
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-3xl mx-auto">
                  <div>
                    <Handshake className="mx-auto h-10 w-10 text-sunset" />

                    <h3 className="mt-4 text-xl font-semibold">Partnerships</h3>

                    <p className="mt-3 text-muted-foreground">
                      Collaborate with TRUST to advance AI-powered Digital
                      Therapeutics and healthcare innovation.
                    </p>
                  </div>

                  <div>
                    <Presentation className="mx-auto h-10 w-10 text-sunset" />

                    <h3 className="mt-4 text-xl font-semibold">Product Demo</h3>

                    <p className="mt-3 text-muted-foreground">
                      Schedule a live demonstration of the TRUST platform and
                      wearable ecosystem.
                    </p>
                  </div>

                  {/* <div>

          <LifeBuoy className="mx-auto h-10 w-10 text-sunset" />

          <h3 className="mt-4 text-xl font-semibold">
            Support
          </h3>

          <p className="mt-3 text-muted-foreground">
            Reach out for implementation assistance, onboarding and technical
            support.
          </p>

        </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* Contact form */}
          <div className="reveal">
            <div className="glass-dark rounded-2xl p-6 lg:p-8 max-w-5xl mx-auto flex flex-col">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-grad-sunset grid place-items-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Send a message</div>
                  <div className="text-xs text-white/60">
                    Pilots · partnerships · press
                  </div>
                </div>
              </div>

              {sent ? (
                <div className="mt-8 rounded-xl border border-teal/30 bg-teal/10 p-6 text-center">
                  <div className="h-12 w-12 mx-auto rounded-full bg-grad-ocean grid place-items-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="mt-4 font-semibold">Message received</div>
                  <p className="mt-1.5 text-sm text-white/70">
                    We'll get back to you within one working day.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", org: "", message: "" });
                    }}
                    className="mt-5 text-xs uppercase tracking-widest text-sunset hover:text-white transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4 flex-1 flex flex-col"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Full name"
                      className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all"
                    />
                    <input
                      value={form.org}
                      onChange={(e) =>
                        setForm({ ...form, org: e.target.value })
                      }
                      placeholder="Organisation"
                      className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Work email"
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all"
                  />
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us a little about what you're exploring…"
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-sunset/60 focus:bg-white/10 transition-all resize-none flex-1"
                  />
                  <button type="submit" className="btn-primary justify-center">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                  <p className="text-[11px] text-white/50 text-center">
                    By submitting, you agree to be contacted by the TRUST team
                    about your enquiry.
                  </p>
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
    <section
      id="cta"
      className="section bg-midnight text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grad-hero opacity-90" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-grad-sunset blur-3xl opacity-40 animate-float" />
      <div className="container-trust relative text-center max-w-4xl">
        <div className="reveal pill bg-white/10 border border-white/15 text-white mx-auto">
          <Sparkles className="h-3.5 w-3.5" /> Get in Touch
        </div>
        <h2 className="reveal mt-6 text-4xl md:text-6xl font-semibold leading-[1.05]">
          Join us in building the{" "}
          <span className="font-serif italic text-sunset">
            global intelligence layer
          </span>{" "}
          for mental health.
        </h2>
        <p className="reveal mt-6 text-lg text-white/70">
          Request a pilot, schedule a demo, or partner with us on the future of
          predictive care.
        </p>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@trust.health" className="btn-primary">
            Request a Pilot <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@trust.health"
            className="btn-ghost !text-white !border-white/20 hover:!text-sunset hover:!border-sunset"
          >
            Schedule a Demo
          </a>
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
          <img
            src={logo}
            alt="TRUST logo"
            className="h-14 w-auto object-contain"
          />{" "}
          <div>
            <div className="text-xs">
              Trust AI develops health intelligence technology for connected
              care, longitudinal monitoring and personalised digital health
              applications.{" "}
            </div>
          </div>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} TRUST. Health Intelligence. For Better
          Care, Every Day.
        </div>
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
      <VideoShowcase />
      <HealthIntelligenceWearable />
      <ElderCare />
      <HealthIntelligenceLayer />
      <GenixNGSPartnership />
      <ClinicalApplications />
      <ClinicalResearchInnovation />
      <OurApproach />
      <Partnerships />
      <Awards />
      <Team />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
