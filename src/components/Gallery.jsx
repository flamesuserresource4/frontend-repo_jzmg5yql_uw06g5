import { Image as ImageIcon } from "lucide-react";

const pieces = [
  {
    id: 1,
    title: "Whispering Meadow",
    src:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sunlit Portrait",
    src:
      "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Quiet Streets",
    src:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Gentle Morning",
    src:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Warmth of Home",
    src:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Dusk in Bloom",
    src:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-rose-100 p-2 text-rose-700">
            <ImageIcon className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tight text-zinc-900 sm:text-3xl">
              Selected Works
            </h2>
            <p className="text-sm text-zinc-600">A few pieces I love</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p) => (
            <figure
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 shadow-sm"
            >
              <img
                src={p.src}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <span className="text-sm font-medium opacity-95">{p.title}</span>
                <span className="text-xs opacity-80">Illustration</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
