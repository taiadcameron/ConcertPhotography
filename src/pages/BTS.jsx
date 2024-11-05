import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";

import BTSGal from "../components/bts/btsgal";

const BTS = () => {
  return (
    <>
      <Nav />
      <main className="">
        <BTSGal />
      </main>
      <Footer />
    </>
  );
};

export default BTS;
