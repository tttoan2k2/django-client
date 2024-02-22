import { useQuery, gql } from "@apollo/client";
import Card from "./Card";
import { useState, useEffect } from "react";

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

const Cards = ({ inputValue }) => {
    const [dataSearch, setDataSearch] = useState([]);
    const { loading, error, data } = useQuery(QUERY_PLACES);
    const [tranformDataList, setTranformDataList] = useState([]);

    useEffect(() => {
        if (data) {
            const tranformData = data.places.map((item) => {
                const placeImgTranform = JSON.parse(item.placeImg);
                console.log("placeImgTranform", placeImgTranform.imgs);
                return {
                    placeImgs: placeImgTranform.imgs,
                    ...item,
                };
            });

            setTranformDataList(tranformData);
        }
    }, [data]);

    // const tranformData = data.places.map((item) => {
    //     const placeImgTranform = JSON.parse(item.placeImg);
    //     console.log("placeImgTranform", placeImgTranform.imgs);
    //     return {
    //         placeImgs: placeImgTranform.imgs,
    //         ...item,
    //     };
    // });

    useEffect(() => {
        if (inputValue === "") {
            setDataSearch(tranformDataList);
            return;
        }

        const filteredResults = tranformDataList.filter((item) =>
            item.placeName.toLowerCase().includes(inputValue.toLowerCase())
        );

        setDataSearch(filteredResults);
    }, [tranformDataList, inputValue]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log("trandata: ", tranformDataList);

    return (
        <div className=" grid grid-cols-4 gap-5">
            {dataSearch.map(
                ({
                    id,
                    placeName,
                    placeDistance,
                    placeDate,
                    placeStar,
                    placePrice,
                    placeImgs,
                    placeDes,
                }) => (
                    <Card
                        key={id}
                        id={id}
                        placeName={placeName}
                        placeDistance={placeDistance}
                        placeDate={placeDate}
                        placeStar={placeStar}
                        placePrice={placePrice}
                        placeImgs={placeImgs}
                        placeDes={placeDes}
                    />
                )
            )}
        </div>
    );
};

export default Cards;
