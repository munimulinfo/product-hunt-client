import React, { useContext } from "react";
import {
  FaBars,
  FaInstagram,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Context";
import ActiveLink from "../components/ActiveLink";

const Main = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div
        className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-10 py-5">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
           <FaBars className="text-4xl"></FaBars>
            <h1 className="text-xl">InstaGram</h1>
          </label>
          <Outlet />
        </div>
        <div className="drawer-side fixed">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-64 bg-pink-500  min-h-full text-white text-lg">
            <div className="flex flex-col mt-6 mb-5">
              <div className="text-white flex justify-start items-center gap-1">
                <FaInstagram className="text-4xl"></FaInstagram>
                <h4 className="text-4xl   ">
                  InstraGram
                </h4>
              </div>
              
            </div>
            {/* Sidebar content here */}
            <>
              <li className="text-purple-500 font-bold bg-white rounded-lg flex  justify-start ">
              <div className="flex justify-start items-center gap-2">
                {
                  user?.photoURL ? <img src={user.PhotoURL} className="w-10 h-10" alt="logo" /> :
                    <FaUser className="w-5 h-5" ></FaUser>
                }
                <h1 className="font-sans text-xl">
                  {user?.displayName}
                </h1>

              </div>
              </li>
              <ActiveLink to="/">
                <li className="text-purple-600 my-2 bg-white rounded-md font-bold">
                  <a>
                    <FaUsers />
                    All Rells
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/myrells">
                <li className="text-purple-600 mb-2 bg-white rounded-md font-bold">
                  <a>
                    <FaUser />
                    My Rells
                  </a>
                </li>
              </ActiveLink>
              <li className="text-red-600 bg-white rounded-md font-bold" onClick={handleLogOut}><a>LogOut</a></li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
