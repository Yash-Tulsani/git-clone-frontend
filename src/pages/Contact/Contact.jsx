import { useState } from "react";
import "./contact.css";
import {
  getFocus,
  getBlur,
  getFocus1,
  getBlur1,
  getFocus2,
  getBlur2,
  getFocus3,
  getBlur3,
} from "./sideEffect_contact.js";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="container-contact">
        <span className="circle-3"></span>
        <span className="circle-4"></span>
        <span className="c-skew"></span>
        <div className="form-contact">
          <div className="contact-info-contact">
            <h2 className="h2-contact">Contact Information</h2>
            <p id="info-text-contact">
              We would love to respond to your queries and help you succeed.Feel
              free to get in touch with us.
              <br />
              &nbsp;
            </p>

            <div className="info-contact">
              <p className="p-info-contact">
                <span className="logo-contact">
                  <img src={process.env.PUBLIC_URL + "/images/home.png"} alt='sorry'/>
                </span>
                <span className="text-contact">IIIT Sricity,Chittoor</span>
              </p>
              <p className="p-info-contact">
                <span className="logo-contact">
                  <img src={process.env.PUBLIC_URL + "/images/phone.png"} alt='sorry'/>
                </span>
                <span className="text-contact">9534579833</span>
              </p>
              <p className="p-info-contact">
                <span className="logo-contact">
                  <img src={process.env.PUBLIC_URL + "/images/mail.jfif"} alt='sorry'/>
                </span>
                <span className="text-contact">help@smail.com</span>
              </p>
            </div>
            <h2 className="h2-contact">Join us at</h2>
            <div className="link-contact">
              <a href="https://www.facebook.com/">
                <img
                  src={process.env.PUBLIC_URL + "/images/f-b.jpg"}
                  id="fb-contact"
                  alt='sorry'
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={process.env.PUBLIC_URL + "/images/ig.png"}
                  id="ig-contact"
                  alt='sorry'
                />
              </a>
              <a href="https://www.whatsapp.com/">
                <img src={process.env.PUBLIC_URL + "/images/w-b.jfif"} alt='sorry'/>
              </a>
              <a href="https://twitter.com/?lang=en">
                <img src={process.env.PUBLIC_URL + "/images/twitter.png"} alt='sorry'/>
              </a>
            </div>
            <span className="circle-1"></span>
            <span className="circle-2"></span>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              action="/action.php"
              name="contactForm"
              method="post"
              id="form1-contact"
            >
              <h3 className="title-contact">Contact us</h3>
              <div className="input-container-contact">
                <label className="inputlabel" for="l-name-contact" id="l-name-contact">
                  Name
                </label>
                <span id="s-name-contact">Username</span>
                <input
                  type="text"
                  name="name-contact"
                  id="name-contact"
                  className="input-contact"
                  value={username}
                  onChange={(e) => {setUsername(e.target.value)}}
                  onFocus={getFocus} 
                  onBlur={getBlur}
                  required
                />
              </div>
              <div className="input-container-contact">
                <input
                  type="email"
                  name="email-contact"
                  id="email-contact"
                  className="input-contact"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  onFocus={getFocus2}
                  onBlur={getBlur2}
                  required
                />
                <label className="inputlabel" for="email-contact" id="l-email-contact">
                  Email
                </label>

                <span id="s-email-contact">Email</span>
              </div>
              <div className="input-container-contact">
                <input
                  type="number"
                  name="phone-contact"
                  id="phone-contact"
                  className="input-contact"
                  value={number}
                  onChange={(e) => {setNumber(e.target.value)}}
                  onFocus={getFocus1}
                  onBlur={getBlur1}
                  required
                />
                <label className="inputlabel" for="phone-contact" id="l-phone-contact">
                  Phone
                </label>
                <span id="s-phone-contact">Phone</span>
              </div>
              <div className="input-container-contact textarea">
                <textarea
                  name="message-contact"
                  id="message-contact"
                  className="input-contact"
                  value={message}
                  onChange={(e) => {setMessage(e.target.message)}}
                  onFocus={getFocus3}
                  onBlur={getBlur3}
                  required
                ></textarea>
                <label className="inputlabel" for="message-contact" id="l-message-contact">
                  Message
                </label>
                <span id="s-message-contact">Message</span>
              </div>
              <input type="submit" value="Send" className="btn-contact" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
