import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyWhatsApp } from "./StickyWhatsApp";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}