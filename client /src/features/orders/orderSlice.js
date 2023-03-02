import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../config/axiosConfig";

const API_URL = "/api/orders/";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
const token = user?.token;

const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    myOrders: null,
};

// create an order
export const createOrder = createAsyncThunk(
    "auth/createOrder",
    async (orderData, thunkAPI) => {
        try {
            const response = await instance.post(API_URL, orderData, config);

            return response.data;
        } catch (error) {
            const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
    
            return thunkAPI.rejectWithValue(message);
        }
    }
  );
  
// get all orders
export const getOrders = createAsyncThunk(
    "auth/getOrders", 
    async (_, thunkAPI) => {
        try {
            const response = await instance.get(API_URL, config);

            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
        
            return thunkAPI.rejectWithValue(message);
        }
    }
);
  
// get a single order
export const getOrder = createAsyncThunk(
    "auth/getOrder", 
    async (payload, thunkAPI) => {
        try {
            const response = await instance.get(API_URL + payload, config);

            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
        
            return thunkAPI.rejectWithValue(message);
        }
    }
);
  
// update an order
export const updateOrder = createAsyncThunk(
    "auth/updateOrder", 
    async (payload, thunkAPI) => {
        try {
            const { orderId, updateData } = payload;
            const response = await instance.put(API_URL + orderId, updateData, config);

            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
        
            return thunkAPI.rejectWithValue(message);
        }
    }
);
  
// delete order
export const deleteOrder = createAsyncThunk(
    "auth/deleteOrder", 
    async (payload, thunkAPI) => {
        try {
            const response = await instance.delete(API_URL + payload, config);

            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
        
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleOrder = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.myOrders = action.payload;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleOrder = action.payload;
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updateOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleOrder = action.payload;
            })
            .addCase(updateOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});
  
  export const { reset } = authSlice.actions;
  export default authSlice.reducer;