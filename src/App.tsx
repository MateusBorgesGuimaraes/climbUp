import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Recommendations from "./sections/Recommendations";
import Tips from "./sections/Tips";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="bg-hero h-screen bg-cover">
        <Hero />
      </section>

      <section id="#mountains" className="max-container mt-8">
        <Recommendations />
      </section>

      <section className="bg-slate-200 mt-8">
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
