import { useQuery, gql } from "@apollo/client";

const QUERY_USERS = gql`
    query getUsers {
        users {
            id
            firstName
            lastName
        }
    }
`;

function DisplayUsers() {
    const { loading, error, data } = useQuery(QUERY_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.users.map(({ id, firstName, lastName }) => (
        <div
            key={id}
            className="flex items-center justify-center flex-col gap-10"
        >
            <h3>
                {firstName} {lastName}
            </h3>
        </div>
    ));
}

export default DisplayUsers;
