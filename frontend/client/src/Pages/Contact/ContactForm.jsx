import React, { useState } from "react";
import { FormSection } from "../../components/styles/Contact.styled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesMessage, setSucessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/e79cf7c6eade7d5068495853b4cec9dc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true") {
          setSucessMessage(
            "Thank you for leaving a message, we will get back to you soon"
          );
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setSucessMessage(""), 3000);
        }
      })
      .catch((error) => setSucessMessage(error.message));
  };

  return (
    <FormSection>
      {succesMessage && (
        <div className="successMessage-container">
          <p>{succesMessage}</p>
        </div>
      )}
      <h2>
        We would love to hear from you,
        <br /> Get in touch with us
      </h2>
      <p>
        To make inquiries about our services, you can leave us a message. We
        promise to send you a response as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="_next" value="" />
        <input type="hidden" name="_captcha" value="false" />
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
          />
        </div>
        <button type="submit" disabled={!name || !email || !message}>
          Submit
        </button>
      </form>
    </FormSection>
  );
};

export default ContactForm;
