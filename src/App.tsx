import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <ToastContainer />
  </ThemeProvider>
);

export default App;
