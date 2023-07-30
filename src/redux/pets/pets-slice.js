import { createSlice } from '@reduxjs/toolkit';
// import { addPet, addNotice } from './operations';
import { fetchPetDel, fetchPets } from './operation';

const initialState = {
  items: [],
  loading: false,
  error: null,
  result: '',
};

// const pendingReducer = state => {
//   state.loading = true;
//   state.error = null;
//   state.result = 'pending';
// };

// const fulfilledReducer = (state, { payload }) => {
//   state.loading = false;
//   state.result = 'fulfilled';
//   if (payload) {
//     state.items.push(payload);
//     state.user = payload;
//   }
// };

// const rejectedReducer = (state, { payload }) => {
//   state.loading = false;
//   state.error = payload;
//   state.result = 'rejected';
// };

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: builder => {
	  builder
      .addCase(fetchPets.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.loading = false;
      })
      .addCase(fetchPets.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(fetchPetDel.pending, state => {
        state.loading = true;
      })
		  .addCase(fetchPetDel.fulfilled, (state, { payload }) => {
			console.log(payload);
        state.items = state.items.filter(
          pet => pet.id !== payload._id
        );
        state.loading = false;
      })
      .addCase(fetchPetDel.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
      // .addMatcher(
      //   action => [addPet.pending, addNotice.pending].includes(action.type),
      //   pendingReducer
      // )
      // .addMatcher(
      //   action => [addPet.fulfilled, addNotice.fulfilled].includes(action.type),
      //   fulfilledReducer
      // )
      // .addMatcher(
      //   action => [addPet.rejected, addNotice.rejected].includes(action.type),
      //   rejectedReducer
      // );
  },
});

export default petsSlice.reducer;