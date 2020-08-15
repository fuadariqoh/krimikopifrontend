import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from "mdbreact";

import styles from "./Home.module.css";

class Home extends Component {
  state = {
    photos: "../assets/mainphoto.jpeg",
  };

  render() {
    return (
      <div>
        <MDBContainer fluid>
          <MDBRow className={styles.wrapperMain}>
            <MDBCol className={styles.boxPhoto}>
              {console.log(this.state.photos)}
              <img src={this.state.photos} alt="" />
            </MDBCol>
            <MDBCol>123</MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>Image</MDBCol>
            <MDBCol>Description</MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              {/*  This is order now there is two option
                            [Buy throught whatsapp] => Direct ke whatsapp
                            [Buy throught website] => kalau belum login direct ke login, kalau udah login direct ke Shop
                    */}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              {/* Want to know more about us ? Share your email
                                [Email]
                        
                        */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;
