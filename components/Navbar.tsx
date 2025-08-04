"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container">
        <Link href={"/"} className="header-logo">
          Davlatov Muhriddin
        </Link>

        <RxHamburgerMenu
          className="menu-toggle"
          onClick={() => setMobile(!mobile)}
        />

        <ul className={`header-links ${mobile && "show"}`}>
          <li>
            <a href="#" className="header-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="header-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="header-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="header-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
