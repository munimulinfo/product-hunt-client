import Footer from "../Shared/Footer/Footer"
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderfooter = location.pathname.includes('login') || location.pathname.includes('register');
  return (
    <div>
      {!noHeaderfooter && <Navbar />}
      <Outlet />
      {!noHeaderfooter && <Footer />}
    </div>
  );
};

export default Main;
