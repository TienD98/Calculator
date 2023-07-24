import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: { fomular: '0', output: '', display: [''] },
    reducers: {
        fetchData(state, action) {
            state.fomular = action.payload;
            state.output += state.fomular;
        },
        evaluateFomular(state, action) {
            state.display.push(action.payload);
            state.fomular = state.output + "=" + action.payload;
            state.output = '';
        },
        clearData(state) {
            state.fomular = '0';
            state.output = '';
            state.display = [""];
        },
        fetchError(state, action) {
            state.display.push(action.payload);
        }
    }
})

export const { fetchError, fetchData, evaluateFomular, clearData } = calculatorSlice.actions;
export default calculatorSlice.reducer;