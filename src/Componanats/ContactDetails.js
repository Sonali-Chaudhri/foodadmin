import axios from "axios";
import React, { useEffect,useState } from "react";
import { Button, Card, Container, Row,Col } from "react-bootstrap";

const ContactDetails = () => {
  const [AllContacts, setAllContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallcontactlist")
      .then((result) => {
        console.log("Conatct data", result.data);
        setAllContacts(result.data);
        // alert('data added!!')
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <Container>
        <Row>
          {AllContacts?.map((data, index) => {
            return (
              <Col>
                <Card>
                  <h6>{data.Name}</h6>
                  <h6> {data.EmailId}</h6>
                  <h6> {data.Message}</h6>
                  {/* <Button> submit</Button> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ContactDetails;
