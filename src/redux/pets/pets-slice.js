import { createSlice } from '@reduxjs/toolkit';
import { addPet, addNotice } from './pets-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  result: '',
};

const pendingReducer = state => {
  state.loading = true;
  state.error = null;
  state.result = 'pending';
};

const fulfilledReducer = (state, { payload }) => {
  state.loading = false;
  state.result = 'fulfilled';
  if (payload) {
    state.items.push(payload);
    state.user = payload;
  }
};

const rejectedReducer = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
  state.result = 'rejected';
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        action => [addPet.pending, addNotice.pending].includes(action.type),
        pendingReducer
      )
      .addMatcher(
        action => [addPet.fulfilled, addNotice.fulfilled].includes(action.type),
        fulfilledReducer
      )
      .addMatcher(
        action => [addPet.rejected, addNotice.rejected].includes(action.type),
        rejectedReducer
      );
  },
});

export default petsSlice.reducer;
