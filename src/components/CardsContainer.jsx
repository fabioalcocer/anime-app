import Card from "./Card";
import { data } from "../data/data";

function CardsContainer() {
  return (
    <section className="my-6 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-7 py-5 px-3">
      {data.map((card) => (
        <Card key={card.id} card={card}/>
      ))}
    </section>
  );
}

export default CardsContainer;
