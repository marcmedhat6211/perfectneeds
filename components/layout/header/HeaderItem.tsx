import Link from "next/link";
import React from "react";

import classes from "../../../styles/layout/header/index.module.scss";

type HeaderItemType = {
  itemText: string;
  itemLink: string;
  isActive: boolean;
};

const HeaderItem: React.FC<HeaderItemType> = (props) => {
  return (
    <li className="nav-item">
      <Link className="test" href={props.itemLink}>
        <a
          className={`nav-link ${classes["nav-link"]} ${
            props.isActive ? classes.active : ""
          }`}
        >
          {props.itemText}
        </a>
      </Link>
    </li>
  );
};

export default HeaderItem;
