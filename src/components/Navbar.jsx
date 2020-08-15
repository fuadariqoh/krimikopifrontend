import React, { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className={styles.navbarContainer}>
        <div className={styles.bungkusBox}>
          <div className={styles.boxDalamKiri}>
            <div>LOGO</div>
            <div className={styles.brandName}>Krimi Kopi </div>
          </div>
          <div className={styles.navbarMenu}>
            <a>About us</a>
            <a>Shop</a>
            <a>Login</a>
            <a>Register</a>
          </div>
          <div className={styles.Cart}>
            <div>Cart</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
