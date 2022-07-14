import React from "react";

export default function Item({ item, handleClick, notificationText }) {
  return (
    <section key={item.id}>
      <img className="item-img" src={item.img} alt={`${item.name}썸네일`}></img>
      <span className="item-name" data-testid={item.name}>
        {item.name}
      </span>
      <span className="item-price">{item.price}</span>
      <button
        className="item-button"
        onClick={(e) => handleClick(e, item.id)}
        aria-label={`${notificationText}`}
      >
        장바구니 담기
      </button>
    </section>
  );
}
