import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="px-10 py-5 bg-[#1C2434] text-white h-screen">
                <Link to="/admin">
                    <h1 className="text-[30px] mb-10 cursor-pointer">Admin</h1>
                </Link>
                <div className="text-[18px] text-gray-500">
                    <Link to="/admin/places">
                        <p className="mb-5 cursor-pointer hover:text-white">
                            Places
                        </p>
                    </Link>
                    <Link to="/admin/users">
                        <p className=" cursor-pointer hover:text-white">
                            Users
                        </p>
                    </Link>
                </div>
            </div>

            <div className="w-full px-10 py-5">
                <div className="flex items-center justify-between shadow-md p-3">
                    <div className="relative hidden md:block text-[20px] w-[80%]">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-600">
                            <HiOutlineSearch className="" />
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-3 ps-10 text-sm text-gray-900 placeholder:text-[16px] placeholder:font-light  outline-none"
                            placeholder="Type to search..."
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div>
                            <h2 className="text-[18px]">Admin123</h2>
                            <p className="font-[200] text-[14px]">Admin Page</p>
                        </div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                            alt=""
                            className="w-[50px] h-[50px] rounded-full"
                        />
                    </div>
                </div>

                <h1 className=" text-center text-[40px] mt-[100px]">
                    Welcome to Admin Page
                </h1>
            </div>
        </div>
    );
};

export default Admin;
