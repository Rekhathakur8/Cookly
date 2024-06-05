import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function BottomNav() {
  return (
    <div className="w-full flex justify-between px-10 py-5 shadow-md">
      <div className="flex gap-20">
        <h1 className="text-4xl font-semibold text-lime-900">COOKPAL</h1>
        <input
          type="text"
          placeholder="Enter what you like to eat today ?"
          className="w-96 h-10 rounded-md border-2 border-gray-300 outline-none px-5"
        />
      </div>
      <div className="flex gap-10 text-3xl">
        <FaHeart className="cursor-pointer" />
        <CgProfile className="cursor-pointer" />
      </div>
    </div>
  );
}

export default BottomNav;
