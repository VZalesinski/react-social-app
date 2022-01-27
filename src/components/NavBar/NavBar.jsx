import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <a>Music</a>
        </li>
        <li className={style.item}>
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
