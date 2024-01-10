import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TvShows from "./components/TvShows";

import Footer from "./components/Footer";
import Settings from "./components/Settings";
import Profile from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<TvShows />} />
          <Route path="/profile" element={<Profile />}>
            {" "}
          </Route>
          <Route path="/settings" element={<Settings />}>
            {" "}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
