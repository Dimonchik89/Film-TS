import { createSelector } from "reselect";
import { RootState } from "../store";

const baseState = (state: RootState) => state.trandReducer;
export const trandFilms = createSelector(baseState, state => state.trandFilms);