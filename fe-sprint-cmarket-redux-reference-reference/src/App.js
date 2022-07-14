import React, { useState } from "react";
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import NotificationCenter from "./components/NotificationCenter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [notificationText, setNotificationText] = useState("");

  const getNotificationText = (text) => {
    setNotificationText(text);
  };

  console.log(notificationText);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer notificationText={notificationText} />}
        />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <NotificationCenter getText={getNotificationText} />
    </Router>
  );
}

export default App;
