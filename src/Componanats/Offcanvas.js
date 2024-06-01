import React, { useState } from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import "./AllCss/Offcanvas.css";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaCaretSquareRight } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineBorderColor } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";

const MyOffcanvas = () => {
  const [isShow, setisShow] = useState(false);

  const handleShow = () => {
    setisShow(true);
  };

  const handleHide = () => {
    setisShow(false);
  };
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>
            <BsListCheck onClick={() => handleShow()} size={30} color="white" />
            MENUMAVEN
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Offcanvas show={isShow} onHide={handleHide}>
        <Offcanvas.Body className="menu">
          <Offcanvas.Header className="welcome-text">
            "Welcome to MenuMaven – where flavor meets innovation!"
          </Offcanvas.Header>

          <Nav className="nav-colume">
            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/addfood">
                <IoMdAdd />
                Addfod
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/allfood">
                <FaCaretSquareRight />
                AllFood
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/customerlist">
                <FaList />
                Customerslist
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/">
                <RxDashboard />
                Dashboard
              </Link>
            </Nav.Link>

            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/orderfood">
                <MdOutlineBorderColor />
                Orderfood
              </Link>
            </Nav.Link>
            
            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/orderdetail">
                <TbListDetails />
                OrderDetail
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="style-offcanvas" to="/contactdetails">
                <TbListDetails />
                ContactDetails
              </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyOffcanvas;
