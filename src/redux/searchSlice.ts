import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface searchInputInterface{
    searchValue: string;
}
const initialState: searchInputInterface={
    searchValue: '',
}

const searchInputSlice = createSlice({
    name:'searchInput',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    },
})

export const { setSearchValue } = searchInputSlice.actions;
export default searchInputSlice.reducer