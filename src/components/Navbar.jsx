import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.jpg";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import UserProfilePage from "./UserProfilePage";
import { RiProfileFill } from "react-icons/ri";
import { LuContact, LuContactRound } from "react-icons/lu";

const Navbar = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  // Dummy user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, City, Country",
    phone: "+1234567890",
    orders: [
      { id: "ORD123", date: "2024-12-01", total: 99.99 },
      { id: "ORD124", date: "2024-12-05", total: 49.99 },
    ],
  };

  const handleLogout = () => {
    alert("Logged out");
    setIsProfileVisible(false);
    // Add your logout logic here
  };

  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50 bg-white/20"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto  scale-125 hover:scale-150 transition-all duration-[400ms]`}
            />
          </div>
          <ul className="flex items-center justify-center gap-6">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                onClick={() => setIsProfileVisible(true)}
                className={`icon-style scale-125 ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              >
                {" "}
                🧑 {/* Replace with your Profile Icon */}{" "}
              </button>
            </li>

            <li className="grid items-center">
              <button
                onClick={() => setIsLoginModalVisible(true)}
                className={` hover:scale-110 transition-all duration-300 hover:text-slate-900 bg-white/75 text-blue-500 px-4 py-[2px] rounded-lg hover:bg-gray-100 ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              >
                login
              </button>
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>

        {/* Modals */}
        <LoginModal
          isVisible={isLoginModalVisible}
          onClose={() => setIsLoginModalVisible(false)}
          onSignup={() => {
            setIsLoginModalVisible(false);
            setIsSignupModalVisible(true);
          }}
        />
        <SignupModal
          isVisible={isSignupModalVisible}
          onClose={() => setIsSignupModalVisible(false)}
        />

        {/* User Profile Page */}
        {isProfileVisible && (
          <UserProfilePage user={user} onLogout={handleLogout} />
        )}
      </header>
    </>
  );
};

export default Navbar;
