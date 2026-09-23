"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const close = () => setOpen(false);
  return <>
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <Link className="brand" href="/" onClick={close} aria-label="KŌEN, início">KŌEN<span className="brand-mark" /></Link>
      <nav className="desktop-nav" aria-label="Navegação principal"><Link href="/menu">MENU</Link><Link href="/#experiencia">A EXPERIÊNCIA</Link><Link href="/#ambiente">O AMBIENTE</Link></nav>
      <Link className="nav-reserve" href="/#reservas">RESERVAR <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}><span /><span /></button>
    </header>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação mobile" aria-hidden={!open}>
      <div><Link href="/" onClick={close}>Início</Link><Link href="/menu" onClick={close}>Menu</Link><Link href="/#experiencia" onClick={close}>A experiência</Link><Link href="/#ambiente" onClick={close}>O ambiente</Link><Link href="/#reservas" onClick={close}>Reservas</Link></div><p>KŌEN · RIO DE JANEIRO</p>
    </nav>
  </>;
}
