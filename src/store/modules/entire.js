import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEntireList } from '../../services';

export const getEntireListAction = createAsyncThunk('getEntireList', (query, { dispatch }) => {
  query ??= {
    currentPage: 1,
    pageSize: 20
  };
  dispatch(changePageInfoAction(query));
  dispatch(changeShowLoadingAction(true));
  getEntireList(query).then(res => {
    dispatch(changeShowLoadingAction(false));
    dispatch(changeEntireListAction(res));
  });
});

const slice = createSlice({
  name: 'entire',
  initialState: {
    pageSize: 20,
    currentPage: 1,
    filterInfo: {},
    entireList: [],
    total: 0,
    showLoading: false,
    showMap: true
  },
  reducers: {
    changeEntireListAction(state, action) {
      state.entireList = action.payload.list;
      state.total = action.payload.totalCount;
    },
    changeShowLoadingAction(state, action) {
      state.showLoading = action.payload;
    },
    changeShowMapAction(state, action) {
      state.showMap = action.payload;
    },
    changePageInfoAction(state, action) {
      const { pageSize, currentPage } = action.payload;
      pageSize && (state.pageSize = pageSize);
      currentPage && (state.currentPage = currentPage);
    }
  }
});

export default slice.reducer;
export const { changeEntireListAction, changePageInfoAction, changeShowLoadingAction, changeShowMapAction } =
  slice.actions;
