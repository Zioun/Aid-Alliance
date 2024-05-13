"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../provider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/need-volunteer">Need Volunteer Page</NavLink>
            </li>
            <li>
              <a>My Profile</a>
              <ul className="p-2">
                <li>
                  <NavLink to="/add-volunteer">Add Volunteer Post</NavLink>
                </li>
                <li>
                  <NavLink to="/manage-my-post">Manage My Post</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img src="https://i.ibb.co/PmpGsm2/360-F-272398712-z28-EMWLb-M9-Y8zojg51t-LZo4-D8-Ju3-R7-EG-1.jpg" className="h-[40px]" alt="" />
        <h1 className="font-sans font-semibold ml-2 md:text-2xl">AidAlliance</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-50">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          
          <li>
            <NavLink to="/need-volunteer">Need Volunteer Page</NavLink>
          </li>
          <li>
            <details>
              <summary>My Profile</summary>
              <ul className="p-2 w-[180px] rounded">
                <li>
                  <NavLink to="/add-volunteer">Add Volunteer Post</NavLink>
                </li>
                <li>
                  <NavLink to="/manage-my-post">Manage My Post</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?<div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title={user && user.displayName}>
              <img
                alt="Tailwind CSS Navbar component"
                src={user && user.photoURL}
              />
            </div>
          </div>
          
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={logOut}>Logout</a>
            </li>
          </ul>
        </div>:<Link to='/login'>
                <button
                  href="#"
                  class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  Login
                </button>
              </Link>}
      </div>
    </div>
  );
};

export default Navigation;
