import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {id:number,name:string,email:string,img:string}[]

const actGetTeachers = createAsyncThunk('teachers/actGetTeachers',async(_,thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    
    try {
        const response = await axios.get<TResponse>("http://127.0.0.1:8000/api/teachers");
        
        return response.data;
        
    } catch (error) {
        if(axios.isAxiosError(error)){

            return rejectWithValue(error.response?.data.message)
        }else{
            return  rejectWithValue(' An Unexpected Erroe');
        }
    }
})

export default actGetTeachers;