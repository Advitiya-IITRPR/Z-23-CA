import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import "./navbar-style.css";

function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="d-flex">
            {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
            {(() => {
              if (props.email) {
                return (
                  <small>
                    {" "}
                    <AiOutlineUser style={{ marginRight: "2px" }} />{" "}
                    {props.email}
                  </small>
                );
              } else {
                return <small>Guest User</small>;
              }
            })()}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(!expand);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(!expand)}
                >
                  <AiOutlineHome style={{ marginRight: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="#about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginRight: "2px" }} /> About
                </Nav.Link>
              </Nav.Item> */}
              {(() => {
                if (props.email) {
                  return (
                    <>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/profile"
                          onClick={() => updateExpanded(!expand)}
                        >
                          <AiOutlineUser style={{ marginRight: "2px" }} />{" "}
                          Profile
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          onClick={() => {
                            updateExpanded(!expand);
                            props.showLogout === 1
                              ? props.setShowLogout(2)
                              : props.setShowLogout(1);
                          }}
                        >
                          <span className="material-symbols-outlined">
                            logout
                          </span>{" "}
                          Logout
                        </Nav.Link>
                      </Nav.Item>
                    </>
                  );
                }
              })()}
              {(() => {
                if (!props.email) {
                  return (
                    <>
                      {(() => {
                        if (scrollPosition > 500) {
                          return (
                            <Nav.Item>
                              <Nav.Link
                                as={Link}
                                to="/signup"
                                onClick={() => updateExpanded(!expand)}
                              >
                                REGISTER
                              </Nav.Link>
                            </Nav.Item>
                          );
                        }
                      })()}
                      <Nav.Item className="fork-btn">
                        <Nav.Link
                          as={Link}
                          to={"/login"}
                          onClick={() => updateExpanded(!expand)}
                          className="fork-btn-inner"
                        >
                          LOG IN
                        </Nav.Link>
                      </Nav.Item>
                    </>
                  );
                }
              })()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
