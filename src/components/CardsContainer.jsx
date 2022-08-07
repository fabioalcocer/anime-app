import Card from "./Card";
import { data } from "../services/data";

function CardsContainer() {
  return (
    <section className="my-6 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-7 py-5 px-3">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.name}
          img={card.imageSrc}
          opening={card.soundSrc}
          opName={card.opName}
        />
      ))}
    </section>
  );
}

export default CardsContainer;
