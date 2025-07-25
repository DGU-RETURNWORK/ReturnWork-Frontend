import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import CoverLetter from "../page/CoverLetter";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cover_letter" element={<CoverLetter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
