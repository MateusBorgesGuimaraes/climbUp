import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Recommendations from "./sections/Recommendations";
import Tips from "./sections/Tips";

function App() {
  return (
    <main>
      <section className="bg-hero h-screen bg-cover">
        <Nav />
        <Hero />
      </section>

      <section>
        <Recommendations />
      </section>

      <section>
        <Tips />
      </section>

      <section>
        <Gallery />
      </section>

      <Footer />
    </main>
  );
}

export default App;
