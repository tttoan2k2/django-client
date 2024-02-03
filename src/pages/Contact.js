import React from "react";
import Nav from "../components/Nav";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer"

const Contact = () => {
    return (
        <div className="bg-[#F8F7FC]">
            <Nav />
            <img className="h-[500px]  w-full object-cover" src="https://static.vnfinance.vn/files/upload/08212021/ihg-6-16430041_8f73c270.jpg"></img>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                    <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                        {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border" >
                        <div className="pr-20 max-w-[460px]">
                            <h1 className="py-10 text-center text-[36px] font-bold left-40">General Info</h1>
                        </div>

                           <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]">
                                
                           </div>

                        <div className="pl-20 max-w-[900px]" >
                            <tr>
                                <td><FaStar/></td>
                                <td>FAQ</td>
                            </tr>

                            <tr>
                                <td><FaStar/></td>
                                <td>Specific questions - Email Us</td>
                            </tr>

                            <tr>
                                <td><FaStar/></td>
                                <td>Looking for someone to design your trip? Submit a Custom Trip Inquiry</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                        {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border" >
                        <div className="pr-20 max-w-[380px]">
                            <h1 className="py-10 text-center text-[36px] font-bold left-40">Partner with Travelstride</h1>
                        </div>

                           <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]">
                                
                           </div>

                        <div className="pl-20 max-w-[900px]" >
                            <tr>
                                <td><FaStar/></td>
                                <td>For tour operators and travel companies looking for more information please visit our Partners page or Apply to get Listed</td>
                            </tr>

                            <tr>
                                <td><FaStar/></td>
                                <td>Marketing partner inquiry? Connect with us</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                        {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border" >
                        <div className="pr-20 max-w-[370px]">
                            <h1 className="py-10 text-center text-[36px] font-bold left-40">Interested in Working at Travelstride?</h1>
                        </div>

                           <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]">
                                
                           </div>

                        <div className="pl-20 max-w-[900px] min-w-[690px]" >
                            <h2 className="text-[24px] font-bold">We're hiring!</h2>
                            <h3 className="mb-7">Check out our Careers page</h3>

                            <tr>
                                <td><FaStar/></td>
                                <td>Learn more about our Hiring Process</td>
                            </tr>

                            <tr>
                                <td><FaStar/></td>
                                <td>Read about our Team culture and company Values</td>
                            </tr>

                            <tr>
                                <td><FaStar/></td>
                                <td>Discover our Brand Traits</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                        {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border" >
                        <div className="pr-20 max-w-[370px]">
                            <h1 className="py-10 text-center text-[36px] font-bold left-40">Commonly asked questions</h1>
                        </div>

                           <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]">
                                
                           </div>

                        <div className="pl-20 max-w-[600px] min-w-[690px]" >

                            <h3 className="text-[22px] font-bold">Is Travelstride a travel agency?</h3>
                            <p className="mb-10 text-[#A2A2A2]">Nope. We're something even better - our team has worked to gather the largest, most comprehensive 
                            listing of tours and expert trip planners, from thousands of different companies. Travelstride connects 
                            you with the perfect agent or tour company for your travel style.</p>

                            <h3 className="text-[22px] font-bold">Is Travelstride a tour operator?</h3>
                            <p className="mb-10 text-[#A2A2A2]">Nope. Instead we connect you with the right operator for your needs</p>

                            <h3 className="text-[22px] font-bold">Is Travelstride a travel agency?</h3>
                            <p className="text-[#A2A2A2]">For tour operators, cruiselines, agents, and adventure travel outfitters:</p>
                            <a href="" className="mb-10 font-bold text-[#FF385C]">Apply to get Listed</a>

                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
