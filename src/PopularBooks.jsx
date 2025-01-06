import PopularBookData from "./PopularBookData";
import { SideBar } from "./SideBar";

const PopularBooks = () => {
  return (
    <div className="bg-blue-200 grid sm:grid-cols-[13%_1fr]">
      <SideBar />

      <div>
        <h2 className="py-5 my-3 text-center font-semibold text-2xl bg-blue-300">
          Our Popular Books
        </h2>
        <PopularBookData />
      </div>
    </div>
  );
};

export default PopularBooks;
