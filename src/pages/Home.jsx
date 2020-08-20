import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from "mdbreact";
import Photos from "../assets/image2.jpeg";
import Photos1 from "../assets/kingdom-741.png";
import Photos2 from "../assets/delivery-1.png";
import Photos3 from "../assets/pablo-1.png";
import Krimi1 from "../assets/krimi.jpeg";
import Krimi2 from "../assets/krimi2.jpeg";
import Telegram from "../assets/telegram.png";

import styles from "./Home.module.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <MDBContainer fluid>
          <MDBRow className={styles.wrapperMain}>
            <MDBCol className={styles.boxPhoto} sm={12} lg={6}>
              <img
                src={Photos}
                alt=""
                width="100%"
                height="100%"
                className={styles.imageKrimi}
              />
            </MDBCol>
            <MDBCol sm={12} lg={4}>
              <h2>Krimi Kopi</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                facere, aliquid aut sapiente iusto dolores ex. Ullam ea culpa
                inventore a laudantium minima voluptatem natus quo impedit.
                Aspernatur, mollitia tempore?
              </p>
              <button className={styles.btnHome}>More Info</button>
            </MDBCol>
          </MDBRow>
          <MDBRow className={styles.description}>
            <MDBCol sm={12} lg={4}>
              <img src={Photos1} alt="" height="100rem" />
              <h4>We Are made from best beans in town</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                maxime laboriosam adipisci! Expedita quas nulla, ab velit enim
                facilis illo ipsam, sapiente cumque obcaecati tenetur asperiores
                quos soluta. Maxime, quas?
              </p>
            </MDBCol>
            <MDBCol sm={12} lg={4}>
              <img src={Photos2} alt="" height="100rem" />
              <h4>Courier Delivery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                maxime laboriosam adipisci! Expedita quas nulla, ab velit enim
                facilis illo ipsam, sapiente cumque obcaecati tenetur asperiores
                quos soluta. Maxime, quas?
              </p>{" "}
            </MDBCol>
            <MDBCol sm={12} lg={4}>
              <img src={Photos3} alt="" height="100rem" />
              <h4>Fast response</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                maxime laboriosam adipisci! Expedita quas nulla, ab velit enim
                facilis illo ipsam, sapiente cumque obcaecati tenetur asperiores
                quos soluta. Maxime, quas?
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className={styles.menu1}>
            <div className={styles.menu1content}>
              <img src={Krimi1} height="100%" width="100%" alt="" />
            </div>
            <div className={styles.boxDeskripsi}>
              <div style={{ color: "white" }}>Krimi Kopi 1L</div>
              <div style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                sequi at fugiat? Iusto, est fugiat accusamus itaque consectetur
                animi voluptatibus saepe reiciendis? Aliquam expedita sapiente,
                omnis ipsam perspiciatis ab quam.
              </div>
              <button className={styles.btnHome}>Beli</button>
            </div>
          </MDBRow>
          <MDBRow className={styles.menu2}>
            {" "}
            <div className={styles.boxDeskripsi}>
              <div style={{ color: "black" }}>Krimi Kopi 400ml</div>
              <div style={{ color: "black" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                sequi at fugiat? Iusto, est fugiat accusamus itaque consectetur
                animi voluptatibus saepe reiciendis? Aliquam expedita sapiente,
                omnis ipsam perspiciatis ab quam.
              </div>
              <button className={styles.btnHome}>Beli</button>
            </div>
            <div className={styles.photoFlex}>
              <img src={Krimi2} height="100%" width="100%" alt="" />
            </div>
          </MDBRow>
          <MDBRow>
            <div className={styles.emailUpdate}>
              <div>
                <img src={Telegram} width="60em" alt="" />
              </div>
              <h3>Get Update From KrimiKopi</h3>
              <h6>Sign up for Promo , Stories , and Coffee Tips</h6>
              <div>
                <input type="text" placeholder="Your Email" />
                <button className={styles.btnSignEmail}>SIGN UP</button>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;
