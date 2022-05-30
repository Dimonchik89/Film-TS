import { createSelector } from "reselect";
import { RootState } from "../store";
import { FilmStateT, AllFilmT } from "../../types/filmType";

type BaseUrlT = (arg: RootState) => FilmStateT;

const baseState: BaseUrlT = state => state.films;
export const films = createSelector(baseState, state => state.films);
export const currentPage = createSelector(baseState, state => state.currentPage);
export const totalPage = createSelector(baseState, state => state.totalPages);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);