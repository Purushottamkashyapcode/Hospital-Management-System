import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday-Saturday",
      time: "9:00 AM - 11:00 PM",
    },
  ];

  return (
    <footer className="footer">
      <hr />
      <div className="content">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/appointment"}>Appointment</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                <span>{element.day}</span><br />
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <FaPhone />
            <span>999-999-9999</span>
          </div>
          <div>
            <MdEmail />
            <span>Hrithikaryan8@gmail.com</span>
          </div>
          <div>
            <FaLocationArrow />
            <span>Bihar, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
