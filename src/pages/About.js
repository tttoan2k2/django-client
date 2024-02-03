import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { FaHeart, FaMoneyBillAlt, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const data = [
    {
        icon: FaHeart,
        title: "Find your ideal trip",
        des: "Easily compare 50,000+ itineraries by 1,000+ brands",
    },
    {
        icon: MdEmail,
        title: "Choose better",
        des: "Candid reviews by trusted experts and travelers like you",
    },
    {
        icon: FaMoneyBillAlt,
        title: "Save real money",
        des: "Access member only offers, save $600+",
    },
    {
        icon: FaGlobe,
        title: "Connect",
        des: "With fellow travel lovers and curious world explorers",
    },
];

const About = () => {
    return (
        <div className="bg-[#F8F7FC]">
            <Nav />
            <img
                className="h-[500px]  w-full object-cover"
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg"
            ></img>

            <div className="flex items-start justify-between mt-[50px] bg-white mx-[100px] p-10 gap-10 rounded-xl">
                <div className="w-[60%]">
                    <h1 className="text-5xl font-bold text-center">
                        Our Mission
                    </h1>
                    <h2 className="mt-10 mb-10 text-center text-2xl text-[#666666]">
                        Connecting world travelers with wonderful places,
                        people, and experiences.
                    </h2>
                    <p className="text-[#666666] leading-9 text-[18px]">
                        We were all born to explore. Whatever travel means to
                        you, Travelstride provides the path to finding the
                        perfect experience and the right balance of comfort and
                        adventure. Travelstride is the #1 community marketplace
                        for extraordinary world travel, made easy. We host more
                        than 50,000 expert-planned trips from group tour
                        packages to luxury, tailor-made trips, to expedition
                        cruises and independent adventures. With itineraries
                        across every continent planned by 1,600+ of the best
                        local experts and global companies.
                    </p>
                    <p className="font-semibold mt-10  text-[20px]">
                        Travelstride enables travelers of all stripes to explore
                        the world with curiosity, confidence, and connection.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/mission_img-1.jpg"></img>
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/mission_img-2.jpg"></img>
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/mission_img-3.jpg"></img>
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/mission_img-4.jpg"></img>
                </div>
            </div>

            <h1 className="text-5xl font-bold text-center mt-[60px] mb-10">
                Why Travelstride
            </h1>

            <div className="flex items-center justify-between mx-[100px] gap-3">
                {data.map((item) => {
                    return (
                        <div className="bg-white rounded-[8px] p-5 flex items-center justify-center flex-col gap-5">
                            <item.icon className="text-[48px] text-[#FF385C] mb-5" />
                            <h1 className="text-[20px] font-semibold">
                                {item.title}
                            </h1>
                            <p className="text-center text-[#666666] ">
                                {item.des}
                            </p>
                        </div>
                    );
                })}
            </div>

            <h1 className="text-2xl text-center mt-[60px] mb-6 text-[#666666]">
                Travel confidently in a changing world
            </h1>

            <div className="flex items-center justify-center pb-[100px]">
                <button className="px-9 py-3 bg-[#FF385C] rounded-[8px] text-white text-[20px] hover:bg-[#e05972]">
                    Join Us
                </button>
            </div>

            <div className="bg-white pt-4 py-12">
                <h1 className="py-10 text-center text-[32px] font-bold">
                    View Travel
                </h1>

                <div className="grid grid-cols-4 gap-5 px-[100px]">
                    <img
                        className=""
                        src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/tripcounts.jpg"
                    ></img>
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/travelbrands.jpg"></img>
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/reviews.jpg"></img>
                    <img src="https://cdn.travelstride.com/cdn/899191/skin/frontend/default/travelstride/images/countries.jpg"></img>
                    <img
                        className="rounded-xl"
                        src="https://cdn.forevervacation.com/uploads/tour/images/tour_320_6782.jpg?tr=w-353,h-376"
                    ></img>
                    <img
                        className="rounded-xl"
                        src="https://cdn.forevervacation.com/uploads/tour/danang-instagram-tour-most-famous-spots-2029.jpg?tr=w-353,h-376"
                    ></img>
                    <img
                        className="rounded-xl"
                        src="https://cdn.forevervacation.com/uploads/tour/images/tour_127_3371.jpg?tr=w-353,h-376"
                    ></img>
                    <img
                        className="rounded-xl"
                        src="https://cdn.forevervacation.com/uploads/tour/images/tour_127_7761.jpg?tr=w-353,h-376"
                    ></img>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    <h3 className="pt-32 text-center text-[16px] font-bold">
                        Hill View Resort
                    </h3>
                    <h1 className="py-10 text-center text-[48px] font-bold">
                        We're gonna make this place your home
                    </h1>

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border">
                        <div className="pr-20 max-w-[460px]">
                            <p>
                                Hill View Resort is the combination of
                                innovative design and crafted luxury and set
                                apart by an unprecedented level of personalised
                                hospitality, private spaces and bespoke
                                journeys. Here, We Combine comfort, personalized
                                service and exceptional values. The Hill View
                                Resort offering so many Rooms, Gym Facilities
                                and many more Facilities and it is ideally
                                situated in Bhuj – Kutch, Near Hill Garden,
                                Airport Ringroad.
                            </p>
                        </div>

                        <div className="w-[2px] p-0 m-0 border-0 h-96  bg-[#B98036]"></div>

                        <div className="pl-20 max-w-[460px]">
                            <p>
                                Our purpose is to give our guests a complete
                                experience and a perfect stay. Our staff to have
                                a culture of mutual respect, trust and
                                integrity. Hill View Resort is a place that is
                                fun and filled with the unexpected. What we do
                                is always authentic, honest and mindful that
                                less is often so much more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
