import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to handle login
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ username, password }) => {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("jwt", data.token); // Store JWT in local storage
            return data.token;
        } else {
            throw new Error("Login failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("jwt") || null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem("jwt"); // Remove JWT from local storage
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
