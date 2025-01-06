import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-blue-400 h-[100vh]">
      <div className="absolute left-6 m-6">
        <Link to={-1}>
          <img
            className=" w-8 h-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAcxJREFUSEu11UvIjVEUBuDnl5SQy8AQhTIhxMxEosRISTGQKBlSiokYiHL7J0qRjDBgJAYUSimEgZHCwFCJ3C+Jb52+v3a7/V2O+ledwdnnXe/a6z3vWnvEOMbIOHLrIp+OLViDxZiHL3iDh7iBe00XbCPfhtOY3dHdHezC2xxXIp+AC9gxhGQfsL76PEpzcvIgvlxLMQT3APqjli/kGkROfqg6OzIsa4L/jAV4l5PPqnWb0kD+uzo/jKMdxc9gX05+AMcaEn9iA0Lbpx3k3zEDv1JZHmNlIfErNuI+luFZD9niIrdS8o8IX6cRGq5NXLAQ5zPMTCzJzg7i+Bh5uORPBvhbd9IlQxS/neWew5705t8wOQNdrAckCkVMxYoME99PZGej2JuSv8L8gp4hw25Egb6a768ucjIlD5IY41JEBzuxvIdbIj9wz1Py1bjb4oSziCJd/8FLLMp9Ht8fYFVLgZu139vcuBnXSuRLq+QnmNjDyyVIbMh1Yz+UtuL2am9f+g/y17V1Y4oH0bTPN+EKJvUsEt3Gyn2f4tseizkIS0Un0xqKxMo4Vb1S1wtD2PnMBWcM1ta65bnVxvuEmImreNHWWdcb2lOVMuwfrIZPGN9iGC8AAAAASUVORK5CYII="
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-sm bg-blue-300 md:text-2xl m-28 p-10 rounded-xl text-center">
          Page Not Found
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
