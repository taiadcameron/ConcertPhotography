import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";
import Contact from "../components/shared/contact";

import Hero from "../components/team/hero";
import TeamScroll from "../components/team/teamscroll";

const Team = () => {
  return (
    <>
      <Nav />
      <main className="lg:mx-32 md:mx-12 mx-4">
        <Hero />
        <TeamScroll />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Team;
