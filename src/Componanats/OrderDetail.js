import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./AllCss/OrderDetails.css";
import axios from "axios";

const OrderDetail = () => {
  const orderdata = useLocation().state;
  const [orderStatus, setOrderStatus] = useState("");
  console.log("OrderDetails==>", orderdata);

  const updateOrderStatus = async () => {
    const updatedata = {
      orderid: orderdata._id,
      OrderStatus: orderStatus,
    };
    console.log(updatedata);

    try {
      const result = await axios.put(
        "http://localhost:5000/api/updateorderstatus",
        updatedata
      );
      alert("Update Order Status");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="order-container">
      <div className="order-Details">
        <h3>Date: {orderdata.OrderDate}</h3>
        <h3>Current Status: {orderdata.OrderStatus}</h3>
        <h3>Current Total: {orderdata.OrderTotalAmount}</h3>

        <h3>Current Customer Name: {orderdata?.CustId?.CustomerName}</h3>
        <h3>Current Contact NO: {orderdata?.CustId?.CustomerMobNo}</h3>

        <div>
          <Form>
            <Form.Check
              className="formcheck"
              onChange={(e) => setOrderStatus(e.target.value)}
              type="radio"
              value="pending"
              label="pending"
              inline
              name="status"
            />
            <Form.Check
              className="formcheck"
              onChange={(e) => setOrderStatus(e.target.value)}
              type="radio"
              value="Dispatch"
              label="Dispatch"
              inline
              name="status"
            />
            <Form.Check
              className="formcheck"
              onChange={(e) => setOrderStatus(e.target.value)}
              type="radio"
              value="In Transit"
              label="In Transit"
              inline
              name="status"
            />
            <Form.Check
              className="formcheck"
              onChange={(e) => setOrderStatus(e.target.value)}
              type="radio"
              value="Delivered"
              label="Delivered"
              inline
              name="status"
            />
            <Form.Check
              className="formcheck"
              onChange={(e) => setOrderStatus(e.target.value)}
              type="radio"
              value="Cancel"
              label="Cancel"
              inline
              name="status"
            />
          </Form>
          <Button className=" order-button" onClick={() => updateOrderStatus()}>
            Update Status
          </Button>
        </div>
      </div>
      <div className="order-items">
        {orderdata?.FoodItems?.map((food, index) => (
          <Col key={index} sm={12} md={9} lg={3}>
            <Card className="order-card">
              <img
                src={`http://localhost:5000${food.FoodId.FoodImage}`}
                alt="Food"
              />{" "}
              <p></p>
              <h6>Food Name: {food.FoodId.FoodName}</h6>
              <h6>Price: {orderdata.OrderTotalAmount}</h6>
              <h6>Food Qty: {food.Qty}</h6>
              <h6> OrderStatus:{orderdata.OrderStatus}</h6>
            </Card>
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default OrderDetail;
