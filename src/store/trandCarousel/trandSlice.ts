import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TrandCarouselStateT, ResponseFilmsResult } from "../../types/filmType";
import useHttp from "../../hooks/useHttp";

const initialState: TrandCarouselStateT = {
    trandFilms: []
}

export const fetchTrand = createAsyncThunk<ResponseFilmsResult, string>(
    "trand/fetchTrand",
    async (url) => {
        const {getRequest} = useHttp();
        const result = await getRequest({url});
        return await result.data;
    }
)

const trandSlice = createSlice({
    name: "trand",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTrand.fulfilled, (state, action) => {
                state.trandFilms = action.payload.results;
            })
    }
})

const { reducer } = trandSlice;
export { reducer }