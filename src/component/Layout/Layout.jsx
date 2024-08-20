import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
