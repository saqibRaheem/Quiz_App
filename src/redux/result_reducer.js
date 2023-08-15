import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name : 'result',
    initialState : {
        userId : null,
        result : []
    },
    reducers : {
        setUaerId : (state, action) =>{
            state.userId = action.payload
        }
    }
})

export const { setUaerId } = resultReducer.actions;
export default resultReducer.reducer