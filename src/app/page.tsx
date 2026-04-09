import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-spacer" />
        <About />
        <div className="section-spacer" />
        <Experience />
        <div className="section-spacer" />
        <Projects />
        <div className="section-spacer" />
        <Skills />
        <div className="section-spacer" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
