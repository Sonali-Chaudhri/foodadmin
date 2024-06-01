import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Modal,
  Form,

} from "react-bootstrap";
import "../Componanats/AllCss/Allfood.css";
const AllFood = () => {
  const [allfood, setallfood] = useState([]);
  const [Selectfooditem, setSelectfooditem] = useState({});
  const [showupmodel, setshowupmodel] = useState(false);
  const [foodprice, setfoodprice] = useState(0);
  const [showDeleteFood, setshowDeleteFood] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallfood")
      .then((result) => {
        console.log("Food data", result.data);
        setallfood(result.data);
      })
      .catch((err) => {});
  });

  //delete
  const Deletefood = async () => {
    const deleteitem = {
      foodid: Selectfooditem._id,
    };
    try {
      const result = await axios.delete(
        "http://localhost:5000/api/deletefood",
        {
          data: deleteitem,
        }
      );
      alert(" Food Item Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  //update
  const Update = async () => {
    const updateitem = {
      FoodPrice: foodprice,
      foodid: Selectfooditem._id,
    };
    axios
      .put("http://localhost:5000/api/updatefoodsprice", updateitem)
      .then((result) => {
        alert("Update changes!");
        setshowupmodel(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container className="foodcontainer">
        <Row>
          {allfood?.map((food, index) => {
            return (
              <Col key={index} sm={12} md={9} lg={3}>
                <Card className="AllfoodCard">
                  <img
                    className="foodimg"
                    src={`http://localhost:5000${food.FoodImage}`}
                  />
                  <h6 className="food-h6">{food.FoodType}</h6>
                  <h6 className="food-h6">{food.FoodCategory}</h6>
                  <h6 className="food-h6">{food.FoodName}</h6>
                  <h6 className="food-h6">{food.FoodCategory}</h6>
                  <h6 className="food-h6">{food.FoodPrice}</h6>
                  <h6 className="food-h6">{food.FoodImage}</h6>
                  <h6 className="food-h6">{food.IsAvailable}</h6>
                  <Card.Footer className="food-footer">
                    <button
                      className="food-button"
                      onClick={() => {
                        setSelectfooditem(food);
                        setshowDeleteFood(true);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="food-button-update"

                      onClick={() => {
                        setSelectfooditem(food);
                        setshowupmodel(true);
                      }}
                    >
                      Update
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Modal show={showupmodel} onHide={() => setshowupmodel(false)}>
        <Modal.Header closeButton>Update FoodPrice</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              onChange={(e) => setfoodprice(e.target.value)}
              type="text"
              placeholder="Enter Price"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => Update()}>OK</button>
          <button onClick={() => setshowupmodel(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteFood} onHide={() => setshowDeleteFood(false)}>
        <Modal.Header closeButton>Delete Food</Modal.Header>
        <Modal.Body>
          <Modal.Footer>
            <button onClick={() => Deletefood()}>OK</button>
            <button onClick={() => setshowDeleteFood(false)}>Cancel</button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AllFood;
