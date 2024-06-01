import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Customerslist = () => {
  const [allcustomes, setallcustomes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getcustomers")
      .then((result) => {
        console.log("AllCustomers data", result.data);
        setallcustomes(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <>
      <Container>
        <Row>
          {allcustomes?.map((user, index) => {
            return (
              <Col key={index} sm="12" md="6" lg="3">
                <Card>
                  <h6> {user.CustomerName}</h6>
                  <h6> {user.CustomerEmail}</h6>
                  <h6> {user.CustomerMobNo}</h6>
                  <h6> {user.CustomerPassword}</h6>
                  <h6> {user.CustomerAddress}</h6>
                  <h6> {user.CustomerCity}</h6>
                  <h6> {user.CustomerPinCode}</h6>
                  <h6> {user.IsActive}</h6>
                  <Card.Footer>
                    <Button class="btn btn-danger" onClick={()=>setallcustomes()}> Delete</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Customerslist;
