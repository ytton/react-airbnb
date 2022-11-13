import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'global',
  initialState: {
    footerConfig: {
      isShow: true
    },
    headerConfig: {
      isFix: false,
      isAlpha: false,
      isSearch: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, action) {
      state.headerConfig = { ...state.headerConfig, ...action.payload };
    },
    changeFooterConfigAction(state, action) {
      state.footerConfig = { ...state.footerConfig, ...action.payload };
    }
  }
});

export default slice.reducer;
export const { changeFooterConfigAction, changeHeaderConfigAction } = slice.actions;
