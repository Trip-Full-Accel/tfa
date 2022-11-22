import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { CloseButton, Modal } from "reactstrap";
import Topbtn from "./topbtn";
function NavBar() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  function cambiar_login() {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_login";
    document.querySelector(".cont_form_login").style.display = "block";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.opacity = "1";
    }, 400);

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
    }, 200);
  }

  function cambiar_sign_up(at) {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_sign_up";
    document.querySelector(".cont_form_sign_up").style.display = "block";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.opacity = "1";
    }, 100);

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.display = "none";
    }, 400);
  }

  function ocultar_login_sign_up() {
    document.querySelector(".cont_forms").className = "cont_forms";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
      document.querySelector(".cont_form_login").style.display = "none";
    }, 500);
  }

  const navigate = useNavigate();

  const linkTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <>
        <Navbar
          bg="dark"
          variant="dark"
          style={
            {
              // display: "flex",
              // width: "100%",
              // position: "fixed",
              // zIndex: "2",
            }
          }
        >
          <Container>
            <Navbar.Brand
              onClick={() => {
                linkTo("/");
              }}
              style={{ cursor: "pointer" }}
            >
              TripFullAccel
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  linkTo("/tfaInfo");
                }}
              >
                사이트 설명
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  linkTo("/tripstart");
                }}
              >
                여행가기
                {/* <Link to="/tripstart">여행가기</Link> */}
              </Nav.Link>
              <Nav.Link onClick={toggle}>Join Us</Nav.Link>
            </Nav>
          </Container>

          {/* modal code */}
          <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
            <div class="cotn_principal">
              <div class="cont_centrar">
                <div class="cont_login">
                  <div class="cont_info_log_sign_up">
                    <div class="col_md_login">
                      <div class="cont_ba_opcitiy">
                        <h2>LOGIN</h2>
                        <p>
                          Welcome Back
                          <br />
                          To TRIP FULL ACCEL!
                        </p>
                        <button
                          class="btn_login"
                          onClick={() => cambiar_login()}
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                    <div class="col_md_sign_up">
                      <div class="cont_ba_opcitiy">
                        <h2>SIGN UP</h2>

                        <p>
                          Create your Trip!
                          <br />
                          We will help you on your journey
                        </p>

                        <button
                          class="btn_sign_up"
                          onClick={() => cambiar_sign_up()}
                        >
                          SIGN UP
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="cont_back_info">
                    <div class="cont_img_back_grey">
                      <img
                        src="https://cdn.mediayonhap.com/news/photo/202101/50659_40673_158.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="cont_forms">
                    <div class="cont_img_back_">
                      <img
                        src="https://cdn.mediayonhap.com/news/photo/202101/50659_40673_158.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cont_form_login">
                      <a onClick={() => ocultar_login_sign_up()}>
                        {/* <i
                          class="material-icons"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                        >
                          back
                        </i> */}
                        <CloseButton />
                      </a>
                      <h2>LOGIN</h2>
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <button class="btn_login" onClick={() => cambiar_login()}>
                        LOGIN
                      </button>
                    </div>

                    <div class="cont_form_sign_up">
                      <a onClick={() => ocultar_login_sign_up()}>
                        {/* <i class="material-icons">back</i><</> */}
                        <CloseButton />
                      </a>
                      <h2>SIGN UP</h2>
                      <input type="text" placeholder="Email" />
                      <input type="text" placeholder="User" />
                      <input type="password" placeholder="Password" />
                      <input type="password" placeholder="Confirm Password" />
                      <button
                        class="btn_sign_up"
                        onClick={() => cambiar_sign_up()}
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <Topbtn></Topbtn>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
