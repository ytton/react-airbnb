import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'global',
  initialState: {
    showFooter: true
  },
  reducers: {
    changeShowFooterAction(state, action) {
      state.showFooter = action.payload;
    }
  }
});

export default slice.reducer;
export const { changeShowFooterAction } = slice.actions;
