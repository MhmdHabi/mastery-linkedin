import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Hero from "./pages/Hero";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <>
      <main className="bg-white dark:bg-black text-slate-900 dark:text-white transition-colors">
        <Navbar />
        <Hero />
        <About />
        <Benefits />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}

export default App;
