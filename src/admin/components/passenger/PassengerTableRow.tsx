import { PassengerTableRowProp } from "@/types/data";
import toast from "react-hot-toast";
import { deleteIcon } from "../shared/Icons";

export default function PassengerTableRow({
  user,
  index,
}: PassengerTableRowProp) {
  function handleDelete() {
    if (confirm("Are you sure you want to delete!") == true) {
      toast.error("currently deleting feature is not available");
    }
  }

  return (
    <tr className="bg-white border-b-2 text-center">
      <td className="px-4 py-2">{(index + 1).toString()}</td>
      <td className="px-4 py-2">
        <img src={user.userImage} alt="user image" className="h-10 rounded" />
      </td>
      <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
      <td className="px-4 py-2">{user.address}</td>
      <td className="px-4 py-2">{user.phoneNumber}</td>
      <td className="px-4 py-2">{user.createdAt}</td>
      <td className="px-4 py-2">{user.totalRide}</td>
      <td className="px-4 py-2">
        <span
          className={`${
            user.status === false
              ? "text-white bg-red-500 py-2 px-4 rounded"
              : "text-white bg-green-500 py-2 px-4 rounded"
          }`}
        >
          {user.status ? "Active" : "Not Active"}
        </span>
      </td>
      <td className="px-2 py-4">
        <button
          onClick={handleDelete}
          title="Delete"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-red-600 border-red-600 hover:bg-red-600  hover:text-white  text-base"
        >
          {deleteIcon}
        </button>
      </td>
    </tr>
  );
}
