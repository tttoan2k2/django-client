import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({
    placeName,
    placeDistance,
    placeDate,
    placeStar,
    placePrice,
    placeImgs,
    placeDes,
}) => {
    return (
        <div>
            <img
                src={placeImgs[0]}
                alt=""
                className=" w-[300px] h-[350px] object-cover rounded-[18px]"
            />
            <div className="flex items-center justify-between w-[300px] mt-4">
                <h1 className="text-[16px] font-normal">{placeName}</h1>
                <div className="flex items-center justify-center gap-1">
                    <FaStar />
                    <p className="text-[16px] font-[200]">{placeStar}</p>
                </div>
            </div>
            <p className="text-[16px] font-[100]">About {placeDistance} Kms</p>
            <p className="text-[16px] font-[100]">{placeDate}</p>
            <p className="text-[16px]">${placePrice} night</p>
        </div>
    );
};

export default Card;
