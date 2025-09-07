import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Mypage from "../page/Mypage";
import AccidentInfo from "../page/AccidentInfo/AccidentInfo";
import SelfAssessment from "../page/SelfAssessment/SelfAssessment";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_page" element={<Mypage />} />
        <Route path="/accident_info" element={<AccidentInfo />} />
        <Route path="/self_assessment" element={<SelfAssessment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
