import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";

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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 rounded-3xl">
            <h2 className="text-white text-xl font-medium leading-normal tracking-wider mb-2.5">
              Krypton One
            </h2>
            <p className="text-white text-2xl leading-9 tracking-widest mb-10 text-center px-4">
              Estilo urbano com atitude
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all text-sm md:text-base">
                Feminino
              </button>
              <button className="px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all text-sm md:text-base">
                Masculino
              </button>
            </div>
          </div>
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