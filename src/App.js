import "./App.css";
import Stackmain from "./components/stackmain";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion";
import ViewQns from "./components/ViewQuestion";
import PasswordReset from "./components/passwordReset";
import SignUp from "./components/SignUP";
import Login from "./components/login";
import Companies from "./components/Companies";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Stackmain />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/question" element={<ViewQns />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
