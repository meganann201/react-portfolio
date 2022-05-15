import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import 'font-awesome/css/font-awesome.min.css'; 


function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="container mt-5 mb-3 pt-5">
      <div className="row justify-content-center">
        <form action="mailto:megancampbell201@gmail.com" method="POST" onSubmit={handleSubmit} className="col-8">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Get In Touch</h1>
              <h5><span className="highlight">Email:</span> megancampbell201@gmail.com</h5>
              <h5><span className="highlight">Phone:</span> (256)655-9178</h5>
              <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="submit button">submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
