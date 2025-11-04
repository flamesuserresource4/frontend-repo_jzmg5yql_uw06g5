import { Palette, Star, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Sketch",
    price: "$40",
    desc: "Clean pencil or digital sketch, simple shading.",
    features: ["Headshot", "1 revision", "2–3 days"],
  },
  {
    name: "Ink & Color",
    price: "$120",
    desc: "Line art with soft coloring and light background.",
    features: ["Half body", "2 revisions", "5–7 days"],
    highlight: true,
  },
  {
    name: "Full Piece",
    price: "$260",
    desc: "Detailed rendering with custom background.",
    features: ["Full body", "3 revisions", "1–2 weeks"],
  },
];

export default function Commissions() {
  return (
    <section id="commissions" className="bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
            <Palette className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tight text-zinc-900 sm:text-3xl">
              Commissions
            </h2>
            <p className="text-sm text-zinc-600">I’d love to draw for you</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                t.highlight
                  ? "border-rose-300 ring-2 ring-rose-200"
                  : "border-zinc-100"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-rose-600 px-2 py-1 text-xs font-semibold text-white shadow">
                  <Star className="h-3.5 w-3.5" /> Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-zinc-900">{t.name}</h3>
              <p className="mt-1 text-3xl font-bold text-zinc-900">{t.price}</p>
              <p className="mt-2 text-sm text-zinc-600">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    t.highlight
                      ? "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500"
                      : "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 focus:ring-zinc-400"
                  }`}
                >
                  Start this tier
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-600">
          Commercial use, extra characters, and rush delivery are available. Contact me for a custom quote.
        </p>
      </div>
    </section>
  );
}
