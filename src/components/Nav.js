import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import { SiHomeadvisor } from "react-icons/si";

import { FaInfoCircle } from "react-icons/fa";
import { BiSolidContact, BiSolidFoodMenu } from "react-icons/bi";
import { MdOutlineClose, MdFeedback } from "react-icons/md";

import logo from "../assets/Airbnb-Logo.png";
import clsx from "clsx";

const Nav = () => {
    const currentPath = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    console.log(currentPath);

    const navLinks = [
        {
            title: "Home",
            icon: SiHomeadvisor,
            href: "/",
            active: currentPath.pathname === "/",
        },
        {
            title: "Type Room",
            icon: BiSolidFoodMenu,
            href: "/type-room",
            active: currentPath.pathname === "/type-room",
        },

        {
            title: "Contact",
            icon: BiSolidContact,
            href: "/contact",
            active: currentPath.pathname === "/contact",
        },
        {
            title: "About me",
            icon: FaInfoCircle,
            href: "/about-me",
            active: currentPath.pathname === "/about-me",
        },
        {
            title: "Feedback",
            icon: MdFeedback,
            href: "/feedback",
            active: currentPath.pathname === "/feedback",
        },
    ];

    return (
        <nav className="flex items-center justify-between px-8 py-6 lg:px-[50px]">
            <section className="flex items-center justify-center gap-4">
                <HiOutlineMenu
                    onClick={() => setIsMenuOpen(true)}
                    className="text-3xl md:hidden"
                />
                <Link to="/">
                    <img
                        src={logo}
                        alt=""
                        className="w-[50px] h-[50px] object-contain md:w-[60px] md:h-[60px]"
                    />
                </Link>
            </section>

            <section className="flex items-start justify-between gap-[100px]">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.href}
                        className="hidden text-gray-600 md:flex items-center justify-start flex-col gap-1 hover:text-black"
                    >
                        <link.icon className="text-[26px]" />
                        <p className="text-[16px]">{link.title}</p>
                    </Link>
                ))}
            </section>

            {/* Side bar mobile */}
            <div
                className={clsx(
                    " fixed h-full w-screen lg:hidden bg-black/30  backdrop-blur-sm top-0 right-0 -translate-x-full  transition-all ",
                    isMenuOpen && "translate-x-0"
                )}
            >
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
                    <MdOutlineClose
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-0 mb-5 text-3xl cursor-pointer"
                    />

                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.href}
                            className="font-semibold text-[20px] flex items-center justify-start gap-3"
                        >
                            <link.icon />
                            <p>{link.title}</p>
                        </Link>
                    ))}
                </section>
            </div>

            <section className="flex items-center justify-center gap-4">
                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <HiOutlineSearch className="" />
                    </div>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#FF385C] focus:border-[#FF385C] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                    />
                </div>
                <div>
                    <button className="px-3 py-2 bg-[#FF385C] rounded-[8px] text-white">
                        Get Started
                    </button>
                </div>
            </section>
        </nav>
    );
};

export default Nav;
