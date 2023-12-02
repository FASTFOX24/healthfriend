import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinMembership from "./pages/JoinMebership/JoinMembership";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} path="/" />
        <Route element={<LoginPage />} path="/auth/login" />
        <Route element={<JoinMembership />} path="/auth/join_membership" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
