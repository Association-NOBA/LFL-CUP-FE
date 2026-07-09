import About from "./components/Layout/About";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Inscription from "./components/Layout/Inscription";
import News from "./components/Layout/News";
import Newsletter from "./components/Layout/Newsletter";
import Sponsor from "./components/Layout/Sponsor";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <News />
      <Sponsor />
      <Inscription />
      <Newsletter />
      <Footer />
    </>
  );
}
