// import states
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import icons
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
// import images
import logo from "../../assets/logo.png";

// main function
function Nav() {
  // handling injected stylesheet
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .hidden-important {
        display: none !important;
      }
      @media (min-width: 768px) {
        .hidden-important {
          display: flex !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // usermenu managing toogle state
  const [userMenu, setUserMenu] = useState(false);

  // menu manging at mobile view
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* navigation bar */}
      <nav className="bg-Basil w-full">
        <div className="flex justify-between items-center">
          <div className="w-3/4  md:w-1/2 py-2 pl-5 lg:flex items-center gap-5">
            {/* logo */}
            <div>
              <img src={logo} alt="logo" className="w-40 md:w-60 md:p-2" />
            </div>

            {/* searchbar */}
            <div className="w-full flex items-center bg-white p-2 mt-3 rounded-full md:w-4/5">
              <FaSearch className="text-Slate text-xl ml-2 " />
              <input
                type="text"
                placeholder="Search for delicious recipes"
                className="w-full pl-6 outline-none"
              />
            </div>
          </div>

          {/* navigation menu */}
          <div
            className={`bg-Carrot absolute top-[7rem] right-3 md:bg-transparent md:static md:flex gap-5   p-3 px-5 pr-5 ${
              menu ? "block" : "hidden-important"
            }`}
          >
            <ul className="  text-xl text-white px-2 md:flex gap-6 cursor-pointer">
              <li className="hover:bg-Golden py-1 px-5 rounded-full">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-Golden py-1 px-5 rounded-full hover:text-white"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-Golden py-1 px-5 rounded-full">
                <NavLink to="/Recipes">Recipes</NavLink>
              </li>
              <li className="hover:bg-Golden py-1 px-5 rounded-full">
                <NavLink to="/Categories">Categories</NavLink>
              </li>
              <li className="hover:bg-Golden py-1 px-5 rounded-full">
                <NavLink to="/About">About</NavLink>
              </li>
              <li className="hover:bg-Golden py-1 px-5 rounded-full">
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>

            {/* user menu */}
            <div className="hidden-important text-white">
              <FaHeart className="mx-2 text-3xl cursor-pointer hover:text-Golden" />
              <div
                onMouseEnter={() => setUserMenu(true)}
                onMouseLeave={() => setUserMenu(false)}
              >
                <CgProfile
                  className={`mx-2 text-3xl cursor-pointer ${
                    userMenu && "text-Golden"
                  }`}
                />
                {/* user authencation */}
                <div
                  className={`bg-Carrot text-white p-3 text-semibold text-xl absolute top-[4rem] right-3 ${
                    userMenu ? "block" : "hidden"
                  }`}
                >
                  <Link to="/Register">Register /</Link>
                  <Link to="/Login">Login</Link>
                </div>
              </div>
            </div>
          </div>

          {/* menu icon in mobile view */}
          <div className="p-3 md:hidden" onClick={() => setMenu(!menu)}>
            <IoMenu
              className={`text-4xl  cursor-pointer ${
                menu ? "text-Golden" : "text-white"
              }`}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
