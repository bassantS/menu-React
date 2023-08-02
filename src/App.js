import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Catageory from "./components/Catageory";
import ListItem from "./components/ListItem";
import "./index.css";
import { items } from "./data";

function App() {
  //view
  const [itemsData, setItemsData] = useState(items);

  //get category dynamic from data
  const allCat = ["الكل", ...new Set(items.map((i) => i.category))];

  //filter by category
  const filterByCat = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container className="">
        <Header />
        <Catageory filterByCat={filterByCat} allCat={allCat} />
        <ListItem itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
