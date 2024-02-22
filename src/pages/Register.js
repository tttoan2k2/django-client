import React from "react";
import { gql, useMutation } from "@apollo/client";
import Logo from "../assets/Airbnb-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const REGISTER_MUTATION = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
        createAppUser(email: $email, username: $username, password: $password) {
            appUser {
                username
                email
            }
        }
    }
`;

const Register = () => {
    const navigate = useNavigate();
    let email, userName, password;

    const [registerMutation, { error }] = useMutation(REGISTER_MUTATION);

    if (error) return `Submission error! ${error.message}`;

    return (
        <div className="flex items-center justify-center flex-col h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm flex flex-col items-center justify-center w-full">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-[100px] h-[100px] object-contain mb-6"
                />

                <h2 className="text-2xl font-semibold text-center mb-4">
                    Create a new account
                </h2>

                <p className="text-gray-600 text-center mb-6">
                    Enter your details to register.
                </p>

                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            registerMutation({
                                variables: {
                                    email: email.value,
                                    username: userName.value,
                                    password: password.value,
                                },
                            });
                            toast.success("Đăng ký tài khoản thành công!", {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });

                            setTimeout(() => {
                                navigate("/login");
                            }, 2000);
                        }}
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Email *
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="form-input w-[350px] px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                ref={(node) => {
                                    email = node;
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Username *
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="form-input w-[350px] px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                ref={(node) => {
                                    userName = node;
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Password *
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-input w-[350px] px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                ref={(node) => {
                                    password = node;
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#c6475e] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-sm leading-relaxed text-grey-900 mt-5 text-center">
                        If you have a Account?{" "}
                        <Link to="/login">
                            <i className="font-bold text-grey-700 hover:text-[#686767]">
                                Login to your Account
                            </i>
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
