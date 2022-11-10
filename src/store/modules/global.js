import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'global',
  initialState: {
    showFooter: true,
    fixedHeader: false
  },
  reducers: {
    changeShowFooterAction(state, action) {
      state.showFooter = action.payload;
    },
    changeFixedHeaderAction(state, action) {
      state.fixedHeader = action.payload;
    }
  }
});

export default slice.reducer;
export const { changeShowFooterAction, changeFixedHeaderAction } = slice.actions;
