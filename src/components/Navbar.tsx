import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { generalWhatsapp } from "@/lib/plotigo";

const links = [
  { to: "/properties", label: "Properties" },
  { to: "/plots", label: "Plots" },
  { to: "/flats", label: "Flats" },
  { to: "/villas", label: "Villas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8"
      >
        <Link to="/" className="min-w-0" aria-label="Plotigo home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-sm font-semibold text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={generalWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3.5 font-display text-lg font-semibold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={generalWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-lime-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}