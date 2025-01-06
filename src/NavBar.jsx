import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="text-white text-lg tracking-widest flex gap-8 justify-around">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Browse-books">
          <li>Browse</li>
        </Link>
        <Link to="/Add-book">
          <li>Add</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
