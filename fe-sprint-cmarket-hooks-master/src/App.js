import React, { useState } from "react";
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import { initialState } from "./assets/state";

function App() {
  // 상품리스트 페이지 아이템 목록
  const [items, setItems] = useState(initialState.items);

  // TODO: 아이템을 장바구니에 담으면 setCartItems를 통해 장바구니 목록에 추가
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  // TODO: 장바구니 담기 핸들러 구현하기(ItemListContainer에 addItemHandler props부여)
  const addItemHandler = (id) => {
    // TODO: 받은 id를 통해 장바구니 목록에 id가 존재하는지 확인
    // 존재하지 않을 경우에만 id를 추가하여 목록을 새롭게 갱신
    // 존재할 경우 수량 추가
    const updateItems = cartItems.filter((el) => el.itemId === id).length
      ? cartItems.map((el) => {
          // 추가되어있는 item이 있는 경우 수량 추가
          if (el.itemId === id) {
            el.quantity += 1;
            return el;
          } else return el;
        }) // 추가되어있는 item이 없는 경우 추가
      : [...cartItems, { itemId: id, quantity: 1 }];
    setCartItems(updateItems);
  };

  const deleteItemHandler = (deletedItem) => {
    setCartItems(deletedItem);
  };

  const changeItemQuantityHandler = (changedItem) => {
    setCartItems(changedItem);
  };

  // const itemsCount =
  //   cartItems.length &&
  //   cartItems.map((el) => el.quantity).reduce((acc, val) => acc + val);

  return (
    <Router>
      <Nav itemsCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              items={items}
              addItemHandler={(id) => addItemHandler(id)}
            />
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              items={items}
              deleteItemHandler={deleteItemHandler}
              changeItemQuantityHandler={changeItemQuantityHandler}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
