import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Homepage />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
