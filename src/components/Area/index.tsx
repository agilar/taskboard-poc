import styles from "./styles.module.scss"
import type { FC } from "react"
import type { Area as Props } from "store/areas"

export const Area: FC<Props> = ({ size, position }) => {
  console.log(position)
  return (
    <div className={styles.area} style={{
      gridRowStart: position.x + 1,
      gridRowEnd: position.x + size.width + 1,
      gridColumnStart: position.y + 1,
      gridColumnEnd: position.y + size.height + 1,
    }}>
      <div className={styles.heading}>
        heading
      </div>
    </div>
  )
}
