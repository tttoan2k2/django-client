import React from "react";
import {
    FaGlobe,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-[50px] border-t border-[#949494] pt-10 font-[200] text-[#949494]">
            <div className="grid grid-cols-3 text-[16px] border-b border-[#949494] pb-10">
                <ul className="flex flex-col items-start justify-center gap-3">
                    <h2 className="font-[400] text-black">Support</h2>
                    <li className="hover:underline hover:text-black">
                        Help Center
                    </li>
                    <li className="hover:underline hover:text-black">
                        AirCover
                    </li>
                    <li className="hover:underline hover:text-black">
                        Anti-discrimination
                    </li>
                    <li className="hover:underline hover:text-black">
                        Disability support
                    </li>
                    <li className="hover:underline hover:text-black">
                        Cancellation options
                    </li>
                    <li className="hover:underline hover:text-black">
                        Report neighborhood concern
                    </li>
                </ul>
                <ul className="flex flex-col items-start justify-center gap-3">
                    <h2 className="font-[400] text-black">Hosting</h2>
                    <li className="hover:underline hover:text-black">
                        Help Center
                    </li>
                    <li className="hover:underline hover:text-black">
                        AirCover
                    </li>
                    <li className="hover:underline hover:text-black">
                        Anti-discrimination
                    </li>
                    <li className="hover:underline hover:text-black">
                        Disability support
                    </li>
                    <li className="hover:underline hover:text-black">
                        Cancellation options
                    </li>
                    <li className="hover:underline hover:text-black">
                        Report neighborhood concern
                    </li>
                </ul>
                <ul className="flex flex-col items-start justify-center gap-3">
                    <h2 className="font-[400] text-black">Airbnb</h2>
                    <li className="hover:underline hover:text-black">
                        Help Center
                    </li>
                    <li className="hover:underline hover:text-black">
                        AirCover
                    </li>
                    <li className="hover:underline hover:text-black">
                        Anti-discrimination
                    </li>
                    <li className="hover:underline hover:text-black">
                        Disability support
                    </li>
                    <li className="hover:underline hover:text-black">
                        Cancellation options
                    </li>
                    <li className="hover:underline hover:text-black">
                        Report neighborhood concern
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-between pt-[30px]">
                <ul className="flex items-center justify-center gap-3">
                    <p>© 2024 Airbnb, Inc</p>
                    <li className="hover:underline hover:text-black">Term</li>
                    <li className="hover:underline hover:text-black">
                        Sitemap
                    </li>
                    <li className="hover:underline hover:text-black">
                        Privacy
                    </li>
                    <li className="hover:underline hover:text-black">
                        Your Privacy Choices
                    </li>
                </ul>
                <div className="flex items-center justify-between text-black font-normal gap-5">
                    <div className="flex items-center justify-center gap-2">
                        <FaGlobe />
                        <h1>English (US)</h1>
                    </div>
                    <h1>$ USD</h1>
                    <ul className="flex items-center justify-center gap-3">
                        <li>
                            <FaFacebookSquare />
                        </li>
                        <li>
                            <FaTwitterSquare />
                        </li>
                        <li>
                            <FaInstagramSquare />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
