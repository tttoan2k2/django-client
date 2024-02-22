import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";

const TypeRoom = () => {
    return (
        <div className="bg-[#F8F7FC]">
            <Nav />
            <img
                className="h-[500px]  w-full object-cover"
                src="https://images2.alphacoders.com/849/849007.jpg"
            ></img>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    <h1 className="py-5 text-center text-[28px] font-bold">
                        Types of rooms in hotels and how to classify them
                    </h1>
                    <p className="p-6 text-left text-[20px]">
                        For guests booking a hotel room for the first time,
                        understanding how to divide room types at hotels is an
                        important step in choosing the right room for you and
                        your family. Therefore, if you still do not clearly
                        understand the differences between hotel room
                        categories, the article below will give you the most
                        comprehensive overview of them.
                    </p>

                    <h1 className="p-6 py-2 text-left text-[20px] font-bold">
                        What criteria classify hotel room types?
                    </h1>
                    <p className="p-6 text-left text-[20px]">
                        Unlike homestays and hostels, hotel rooms are often
                        "identified and named" based on two main criteria:
                        quality and type of bed.
                    </p>

                    <h1 className="p-6 py-2 text-left text-[22px] font-bold">
                        Based on quality criteria - hotel rooms are often
                        classified as follows:
                    </h1>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border">
                        <div className="pr-20 max-w-[460px]">
                            {/* <h1 className="py-10 text-center text-[36px] font-bold left-40">General Info</h1> */}
                            <img
                                className="min-h-60 min-w-96 place-content-center"
                                src="https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2021/Thang-3/Cac-lo%E1%BA%A1i-phong-khach-san-01.jpg"
                            ></img>
                        </div>

                        <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]"></div>

                        <div className="pl-20 max-w-[900px]">
                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td className="font-bold">
                                    Standard Room (STD)
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p>
                                        Standard is the standard room type in a
                                        hotel, has a small area, is usually
                                        located on a low floor, has no view or a
                                        bad view. The STD room is equipped with
                                        basic items and equipment and has the
                                        lowest price
                                    </p>
                                </td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border">
                        <div className="pr-20 max-w-[460px]">
                            {/* <h1 className="py-10 text-center text-[36px] font-bold left-40">General Info</h1> */}
                            <img
                                className="min-h-60 min-w-96"
                                src="https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2021/Thang-3/Cac-lo%E1%BA%A1i-phong-khach-san-02.jpg"
                            ></img>
                        </div>

                        <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]"></div>

                        <div className="pl-20 max-w-[900px]">
                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td className="font-bold">
                                    Superior Room (SUP)
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p>
                                        Compared to Standard, Superior is a room
                                        class with better quality - large area -
                                        comfortable equipment - beautiful view.
                                        That's why the rental price for SUP
                                        rooms will be higher
                                    </p>
                                </td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border">
                        <div className="pr-20 max-w-[460px]">
                            {/* <h1 className="py-10 text-center text-[36px] font-bold left-40">General Info</h1> */}
                            <img
                                className="min-h-60 min-w-96"
                                src="https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2021/Thang-3/Cac-lo%E1%BA%A1i-phong-khach-san-03.jpg"
                            ></img>
                        </div>

                        <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]"></div>

                        <div className="pl-20 max-w-[900px]">
                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td className="font-bold">
                                    {" "}
                                    Deluxe Room (DLX)
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p>
                                        Room category 1 level above SUP is
                                        Deluxe. This is a high-class room type
                                        in hotels, mainly located on high floors
                                        with large space, many amenities and
                                        beautiful views.
                                    </p>
                                </td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    {/* <h3 className="pt-32 text-center text-[16px] font-bold">Hill View Resort</h3>
                        <h1 className="py-10 text-center text-[48px] font-bold">We're gonna make this place your home</h1> */}

                    <div className="flex justify-center mt-[20px] mx-[100px] p-10 gap-10 rounded-xl leading-10 box-border">
                        <div className="pr-20 pt-16 max-w-[460px]">
                            {/* <h1 className="py-10 text-center text-[36px] font-bold left-40">General Info</h1> */}
                            <img
                                className="min-h-60 min-w-96 place-content-center"
                                src="https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2021/Thang-3/Cac-lo%E1%BA%A1i-phong-khach-san-04.jpg"
                            ></img>
                        </div>

                        <div className="w-[2px] p-0 m-0 border-0 h-50  bg-[#B98036]"></div>

                        <div className="pl-20 max-w-[900px]">
                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td className="font-bold"> Suite Room (SUT)</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p>
                                        SUT is the most luxurious room category
                                        of each hotel. And with the purpose of
                                        increasing the VIP level, the SUT room
                                        is often named: Royal Suite Room,
                                        President Room... An easily noticeable
                                        feature is that the Suite room is often
                                        located in a location for guests.
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p>
                                        The most beautiful view and in each such
                                        room there can be many different
                                        function rooms: living room, bedroom,
                                        meeting room, dining room... Along with
                                        that are special services included:
                                        airport pick-up and drop-off. , Butler
                                        serves exclusively…
                                    </p>
                                </td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    <h1 className="pl-16 text-left text-[28px] font-bold pt-8">
                        Depends on the type of bed
                    </h1>
                    <h1 className="pl-16 text-left text-[28px] pt-2">
                        In addition to the above way of classifying hotel rooms
                        according to quality criteria, there is another way of
                        dividing them according to the type of bed in the room:
                    </h1>

                    <div className="flex justify-start mt-[5px] mx-[30px] p-10 gap-10 rounded-xl leading-10 box-border">
                        <div className="pl-20 max-w-[1200px]">
                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p className="font-bold">
                                        Suite Room (SUT):
                                    </p>
                                    room with 1 bed for 1 guest
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p className="font-bold">
                                        Single bed room (SGL):
                                    </p>{" "}
                                    room with 1 bed for 1 guest
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p className="font-bold">
                                        Twin bed room (TWN):
                                    </p>{" "}
                                    room with 2 beds for 2 guests
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p className="font-bold">
                                        Double bed room (DBL):
                                    </p>{" "}
                                    room has 1 large bed for 2 guests
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p className="font-bold">
                                        Triple bed room (TRPL):
                                    </p>{" "}
                                    room with 1 large bed and 1 small bed or 3
                                    small beds for 3 guests to sleep
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>
                                    <p className="font-bold">Quad room:</p> room
                                    for 4 guests, possibly 2 double beds; 2
                                    single beds and 1 double bed; 1 bunk bed and
                                    1 double bed; 2 bunk beds...
                                </td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    <h1 className="pl-16 text-left text-[28px] font-bold pt-8">
                        Other less common room types
                    </h1>

                    <div className="flex justify-start mt-[5px] mx-[30px] p-5 gap-10 rounded-xl leading-10 box-border">
                        <div className="pl-20 max-w-[1200px]">
                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Mini Suite/ Junior Suite room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Queen room/King room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Hollywood Twin room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Double-Double room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Studio rooms</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Apartment/Room for Extended Stay room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Villa</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Bungalow</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Murphy room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Accessible room/Disabled room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Cabana room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>Smoking/ Non-Smoking Room</td>
                            </tr>

                            <tr>
                                <td>
                                    <FaStar />
                                </td>
                                <td>...</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7FC]">
                <div className="bg-white mx-[50px] my-10 rounded-xl">
                    <h1 className="pl-16 text-left text-[28px] font-bold pt-8">
                        What type of room is most commonly used?
                    </h1>
                    <div className="flex justify-start mt-[5px] mx-[30px] p-5 gap-10 rounded-xl leading-10 box-border">
                        <div className="pl-8 max-w-[1200px]">
                            <p>
                                There is no most popular room type or
                                classification criteria, only the most suitable
                                room type or classification criteria. However,
                                instead of separating, when a guest books a
                                hotel room, the receptionist/reservation staff
                                will often use a combination of room quality and
                                bed type to determine the type of room the guest
                                wants to stay in. For example: Deluxe Double
                                room (Deluxe room with 1 large bed), Superior
                                Twin room (Superior room with 2 small beds),…
                            </p>
                        </div>
                    </div>

                    <h1 className="pl-16 text-left text-[28px] font-bold pt-8">
                        What to keep in mind when advising guests on room types?
                    </h1>
                    <div className="flex justify-start mt-[5px] mx-[30px] p-5 gap-10 rounded-xl leading-10 box-border">
                        <div className="pl-8 max-w-[1200px]">
                            <p>
                                It is not necessary to choose the room with the
                                highest price for consulting with the desire to
                                earn the highest revenue. Instead, the
                                receptionist/reservationist needs to be skillful
                                and observant in listening or judging the
                                guests' needs, based on their spending ability
                                and the hotel's level of responsiveness to
                                choose the right hotel(s). suitable room type,
                                with the highest booking rate to shorten
                                consultation and persuasion time. In addition,
                                if possible, consider asking guests to upsell
                                the room (for a fee or for free) to use higher
                                amenities and services, increasing satisfaction
                                with service quality and service; From there,
                                come back next time and give good reviews on
                                social platforms or booking channels, as well as
                                introduce the hotel to friends and
                                relatives...Knowing the types of hotel rooms and
                                identifying each type is beneficial for both
                                hotel staff and tourists. Hopefully
                                Hoteljob.vn's article provides you with the
                                necessary information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TypeRoom;
