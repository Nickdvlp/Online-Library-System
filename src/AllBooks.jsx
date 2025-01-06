import { Link } from "react-router-dom";
import { MockData } from "../utils/MockData";
import { useState } from "react";
import { useSelector } from "react-redux";
const AllBooks = () => {
  const BookItems = useSelector((store) => store.cart.items);
  const [inputValue, setInputValue] = useState("");
  const [Data, setData] = useState(BookItems);
  const [filterCategory, setFilterCategory] = useState("");

  const BookCategory = Array.from(
    MockData.reduce((map, item) => {
      if (!map.has(item.genre)) {
        map.set(item.genre, item);
      }
      return map;
    }, new Map()).values()
  );

  const handleInputValue = () => {
    const filteredData = MockData.filter((book) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setData(filteredData);
  };

  const filteredBooks = filterCategory
    ? Data.filter((book) => book.genre == filterCategory)
    : Data;

  return (
    <div className=" bg-blue-100 flex flex-col justify-center items-center p-4 gap-4">
      <div className="flex justify-between items-center w-full">
        <Link to={-1}>
          <div>
            <img
              className="w-8 h-8 bg-blue-300 rounded-full"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAP5JREFUSEvt080qhVEUxvHfmQg5KRO5C4kOomRi4Ia4AOUiXMVJykdKUuYyMZCBMnIP3qWtpHPs9b51Bsqe7MnT/1nrWWv1TPD1Jsj2Dx+ZbptYVrGMk+ycsvB1XKCPDdxnDDLwNVxjDsc4zIBDU4NvNpWedwHX4Ds4w0zbir86G1f5Lk4L+ApHlSje8fBTMwq+grum2ulstqXD/Qx8CkPsFfET3ipGsT0HGXhooupLbOEV23hp0cmn9LdtmS0rOOhqUFvF2O0YaCeDGjy6C4ObZg4x6IgoLjT+6svAAzKPWywW+HOVnLjQ74wFLOExA64NNMsYq8vG0sno78I/AN/LIhgoh+AcAAAAAElFTkSuQmCC"
            />
          </div>
        </Link>
      </div>
      <div className="m-4">
        <input
          className=" outline-none px-8 p-2 rounded-l-xl bg-blue-200"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-400 p-2 rounded-r-xl"
          onClick={handleInputValue}
        >
          Search
        </button>
      </div>
      <div>
        <div className="text-center p-1">Category</div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="p-1 rounded-xl outline-none"
          name="selectedBooks"
        >
          {BookCategory.map((item) => {
            return (
              <option key={item.id} className="mx-2">
                {item.genre}
              </option>
            );
          })}
        </select>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 sm:m-4 gap-3 justify-items-center">
        {filteredBooks.map((book) => (
          <div
            className="flex flex-col justify-center items-center p-2 rounded-xl"
            key={book.id}
          >
            <img
              src={book.cover_image}
              alt={book.title}
              className="w-28 h-36 object-fill rounded-xl"
            />
            <div className="text-center text-xs md:text-base font-bold pt-2">
              {book.title}
            </div>
            <Link to={`/Details/${book.id}`}>
              <div className="bg-blue-400 px-2 rounded-xl py-1 mt-2 text-sm md:text-base">
                View More
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
