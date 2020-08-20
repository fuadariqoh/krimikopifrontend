import React, { useState, useEffect } from "react";
import fotoKopi from "../assets/kopi.jpg";
import styles from "./Login.module.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxFoto}>
        <img src={fotoKopi} width="100%" height="100%" alt="" />
      </div>
      <div className={styles.boxLogin}>
        <h2 style={{ marginTop: "5rem" }}>Sign in </h2>
        <MDBContainer>
          <MDBRow className={styles.alignForm}>
            <MDBCol md="6">
              <form>
                <div className={styles.flexLoginItem}>
                  <label htmlFor="defaultFormLoginEmailEx">Your email</label>
                  <input
                    placeholder="Masukkan Email Anda"
                    type="email"
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                  />
                </div>
                <br></br>
                <div className={styles.flexLoginItem}>
                  <label
                    htmlFor="defaultFormLoginPasswordEx"
                    className="grey-text"
                  >
                    Your password
                  </label>
                  <input
                    placeholder="Masukkan Password Anda"
                    type="password"
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                  />
                </div>

                <div className="d-flex mt-4 justify-content-between">
                  <MDBBtn color="info" type="submit">
                    Login
                  </MDBBtn>
                  <a href="">Lupa Password?</a>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <div className={styles.boxLoginAlternative}>
              <div className={styles.borderLine}></div>
              <div>Login With Facebook</div>
              <div>Login With Google</div>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Login;
