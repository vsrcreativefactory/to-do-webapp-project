import React, { useState } from "react";
import { phonesData } from "./Product.data";
import { Card, Button } from "react-bootstrap";

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const decrement = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem); //important
  };

  const increment = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem); //important
  };
  return (
    <div>
      <h1 className="bg-secondary text-white">Products</h1>
      {items.map((item) => (
        <div className="d-inline-flex" key={item.id}>
          <Card
            className="shadow p-3 m-2 bg-body rounded"
            style={{ width: "14rem" }}
          >
            <Card.Img
              className="p-2"
              height={{ width: "14rem" }}
              variant="top"
              src={require(`./assets/${item.image}.png`)}
            />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h5 className="text-primary">
                Price: <b>{item.price}</b>
              </h5>
              <div>
                <p>
                  Qty:
                  <Button
                    onClick={() => decrement(item.id)}
                    className="m-1 btn btn-danger"
                  >
                    -
                  </Button>
                  <b>{item.qty}</b>
                  <Button onClick={() => increment(item.id)} className="m-1">
                    +
                  </Button>
                </p>
              </div>
              <Button variant="warning">Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
