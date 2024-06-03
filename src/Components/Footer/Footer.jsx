import React from "react";
import "./Footer.css";
import "./Rfooter.css";
import img from "../../assets/image/muthoga logo.webp";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphones,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>Unlock Great Savings Shopping With Us</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>free delivery</h3>
                <p>Enjoy Free Delivery on Every Order</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadphones />
              </div>
              <div className="detail">
                <h3>24/7 support</h3>
                <p>Always Here for You: 24/7 Support</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>money back</h3>
                <p>Your Satisfaction, Guaranteed: Money-Back Assurance</p>
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="header">
              <img src={img} alt=""></img>
              <p>
                Welcome to Muthoga Tech Electronics! Explore our cutting-edge
                gadgets and top-quality electronics. From smartphones to home
                appliances, we've got your tech needs covered. Enjoy exceptional
                service and innovation every step of the way. Join us and
                experience the future of electronics shopping today.
              </p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>sales</li>
                </ul>
              </div>
              <div className="box">
                <h3>products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li>New product</li>
                  <li>old product</li>
                </ul>
              </div>
              <div className="box">
                <h3>contact us</h3>
                <ul>
                  <li>557-10106 OTHAYA,NYERI - NAIROBI</li>
                  <li>+254 791446968</li>
                  <li>johnmuthogakanyingi@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
