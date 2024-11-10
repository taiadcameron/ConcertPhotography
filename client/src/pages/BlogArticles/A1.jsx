import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import Nav from "../../components/shared/nav";
import Footer from "../../components/shared/footer";
const BlogPost = () => {
  return (
    <>
      <Nav />
      <main>
        <motion.div
          initial="initial"
          animate="in"
          exit="exit"
          variants={{
            initial: { opacity: 0, y: 20 },
            in: { opacity: 1, y: 0 },
          }}
          className="bg-white-smoke text-night pt-24 pb-16"
        >
          <div className="mx-auto px-4 max-w-3xl">
            <header className="mb-4">
              <h1 className=" mb-4 text-night leading-snug">Blog Title</h1>
              <div className="flex items-center text-sm gap-2  ">
                <p className="text-night text-base">By Author Name</p>
                <p className="text-night text-base">|</p>
                <p className="text-night text-base">day/month/year</p>
                <p className="text-night text-base">|</p>
                <p className="text-night text-base">5 Min Read</p>
              </div>
            </header>

            <img
              src={img1}
              alt="Blog Post Featured Image"
              className=" object-cover mb-8"
            />

            <article className="   text-night">
              <h2 className="text-night">First Section Header</h2>
              <p className="text-night">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus.
              </p>

              <h2 className="text-night">Second Section Header</h2>
              <p className="text-night">
                Maecenas faucibus mollis interdum. Donec sed odio dui. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
                Vestibulum id ligula porta felis euismod semper. Donec id elit
                non mi porta gravida at eget metus. Vestibulum id ligula porta
                felis euismod semper.
              </p>

              <h2 className="text-night">Third Section Header</h2>
              <p className="text-night">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Sed posuere consectetur
                est at lobortis. Cras mattis consectetur purus sit amet
                fermentum.
              </p>

              <h3 className="text-night">Subsection Header</h3>
              <p className="text-night">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cras
                mattis consectetur purus sit amet fermentum. Duis mollis, est
                non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor.
              </p>

              <h2 className="text-night">Conclusion</h2>
              <p className="text-night">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </article>

            <div className="mt-12 pt-8 border-t border-night">
              <h3 className="text-xl font-semibold mb-4 text-night">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="Article1">
                  <motion.div
                    className="flex flex-col border-2 border-night max-w-96 p-2 gap-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="border-2 border-night p-2">
                      <img src={img1} alt="" />
                    </div>
                    <div className="border-2 border-night p-2">
                      <h6 className="text-night font-bold">
                        Lorem ipsum dolor{" "}
                      </h6>
                      <p className="text-night text-sm border-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perspiciatis, aperiam quisquam nam voluptate o
                      </p>
                    </div>
                  </motion.div>
                </a>
                <a href="Article1">
                  <motion.div
                    className="flex flex-col border-2 border-night max-w-96 p-2 gap-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="border-2 border-night p-2">
                      <img src={img1} alt="" />
                    </div>
                    <div className="border-2 border-night p-2">
                      <h6 className="text-night font-bold">
                        Lorem ipsum dolor{" "}
                      </h6>
                      <p className="text-night text-sm border-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perspiciatis, aperiam quisquam nam voluptate o
                      </p>
                    </div>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
