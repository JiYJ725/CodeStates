import React from "react";
import Item from "../components/Item";

function ItemListContainer({ items, addItemHandler }) {
  const handleClick = (id) => {
    // TODO: 아이템을 클릭하면 props로 받은 장바구니 담기 핸들러 실행
    addItemHandler(id);
  };
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={(id) => handleClick(id)} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
