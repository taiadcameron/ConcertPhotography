import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";

import ContactForm from "../components/shared/contact";

const Contact = () => {
  return (
    <>
      <Nav />
      <main className="lg:mx-32 md:mx-12 mx-4">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
