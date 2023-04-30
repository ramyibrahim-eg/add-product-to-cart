import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar as NavbarBs, Container, Button } from "react-bootstrap";
import { useShoppingCard } from "../context/ShoppingCard";

const Navbar = () => {
  const { openCart, CartQuantity } = useShoppingCard();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle button-btn"
          onClick={openCart}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center card-nam">
            {CartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
