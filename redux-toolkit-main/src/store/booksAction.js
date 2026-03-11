import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
    "getBooks",
    async () => {
         try{
            const {data} = axios.get("https://getbooks.free.beeceptor.com/books");
            console.log(data);

            return data;
             

         }catch(err) {
            console.error("API error");
            

         }
    }
);