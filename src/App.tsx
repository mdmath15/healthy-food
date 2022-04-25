import { ThemeProvider } from "styled-components"
import AppRoutes from "./routes"
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <AppRoutes />
        </ThemeProvider>
    )
}

export default App
