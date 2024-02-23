import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { FaPlus } from "react-icons/fa";

const QUERY_USERS = gql`
    query GetUsers {
        appUsers {
            email
            username
            userId
        }
    }
`;

const AdminUsers = () => {
    const [dataSearch, setDataSearch] = useState([]);
    const [input, setInput] = useState("");

    const { data } = useQuery(QUERY_USERS);

    console.log(data);

    useEffect(() => {
        if (input === "") {
            setDataSearch(data?.appUsers);
            return;
        }

        const filteredResults = data?.appUsers.filter((item) =>
            item.username.toLowerCase().includes(input.toLowerCase())
        );

        setDataSearch(filteredResults);
    }, [data?.appUsers, input]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    return (
        <div className="flex w-full h-screen">
            <div className="px-10 py-5 bg-[#1C2434] text-white h-screen sticky inset-0">
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
                            value={input}
                            onChange={handleSearch}
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

                <div className="flex items-center justify-end mt-10 gap-2  ">
                    <FaPlus />
                    <Link to="/admin/users/add-user">
                        <p className="hover:text-[#8f8f8f] cursor-pointer">
                            Add a new user
                        </p>
                    </Link>
                </div>

                {/* Main */}
                <div className="mt-10 flex flex-col gap-2">
                    {dataSearch?.map((item) => (
                        <div
                            key={item.userId}
                            className="flex items-center justify-between bg-[#e4dede] p-2 rounded-[12px]"
                        >
                            <div className="flex gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    alt=""
                                    className="w-[50px] h-[50px] rounded-full"
                                />
                                <div>
                                    <h2>Email: {item.email}</h2>
                                    <p className="font-[200]">
                                        UserName: {item.username}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
