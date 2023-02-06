import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ilfc2n",
        "template_fvve9db",
        form.current,
        "tOQTdAh8jDRONzf3K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h1>Contact Me</h1>
        <div className="container contact__container">
          <div className="contact__options">
            <motion.article
              initial={{
                opacity: 0,
                x: -100,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              className="contact__option"
            >
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>nikhilranjankumar1999@gmail.com</h5>
              <a
                href="mailto:nikhilranjankumar1999@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message
              </a>
            </motion.article>
            <motion.article
              initial={{
                opacity: 0,
                x: -100,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              className="contact__option"
            >
              <BsInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <h5>14_nikhil_kumar</h5>
              <a
                href="https://www.instagram.com/14_nikhil_kumar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message
              </a>
            </motion.article>
            <motion.article
              initial={{
                opacity: 0,
                x: -100,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              className="contact__option"
            >
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+91-6205666646</h5>
              <a
                href="https://api.whatsapp.com/send?phone=6205666646"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message
              </a>
            </motion.article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <motion.input
              initial={{
                opacity: 0,
                x: 100,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              type="text"
              name="forName"
              placeholder="Your Good Name"
              required
            />
            <motion.input
              initial={{
                opacity: 0,
                x: 100,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              type="text"
              name="Email"
              placeholder="Your Email"
              required
            />
            <motion.textarea
              initial={{
                opacity: 0,
                x: 100,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              name="message"
              rows="10"
              placeholder="Enter Your Message Here ✔️"
            />
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
