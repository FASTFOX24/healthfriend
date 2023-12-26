import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinMembership from "./pages/JoinMebership/JoinMembership";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />} path="/" />
          <Route element={<LoginPage />} path="/auth/login" />
          <Route element={<JoinMembership />} path="/auth/join_membership" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
