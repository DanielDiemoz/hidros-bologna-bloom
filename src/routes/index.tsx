import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, Wrench, Droplets, Clock, Shield, Star, MapPin,
  Bath, Flame, FileText, Zap, Sparkles, AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hidros Multiservice — Idraulico a Bologna 24h | Andrea Monorchio" },
      { name: "description", content: "Idraulico a Bologna 24/7. Emergenze, perdite, caldaie e sanitari. Interventi rapidi, prezzi onesti. 5,0 ⭐ Google. Chiama Andrea: +39 379 172 4715." },
    ],
  }),
  component: Index,
});

const TEL = "+393791724715";
const TEL_DISPLAY = "+39 379 172 4715";
const WA = "https://wa.me/393791724715";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className={`font-extrabold tracking-tight text-base sm:text-lg ${scrolled ? "text-navy" : "text-white"}`}>
          HIDROS <span className={scrolled ? "text-teal" : "text-white/90"}>MULTISERVICE</span>
        </a>
        <a
          href={`tel:${TEL}`}
          className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-semibold px-4 py-2.5 rounded-full text-sm shadow-[var(--shadow-soft)] transition"
        >
          <Phone className="w-4 h-4" /> Chiama Ora
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative hero-gradient ripple-bg min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.25),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-5 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full text-xs sm:text-sm mb-6">
          <span className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"/>)}</span>
          <span className="font-medium">5,0 · 19 recensioni Google</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          Idraulico a Bologna<br/>
          <span className="text-teal bg-white/10 px-3 rounded-lg inline-block mt-2">Disponibile 24 ore su 24</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
          Interventi rapidi, prezzi onesti, lavoro pulito. Chiama Andrea.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${TEL}`} className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal/90 text-white font-bold px-7 py-4 rounded-full text-lg shadow-xl transition hover:scale-[1.02]">
            <Phone className="w-5 h-5"/> Chiama Ora
          </a>
          <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-navy font-bold px-7 py-4 rounded-full text-lg transition">
            <MessageCircle className="w-5 h-5"/> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Emergency() {
  return (
    <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal/15 border border-teal/40 mb-6">
          <Clock className="w-10 h-10 text-teal" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3 flex-wrap">
          <AlertTriangle className="w-8 h-8 text-teal" /> Emergenze Idrauliche H24
        </h2>
        <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
          Perdita d'acqua, guasto al bagno, tubatura rotta? Andrea interviene anche di notte, nei weekend e nei giorni festivi. Nessuna attesa, nessuna sorpresa in fattura.
        </p>
        <a href={`tel:${TEL}`} className="mt-8 inline-flex items-center gap-3 bg-teal hover:bg-teal/90 text-white font-bold px-8 py-5 rounded-full text-xl shadow-2xl transition hover:scale-[1.02]">
          <Phone className="w-6 h-6"/> Chiama Subito · {TEL_DISPLAY}
        </a>
      </div>
    </section>
  );
}

const services = [
  { icon: AlertTriangle, title: "Emergenze H24", desc: "Intervento immediato per guasti urgenti, qualsiasi ora del giorno o della notte." },
  { icon: Bath, title: "Sanitari e Bagno", desc: "Installazione e riparazione di wc, bidet, lavandini, docce e vasche." },
  { icon: Droplets, title: "Perdite e Guasti", desc: "Ricerca e riparazione di perdite nascoste, tubi rotti e infiltrazioni." },
  { icon: Wrench, title: "Manutenzione Impianti", desc: "Controllo e manutenzione periodica degli impianti idraulici." },
  { icon: Flame, title: "Caldaie e Riscaldamento", desc: "Assistenza su impianti di riscaldamento e acqua calda." },
  { icon: FileText, title: "Preventivi Gratuiti", desc: "Sopralluogo e preventivo senza impegno e senza costi nascosti." },
];

function Services() {
  return (
    <section id="servizi" className="bg-soft py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal font-semibold text-sm uppercase tracking-widest">Servizi</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">I Nostri Servizi</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-white rounded-2xl p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition border border-border/50 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white text-teal transition">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Clock, title: "Disponibile H24", desc: "Sempre raggiungibile, anche di notte e nei festivi." },
  { icon: Zap, title: "Intervento in Giornata", desc: "Risolviamo il problema il giorno stesso della chiamata." },
  { icon: Shield, title: "Prezzi Onesti", desc: "Nessun costo nascosto, preventivo chiaro prima di iniziare." },
  { icon: Sparkles, title: "Lavoro Pulito", desc: "Lasciamo tutto in ordine, come se non fossimo mai passati." },
  { icon: Star, title: "5 Stelle su Google", desc: "19 clienti soddisfatti parlano per noi." },
];

function Why() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal font-semibold text-sm uppercase tracking-widest">Perché Noi</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">Perché Scegliere Hidros Multiservice</h2>
        </div>
        <div className="space-y-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-5 p-5 rounded-2xl hover:bg-soft transition">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-navy text-teal flex items-center justify-center">
                <r.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy">{r.title}</h3>
                <p className="text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  "Andrea è una persona competente, disponibile, onesta e super puntuale!",
  "Ho trovato una persona professionale e disponibile, lo consiglio a tutti.",
  "Problema risolto in giornata, molto disponibile; pulitissimo. Veramente contenta, per fortuna in centro si trovano ancora dei buoni professionisti.",
  "Ottima impressione. Avevo bisogno urgente per un problema al wc e al bidet. In giornata risolto e onestissimo. Veloce, competente e lavoro pulito. Grazie ancora.",
  "Persona disponibile, seria e professionale! È riuscito a risolvere una situazione contenendo i costi, in poco tempo. Bravo Andrea, ti consiglierò!",
];

function Reviews() {
  return (
    <section className="bg-soft py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal font-semibold text-sm uppercase tracking-widest">Recensioni</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">Cosa Dicono i Nostri Clienti</h2>
          <p className="mt-3 text-muted-foreground flex items-center justify-center gap-2">
            <span className="font-bold text-navy">5,0</span>
            <span className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>)}</span>
            · 19 recensioni verificate su Google
          </p>
        </div>
      </div>
      <div className="overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-5 px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2))] snap-x snap-mandatory">
          {reviews.map((text, i) => (
            <article key={i} className="snap-start shrink-0 w-[85vw] sm:w-[380px] bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] border border-border/50 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({length:5}).map((_,j)=><Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400"/>)}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{text}"</p>
              <p className="mt-5 text-sm font-semibold text-navy">Cliente verificato <span className="text-muted-foreground font-normal">· Google</span></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contatti" className="bg-navy text-white py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Contattaci Ora</h2>
        <p className="mt-3 text-white/80 text-lg">Siamo disponibili 24 ore su 24, 7 giorni su 7</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${TEL}`} className="inline-flex items-center justify-center gap-3 bg-teal hover:bg-teal/90 text-white font-bold px-8 py-5 rounded-full text-lg shadow-2xl transition hover:scale-[1.02]">
            <Phone className="w-5 h-5"/> {TEL_DISPLAY}
          </a>
          <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-8 py-5 rounded-full text-lg shadow-2xl transition hover:scale-[1.02]">
            <MessageCircle className="w-5 h-5"/> Scrivici su WhatsApp
          </a>
        </div>
        <p className="mt-10 inline-flex items-center gap-2 text-white/85">
          <MapPin className="w-5 h-5 text-teal"/> Via Armando Quadri 7, 40125 Bologna (BO)
        </p>
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="Mappa Hidros Multiservice"
            src="https://www.google.com/maps?q=Via+Armando+Quadri+7,+40125+Bologna&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-3 gap-6 text-sm text-center sm:text-left">
        <div>
          <p className="font-bold text-white">Hidros Multiservice</p>
          <p className="mt-1">P.IVA 00000000000</p>
        </div>
        <div className="sm:text-center">
          <p>Via Armando Quadri 7, 40125 Bologna</p>
          <p>Tel: {TEL_DISPLAY}</p>
        </div>
        <div className="sm:text-right">© 2025 Hidros Multiservice.<br/>Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <>
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] items-center justify-center shadow-2xl transition hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-2xl grid grid-cols-2 gap-2 p-2">
        <a href={`tel:${TEL}`} className="flex items-center justify-center gap-2 bg-navy text-white font-bold py-3.5 rounded-xl">
          <Phone className="w-5 h-5"/> Chiama
        </a>
        <a href={WA} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl">
          <MessageCircle className="w-5 h-5"/> WhatsApp
        </a>
      </div>
    </>
  );
}

function Index() {
  return (
    <main className="bg-background pb-20 sm:pb-0">
      <Navbar />
      <Hero />
      <Emergency />
      <Services />
      <Why />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
