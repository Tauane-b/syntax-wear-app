import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import { Overlay } from "../Overlay";
import Button from "../Button";

export const Gallery = () => {
  return (
    <section className="container mb-10">
      <div className="gallery-grid w-full">
        <article
          className="relative overflow-hidden rounded-3xl bg-slate-100"
          style={{ gridArea: "highlight" }}
        >
          <img
            src={galeriaHomem}
            alt="Modelo masculino com tênis SyntaxWear"
            className="h-full w-full object-cover"
          />

          <Overlay
            title="Kripton One"
            subtitle="Estilo Urbano com atitude"
            className="inset-0 justify-center"
          >
            <Button variant="secondary">Feminino</Button>
            <Button variant="secondary">Masculino</Button>
          </Overlay>
        </article>

        <article
          className="overflow-hidden rounded-3xl bg-slate-100"
          style={{ gridArea: "sneaker-purple" }}
        >
          <img
            src={galeriaTenisRoxo}
            alt="Tênis roxo SyntaxWear"
            className="h-full w-full object-cover"
          />
        </article>

        <article
          className="overflow-hidden rounded-3xl bg-slate-100"
          style={{ gridArea: "model" }}
        >
          <img
            src={galeriaModelo}
            alt="Modelo feminino com tênis SyntaxWear"
            className="h-full w-full object-cover"
          />
        </article>

        <article
          className="overflow-hidden rounded-3xl bg-slate-100"
          style={{ gridArea: "sneaker-color" }}
        >
          <img
            src={galeriaTenisColorido}
            alt="Tênis colorido SyntaxWear"
            className="h-full w-full object-cover"
          />
        </article>

        <article
          className="overflow-hidden rounded-3xl bg-slate-100"
          style={{ gridArea: "sneaker-white" }}
        >
          <img
            src={galeriaTenisBrancoPreto}
            alt="Tênis branco e preto SyntaxWear"
            className="h-full w-full object-cover"
          />
        </article>

        <article
          className="overflow-hidden rounded-3xl bg-slate-100"
          style={{ gridArea: "sneaker-silver" }}
        >
          <img
            src={galeriaTenisCinza}
            alt="Tênis cinzaa SyntaxWear"
            className="h-full w-full object-cover"
          />
        </article>
      </div>
    </section>
  );
};
