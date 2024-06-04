import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
