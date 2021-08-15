import { createAction } from "@reduxjs/toolkit"
import type { Position, Size } from "./areas"

interface Target { target: string }

export const updatePosition = createAction<Position & Target>('update position')
export const updateSize = createAction<Size & Target>('update size')
