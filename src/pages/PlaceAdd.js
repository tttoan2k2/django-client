import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { gql, useMutation } from "@apollo/client";

const CREATE_PLACE = gql`
    mutation createPlace(
        $placeName: String!
        $placeDistance: Int!
        $placeDate: String!
        $placeStar: Float!
        $placePrice: Int!
        $placeImg: JSONString!
        $placeDes: String!
    ) {
        createPlace(
            placeName: $placeName
            placeDistance: $placeDistance
            placeDate: $placeDate
            placeStar: $placeStar
            placePrice: $placePrice
            placeImg: $placeImg
            placeDes: $placeDes
        ) {
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

const PlaceAdd = () => {
    let placeName,
        placeDistance,
        placeDate,
        placeStar,
        placePrice,
        placeImg,
        placeDes;
    const [createPlace, { error }] = useMutation(CREATE_PLACE);

    if (error) {
        return `Submission error! ${error.message}`;
    }

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

                {/* Main */}

                <div className="flex justify-center mt-10">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            createPlace({
                                variables: {
                                    placeName: placeName.value,
                                    placeDistance: parseInt(
                                        placeDistance.value
                                    ),
                                    placeDate: placeDate.value,
                                    placeStar: parseFloat(placeStar.value),
                                    placePrice: parseInt(placePrice.value),
                                    placeImg: placeImg.value,
                                    placeDes: placeDes.value,
                                },
                            });

                            toast.success("Đã thêm thành công!", {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });

                            placeName.value = "";
                            placeDistance.value = "";
                            placeDate.value = "";
                            placeStar.value = "";
                            placePrice.value = "";
                            placeImg.value = "";
                            placeDes.value = "";
                        }}
                    >
                        <div className="flex flex-col gap-6 w-72">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placeName = node;
                                    }}
                                    type="text"
                                    placeholder="Name"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Name
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placeDistance = node;
                                    }}
                                    type="number"
                                    placeholder="Distance"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Distance
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placeDate = node;
                                    }}
                                    type="text"
                                    placeholder="Date"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Date
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placeStar = node;
                                    }}
                                    type="number"
                                    step="0.01"
                                    placeholder="Star"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Star
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placePrice = node;
                                    }}
                                    type="number"
                                    placeholder="Price"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Price
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placeImg = node;
                                    }}
                                    type="text"
                                    placeholder="Imgs"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Imgs
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    ref={(node) => {
                                        placeDes = node;
                                    }}
                                    type="text"
                                    placeholder="Description"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                />
                                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Description
                                </label>
                            </div>
                        </div>
                        <button
                            className="p-3 mt-5 bg-[#32dfdf] rounded-[15px] text-white"
                            type="submit"
                        >
                            Add a Place
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PlaceAdd;
