import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    var hambuger = document.getElementById("hamburger");
    var hhh = document.getElementById("hhh");
    var pop = true;
    hambuger.addEventListener("click", () => {
      if (pop) {
        hhh.style.display = "flex";
        pop = false;
      } else {
        hhh.style.display = "";
        pop = true;
      }
    });
  }, []);
  return (
    <>
      <div>
        <img
          id="hamburger"
          src="/logos/menu.png"
          alt="err"
          className="hamburger"
        />
        <nav className="h-11 left-0 fixed w-[100vw] box-shadow z-10">
          <div className="absolute px-7 pt-1 text-[20px]"> WELCOME </div>
          <ul id="hhh" className="flex gap-10 float-end text-[18px] p-2">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
            <li>
              <Link to="/project">PROJECT</Link>
            </li>
            <li>
              <a href="https://wa.me/085691941488/?text">CONTACT ME</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
