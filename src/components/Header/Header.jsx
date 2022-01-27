import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/194/194279.png"
        alt=""
        className={style.img}
      />
      <h1 className={style.title}>DogBook</h1>
    </header>
  );
};

export default Header;
