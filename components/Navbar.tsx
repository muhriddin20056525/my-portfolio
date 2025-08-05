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
            <a href="#home" className="header-link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="header-link">
              Skills
            </a>
          </li>
          <li>
            <Link href="#projects" className="header-link">
              Projects
            </Link>
          </li>
          <li>
            <a href="#contact" className="header-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
