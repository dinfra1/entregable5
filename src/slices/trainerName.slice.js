import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlace = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrainerName: (state, action) => action.payload 
    }
})

export const {setTrainerName} = trainerNameSlace.actions
export default trainerNameSlace.reducer