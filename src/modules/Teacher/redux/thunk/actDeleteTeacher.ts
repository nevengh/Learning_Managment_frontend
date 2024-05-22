import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actDeleteTeacher = createAsyncThunk<void, number>(
    'teachers/actDeleteTeacher',
    async (teacherId, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            await axios.delete(`http://127.0.0.1:8000/api/teachers/${teacherId}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            } else {
                return rejectWithValue('An Unexpected Error');
            }
        }
    }
);

export default actDeleteTeacher;
