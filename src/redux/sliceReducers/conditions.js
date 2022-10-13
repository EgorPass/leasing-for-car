import { createSlice } from "@reduxjs/toolkit";
import { conditionAction } from "../actions/conditionAction";
// import {
//   conditionReducer_price,
//   conditionReducer_firstPay,
//   conditionReducer_duration,
// } from "../reducers/conditionReducers";

export const {
  actions: { setPrice, setFirstPay, setDuration, setTotalSum, setPayAtMonth },
  reducer: conditions,
} = createSlice({
  name: "conditions",
  initialState: {
    price: 3300000,
    firstPay: 13,
    duration: 60,
    totalSum: 0,
    payAtMonth: 0,
  },
  reducers: {
    setPrice: {
      prepare: conditionAction,
      reducer: (state, { payload }) => {
        state.price = +payload;
      },
    },
    setFirstPay: {
      prepare: conditionAction,
      reducer: (state, { payload }) => {
        state.firstPay = +payload;
      },
    },
    setDuration: {
      prepare: conditionAction,
      reducer: (state, { payload }) => {
        state.duration = +payload;
      },
    },
    setTotalSum: {
      prepare: conditionAction,
      reducer: (state, { payload }) => {
        state.totalSum = +payload;
      },
    },
    setPayAtMonth: {
      prepare: conditionAction,
      reducer: (state, { payload }) => {
        state.payAtMonth = +payload;
      },
    },
  },
});

export const conditionActions = {
  setDuration,
  setFirstPay,
  setPrice,
  setTotalSum,
  setPayAtMonth,
};
