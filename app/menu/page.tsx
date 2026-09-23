import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Motion } from "@/components/Motion";

export const metadata: Metadata = { title: "Menu", description: "Explore o menu conceitual do KŌEN: sushi, sashimi, robata, pratos quentes, omakase, sobremesas e drinks." };

type Item = { name: string; detail: string; price: string };
type Category = { id: string; title: string; note: string; items: Item[] };
const categories: Category[] = [
  { id: "sushi-sashimi", title: "Sushi & Sashimi", note: "O ingrediente em sua forma mais direta.", items: [
    { name: "Otoro", detail: "Atum bluefin, shari temperado, wasabi fresco", price: "48" },
    { name: "Hotate", detail: "Vieira, ponzu cítrico, óleo de shiso", price: "46" },
    { name: "Hamachi", detail: "Peixe de cauda amarela, sal marinho, yuzu", price: "42" },
    { name: "Sashimi do dia", detail: "Seleção sazonal de cortes, 8 peças", price: "92" },
  ]},
  { id: "entradas", title: "Entradas", note: "Pequenos começos. Longas conversas.", items: [
    { name: "Sunomono de pepino", detail: "Pepino, wakame, vinagre de arroz envelhecido", price: "28" },
    { name: "Tartar de atum", detail: "Atum, gema curada, nori crocante", price: "58" },
    { name: "Gyoza de cogumelos", detail: "Cogumelos da estação, tare de gergelim, 4 unidades", price: "39" },
  ]},
  { id: "robata", title: "Robata", note: "Fogo, brasa e precisão.", items: [
    { name: "Shiitake", detail: "Missô branco, cebolinha, gergelim", price: "34" },
    { name: "Frango tare", detail: "Sobrecoxa, tare da casa, sansho", price: "42" },
    { name: "Camarão na brasa", detail: "Manteiga de yuzu, sal defumado", price: "64" },
  ]},
  { id: "pratos-quentes", title: "Pratos quentes", note: "Camadas de calor e textura.", items: [
    { name: "Wagyu Tataki", detail: "Wagyu selado, gema curada, tare da casa", price: "89" },
    { name: "Black Cod", detail: "Peixe negro marinado em missô por 48 horas", price: "96" },
    { name: "Arroz de cogumelos", detail: "Arroz japonês, cogumelos, caldo dashi", price: "62" },
  ]},
  { id: "omakase-menu", title: "Omakase", note: "Uma conversa com a estação.", items: [
    { name: "Omakase KŌEN", detail: "Sequência de 12 etapas criada diariamente", price: "320" },
    { name: "Harmonização", detail: "Seleção de saquês e drinks em 5 momentos", price: "180" },
  ]},
  { id: "sobremesas", title: "Sobremesas", note: "Um último gesto, sem pressa.", items: [
    { name: "Mochi de matcha", detail: "Mochi artesanal, creme leve, matcha", price: "32" },
    { name: "Pera ao saquê", detail: "Pera pochê, creme de baunilha, gergelim", price: "38" },
    { name: "Sorbet de yuzu", detail: "Yuzu, gengibre fresco, sal marinho", price: "29" },
  ]},
  { id: "saques-drinks", title: "Saquês & Drinks", note: "Para acompanhar e descobrir.", items: [
    { name: "Kōen Highball", detail: "Whisky japonês, soda, casca de yuzu", price: "48" },
    { name: "Shiso Martini", detail: "Gin, shiso, vermute seco", price: "52" },
    { name: "Saquê da casa", detail: "Seleção sazonal · taça", price: "42" },
    { name: "Chá gelado de hojicha", detail: "Hojicha, cítricos, mel", price: "24" },
  ]},
];

export default function MenuPage() {
  return <main className="menu-page"><Motion intro={false} /><Navigation />
    <section className="menu-hero"><Image src="/images/dish.png" alt="Nigiri de atum em cerâmica escura" fill priority sizes="100vw" /><div className="menu-hero-shade" /><div className="menu-hero-content"><span className="section-number">KŌEN / CARTA</span><h1>O menu<span>.</span></h1><p>Uma expressão do agora. Ingredientes escolhidos com atenção, preparados com precisão.</p></div><span className="menu-hero-foot">RIO DE JANEIRO · BRASIL <span>↓</span></span></section>
    <div className="menu-layout"><aside className="menu-index"><p>EXPLORAR O MENU</p>{categories.map((category, i) => <a key={category.id} href={`#${category.id}`}><span>0{i + 1}</span>{category.title}</a>)}</aside><div className="menu-categories">{categories.map((category, i) => <section className="menu-category" id={category.id} key={category.id} aria-labelledby={`${category.id}-heading`}><div className="menu-category-heading"><span>0{i + 1} / 07</span><h2 id={`${category.id}-heading`} data-reveal>{category.title}</h2><p>{category.note}</p></div><div className="menu-items">{category.items.map(item => <div className="menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.detail}</p></div><span>R$ {item.price}</span></div>)}</div></section>)}</div></div>
    <section className="menu-closing"><span className="section-number">A EXPERIÊNCIA CONTINUA</span><h2>À sua mesa,<br /><em>o próximo gesto.</em></h2><Link className="button-outline" href="/#reservas">FAZER UMA RESERVA <span aria-hidden="true">↗</span></Link></section>
    <footer className="site-footer"><div className="footer-main"><Link href="/" className="footer-logo">KŌEN</Link><span>COZINHA JAPONESA CONTEMPORÂNEA<br />RIO DE JANEIRO</span><Link href="/">VOLTAR AO INÍCIO ↑</Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KŌEN</span><p>Projeto conceitual desenvolvido para fins de portfólio. Marca, pessoas, preços e estabelecimento são fictícios.</p></div></footer>
  </main>;
}
