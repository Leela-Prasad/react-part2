import { createSlice } from "@reduxjs/toolkit";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const slice = createSlice({
  name: "gameQuery",
  initialState: {} as GameQuery,
  reducers: {
    setGenreId: (gameQuery, action) => {
      gameQuery.genreId = action.payload.genreId;
    },
    setPlatformId: (gameQuery, action) => {
      gameQuery.platformId = action.payload.platformId;
    },
    setSortOrder: (gameQuery, action) => {
      gameQuery.sortOrder = action.payload.sortOrder;
    },
    setSearchText: (gameQuery, action) =>
      ({ searchText: action.payload.searchText } as GameQuery),
  },
});

export const { setGenreId, setPlatformId, setSortOrder, setSearchText } =
  slice.actions;

export const gameQueryReducer = slice.reducer;
