import { createSelector } from "reselect";
import { RootState } from "../store";
import type { trailerStateT } from "../trailer";


type baseState = (arg: RootState) => trailerStateT

const baseState = (state: RootState) => state.trailerReducer
export const trailerFilms = createSelector(baseState, state => state.trailerFilms);