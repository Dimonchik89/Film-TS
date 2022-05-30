import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PopularCarouselStateT, ResponseFilmsResult } from "../../types/filmType";
import useHttp from "../../hooks/useHttp";

const initialState: PopularCarouselStateT = {
    popularFilms: []
}

export const fetchPopularCarouselFilms = createAsyncThunk<ResponseFilmsResult, string>(
    "popularCarouselFilms/fetchPopularCarouselFilms",
    async (url) => {
        const {getRequest} = useHttp();
        const response = await getRequest({url});
        return await response.data;
    }
)

const popularCarouselFilms = createSlice({
    name: "popularCarouselFilms",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPopularCarouselFilms.fulfilled, (state, action) => {
                state.popularFilms = action.payload.results;
            })
    }
})

const { reducer } = popularCarouselFilms;
export { reducer }