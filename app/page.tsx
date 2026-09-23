import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Motion } from "@/components/Motion";

const featured = [
  { index: "01", name: "OToro", detail: "Atum bluefin, shari temperado e wasabi fresco.", price: "R$ 48" },
  { index: "02", name: "Hotate", detail: "Vieira, ponzu cítrico e óleo de shiso.", price: "R$ 46" },
  { index: "03", name: "Wagyu Tataki", detail: "Wagyu selado, gema curada e tare da casa.", price: "R$ 89" },
  { index: "04", name: "Black Cod", detail: "Peixe negro marinado em missô por 48 horas.", price: "R$ 96" },
];

export default function Home() {
  return (
    <main>
      <Motion />
      <Navigation />
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/hero.png" alt="Mãos de um chef preparando sushi em uma bancada escura" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>COZINHA JAPONESA CONTEMPORÂNEA</span><span>LEBLON · RIO DE JANEIRO</span></div>
        <div className="hero-content">
          <p className="eyebrow" data-reveal>O encontro entre técnica e tempo</p>
          <h1 id="hero-title" data-reveal>Precisão em<br /><em>cada gesto.</em></h1>
          <div className="hero-bottom" data-reveal>
            <p>Cozinha japonesa contemporânea guiada por técnica, produto e tempo.</p>
            <div className="hero-actions"><Link className="text-link" href="/menu">CONHECER O MENU <span aria-hidden="true">↗</span></Link><a className="text-link" href="#reservas">RESERVAR UMA MESA <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
        <span className="hero-scroll">DESLIZE PARA EXPLORAR <span aria-hidden="true">↓</span></span>
      </section>
      <section className="experience section-dark" id="experiencia" aria-labelledby="experience-title">
        <div className="experience-label"><span className="section-number">01 / A EXPERIÊNCIA</span><span className="thin-line" /></div>
        <div className="experience-grid">
          <div className="experience-copy"><h2 id="experience-title" className="display-title" data-reveal>O essencial<br />não precisa<br /><em>de excesso.</em></h2><div className="body-copy" data-reveal><p>No KŌEN, cada ingrediente ocupa seu lugar.</p><p>Técnicas tradicionais encontram uma cozinha contemporânea construída em torno de sabor, textura e precisão.</p></div></div>
          <div className="experience-visual" data-reveal><Image src="/images/dish.png" alt="Nigiri de atum apresentado em cerâmica escura" fill sizes="(max-width: 800px) 100vw, 45vw" /><span>MATÉRIA · GESTO · TEMPO</span></div>
        </div><p className="experience-aside">A beleza está no que permanece.</p>
      </section>
      <section className="featured section-dark" id="destaques" aria-labelledby="featured-title">
        <div className="featured-heading"><span className="section-number">02 / O MENU</span><h2 id="featured-title" className="display-title" data-reveal>Quatro maneiras<br />de <em>sentir.</em></h2><p>Seleções que traduzem a nossa cozinha. Cada prato revela uma relação distinta entre ingrediente e intenção.</p></div>
        <div className="featured-list">{featured.map((dish) => <div className="featured-row" key={dish.index} data-reveal><span className="dish-index">{dish.index}</span><div className="featured-name">{dish.name}</div><div className="featured-description">{dish.detail}</div><span className="featured-price">{dish.price}</span></div>)}</div>
        <div className="featured-footer"><span>UMA SELEÇÃO, MUITAS POSSIBILIDADES.</span><Link className="button-outline" href="/menu">VER MENU COMPLETO <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="omakase" id="omakase" aria-labelledby="omakase-title"><div className="omakase-rail"><span className="section-number">03 / OMAKASE</span><span>CONFIAR É PARTE DA EXPERIÊNCIA.</span></div><div className="omakase-main"><div><p className="eyebrow dark-eyebrow">UMA SEQUÊNCIA EM CONSTANTE MUDANÇA</p><h2 id="omakase-title" data-reveal>Deixe a cozinha<br /><em>decidir.</em></h2></div><div className="omakase-details" data-reveal><p>Uma sequência criada diariamente de acordo com os melhores ingredientes disponíveis.</p><div className="omakase-facts"><span>12 ETAPAS</span><span>R$ 320 POR PESSOA</span><span>RESERVAS LIMITADAS</span></div><a className="button-dark" href="#reservas">RESERVAR OMAKASE <span aria-hidden="true">↗</span></a></div></div><span className="omakase-watermark" aria-hidden="true">KŌEN</span></section>
      <section className="kitchen section-dark" id="cozinha" aria-labelledby="kitchen-title"><div className="kitchen-photo" data-reveal><Image src="/images/chef.png" alt="Chef em processo de preparo na cozinha do KŌEN" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="kitchen-content"><span className="section-number">04 / A COZINHA</span><h2 id="kitchen-title" className="display-title" data-reveal>Disciplina<br />para criar<br /><em>liberdade.</em></h2><p className="kitchen-name">KENJI NAKAMURA</p><p>A cozinha de Kenji Nakamura nasce do encontro entre disciplina japonesa e uma leitura contemporânea de ingredientes, texturas e sazonalidade.</p></div></section>
      <section className="ambience section-dark" id="ambiente" aria-labelledby="ambience-title"><div className="ambience-heading"><span className="section-number">05 / O AMBIENTE</span><h2 id="ambience-title" className="display-title" data-reveal>Uma noite<br /><em>no KŌEN.</em></h2><p>Há conversas que pedem mais tempo. Há lugares que convidam a ficar.</p></div><div className="ambience-stage"><div className="ambience-photo" data-reveal><Image src="/images/interior.png" alt="Balcão intimista de restaurante com iluminação quente" fill sizes="(max-width: 800px) 100vw, 75vw" /></div><div className="ambience-detail ambience-detail-food" data-reveal><Image src="/images/dish.png" alt="Detalhe de nigiri servido no balcão" fill sizes="(max-width: 800px) 45vw, 20vw" /></div><div className="ambience-detail ambience-detail-sake" data-reveal><Image src="/images/sake.png" alt="Saquê servido em cerâmica artesanal" fill sizes="(max-width: 800px) 55vw, 23vw" /></div><span className="ambience-caption">LUZ BAIXA. PRESENÇA INTEIRA.</span></div></section>
      <section className="reservations" id="reservas" aria-labelledby="reservation-title"><div className="reservations-intro"><span className="section-number">06 / RESERVAS</span><h2 id="reservation-title" className="display-title" data-reveal>Sua mesa está<br /><em>esperando.</em></h2><p>Uma experiência para viver sem pressa.</p></div><div className="reservations-info"><div><h3>HORÁRIOS</h3><dl><div><dt>Terça a quinta</dt><dd>19h às 23h</dd></div><div><dt>Sexta e sábado</dt><dd>19h às 00h</dd></div><div><dt>Domingo</dt><dd>18h às 22h</dd></div></dl></div><div><h3>LOCALIZAÇÃO</h3><p>Leblon<br />Rio de Janeiro</p><small>Endereço ilustrativo · projeto fictício</small></div></div><div className="reservation-actions"><a className="button-dark" href="https://wa.me/0000000000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa" target="_blank" rel="noreferrer" aria-label="Reservar pelo WhatsApp, link fictício de demonstração">RESERVAR PELO WHATSAPP <span aria-hidden="true">↗</span></a><a className="text-link dark-link" href="https://maps.google.com/?q=Leblon%2C+Rio+de+Janeiro" target="_blank" rel="noreferrer">COMO CHEGAR <span aria-hidden="true">↗</span></a></div></section>
      <footer className="site-footer"><div className="footer-main"><Link href="/" className="footer-logo">KŌEN</Link><span>COZINHA JAPONESA CONTEMPORÂNEA<br />RIO DE JANEIRO</span><a href="#inicio">VOLTAR AO INÍCIO ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KŌEN</span><p>Projeto conceitual desenvolvido para fins de portfólio. Marca, pessoas, preços e estabelecimento são fictícios.</p></div></footer>
    </main>
  );
}
