import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addBook } from "../slice/cartSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const initialFormData = {
    id: nanoid(),
    title: "",
    author: "",
    publication_year: "",
    genre: "",
    description: "",
    cover_image: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    navigate("/Browse-books");
  };
  return (
    <div>
      <div className=" bg-blue-300 p-2 flex md:text-2xl mt-5 items-center justify-center">
        <Link to={-1}>
          <img
            className="m-5 left-3 top-1 absolute w-8 h-8 bg-blue-300 rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAP5JREFUSEvt080qhVEUxvHfmQg5KRO5C4kOomRi4Ia4AOUiXMVJykdKUuYyMZCBMnIP3qWtpHPs9b51Bsqe7MnT/1nrWWv1TPD1Jsj2Dx+ZbptYVrGMk+ycsvB1XKCPDdxnDDLwNVxjDsc4zIBDU4NvNpWedwHX4Ds4w0zbir86G1f5Lk4L+ApHlSje8fBTMwq+grum2ulstqXD/Qx8CkPsFfET3ipGsT0HGXhooupLbOEV23hp0cmn9LdtmS0rOOhqUFvF2O0YaCeDGjy6C4ObZg4x6IgoLjT+6svAAzKPWywW+HOVnLjQ74wFLOExA64NNMsYq8vG0sno78I/AN/LIhgoh+AcAAAAAElFTkSuQmCC"
          />
        </Link>
        <div>Online Library System</div>
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-4 gap-6 bg-blue-200">
        <div className="md:text-2xl font-semibold">Add Your Book</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            className="border p-2 rounded-xl px-8 outline-none"
            placeholder="title"
          />
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            type="text"
            className="border p-2 rounded-xl px-8 outline-none"
            placeholder="author"
          />
          <input
            name="publication_year"
            value={formData.publication_year}
            onChange={handleChange}
            type="number"
            className="border p-2 rounded-xl px-8 outline-none"
            placeholder="year"
          />
          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            type="text"
            className="border p-2 rounded-xl px-8 outline-none"
            placeholder="genre"
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            type="text"
            className="border p-2 rounded-xl px-8 outline-none"
            placeholder="description"
          />
          <input
            name="cover_image"
            value={formData.cover_image}
            onChange={handleChange}
            type="text"
            className="border p-2 rounded-xl px-8 outline-none"
            placeholder=" Image Link"
          />

          <button type="submit" className="bg-blue-400 p-2 rounded-xl">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
