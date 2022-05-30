import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";
import { VideoT, VideoStateT, ResponseVideoT } from "../../types/videoType";

const initialState: VideoStateT = {
    video: [],
    error: false
}

export const fetchVideo = createAsyncThunk<ResponseVideoT, string>(
    "video/fetchVideo",
    async (url) => {
        const { getRequest } = useHttp();
        const result = await getRequest({url});
        return await result.data;
    }
)

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVideo.pending, state => {
                state.error = false;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.error = false;
                state.video = action.payload.results;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.error = true;
            })
    }
})

const { reducer } = videoSlice;
export { reducer }