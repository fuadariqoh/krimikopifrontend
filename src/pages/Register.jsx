import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Kopi2 from "../assets/kopi2.jpg";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.boxFoto}>
        <img src={Kopi2} width="100%" height="100%" alt="" />
      </div>
      <div className={styles.boxRegister}>
        <MDBContainer>
          <MDBRow className={styles.alignForm}>
            <MDBCol md="6">
              <form>
                <p className="h4 text-center mb-4">Sign up</p>
                <div className={styles.flexRegisterItem}>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Email Anda"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                  />
                  <br />
                </div>
                <div className={styles.flexRegisterItem}>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Password
                  </label>
                  <input
                    placeholder="Masukkan Password Anda"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                  />
                  <br />
                </div>
                <div className={styles.flexRegisterItem}>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Verify Password
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="Masukkan Password Anda"
                  />
                  <br />
                </div>
                <div className={styles.flexRegisterItem}>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Alamat Lengkap
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="Masukkan Alamat Lengkap Anda"
                  />
                  <br />
                </div>
                <div className="text-center mt-4">
                  <MDBBtn color="primary" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Register;
