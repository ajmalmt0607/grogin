import React from "react";

const LoginForm = () => {
    return (
        <div className="flex flex-col justify-center h-screen max-w-md mx-auto p-8 bg-white">
            <h2 className="text-3xl font-bold mb-4">WELCOME BACK</h2>
            <p className="mb-8">Welcome back! Please enter your details.</p>
            <form>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 border rounded"
                        placeholder="Enter your email"
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
                <button className="w-full bg-purple-600 text-white p-3 rounded font-medium mb-4">
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
