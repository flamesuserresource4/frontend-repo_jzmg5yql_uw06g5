import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Commissions from "./components/Commissions";
import Contact from "./components/Contact";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-rose-400 to-amber-400" />
          <span className="font-display text-lg font-semibold tracking-tight text-zinc-900">
            Ava Arts
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          <a href="#gallery" className="hover:text-zinc-900">Gallery</a>
          <a href="#commissions" className="hover:text-zinc-900">Commissions</a>
          <a href="#contact" className="hover:text-zinc-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Ava Arts. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-zinc-800">Top</a>
          <a href="#commissions" className="hover:text-zinc-800">Commission</a>
          <a href="#contact" className="hover:text-zinc-800">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Gallery />
      <Commissions />
      <Contact />
      <Footer />
    </div>
  );
}
