import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Quotes from "../components/Quotes";
import { News, Vision } from "../components/Sections";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <Experience />

      <Quotes />

      <News />

      <Vision />
      <Contact />
    </>
  );
}
