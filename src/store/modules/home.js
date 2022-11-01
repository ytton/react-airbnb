import { getGoodPriceRoomInfo } from '@/services/modules/home';
import { getHotRoomInfo } from '@/services/modules/home';
import { getDiscountRoomInfo, getHighScoreRoomInfo, getLongForCityInfo } from '../../services/modules/home';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getHomeInfoAction = createAsyncThunk('getHomeInfoAction', async (_, { dispatch }) => {
  getGoodPriceRoomInfo().then(res => dispatch(changeGoodPriceRoomInfoAction(res)));
  getHotRoomInfo().then(res => dispatch(changeHotRoomInfoAction(res)));
  getDiscountRoomInfo().then(res => dispatch(changeDiscountRoomInfoAction(res)));
  getLongForCityInfo().then(res => dispatch(changeLongForCityInfoAction(res)));
  getHighScoreRoomInfo().then(res => dispatch(changeHighScoreRoomInfoAction(res)));
});

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceRoomInfo: {},
    hotRoomInfo: {},
    discountRoomInfo: {},
    longForCityInfo: {},
    highScoreRoomInfo: {}
  },
  reducers: {
    changeGoodPriceRoomInfoAction(state, action) {
      state.goodPriceRoomInfo = action.payload;
    },
    changeHotRoomInfoAction(state, action) {
      state.hotRoomInfo = action.payload;
    },
    changeDiscountRoomInfoAction(state, action) {
      state.discountRoomInfo = action.payload;
    },
    changeLongForCityInfoAction(state, action) {
      state.longForCityInfo = action.payload;
    },
    changeHighScoreRoomInfoAction(state, action) {
      state.highScoreRoomInfo = action.payload;
    }
  }
});

export default homeSlice.reducer;
export const {
  changeGoodPriceRoomInfoAction,
  changeHotRoomInfoAction,
  changeDiscountRoomInfoAction,
  changeLongForCityInfoAction,
  changeHighScoreRoomInfoAction
} = homeSlice.actions;
