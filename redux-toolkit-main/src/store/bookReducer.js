import { buildCreateSlice, createSlice  } from "@reduxjs/toolkit";
import { getBooks } from "./booksAction";

const initState = {
    books: []

}

export const bookSlice =  createSlice ({
    name: "books",
    initialState: initState,
    reducer: {
         
    },
    extraReducers: builder => {
        builder.addCase(getBooks.fulfilled, (state, action ) => {
            state.books = action.payload;
        }) 
    }
});

export default bookSlice.reducer;