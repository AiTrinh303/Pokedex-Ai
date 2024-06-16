import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Home from "./pages/Home";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetail/>
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
