import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { FaStar } from "react-icons/fa";
import {
    MdBeachAccess,
    MdOutlineWifi,
    MdDirectionsCar,
    MdOutlineShower,
    MdPool,
    MdPets,
} from "react-icons/md";
import { IoMdSnow } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { IoCafeSharp } from "react-icons/io5";

const QUERY_PLACE = gql`
    query GetPlace($placeId: ID!) {
        place(id: $placeId) {
            id
            placeName
            placeDistance
            placeDate
            placeStar
            placePrice
            placeImg
            placeDes
        }
    }
`;

const Detail = () => {
    const { id } = useParams();
    const [tranformDataList, setTranformDataList] = useState([]);

    const { data } = useQuery(QUERY_PLACE, {
        variables: { placeId: id },
    });

    useEffect(() => {
        if (data) {
            const placeImgTranform = JSON.parse(data?.place?.placeImg);

            const tranformData = { ...data?.place, placeImg: placeImgTranform };

            setTranformDataList(tranformData);
        }
    }, [data]);

    console.log(tranformDataList);

    return (
        <div>
            <Nav />
            <div className="px-[210px] my-[50px]">
                <h1 className=" font-medium text-[28px] mb-6">
                    {tranformDataList?.placeName}
                </h1>
                <div className="flex items-start justify-center gap-2 mb-6">
                    <img
                        src={tranformDataList?.placeImg?.imgs[0]}
                        alt=""
                        className="w-[550px] h-[360px] rounded-l-[8px]"
                    />
                    <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                        <img
                            src={tranformDataList?.placeImg?.imgs[1]}
                            alt=""
                            className="w-[270px] h-[176px] object-contain"
                        />
                        <img
                            src={tranformDataList?.placeImg?.imgs[2]}
                            alt=""
                            className="w-[270px] h-[176px] object-contain rounded-tr-[18px]"
                        />
                        <img
                            src={tranformDataList?.placeImg?.imgs[3]}
                            alt=""
                            className="w-[270px] h-[176px] object-contain"
                        />
                        <img
                            src={tranformDataList?.placeImg?.imgs[4]}
                            alt=""
                            className="w-[270px] h-[176px] object-contain rounded-br-[18px]"
                        />
                    </div>
                </div>
                <h2 className=" font-medium text-[22px] mb-3">
                    {tranformDataList?.placeName}
                </h2>
                <div className="flex justify-start gap-[80px]">
                    <div>
                        <p>
                            Info:{" "}
                            <i className=" font-[200]">
                                2 guests 1 bedroom 1 bed 1 bath
                            </i>
                        </p>
                        <p>
                            Distance:{" "}
                            <i className=" font-[200]">
                                {tranformDataList?.placeDistance} kilometers
                            </i>
                        </p>
                    </div>
                    <div>
                        <p>
                            Price:{" "}
                            <i className=" font-[200]">
                                ${tranformDataList?.placePrice} per Night
                            </i>
                        </p>
                        <p>
                            Date:{" "}
                            <i className=" font-[200]">
                                {tranformDataList?.placeDate}
                            </i>
                        </p>
                    </div>
                </div>
                <div className="flex justify-start gap-1 text-[20px] mt-3">
                    <FaStar />
                    <p className="text-[16px]">
                        {tranformDataList?.placeStar} (+1000) review
                    </p>
                </div>

                <div className=" border-t-[1px] border-[#999898] mt-10">
                    <h2 className="font-medium text-[22px] pt-9">Review</h2>
                    <div className="flex items-center justify-center mt-10 flex-col gap-10">
                        <img
                            src={tranformDataList?.placeImg?.imgs[3]}
                            alt=""
                            className="w-[600px] h-[400px] object-contain rounded-[12px]"
                        />
                        <p className="font-[200]">
                            {tranformDataList?.placeDes} Private Jet Villa is
                            the world's first villa in the luxury segment,
                            constructed from an aircraft fuselage and located on
                            a cliff at an altitude of 150 m above sea level, on
                            the island of the gods, Bali. Board the aircraft by
                            stairs over the wing straight into the living room
                            with a private bar, a cozy sofa and a huge glass
                            portal using smart glass technology with remote
                            control, that changes the transparency of the glass
                            and a gorgeous view opens up.
                        </p>
                        <p className="font-[200] mt-3">
                            Private Jet Villa accommodates a maximum of 2
                            persons in the First Class Suite with private
                            bathroom and a Jacuzzi in one of the suites. And
                            there is a central entertainment wing where you can
                            step onto the aircraft wing and truly feel like you
                            are flying. At your wish, our Private Jet Villa team
                            provides butler services for the entire duration of
                            your stay.
                        </p>
                        <p className="font-[200] mt-3">
                            Deplane to the spectacular glass front infinity pool
                            and glam the day away, be bathed in Bali's painted
                            skies as the sun sets over the Indian Ocean, stay up
                            late by the fire pit where cocktails and
                            conversations flow. Retire to Bali's most exclusive
                            accommodation experience, eye masks and block out
                            blinds mean mornings at Private Jet Villa start when
                            you are ready to wake up!
                        </p>
                    </div>
                </div>

                <div className=" border-t-[1px] border-[#999898] mt-10">
                    <h2 className="font-medium text-[22px] pt-9 mb-6">
                        What this place offers
                    </h2>
                    <div className="grid grid-cols-2 gap-y-2">
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <MdBeachAccess />
                            <p>Beach view</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <MdOutlineWifi />
                            <p>Wifi</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <MdDirectionsCar />
                            <p>Free Parking on premises</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <MdOutlineShower />
                            <p>Hot tub</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <IoMdSnow />
                            <p>Air conditioning</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <FaMountainSun />
                            <p>Mountain view</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <ImHome />
                            <p>Dedicated workspace</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <MdPool />
                            <p>Pool</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <MdPets />
                            <p>Pets allowed</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 font-[200] text-[20px]">
                            <IoCafeSharp />
                            <p>Free cafe</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Detail;
