import { createSlice } from "@reduxjs/toolkit";
import actGetTeachers from "./thunk/actGetTeachers";
import actAddTeacher from "./thunk/actAddTeacher";
import actDeleteTeacher from "./thunk/actDeleteTeacher";
import actEditTeacher from "./thunk/actEditTeacher";

interface ITeacher {
    // array of object
    records: {id:number,name:string,img:string,email:string}[];
    loading: "idle" | "succeeded" | "failed" |"pending";
    error: string | null;
  }

const initialState : ITeacher = {
    records: [],
    loading: "idle",
    error: null,
  };

const teachersSlice = createSlice({
    name:'teachers',
    initialState,
    reducers:{},
    extraReducers : (builder) => {
      builder.addCase(actGetTeachers.pending,(state)=>{
        state.loading='pending',
        state.error=null
      });
      builder.addCase(actGetTeachers.fulfilled,(state,action)=>{
        state.loading='succeeded';
        state.records=action.payload.data;
        
      });
      builder.addCase(actGetTeachers.rejected,(state,action)=>{
        state.loading='failed';
        if(action.payload && typeof action.payload === 'string'){
        state.error=action.payload
      }}
    )


    builder.addCase(actAddTeacher.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
  });
  builder.addCase(actAddTeacher.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records=action.payload.data;
      // Update state with the response data if needed
  });
  builder.addCase(actAddTeacher.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload;
      }
  });


  builder.addCase(actDeleteTeacher.pending, (state) => {
    state.loading = 'pending';
    state.error = null;
});
builder.addCase(actDeleteTeacher.fulfilled, (state, action) => {
    state.loading = 'succeeded';
    state.records = state.records.filter((teacher) => teacher.id !== action.meta.arg);
});
builder.addCase(actDeleteTeacher.rejected, (state, action) => {
    state.loading = 'failed';
    if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
    }
});


builder.addCase(actEditTeacher.pending, (state) => {
  state.loading = 'pending';
  state.error = null;
});
builder.addCase(actEditTeacher.fulfilled, (state, action) => {
  state.loading = 'succeeded';
  const updatedTeacher = action.payload;
  state.records = state.records.map((teacher) =>
      teacher.id === updatedTeacher.id ? updatedTeacher : teacher
  );
});
builder.addCase(actEditTeacher.rejected, (state, action) => {
  state.loading = 'failed';
  if (action.payload && typeof action.payload === 'string') {
      state.error = action.payload;
  }
});

  
      
    }
})

export default teachersSlice.reducer ;
export {actGetTeachers};