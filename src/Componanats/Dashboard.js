import React, { useEffect, useState } from "react";
// import MyOffcanvas from "./Offcanvas";
import "./AllCss/Dashboard.css";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
// import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import FoodGraph from './FoodGraph';

const Dashboard = () => {
  const [allcustomers, setallcustomers] = useState();
  const [totaldishes, settotaldishes] = useState();
  const [totalorders, settotalorders] = useState();
  const [categoryData, setcategoryData] = useState([])
  //Customers count
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getCustomerCount")
      .then((result) => {
        console.log("Customers Data", result.data);
        setallcustomers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  //dishes count
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/totaldishescount")
      .then((result) => {
        console.log("Dishes Data", result.data);
        settotaldishes(result.data.totalDishesCount);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //Orders Count
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getTotalOrdersCount")
      .then((result) => {
        console.log("orders data", result.data);
        settotalorders(result.data.totalOrdersCount);
      })
      .catch((err) => {
        console.log(err);
      });
  });
 ///Graph 
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categorycount")
      .then((result) => {
        setcategoryData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  



  return (
    <>
  
  
      <h2 className="h6-dash">
        All-in-One Kitchen Control: Manage Menus, Orders, and Inventory
        Effortlessly
      </h2>
      <div className="div-container">
        <div className="div-card">
          <div className="div-dash">
            {" "}
            <BsPersonLinesFill />
            Customer's
            {allcustomers}
          </div>
          <div className="div-dash2">
            {" "}
            <BsReverseListColumnsReverse />
            Total Orders
            {totalorders}
          </div>
          <div className="dashthree">
            {" "}
            <FaBowlFood />
            Dishes
            {totaldishes}
          </div>
          <div>
          <FoodGraph categoryData={categoryData} />

      </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
