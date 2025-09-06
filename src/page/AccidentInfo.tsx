import { useState } from "react";
import Header from "../components/Header";
import RoundButton from "../components/RoundButton";
import LabeledSelect from "../components/Resume/LabeledSelect";
import LabeledTextarea from "../components/Resume/LabeledTextarea";
import WarningIcon from "../assets/icons/Warning.svg";
import "../css/AccidentInfo.css";

const AccidentInfo = () => {
    const [formData, setFormData] = useState({
        industry: "제조업",
        accidentType: "기계작업 중 사고",
        injuredPart: "손 (왼쪽/오른쪽)",
        injurySeverity: "부분 손실",
        detailedInfo: ""
    });

    const industryOptions = [
        "제조업",
        "건설업",
        "운수업",
        "도소매업",
        "숙박업",
        "음식업",
        "기타"
    ];

    const accidentTypeOptions = [
        "기계작업 중 사고",
        "추락사고",
        "충돌사고",
        "화학물질 노출",
        "전기사고",
        "기타"
    ];

    const injuredPartOptions = [
        "손 (왼쪽/오른쪽)",
        "발 (왼쪽/오른쪽)",
        "머리",
        "목",
        "어깨",
        "팔 (왼쪽/오른쪽)",
        "다리 (왼쪽/오른쪽)",
        "기타"
    ];

    const injurySeverityOptions = [
        "부분 손실",
        "완전 손실",
        "기능 장애",
        "외상",
        "기타"
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleContinue = () => {
        console.log("사고 정보:", formData);
        // 다음 단계로 이동하는 로직
    };

    const handleWarningClick = () => {
        console.log("경고 아이콘 클릭");
        // 경고 관련 기능 구현
    };

    return (
        <div className="AccidentInfo">
            <div className="AccidentInfo_header">
                <Header
                    withBack={true}
                    isLogin={true}
                    userName="name"
                    onMenuClick={() => console.log("메뉴 클릭")}
                    onBackClick={() => console.log("뒤로가기")}
                    onUserClick={() => console.log("사용자 클릭")}
                />
                <div className="AccidentInfo_warning">
                    <img
                        src={WarningIcon}
                        alt="Warning"
                        className="warning-icon"
                        onClick={handleWarningClick}
                    />
                </div>
            </div>

            <div className="AccidentInfo_content">
                <h1 className="AccidentInfo_title">사고 정보 입력</h1>

                <div className="AccidentInfo_form">
                    <div className="AccidentInfo_form_left">
                        <div className="AccidentInfo_form_row">
                            <LabeledSelect
                                label="①산업군"
                                value={formData.industry}
                                onChange={(value) => handleInputChange("industry", value)}
                                options={industryOptions}
                            />
                            <LabeledSelect
                                label="①사고 유형"
                                value={formData.accidentType}
                                onChange={(value) => handleInputChange("accidentType", value)}
                                options={accidentTypeOptions}
                            />
                        </div>

                        <div className="AccidentInfo_form_row">
                            <LabeledSelect
                                label="①부상 부위"
                                value={formData.injuredPart}
                                onChange={(value) => handleInputChange("injuredPart", value)}
                                options={injuredPartOptions}
                            />
                            <LabeledSelect
                                label="①부상 정도"
                                value={formData.injurySeverity}
                                onChange={(value) => handleInputChange("injurySeverity", value)}
                                options={injurySeverityOptions}
                            />
                        </div>
                    </div>

                    <div className="AccidentInfo_form_right">
                        <LabeledTextarea
                            label="상세 정보"
                            value={formData.detailedInfo}
                            onChange={(value) => handleInputChange("detailedInfo", value)}
                            placeholder="200자 이내로 적어주세요."
                        />
                    </div>
                </div>

                <div className="AccidentInfo_actions">
                    <RoundButton
                        text="계속하기"
                        size="large"
                        onClick={handleContinue}
                    />
                    <div className="AccidentInfo_step">0/5</div>
                </div>
            </div>

            <footer className="AccidentInfo_footer">
                <div className="AccidentInfo_copyright">
                    <span>2023 JOB. All rights reserved.</span>
                    <div className="AccidentInfo_links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AccidentInfo;