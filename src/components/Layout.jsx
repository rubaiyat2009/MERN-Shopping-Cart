/* eslint-disable react/prop-types */
import Header from "./shared/header";
import Footer from "./shared/footer";

import "bootswatch/dist/lux/bootstrap.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
