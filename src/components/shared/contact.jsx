// import { useState } from "react";
// import Button from "./button";

// function Contact() {
//   const [contactForm, setContactForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [newsletterEmail, setNewsletterEmail] = useState("");
//   const [status, setStatus] = useState("");

//   const handleContactChange = (e) => {
//     setContactForm({ ...contactForm, [e.target.name]: e.target.value });
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/send_email", {
//         mode: "no-cors",

//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(contactForm),
//         credentials: "include", // Include credentials
//       });
//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setContactForm({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("An error occurred. Please try again later.");
//     }
//   };

//   const handleNewsletterSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/subscribe", {
//         mode: "no-cors",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: newsletterEmail }),
//         credentials: "include", // Include credentials
//       });
//       if (response.ok) {
//         setStatus("Subscribed to newsletter successfully!");
//         setNewsletterEmail("");
//       } else {
//         setStatus("Failed to subscribe. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center mb-8">
//       <div className="CONTACT flex flex-col w-full max-w-screen-xl gap-8 p-5 rounded-lg">
//         <div>
//           <h2 className="font-semibold leading-none md:leading-none">
//             Contact <br />
//             <span className="text-butterscotch text-4xl">The Team</span>
//           </h2>
//         </div>
//         {status && <p className="text-butterscotch">{status}</p>}
//         <div className="contact-forms flex flex-col md:flex-row justify-between gap-12 md:gap-24">
//           <form className="md:w-1/2 space-y-4" onSubmit={handleContactSubmit}>
//             <div>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={contactForm.name}
//                 onChange={handleContactChange}
//                 placeholder="Your Name"
//                 className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={contactForm.email}
//                 onChange={handleContactChange}
//                 placeholder="Your Email"
//                 className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={contactForm.phone}
//                 onChange={handleContactChange}
//                 placeholder="Your Phone Number"
//                 className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
//               />
//             </div>
//             <div>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={contactForm.message}
//                 onChange={handleContactChange}
//                 rows="4"
//                 placeholder="Your Message"
//                 className="text-white-smoke w-full p-2 bg-transparent border-b focus:outline-none focus:border-butterscotch"
//                 required
//               ></textarea>
//             </div>
//             <Button text="Send Message" type="submit" onClick={() => {}} />{" "}
//           </form>
//           <div className="md:w-1/2 flex flex-col gap-8">
//             <div className="flex flex-col gap-4">
//               <h3 className="font-semibold">Feeling Nice?</h3>
//               <p className="text-butterscotch">Donate to the team here</p>
//               <Button
//                 text="Donate"
//                 onClick={() => {
//                   /* handle donation logic */
//                 }}
//               />{" "}
//             </div>
//             <div className="flex flex-col gap-4">
//               <p className="text-butterscotch">
//                 Or sign up for our newsletter!{" "}
//               </p>
//               <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
//                 <div>
//                   <input
//                     type="email"
//                     id="newsletter-email"
//                     name="newsletter-email"
//                     value={newsletterEmail}
//                     onChange={(e) => setNewsletterEmail(e.target.value)}
//                     placeholder="Your Email"
//                     className="text-white-smoke w-full p-2 bg-transparent border border-white-smoke focus:outline-none focus:border-butterscotch"
//                     required
//                   />
//                 </div>
//                 <Button text="Subscribe" type="submit" onClick={() => {}} />{" "}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      alert(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
