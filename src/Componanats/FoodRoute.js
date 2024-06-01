import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Addfod from "./Addfod";
import AllFood from "./AllFood";
import Orderfood from "./Orderfood";
import Customerslist from "./Customerslist";
import MyOffcanvas from "./Offcanvas";
import OrderDetail from "./OrderDetail";
import ContactDetails from "./ContactDetails";

const FoodRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <MyOffcanvas />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addfood" element={<Addfod />} />
          <Route path="/allfood" element={<AllFood />} />
          <Route path="/orderfood" element={<Orderfood />} />
          <Route path="/customerlist" element={<Customerslist />} />
          <Route path="/orderdetail" element={<OrderDetail />} />
          <Route path="/contactdetails"element={<ContactDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default FoodRoute;
