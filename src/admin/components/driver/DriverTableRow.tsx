import { useNavigate } from "react-router-dom";
import { deleteIcon, explore, info } from "../shared/Icons";
import toast from "react-hot-toast";
import { DriverTableRowProp } from "@/types/data";
import _ from "lodash";

export default function DriverTableRow({ user, index }: DriverTableRowProp) {
  const navigate = useNavigate();
  
  function handleExplore() {
    console.log("driver Id :" + user._id);
    navigate(`${user._id}`);
  }
  function handleDelete() {
    if (_.isEqual(confirm("Are you sure you want to delete!"), true)) {
      toast.error("currently deleting feature is not available");
    }
  }
  function handleHistory()  {
    navigate('/admin/rideshistory', { state: { userId: user._id } });
   

    
  }

  return (
    <tr className="bg-white border-b-2 text-center" key={index}>
      <td className="px-4 py-2">{(index + 1).toString()}</td>
      <td className="px-4 py-2">
        <img
          src={user.user.userImage}
          alt="user image"
          className="h-10 rounded"
        />
      </td>
      <td className="px-4 py-2">{`${user.user.firstName} ${user.user.lastName}`}</td>
      <td className="px-4 py-2">{user.user.address}</td>
      <td className="px-4 py-2">{user.user.phoneNumber}</td>
      <td className="px-4 py-2">{user.user.totalRide}</td>
      <td className="px-4 py-2">{user.ratings}</td>
      <td className={`px-4 py-2 `}>
        <span
          className={`${
            user.accountVerifyStatus === false
              ? "text-white bg-red-500 py-2 px-4 rounded"
              : "text-white bg-green-500 py-2 px-4 rounded"
          }`}
        >
          {user.accountVerifyStatus ? "Verified" : "Not verified"}
        </span>
      </td>
      <td className={`px-4 py-2 `}>
        <span
          className={`${
            user.user.status === false
              ? "text-white bg-red-500 py-2 px-4 rounded"
              : "text-white bg-green-500 py-2 px-4 rounded"
          }`}
        >
          {user.user.status ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="px-2 py-4">
        <button
          onClick={handleHistory}
          title="History"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white  text-base"
        >
          {info}
        </button>
        <button
          onClick={handleDelete}
          title="Delete"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-red-600 border-red-600 hover:bg-red-600  hover:text-white  text-base"
        >
          {deleteIcon}
        </button>
        <button
          onClick={handleExplore}
          title="View"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-green-600 border-green-600 hover:bg-green-600 hover:text-white  text-base"
        >
          {explore}
        </button>
      </td>
    </tr>
  );
}
