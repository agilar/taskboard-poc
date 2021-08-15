import { createReducer } from "@reduxjs/toolkit"
import { v4 as generateUUID } from "uuid"
import { getStoredState } from "./utils"
import * as actions from "./areas.actions"
import type { AreasState } from "./areas"

const emptyState: AreasState = {
  [generateUUID()]: {
    title: 'Your first area',
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 1,
      height: 2,
    },
    permissions: {
      enabled: false,
      editable: false,
      draggable: false,
    }
  }
}

export default createReducer(
  getStoredState<AreasState>('areas') ?? emptyState, 
  builder => builder
    .addCase(actions.updatePosition, (state, action) => {
      const { target, ...position } = action.payload
      state[target].position = position
    })
    .addCase(actions.updateSize, (state, action) => {
      const { target, ...size } = action.payload
      state[target].size = size
    })
)
