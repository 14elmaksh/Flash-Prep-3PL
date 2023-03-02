import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../config/axiosConfig";

const API_URL = "/api/products/";

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
    myProducts: null,
    singleProduct: null,
};

// create an product
export const createProduct = createAsyncThunk(
    "auth/createProduct",
    async (productData, thunkAPI) => {
        try {
            const response = await instance.post(API_URL, productData, config);

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
  
// get all products
export const getProducts = createAsyncThunk(
    "auth/getProducts", 
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
  
// get a single product
export const getProduct = createAsyncThunk(
    "auth/getProduct", 
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
  
// update an product
export const updateProduct = createAsyncThunk(
    "auth/updateProduct", 
    async (payload, thunkAPI) => {
        try {
            const { productId, updateData } = payload;
            const response = await instance.put(API_URL + productId, updateData, config);

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
  
// delete product
export const deleteProduct = createAsyncThunk(
    "auth/deleteProduct", 
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
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleProduct = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.myProducts = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleProduct = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.singleProduct = action.payload;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});
  
  export const { reset } = authSlice.actions;
  export default authSlice.reducer;