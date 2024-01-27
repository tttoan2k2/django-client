import { gql, useMutation } from "@apollo/client";

const QUERY_USERS = gql`
    query getUsers {
        users {
            id
            firstName
            lastName
        }
    }
`;

const CREATE_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;
export function CreateUser() {
    let firstName, lastName;
    const [createUser, { loading, error }] = useMutation(CREATE_USER, {
        refetchQueries: [{ query: QUERY_USERS }],
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    return (
        <div className="m-[5rem]">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createUser({
                        variables: {
                            firstName: firstName.value,
                            lastName: lastName.value,
                        },
                    });
                    firstName.value = "";
                    lastName.value = "";
                    // window.location.reload();
                }}
            >
                <div class="flex flex-col gap-6 w-72">
                    <div class="relative h-11 w-full min-w-[200px]">
                        <input
                            ref={(node) => {
                                firstName = node;
                            }}
                            placeholder="First Name"
                            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        />
                        <label class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            First Name
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px]">
                        <input
                            ref={(node) => {
                                lastName = node;
                            }}
                            placeholder="Last Name"
                            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        />
                        <label class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Last Name
                        </label>
                    </div>
                </div>
                <button
                    className="p-3 mt-5 bg-[#32dfdf] rounded-[15px] text-white"
                    type="submit"
                >
                    Add a User
                </button>
            </form>
        </div>
    );
}
