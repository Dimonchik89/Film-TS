import { combineReducers } from "@reduxjs/toolkit";
import { reducer as filmsReducer } from "./films/filmsSlice";
import { reducer as popularCarouselFilmsReducer } from "./popularCarousel";
import { reducer as videoReducer } from "./video";
import { reducer as trailerReducer } from "./trailer";
import { reducer as trandReducer } from "./trandCarousel";

const reducers = combineReducers({
    films: filmsReducer,
    popularCarouselFilmsReducer: popularCarouselFilmsReducer,
    videoReducer: videoReducer,
    trailerReducer: trailerReducer,
    trandReducer
})
export default reducers;