// pages/CoverLetter.tsx

import styled from "styled-components";
import Header from "../components/Header";
import CoverLetterForm from "../components/CoverLetterForm";
import CoverLetterPanel from '../components/CoverLetterPanel.tsx';
function CoverLetter() {
  return (
    <>
      <Header isLogin={true} userName="송민교" />
      <Wrapper>
        <PanelWrapper>
          <CoverLetterForm />
          <CoverLetterPanel />

        </PanelWrapper>
      </Wrapper>
    </>
  );
}

export default CoverLetter;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;


const PanelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; /* 좌우 분리 */
  gap: 24px; /* 패널 사이 간격 */
`;