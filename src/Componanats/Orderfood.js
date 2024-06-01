import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Orderfood = () => {
  const [allorders, setallorders] = useState([]);
  const nevigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallorders")
      .then((result) => {
        console.log("All food Orders!!", result.data);
        setallorders(result.data);
      })
      .catch((err) => {});
  });

  //cancel order
  const cancel = async () => {
    const deleteorder = {
      orderid: allorders._id,
    };
    try {
      const result = await axios.delete(
        "http://localhost:5000/api/deleteorder",
        {
          data: deleteorder,
        }
      );
      alert("Order Cancel..");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          {allorders?.map((order, index) => {
            return (
              <Col sm="12" md="4" lg="4" key={index}>
                <Card>
                  <h6>{order.OrderDate}</h6>
                  <h6>{order.OrderStatus}</h6>
                  <h6>{order.OrderTotalAmount}</h6>
                  <h6>{order.CustId?.CustomerName}</h6>
                  <Card.Footer>
                    <Button
                      onClick={() => nevigate("/orderdetail", { state: order })}
                    >
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Orderfood;
