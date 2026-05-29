import { Business, Achievements } from "../components/Business";
import VisitingCards from "../components/VisitingCards";
import Enterprises from "../components/Enterprises";
  import Contact from "../components/Contact";

export default function BusinessPage() {
  return (
    <>
      <Enterprises />
      <Business />
      <Achievements />
      <VisitingCards />
      <Contact />
    </>
  );
}
