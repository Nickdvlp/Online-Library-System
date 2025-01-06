import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="h-1/2 bg-[url('/public/edi-animate-book.jpg')] bg-center opacity-90">
      <div className="bg-black opacity-75 flex justify-around p-2 font-extrabold font-serif">
        <NavBar />
      </div>
      <div className=" text-white bg-black opacity-75 flex md:p-12 text-md p-12 sm:p-3 sm:text-base md:text-2xl flex-wrap text-center justify-center pt-10 font-extrabold font-serif tracking-wider">
        <div className="py-4 text-5xl my-4">
          Welcome to Online Library System
        </div>
        Discover a world of knowledge and imagination at your fingertips. Browse
        and explore our vast collection of books, eBooks, and resources tailored
        to inspire every reader.
      </div>
    </div>
  );
};

export default Header;
