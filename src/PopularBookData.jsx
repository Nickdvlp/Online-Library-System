import React from "react";
import { MockData } from "../utils/MockData";
import { Link } from "react-router-dom";

const PopularBookData = () => {
  const popularBook = Array.from(
    MockData.reduce((map, book) => {
      if (!map.has(book.genre)) {
        map.set(book.genre, book);
      }
      return map;
    }, new Map()).values()
  );

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 sm:m-4 gap-3 justify-items-center">
      {popularBook.map((book) => (
        <div
          className="flex flex-col justify-center items-center bg-blue-300 p-2 rounded-xl"
          key={book.id}
        >
          <img
            src={book.cover_image}
            alt={book.title}
            className="w-32 h-40 object-fill rounded-xl"
          />
          <div className="text-center font-bold pt-2">{book.title}</div>
          <Link to={`Details/${book.id}`}>
            <div className="bg-blue-400 px-2 rounded-xl py-1 mt-2 ">
              View More
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularBookData;
