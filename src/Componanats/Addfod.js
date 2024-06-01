// import React from "react";
import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "../Componanats/Addfood.css";

const Addfod = () => {
  const [FoodName, setFoodName] = useState("");
  const [FoodType, setFoodType] = useState("");
  const [FoodCategory, setFoodCategory] = useState("");
  const [FoodImage, setFoodImage] = useState("");
  const [FoodPrice, setFoodPrice] = useState(0);

  const fooddata = async () => {
    const food = {
      FoodName: FoodName,
      FoodType: FoodType,
      FoodCategory: FoodCategory,
      FoodImage: FoodImage,
      FoodPrice: FoodPrice,
    };
    try {
      console.log(food);
      const add = await axios.post("http://localhost:5000/api/addfood", food);
      alert("Food Added!!");
      console.log(add);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (event) => {
    const fileData = new FormData();
    fileData.append("image", event.target.files[0]);

    try {
      let result = await axios.post(
        "http://localhost:5000/uploadfile",
        fileData
      );
      console.log("DATA", result.data);
      setFoodImage(result.data.filepath);
      alert("Uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="div">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fooddata();
        }}
      >
        <Form.Control
          className="form-control"
          type="text"
          onChange={(f) => setFoodName(f.target.value)}
          placeholder="FoodName"
        />
        <Form.Control
          className="form-control"
          type="text"
          onChange={(f) => setFoodType(f.target.value)}
          placeholder="Foodtype"
        />
      

        <Row className="form-control-category">
          <Form.Select
            value={FoodCategory}
            onChange={(f) => setFoodCategory(f.target.value)}
          >
            <option value="">Select Food Category</option>
            <option value="Veg">Veg</option>
            <option value="Nonveg">NonVeg</option>
            <option value="Soup">Soup</option>
            <option value="FastFood">FastFood</option>
            <option value="Dessert">Dessert</option>
          </Form.Select>
        </Row>

        <Form.Control
          className="form-control"
          type="text"
          onChange={(f) => setFoodPrice(f.target.value)}
          placeholder="FoodPrice"
        />

        <Form.Control
          className="form-control"
          type="file"
          onChange={(e) => uploadImage(e)}
          placeholder="Select Food Image"
        />

        <Button className="btn" type="add">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default Addfod;
