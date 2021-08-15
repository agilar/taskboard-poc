import { Provider as StoreProvider } from "react-redux"
import { Header, Grid } from "components"
import { store } from "./store"

import "normalize.css"
import "styles/main.scss"

export default function App() {
  return (
    <StoreProvider store={store}>
      <Header />
      <Grid />
    </StoreProvider>
  )
}
