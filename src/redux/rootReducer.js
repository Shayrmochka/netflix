import { combineReducers } from "@reduxjs/toolkit";

import appSlice from "./features/appSlice";
import registrationSlice from "./features/registrationSlice";

const rootReducer = combineReducers({
  app: appSlice,
  registration: registrationSlice,
});

export default rootReducer;
