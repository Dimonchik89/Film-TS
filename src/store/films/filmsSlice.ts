import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";
import type { AllFilmT, FilmStateT, ResponseFilmsResult } from "../../types/filmType";

const initialState: FilmStateT = {
    films: [],
    currentPage: 1,
    totalPages: 1,
    randomFilmPosterPath: "",
    loading: false,
    error: false,
}

export const fetchFilms = createAsyncThunk<ResponseFilmsResult, string>(
    "films/fetchFilms",
    async (url) => {
        const { getRequest } = useHttp();
        const res = await getRequest({url});
        return await res.data;
    }
)

const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilms.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.films = action.payload.results;
            })
            .addCase(fetchFilms.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
});

const { reducer } = filmSlice;
// export const { setRandomFilm } = actions;
export {reducer}