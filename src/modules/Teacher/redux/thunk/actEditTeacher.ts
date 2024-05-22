import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TeacherData {
    id: number;
    name: string;
    email: string;
    img: string;
}

const actEditTeacher = createAsyncThunk<TeacherData, TeacherData>(
    'teachers/actEditTeacher',
    async (teacher, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const response = await axios.put<TeacherData>(`http://127.0.0.1:8000/api/teachers/${teacher.id}`, teacher);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            } else {
                return rejectWithValue('An Unexpected Error');
            }
        }
    }
);

export default actEditTeacher;
