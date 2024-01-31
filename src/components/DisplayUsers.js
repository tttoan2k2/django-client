import { useQuery, gql } from "@apollo/client";

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

function DisplayUsers() {
    const { loading, error, data } = useQuery(QUERY_PLACES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.places.map(({ id, placeName, placeDistance }) => (
        <div
            key={id}
            className="flex items-center justify-center flex-col gap-10"
        >
            <h1>{placeName}</h1>
            <p>{placeDistance}</p>
        </div>
    ));
}

export default DisplayUsers;
