import styles from "./styles.module.scss"
import Head from "react-helmet"
import type { FC } from "react"

const LOGO = 'ATB POC'
const PROJECT_NAME = 'Sample project'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Head titleTemplate={`${LOGO} | %s`}>
        <title>{PROJECT_NAME}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.bar}>
        <div className={styles.logo}>{LOGO}</div>
        <div className={styles.delimiter} />
        <div className={styles.projectName}>{PROJECT_NAME}</div>
      </div>
      <div className={styles.bar}>
        *some actions here*
      </div>
    </header>
  )
}
