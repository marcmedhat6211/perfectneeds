import Link from "next/link";
import React from "react";
import classes from "../../../styles/layout/header/index.module.scss";

const Header: React.FC = (props) => {
  return (
    <div id={classes["header-wrapper"]}>
      <div className="container">
        <header className={classes.header}>
          <nav className="navbar navbar-expand-md navbar-dark">
            {/* <Link
              className={`${classes["navbar-brand"]} float-left navbar-brand`}
              href="/"
            /> */}
            <div className={classes.hamburger}>
              <div className={classes["burger-main"]}>
                <div className={classes["burger-inner"]}>
                  <span className={classes.top}></span>
                  <span className={classes.mid}></span>
                  <span className={classes.bot}></span>
                </div>
              </div>
            </div>
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto menu">
                <li className="nav-item">
                  <Link className="test" href="/">
                    <a
                      className={`nav-link ${classes["nav-link"]} ${classes.active}`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="test" href="/portfolio">
                    <a className={`nav-link ${classes["nav-link"]}`}>
                      Portfolio
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
