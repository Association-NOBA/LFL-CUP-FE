import About from "./components/Layout/About";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import News from "./components/Layout/News";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <News />
      <Footer />
    </>
  );
}
