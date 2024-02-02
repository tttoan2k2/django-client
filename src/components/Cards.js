import { useQuery, gql } from "@apollo/client";
import Card from "./Card";

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

const Cards = () => {
    const { loading, error, data } = useQuery(QUERY_PLACES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log("data", data.places);

    const tranformData = data.places.map((item) => {
        const placeImgTranform = JSON.parse(item.placeImg);
        console.log("placeImgTranform", placeImgTranform.imgs);
        return {
            placeImgs: placeImgTranform.imgs,
            ...item,
        };
    });

    console.log("trandata: ", tranformData);

    return (
        <div className=" grid grid-cols-4 gap-5">
            {tranformData.map(
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
