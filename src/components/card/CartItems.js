import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/storeItems.json";
import formatCurrency from "./../FormatCurrency";
import { useShoppingCard } from "../../context/ShoppingCard";

const CartItems = ({ id, quantity }) => {
  const { removeItemsFromCart } = useShoppingCard();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <img src={item.imgUrl} alt={item.name} className="img-card" />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted font-size">×{quantity}</span>
          )}
          <div className="text-muted">{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemsFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItems;
