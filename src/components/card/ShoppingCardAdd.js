import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCard } from "../../context/ShoppingCard";
import CartItems from "./CartItems";
import formatCurrency from "./../FormatCurrency";
import storeItems from "../data/storeItems.json";

function ShoppingCardAdd({ isOpen }) {
  const { cartItems, closeCart } = useShoppingCard();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Card</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total: 
            {formatCurrency(
              cartItems.reduce((total, cartItems) => {
                const item = storeItems.find((i) => i.id === cartItems.id);
                return total + (item?.price || 0) * cartItems.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCardAdd;
