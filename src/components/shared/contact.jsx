import Button from "./button";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mes, setMes] = useState();

  const ContactSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/createMessage`, { name, email, mes })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
        setMes("");
      })
      .catch((err) => console.log(err));
  };

  const NewsletterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/createNLEmail`, { name, email })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center mb-8 px-5">
      <div className="CONTACT flex flex-col w-full max-w-screen-xl gap-8  rounded-lg">
        <div>
          <h2 className="font-semibold leading-none md:leading-none">
            Contact <br />
            <span className="text-butterscotch text-4xl">The Team</span>
          </h2>
        </div>
        <p className="text-butterscotch"></p>
        <div className="contact-forms flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          <form className="md:w-1/2 space-y-4" onSubmit={ContactSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMes(e.target.value)}
                rows="4"
                placeholder="Your Message"
                className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
                required
              ></textarea>
            </div>
            <input
              className="border-white-smoke border w-full px-4 py-2 text-white-smoke hover:bg-purple-900"
              type="submit"
            />
          </form>
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Feeling Nice?</h3>
              <p className="text-butterscotch">Donate to the team here</p>
              <Button text="Donate" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-butterscotch">
                Or sign up for our newsletter!
              </p>
              <form className="space-y-4" onSubmit={NewsletterSubmit}>
                <div>
                  <input
                    type="text"
                    name="newsletter-Name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="text-white-smoke w-full p-2 bg-transparent border border-white-smoke focus:outline-none focus:border-butterscotch mb-4"
                    required
                  />
                  <input
                    type="email"
                    name="newsletter-email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="text-white-smoke w-full p-2 bg-transparent border border-white-smoke focus:outline-none focus:border-butterscotch"
                    required
                  />
                  <input
                    className="border-white-smoke border w-full px-4 py-2 text-white-smoke hover:bg-purple-900 mt-5"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
