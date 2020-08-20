import React, { Component } from "react";
import styles from "./Footer.module.css";
import Instagram from "../assets/instagram.png";
import Whatsapp from "../assets/whatsapp.png";
import Gmail from "../assets/gmail.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.containerContent}>
          <div>
            <h1 style={{ color: "burlywood" }}>krimi kopi.</h1>
            {/* <h5>the best coffee in makassar</h5> */}
          </div>
          <div>
            <h2>Social Media</h2>
            <div className={styles.socialMediaWrapper}>
              <span>
                <img src={Instagram} alt="" width="20px" />
                <a
                  href="https://instagram.com/krimikopi"
                  style={{ textDecoration: "none" }}
                >
                  krimikopi
                </a>
              </span>
              <span>
                <img src={Whatsapp} alt="" width="20px" />
                0812423232
              </span>{" "}
              <span>
                <img src={Gmail} alt="" width="20px" />
                krimikopi@gmail.com
              </span>
            </div>
          </div>
          <div>
            <h1>Location</h1>
            <p>Jl.Bonto mangape 1A ,Sulawesi Selatan ,Makassar ,Tamalate</p>
          </div>
        </div>
        <div>
          <p>Copyrights © krimikopi 2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
