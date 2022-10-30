const { createSlice } = require('@reduxjs/toolkit');

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    count: 1
  },
  reducers: {
    changeCount(state, action) {
      state.count = action.payload;
    }
  }
});
export default homeSlice.reducer;
export const { changeCount } = homeSlice.actions;
