import booksReducer from './booksSlice';

describe('books reducer', () => {
  it('should handle initial state', () => {
    expect(booksReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      library: [],
      filteredLibrary: [],
      bookDetails: [],
      searchQuery: '',
    });
  });
});
