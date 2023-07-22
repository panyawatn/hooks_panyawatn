import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const products = [
  {
    id: 0,
    name: "เสื้อยืด",
    price: 300,
    image: "images/tshirt.jpg",
  },
  {
    id: 1,
    name: "หมวก",
    price: 500,
    image: "images/hat.jpg",
  },
  {
    id: 2,
    name: "กางเกงขาสั้น",
    price: 600,
    image: "images/shorts.jpg",
  },
];

function Product(props) {
  return (
    <>
      <div>
        <img src={props.image} className="img-fluid" alt="{props.name}" />
      </div>
      <div>{props.name}</div>
      <div>{props.price} บาท</div>
    </>
  );
}

function App() {
  // return (
  //   <Container className="p-3 my-3" style={{ backgroundColor: "gray" }}>
  //     <h1>ทดสอบการใช้งาน BootStrap</h1>
  //     <Button style={{ margin: "0px 3px" }}>Click</Button>
  //     <Button variant="success" style={{ margin: "0px 3px" }}>
  //       Click
  //     </Button>
  //     <Button variant="danger" style={{ margin: "0px 3px" }}>
  //       Click
  //     </Button>
  //     <img
  //       src="images/bg.jpg"
  //       className="img-fluid"
  //       alt="View"
  //       style={{ marginTop: "10px" }}
  //     />
  //   </Container>
  // );

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Container className="p-3 my-3">
      <Row className="border">
        <Col className="text-center">
          <Product
            name={products[0].name}
            price={products[0].price}
            image={products[0].image}
          />
          <Button
            style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + products[0].price);
            }}
          >
            เพิ่มลงตระกร้า
          </Button>
        </Col>
        <Col className="text-center">
          <Product
            name={products[1].name}
            price={products[1].price}
            image={products[1].image}
          />
          <Button
            style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + products[1].price);
            }}
          >
            เพิ่มลงตระกร้า
          </Button>
        </Col>
        <Col className="text-center">
          <Product
            name={products[2].name}
            price={products[2].price}
            image={products[2].image}
          />
          <Button
            style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + products[2].price);
            }}
          >
            เพิ่มลงตระกร้า
          </Button>
        </Col>
      </Row>

      <Row className="border">
        <Col className="text-center">
          <p>จำนวนสินค้าในตระกร้า {totalItems} ชิ้น</p>
          <p>ราคาสินค้าในตระกร้าทั้งหมด {totalPrice} บาท</p>
        </Col>
      </Row>
    </Container>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
