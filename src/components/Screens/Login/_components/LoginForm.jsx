import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../features/auth/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authUrl = "https://fakestoreapi.com/auth/login";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(authUrl, { username, password });
            const data = response.data;

            if (data.token) {
                dispatch(loginUser({ user: { username }, jwt: data.token }));
                navigate("/");
            } else {
                setFormError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setFormError(
                    error.response.data.error ||
                        "Login failed. Please check your credentials."
                );
            } else {
                setFormError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="flex flex-col justify-center h-screen max-w-md mx-auto p-8 bg-white">
            <h2 className="text-3xl font-bold mb-4">WELCOME BACK</h2>
            <p className="mb-8">Welcome back! Please enter your details.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border rounded"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded"
                        placeholder="********"
                    />
                    <a
                        href="/"
                        className="text-sm text-purple-600 mt-2 inline-block"
                    >
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white p-3 rounded font-medium mb-4"
                >
                    Sign in
                </button>
                <button className="w-full flex justify-center items-center p-3 border rounded text-gray-700">
                    <img
                        src="https://img.icons8.com/color/16/000000/google-logo.png"
                        alt="Google"
                        className="mr-2"
                    />
                    Sign in with Google
                </button>
                {formError && <p className="text-red-500 mt-4">{formError}</p>}
            </form>
            <p className="mt-4 text-center text-sm">
                Don't have an account?{" "}
                <a href="/" className="text-purple-600 font-medium">
                    Sign up for free!
                </a>
            </p>
        </div>
    );
};

export default LoginForm;
