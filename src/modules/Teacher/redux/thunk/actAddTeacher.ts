
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TResponse = { id: number, name: string, email: string, img: string };
interface TeacherPayload {
    name: string;
    email: string;
    img: string;
}
const actAddTeacher = createAsyncThunk<TResponse, TeacherPayload>(
    'teachers/actAddTeacher',
    async (payload: TeacherPayload, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const response = await axios.post<TResponse>("http://127.0.0.1:8000/api/teachers", payload);
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

export default actAddTeacher;
