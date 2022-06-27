import React, { Fragment } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
