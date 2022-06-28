import React from "react";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
import classes from "../../../styles/layout/header/index.module.scss";

const headerItemsData = [
  { id: 1, itemText: "Home", itemLink: "/" },
  { id: 2, itemText: "Portfolio", itemLink: "/portfolio" },
  { id: 3, itemText: "Services", itemLink: "/services" },
  { id: 4, itemText: "About Us", itemLink: "/about-us" },
  { id: 5, itemText: "Blogs", itemLink: "/blogs" },
  { id: 6, itemText: "Hiring", itemLink: "/hiring" },
  { id: 7, itemText: "Contact Us", itemLink: "/contact-us" },
  { id: 8, itemText: "Get A Quote", itemLink: "/get-quote" },
];

const Header = () => {
  const router = useRouter();

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
                {headerItemsData.map((item) => (
                  <HeaderItem
                    key={item.id}
                    itemText={item.itemText}
                    itemLink={item.itemLink}
                    isActive={router.route === item.itemLink}
                  />
                ))}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
