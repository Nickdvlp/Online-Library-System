import { Link, useParams } from "react-router-dom";
import { MockData } from "../utils/MockData";

const CategorizedBooks = () => {
  const ParamData = useParams();

  const categorizedBooks = MockData.filter(
    (item) => item.genre == ParamData.Category
  );
  return (
    <>
      <div className="flex items-center justify-center bg-blue-200">
        <Link className="absolute left-3" to={-1}>
          <img
            className=" w-8 h-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAcxJREFUSEu11UvIjVEUBuDnl5SQy8AQhTIhxMxEosRISTGQKBlSiokYiHL7J0qRjDBgJAYUSimEgZHCwFCJ3C+Jb52+v3a7/V2O+ledwdnnXe/a6z3vWnvEOMbIOHLrIp+OLViDxZiHL3iDh7iBe00XbCPfhtOY3dHdHezC2xxXIp+AC9gxhGQfsL76PEpzcvIgvlxLMQT3APqjli/kGkROfqg6OzIsa4L/jAV4l5PPqnWb0kD+uzo/jKMdxc9gX05+AMcaEn9iA0Lbpx3k3zEDv1JZHmNlIfErNuI+luFZD9niIrdS8o8IX6cRGq5NXLAQ5zPMTCzJzg7i+Bh5uORPBvhbd9IlQxS/neWew5705t8wOQNdrAckCkVMxYoME99PZGej2JuSv8L8gp4hw25Egb6a768ucjIlD5IY41JEBzuxvIdbIj9wz1Py1bjb4oSziCJd/8FLLMp9Ht8fYFVLgZu139vcuBnXSuRLq+QnmNjDyyVIbMh1Yz+UtuL2am9f+g/y17V1Y4oH0bTPN+EKJvUsEt3Gyn2f4tseizkIS0Un0xqKxMo4Vb1S1wtD2PnMBWcM1ta65bnVxvuEmImreNHWWdcb2lOVMuwfrIZPGN9iGC8AAAAASUVORK5CYII="
          />
        </Link>
        <div className="text-center text-xl bg-blue-300 rounded-xl m-4 p-4 md:text-2xl ">
          Books By Category
        </div>
      </div>
      <div className="bg-blue-200 p-3  mt-4 grid grid-cols-3 sm:grid-cols-5 sm:m-4 gap-3 justify-items-center">
        {categorizedBooks.map((book) => (
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
            <Link to={`/Details/${book.id}`}>
              <div className="bg-blue-400 px-2 rounded-xl py-1 mt-2 ">
                View More
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorizedBooks;
