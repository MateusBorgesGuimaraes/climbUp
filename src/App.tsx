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
      <section id="#home" className="bg-hero h-screen bg-cover">
        <Hero />
      </section>

      <section id="#mountains" className="max-container mt-8">
        <Recommendations />
      </section>

      <section id="#tips" className="bg-slate-200 mt-8">
        <Tips />
      </section>

      <section id="#gallery" className="max-container mt-8">
        <Gallery />
      </section>

      <div id="#contacts">
        <Footer />
      </div>
    </main>
  );
}

export default App;
