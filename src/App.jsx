import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pokedex/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
