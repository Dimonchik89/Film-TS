import { createSelector } from "reselect";
import { RootState } from "../store";
import { VideoStateT } from "../../types/videoType";

export type BaseStateT = (arg: RootState) => VideoStateT;
const baseState: BaseStateT = state => state.videoReducer;
export const video = createSelector(baseState, state => state.video)