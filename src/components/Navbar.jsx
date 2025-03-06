"use client";
import { useState } from "react";
import Link from "next/link";
import xmark from "../../public/cancel.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center justify-between relative">
        <p className="text-xl">Logo</p>

        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <div className="space-y-1">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </div>

        <ul
          className={`navbar flex gap-5 justify-end text-[18px] lg:flex ${isOpen ? "block" : "block"}`}
        >
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About me</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="sidebar w-full h-full absolute top-0 left-0 bg-white">
          <img
            onClick={() => {
              setIsOpen(false);
            }}
            className="ml-[89.2%] mt-6"
            width={20}
            src="https://cdn.iconscout.com/icon/free/png-256/free-cancel-icon-download-in-svg-png-gif-file-formats--multiplication-multiply-x-symbols-pack-sign-icons-37917.png?f=webp&w=256"
            alt=""
          />
          <ul className=" flex justify-center items-center flex-col mt-10 gap-2 text-xl">
            <li>
              <Link className="homeee" onClick={()=>{
                setIsOpen(false)
              }} href={"/"}>Home</Link>
            </li>
            <li>
              <Link onClick={()=>{
                setIsOpen(false)
              }} href={"/about"}>About me</Link>
            </li>
            <li>
              <Link onClick={()=>{
                setIsOpen(false)
              }} href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link onClick={()=>{
                setIsOpen(false)
              }} href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
