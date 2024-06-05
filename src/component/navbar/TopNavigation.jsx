function TopNavigation() {
  return (
    <>
      <div className="w-full bg-black font-sans  flex text-white justify-between px-10 py-2">
        <ul className="flex  gap-10 cursor-pointer">
          <li className="hover:bg-lime-600 px-2 py-1">Home</li>
          <li className="hover:bg-lime-600 px-2 py-1">Menu</li>
          <li className="hover:bg-lime-600 px-2 py-1">About Us</li>
          <li className="hover:bg-lime-600 px-2 py-1">Contact Us</li>
        </ul>

        <div>
          <ul className="flex  gap-10 cursor-pointer">
            <li className="hover:bg-lime-600 px-2 py-1">Sign Up</li>
            <li className="hover:bg-lime-600 px-2 py-1">Log In</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopNavigation;
