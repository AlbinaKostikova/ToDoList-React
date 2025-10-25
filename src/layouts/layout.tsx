import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { RootState } from "../store"

export const Layout = () => {
  const theme = useSelector(( state: RootState) => state.themeList.theme)
  return (
    <>
    <ThemeProvider theme={theme}/>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

function useSelector(arg0: (state: RootState) => any) {
  throw new Error("Function not implemented.")
}
