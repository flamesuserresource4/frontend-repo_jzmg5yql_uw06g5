import { Paintbrush, Instagram, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs font-medium text-rose-600 backdrop-blur">
              <Paintbrush className="h-4 w-4" />
              Drawing Artist & Illustrator
            </div>
            <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl">
              Hello, I'm <span className="text-rose-600">Ava</span> — I draw stories that
              feel alive
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
              I’m a traditional and digital artist focusing on portraits, whimsical
              characters, and cozy worlds. I love soft textures, gentle palettes, and
              pieces that invite you to linger.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#commissions"
                className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Commission Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50"
              >
                View Gallery
              </a>
              <div className="ml-2 flex items-center gap-3 text-zinc-500">
                <a
                  href="mailto:hello@ava-arts.example"
                  aria-label="Email"
                  className="rounded-md p-2 hover:bg-white/60"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-md p-2 hover:bg-white/60"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-rose-200 via-amber-200 to-pink-200 shadow-lg ring-1 ring-black/5 md:ml-auto">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
                alt="Artist working at a desk with sketchbook"
                className="h-full w-full object-cover mix-blend-multiply"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
