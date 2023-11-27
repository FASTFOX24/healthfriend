import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
