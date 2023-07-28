import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  const NavLinks = [
    {
      name: "Janani Mayilarasu",
      Link: "/",
    }
  
  ];
  return (
    <div className={`header`}>
    {/* Left side */}
      <div className="LeftSection">
        
        {/* Nav links */}
        <div className="Links">
          {NavLinks.map((Data, index) => {
            return (
              <Link key={index} to={Data.Link}>
                  <p className={`NavLinks`}>{Data.name}</p>
              </Link>
            )
          })}
          <div className="now">
        <button Classname={`now`}>Now Available </button>
        </div>
          
        </div>
        

      </div>
          {/* Right side */}
      <div className="RightSection">
        <div className="img">
        <img
          src="/lin.png"
          alt=""
          className={`image`}
          style={{ width: 50, height: 50 }}
        />
        <img
          src="/insta.jpg"
          alt=""
          className={`image`}
          style={{ width: 50, height: 50 }}
        />
        <img
          src="/img.png"
          alt=""
          className={`image`}
          style={{ width: 50, height: 50 }}
        />
        </div>
      </div>

    </div>
  );
};

export default Navbar;