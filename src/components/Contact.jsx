import { Mail, Send, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-rose-100 p-2 text-rose-700">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tight text-zinc-900 sm:text-3xl">
              Get in Touch
            </h2>
            <p className="text-sm text-zinc-600">For commissions, collaborations, or just to say hi</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Contact Details</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Email is the best way to reach me. I typically respond within 1–2 business days.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:hello@ava-arts.example"
                className="inline-flex items-center gap-2 text-zinc-800 underline decoration-rose-400 underline-offset-4 hover:text-rose-700"
              >
                <Mail className="h-4 w-4" /> hello@ava-arts.example
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-800 underline decoration-rose-400 underline-offset-4 hover:text-rose-700"
              >
                <Instagram className="h-4 w-4" /> @ava.draws
              </a>
            </div>
          </div>

          <form
            action="mailto:hello@ava-arts.example"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-zinc-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-rose-400 focus:bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-rose-400 focus:bg-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-zinc-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-rose-400 focus:bg-white"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
