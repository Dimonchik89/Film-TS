import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";
import { ResponseFilmsResult, AllFilmT } from "../../types/filmType";

export type trailerStateT = {
    trailerFilms: AllFilmT[];
}

const initialState: trailerStateT = {
    trailerFilms: [],
}

export const fetchTrailer = createAsyncThunk<ResponseFilmsResult, string>(
    "trailer/fetchTrailer",
    async (url) => {
        const {getRequest} = useHttp();
        const result = await getRequest({url});
        return await result.data;
    }
)

const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTrailer.fulfilled, (state, action) => {
                state.trailerFilms = action.payload.results;
            })
    }
})

const { reducer } = trailerSlice;
export { reducer }