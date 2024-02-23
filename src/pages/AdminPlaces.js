import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useQuery, gql, useMutation } from "@apollo/client";
import { FaTrash, FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QUERY_PLACES = gql`
    query GetPlaces {
        places {
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

const DELETE_PLACE = gql`
    mutation deletePlace($idPlace: ID!) {
        deletePlace(id: $idPlace) {
            success
            message
        }
    }
`;

const AdminPlaces = () => {
    const [tranformDataList, setTranformDataList] = useState([]);
    const [dataSearch, setDataSearch] = useState([]);
    const [input, setInput] = useState("");
    const [idDelete, setIdDelete] = useState(0);
    const { loading, error, data } = useQuery(QUERY_PLACES);
    const [deletePlace] = useMutation(DELETE_PLACE);

    useEffect(() => {
        if (data) {
            const tranformData = data.places.map((item) => {
                const placeImgTranform = JSON.parse(item.placeImg);

                return {
                    placeImgs: placeImgTranform.imgs,
                    ...item,
                };
            });

            setTranformDataList(tranformData);
        }
    }, [data]);

    useEffect(() => {
        if (input === "") {
            setDataSearch(tranformDataList);
            return;
        }

        const filteredResults = tranformDataList.filter((item) =>
            item.placeName.toLowerCase().includes(input.toLowerCase())
        );

        setDataSearch(filteredResults);
    }, [tranformDataList, input]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const handleDelete = (id) => {
        setIdDelete(id);
        console.log(id);
        deletePlace({
            variables: { idPlace: idDelete },
        });

        toast.success("Đã xóa thành công!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
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
                    <Link to="/admin/places/add-place">
                        <p className="hover:text-[#8f8f8f] cursor-pointer">
                            Add a new place
                        </p>
                    </Link>
                </div>

                {/* Main */}
                <div className="mt-10 flex flex-col gap-2">
                    {dataSearch.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-[#e4dede] p-2 rounded-[12px]"
                        >
                            <div className="flex gap-2">
                                <img
                                    src={item.placeImgs[0]}
                                    alt=""
                                    className="w-[50px] h-[50px] rounded-full"
                                />
                                <div>
                                    <h2>{item.placeName}</h2>
                                    <p className="font-[200]">
                                        Price: ${item.placePrice}
                                    </p>
                                </div>
                            </div>
                            <FaTrash
                                onClick={() => handleDelete(item.id)}
                                className=" cursor-pointer hover:text-red-500 text-[20px] text-[#616060] mr-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminPlaces;
