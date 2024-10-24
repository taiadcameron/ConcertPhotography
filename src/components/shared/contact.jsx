import Button from "./button";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center mb-8">
      <div className="CONTACT  flex flex-col w-full max-w-screen-xl gap-8   p-5 rounded-lg ">
        <div>
          <h2 className=" font-semibold leading-none md:leading-none">
            Contact <br />
            <span className="text-butterscotch text-4xl">The Team</span>
          </h2>
        </div>
        <div className="contact-forms flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          <form className="md:w-1/2 space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="text-white-smoke w-full p-2 bg-transparent border-b  focus:outline-none focus:border-butterscotch"
              ></textarea>
            </div>
            <Button text="Send Message" />
          </form>
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className=" font-semibold">Feeling Nice?</h3>
              <p>Donate to the team here</p>
              <Button text="Donate" />
            </div>
            <div className="flex flex-col gap-4">
              <p>Or sign up for our newsletter! </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="newsletter-email"
                    placeholder="Your Email"
                    className="text-white-smoke w-full p-2 bg-transparent border border-white-smoke focus:outline-none focus:border-butterscotch"
                  />
                </div>
              </form>
              <Button text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
