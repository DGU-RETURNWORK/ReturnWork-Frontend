import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Mypage from "../page/Mypage/Mypage";
import AccidentInfo from "../page/AccidentInfo/AccidentInfo";
import SelfAssessment from "../page/SelfAssessment/SelfAssessment";
import DiagnosisCheck from "../page/DiagnosisCheck/DiagnosisCheck";
import JobMatch from "../page/JobMatch/JobMatch";
import Login from "../page/Auth/Login";
import Step1 from "../page/Auth/Signup/Step1";
import Signup from "../page/Auth/Signup/index";
import Step2 from "../page/Auth/Signup/Step2";
import Step3 from "../page/Auth/Signup/Step3";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />

        <Route path="/auth/signup" element={<Signup />}>
          <Route index element={<Step1 />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
        </Route>

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
