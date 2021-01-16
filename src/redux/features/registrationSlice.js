import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    step: 0,
    userEmail: false,
    userPlan: false,
  },
  reducers: {
    nextStep: (state = {}) => {
      state.step++;
    },
    previousStep: (state = {}) => {
      state.step--;
    },
    chooseStep: (state = {}, action) => {
      state.step = action.payload;
    },
    setUserEmail: (state = {}, action) => {
      state.userEmail = action.payload;
    },
    setUserPlan: (state = {}, action) => {
      state.userPlan = action.payload;
    },
  },
});

export const {
  nextStep,
  previousStep,
  chooseStep,
  setUserEmail,
  setUserPlan,
} = registrationSlice.actions;
export default registrationSlice.reducer;
