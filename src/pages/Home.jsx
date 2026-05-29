import Hero from "../components/Hero";
import Quotes from "../components/Quotes";
import { News, Vision } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Quotes />
      <News />
      <Vision />
    </>
  );
}
