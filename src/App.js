import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/sign-up/SignUp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HomeAuth from "./Home/HomeAuth";
import Protected from "./Components/ProtectedRoute/Protected";
import ForgetPassword from "./Auth/ForgetPassword";
import Gallery from "./Home/Gallery/Gallery";
import Videos from "./Home/Video/Videos";
import Admin from "./Home/Admin/Admin";
import PhoneAuth from "./Auth/Phone/PhoneAuth";
import Streamer from "./Pages/Streamer";
import FixturesDatass from "./Home/Fixtures/FixturesDatass";
// <Route path="/*/fixtures" element={<HomeAuth />} />;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/localUser-signup" element={<SignUp />} />
        <Route path="/streammer" element={<Streamer />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/phone-auth" element={<PhoneAuth />} />
        <Route path="/*" element={<Protected />}>
          <Route path="/*/gallery" element={<Gallery />} />
          <Route path="/*/videos" element={<Videos />} />
          <Route path="/*/fixtures" element={<FixturesDatass />} />
          <Route path="/*/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer position="top-left" />
    </div>
  );
}

export default App;
