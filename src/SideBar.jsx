import { Link } from "react-router-dom";
import { MockData } from "../utils/MockData";

export const SideBar = () => {
  const uniqueCategory = Array.from(
    MockData.reduce((map, book) => {
      if (!map.has(book.genre)) {
        map.set(book.genre, book);
      }
      return map;
    }, new Map()).values()
  );

  return (
    <div className="flex flex-col ">
      <div className=" px-2 pt-2 text-center text-2xl font-bold">Category</div>
      <div className="flex md:flex md:flex-col p-3 flex-wrap">
        {uniqueCategory.map((data) => (
          <Link key={data.id} to={`/Books/${data.genre}`}>
            <div className="p-1 rounded-xl  md:border-none sm:bg-blue-400 m-2 border md:p-2 md:text-center md:text-normal border-black hover:bg-blue-300 cursor-pointer">
              {data.genre}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
