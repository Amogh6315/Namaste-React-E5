import { useEffect, useState } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on intial render(just once)
  //is dependency array is [btnLogin] => useEffect is called everytime btnLogin is updated
  useEffect(()=>{
    // console.log("useEffect is called");
    
  },[])

  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li> <Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
