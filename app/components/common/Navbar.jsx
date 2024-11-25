"use client";

import "@styles/common/navbar.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="containeer flex items-center justify-between ">
        <div className="logo flex items-center">
          <div className="logo-icon">
            <Image
              src={"/assets/images/Group 1171274933.png"}
              alt="unique stays logo"
              width={59.27}
              height={104.88}
              quality={100}
            />
          </div>
          <div className="phone-logo">
            <Image
              src={"/assets/images/Group 1171274933.png"}
              alt="unique stays logo"
              width={40}
              height={70}
              quality={100}
            />
          </div>
          <h1>unique stays</h1>
        </div>
        <nav className={`nav flex items-center ${isOpen && "open"}`}>
          <ul className="sm:flex sm:flex-column flex items-center">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/">Our Villas </Link>
            </li>
            <li>
              <Link href="/">yachts rentals </Link>
            </li>
            <li>
              <Link href="/">blog</Link>
            </li>
            <li>
              <Link href="/">about </Link>
            </li>
            <li>
              <Link href="/">Contact us </Link>
            </li>
          </ul>
        </nav>

        {!isOpen ? (
          <IoMenu
            onClick={() => setIsOpen(true)}
            className="sm:block md:hidden menu prime"
          />
        ) : (
          <IoClose
            onClick={() => setIsOpen(false)}
            className="sm:block md:hidden menu prime"
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
