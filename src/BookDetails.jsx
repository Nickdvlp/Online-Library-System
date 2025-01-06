import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { MockData } from "../utils/MockData";

const BookDetails = () => {
  const bookId = useParams();
  const BookItems = useSelector((store) => store.cart.items);
  const Book = BookItems.map((item) => item).filter(
    (item) => item.id == bookId.id
  );
  const { author, cover_image, description, genre, publication_year, title } =
    Book[0];
  return (
    <div className="md:bg-blue-200 h-[100vh]">
      <div className="basis-1/4 pl-5 p-6 ">
        <Link to={-1}>
          <img
            className=" w-8 h-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAcxJREFUSEu11UvIjVEUBuDnl5SQy8AQhTIhxMxEosRISTGQKBlSiokYiHL7J0qRjDBgJAYUSimEgZHCwFCJ3C+Jb52+v3a7/V2O+ledwdnnXe/a6z3vWnvEOMbIOHLrIp+OLViDxZiHL3iDh7iBe00XbCPfhtOY3dHdHezC2xxXIp+AC9gxhGQfsL76PEpzcvIgvlxLMQT3APqjli/kGkROfqg6OzIsa4L/jAV4l5PPqnWb0kD+uzo/jKMdxc9gX05+AMcaEn9iA0Lbpx3k3zEDv1JZHmNlIfErNuI+luFZD9niIrdS8o8IX6cRGq5NXLAQ5zPMTCzJzg7i+Bh5uORPBvhbd9IlQxS/neWew5705t8wOQNdrAckCkVMxYoME99PZGej2JuSv8L8gp4hw25Egb6a768ucjIlD5IY41JEBzuxvIdbIj9wz1Py1bjb4oSziCJd/8FLLMp9Ht8fYFVLgZu139vcuBnXSuRLq+QnmNjDyyVIbMh1Yz+UtuL2am9f+g/y17V1Y4oH0bTPN+EKJvUsEt3Gyn2f4tseizkIS0Un0xqKxMo4Vb1S1wtD2PnMBWcM1ta65bnVxvuEmImreNHWWdcb2lOVMuwfrIZPGN9iGC8AAAAASUVORK5CYII="
          />
        </Link>
      </div>
      <div className=" md:flex md:flex-row md:justify-center md:items-start flex flex-col justify-center items-center gap-5">
        <div className="basis-1/4 ">
          <img
            className=" m-1 md:ml-10 md:h-3/5 md:w-3/5 h-80 w-52 rounded-xl "
            src={cover_image}
          />
        </div>
        <div className="bg-blue-300 basis-1/2 rounded-xl md:bg-blue-300 p-2 m-2 ">
          <div className=" ml-2 md:text-3xl text-2xl font-bold">
            {title} <span className="text-base font-normal">({genre})</span>
          </div>

          <div className="text-xl md:text-2xl pt-2 ml-2">By {author}</div>
          <div className="text-xl pt-1 ml-2">({publication_year})</div>
          <div className="text-xl md:text-2xl ml-2 pt-6 bg-blue-100 text-start  m-4 p-4">
            <span className="p-2 font-bold text-2xl">About the Book:</span>{" "}
            <br />
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
