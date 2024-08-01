import {createSlice} from '@reduxjs/toolkit';
import {getBooks} from './bookActions';

const initState = {
  books: [],
  loader: false,
};
export const booksSlice = createSlice({
  name: 'books',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loader = true;
    });
    builder.addCase(getBooks.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loader = false;
      state.books = [];
    });
  },
});

export default booksSlice.reducer;
