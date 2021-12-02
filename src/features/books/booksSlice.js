import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLibrary, fetchDetails } from './booksAPI';

export const Status = {
  idle: 'idle',
  loading: 'loading',
}

const initialState = {
  status: 'idle',
  library: [],
  filteredLibrary: [],
  bookDetails: {},
  searchQuery: '',
};

export const fetchBooksLibrary = createAsyncThunk(
  'books/fetchLibrary',
  async (authorName) => {
    const response = await fetchLibrary(authorName);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchBookDetails = createAsyncThunk(
  'books/fetchBookDetails',
  async (bookTitle) => {
    const response = await fetchDetails(bookTitle);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksLibrary: (state, action) => {
      state.library = action.payload;
    },

    fetchBookDetails: (state, action) => {
      state.bookDetails = action.payload;
    },

    resetBookDetails: (state) => {
      state.bookDetails = {};
    },

    resetBookLibrary: (state) => {
      state.library = [];
    },

    filterBookList: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredLibrary = state.library.filter(
          item => item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksLibrary.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(fetchBooksLibrary.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.library = action.payload;
      })
      .addCase(fetchBookDetails.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.bookDetails = action.payload;
      })
    ;
  },
});

export const { filterBookList, resetBookDetails, resetBookLibrary } = booksSlice.actions;

export const selectBooks = (state) => state.books.library;

export const selectBooksFiltered = (state) => state.books.filteredLibrary;

export const selectBooksSearchQuery = (state) => state.books.searchQuery;

export const selectBookDetails = (state) => state.books.bookDetails;

export const selectStatus = (state) => state.books.status;

export default booksSlice.reducer;
