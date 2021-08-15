// import { createSelector } from "reselect"
import type { State } from "store"

export const getAreas = (state: State) => Object.entries(state.areas)
