import Card from "./Card";

function CardsContainer() {
  return (
    <section className="my-6 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-7 py-5 px-3">
      <Card title="Shingeki no Kyojin" img="snk" />
      <Card title="Death Note" img="deathnote" />
      <Card title="Tokyo Revengers" img="tokyo" />
      <Card title="Tokyo Ghoul" img="tg" />
      <Card title="Kimetsu no Yaiba" img="kny" />
      <Card title="Jujutsu Kaisen" img="jk" />
    </section>
  );
}

export default CardsContainer;
