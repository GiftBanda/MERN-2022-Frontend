import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "../goals/goalService";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new goal
export const createGoal = createAsyncThunk('goals/create', async (goalData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
        return await goalService.createGoal(goalData, token);
    }catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
          .addCase(createGoal.pending, (state) => {
              state.isLoading = true 
          })
          .addCase(createGoal.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.goals.push(action.payload) 
          })
          .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
          })
    }
})

export const {reset} = goalSlice.actions;
export default goalSlice.reducer;