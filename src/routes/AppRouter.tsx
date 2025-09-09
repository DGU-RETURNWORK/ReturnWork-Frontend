import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Mypage from "../page/Mypage/Mypage";
import AccidentInfo from "../page/AccidentInfo/AccidentInfo";
import SelfAssessment from "../page/SelfAssessment/SelfAssessment";
import DiagnosisCheck from "../page/DiagnosisCheck/DiagnosisCheck";
import JobMatch from "../page/JobMatch/JobMatch";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_page" element={<Mypage />} />
        <Route path="/accident_info" element={<AccidentInfo />} />
        <Route path="/self_assessment" element={<SelfAssessment />} />
        <Route path="/diagnosis_check" element={<DiagnosisCheck />} />
        <Route path="/job_match" element={<JobMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
