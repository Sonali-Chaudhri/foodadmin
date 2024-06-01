import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodRoute from "./Componanats/FoodRoute";
// import Burger from "./Componanats/Img/Burger";
import { Form } from "react-router-dom";
import Burger from "./Burger";

function App() {
  return (
    <div>
      <FoodRoute />
      {/* <Burger/> */}
    </div>
  );
}

export default App;
