import { useState } from "react";
import "./contact.css";
import L from 'leaflet';
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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  // Default marker icon
  const defaultMarkerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    <>
      <div className="container-contact">
        <span className="circle-3"></span>
        <span className="circle-4"></span>
        <span className="c-skew"></span>
        <div className="form-contact">
          <div className="contact-info-contact">
          <h2 className="h2-contact">Contact Information</h2>
        
          <div className="map-container">
        {/* Leaflet Map */}
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]} icon={defaultMarkerIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
        <div className="link-contact">
              <a href="https://www.facebook.com/" style={{margin: '10px'}}>
                <FacebookIcon/>
              </a>
              <a href="https://www.instagram.com/" style={{margin: '10px'}}>
                <InstagramIcon/>
              </a>
              <a href="https://www.whatsapp.com/" style={{margin: '10px'}}>
                <WhatsAppIcon/>
              </a>
              <a href="https://twitter.com/?lang=en" style={{margin: '10px'}}>
                <TwitterIcon/>
              </a>
            </div>
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
