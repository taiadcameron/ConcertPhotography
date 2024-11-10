import Hero from "../components/blog/Hero";
import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";

const Blog = () => {
  return (
    <>
      <Nav />
      <main className="lg:px-32 md:px-12 px-4 bg-white-smoke ">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
