import { useEffect, useCallback, useState, useRef, useMemo } from "react"
import { getAreas } from "store/areas.selectors"
import { useSelector } from "react-redux"
import { Area } from "../Area"
import styles from "./styles.module.scss"
import type { FC } from "react"
import type { Field } from "./types"

const WIDTH = 100
const HEIGHT = 200
const GAP = 16

export const Grid: FC = () => {
  const [field, setField] = useState<Field>({ horizontals: 0, vertices: 0 })
  const areas = useSelector(getAreas)
  const grid = useRef<HTMLDivElement>(null)
  const placeholders = useMemo(() => (
    new Array(field.vertices * field.horizontals).fill(true).map((_, index) => (
      <div className={styles.placeholder} style={{
        gridColumn: index % field.horizontals + 1,
        gridRow: Math.floor(index / field.horizontals) + 1,
      }} />
    ))
  ), [field])

  useEffect(() => {
    const { clientWidth = 0, clientHeight = 0 } = grid.current ?? {}
    const minVertices = Math.floor((clientHeight - GAP) / (HEIGHT + GAP))
    const minHorizontals = Math.floor(clientWidth / WIDTH)

    // Calculate depending on areas
    setField({ horizontals: minHorizontals, vertices: minVertices })
  }, [setField])

  
  return (
    <div className={styles.grid} ref={grid} style={{
      gridTemplateColumns: `repeat(${field.horizontals}, ${WIDTH}px)`,
      gridTemplateRows: `repeat(${field.vertices}, ${HEIGHT}px)`,
    }}>
      {placeholders}
      {areas.map(([id, props]) => <Area key={id} {...props} /> )}
    </div>
  )
}
