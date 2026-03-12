import { buildCreateSlice, createSlice  } from "@reduxjs/toolkit";
import { getBooks } from "./booksAction";

const initState = {
    books: [],
    loader: false

}

export const bookSlice =  createSlice ({
    name: "books",
    initialState: initState,
    reducer: {
         
    },
    extraReducers: builder => {
        builder.addCase(getBooks.fulfilled, (state, action ) => {
            state.books = action.payload; 
            state.loader = false;
        }) 

        builder.addCase(getBooks.pending, (state, action ) => {
            state.loader = true; 
        }) 

        builder.addCase(getBooks.rejected, (state, action ) => {
            state.loader = false;
            state.books = action.payload; 
        }) 
    }
});

export default bookSlice.reducer;