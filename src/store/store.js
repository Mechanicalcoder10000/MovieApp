import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeslice.js";

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});