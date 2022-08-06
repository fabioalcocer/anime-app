import "./App.css";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-blue-1000">
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <CardsContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
