import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Logo from "../assets/Airbnb-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password) {
            token
        }
    }
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [loginMutation] = useMutation(LOGIN_MUTATION);

    const handleLogin = async () => {
        try {
            const { data } = await loginMutation({
                variables: { email, password },
            });

            if (data) {
                toast.success("Đăng nhập thành công!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

            const token = data.tokenAuth.token;
            localStorage.setItem("token", token);

            setTimeout(() => {
                navigate("/");
            }, 1000);

            // Redirect or perform any necessary action after login
        } catch (error) {
            console.error("Login failed", error.message);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm flex flex-col items-center justify-center w-full">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-[100px] h-[100px] object-contain mb-6"
                />

                <h2 className="text-2xl font-semibold text-center mb-4">
                    Welcome to Airbnb
                </h2>

                <p className="text-gray-600 text-center mb-6">
                    Login for continue
                </p>

                <div>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Password *
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input w-[350px] px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="w-full bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#c6475e] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    <p className="text-sm leading-relaxed text-grey-900 mt-5 text-center">
                        Not registered yet?{" "}
                        <Link to="/register">
                            <i className="font-bold text-grey-700 hover:text-[#686767]">
                                Create an Account
                            </i>
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
