import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../FormatCurrency";
import { useShoppingCard } from "../../context/ShoppingCard";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemsFromCart,
  } = useShoppingCard();
  const quantity = getItemsQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img src={imgUrl} variant="top" className="card-img" />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Card
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column store-btn">
              <div className="d-flex align-items-center justify-content-center store-btn">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} In Card</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemsFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
