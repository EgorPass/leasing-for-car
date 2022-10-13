const conditionReducer_price = (state, { payload }) => {
  console.log("price");
  	console.log(payload)
  	state.price = payload;
};

const conditionReducer_firstPay = (state, payload) => {
  state.firstPay = payload.value;
};

const conditionReducer_duration = (state, payload) => {
  state.durations = payload.value;
};
