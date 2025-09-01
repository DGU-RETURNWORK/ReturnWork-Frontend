import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import CoverLetter from "../page/CoverLetter";
import Mypage from "../page/Mypage";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cover_letter" element={<CoverLetter />} />
        <Route path="/my_page" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
