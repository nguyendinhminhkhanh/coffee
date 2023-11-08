import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    const topMenu = document.getElementById("ct-top-menu");
    const toggleTopMenuIcon = document.getElementById(
      "ct-toggle-top-menu-icon"
    );
    document.addEventListener("click", (e) => {
      if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle("ct-topmenu-expanded");
        topMenu.classList.toggle("hidden");
      } else {
        if (topMenu.classList.contains("ct-topmenu-expanded")) {
          topMenu.classList.remove("ct-topmenu-expanded");
          topMenu.classList.toggle("hidden");
        }
      }
    });
  }, []);

  return (
    <div className="max-w-screen-2xl text-base mx-auto px-8">
      <header className="p-6 mx-auto">
        <nav className="flex flex-row justify-between items-center relative">
          <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
            <a href="/home">CoffeeStyle.</a>
          </div>

          <ul
            id="ct-top-menu"
            className="basis-3/6 hidden   lg:flex lg:items-center lg:justify-end lg:gap-8 text-sm text-gray-500 font-medium"
          >
            <li className="ct-top-menu-item">
              <Link to="/home">
                <button className="uppercase w-full">Home</button>
              </Link>
            </li>
            <li className="ct-top-menu-item">
              <Link to="/product">
                <button className="uppercase w-full">Products</button>
              </Link>
            </li>
            <li className="ct-top-menu-item">
              <Link to="/blog">
                <button className="uppercase w-full">Blog</button>
              </Link>
            </li>
            <li className="ct-top-menu-item">
              <Link to="/about">
                <button className="uppercase w-full">About</button>
              </Link>
            </li>
            <li className="ct-top-menu-item">
              <Link to="/contact">
                <button className="uppercase w-full">Contact</button>
              </Link>
            </li>
            <li className="ct-top-menu-item">
              <Link to="/styleGuid">
                <button className="uppercase w-full">StyleGuid</button>
              </Link>
            </li>
          </ul>

          <ul className="basis-3/6 lg:basis-1/6 flex justify-end  items-center ml-16 text-sm text-gray-500 font-medium">
            <li className=" ct-top-menu-item">
              <a href="/home" className="uppercase flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ct-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="mx-2">Login</span>
              </a>
            </li>
          </ul>

          <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px:2 sm:px-4">
            <svg
              id="ct-toggle-top-menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>

      <Outlet></Outlet>
    </div>
  );
};
export default Layout;
