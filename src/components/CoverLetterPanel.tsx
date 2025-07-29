import React, { useState } from 'react';
import styled from 'styled-components';

const CoverLetterPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit'>('generate');
  const [content, setContent] = useState<string>('');
  const maxLength = 5000;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setContent(e.target.value);
    }
  };

  const handleSubmit = () => {
    alert('자소서가 저장되었습니다!');
    console.log(`[${activeTab === 'generate' ? '자소서 생성' : '자소서 첨삭'}]`, content);
  };

  const getPreviewText = (): string => {
    if (content) return content;

    return activeTab === 'generate'
      ? `[현장을 아는 실무형 인재]
안녕하십니까, 귀사의 사무행정 직무에 지원한 홍길동입니다. 저는 5년간 제조업체에서 근무하며 생산관리와 문서 행정을 담당해 왔습니다. 생산성과 효율을 높이는 데 있어 행정의 정확성과 속도가 얼마나 중요한지 현장에서 직접 체감했고, 이 경험을 바탕으로 귀사의 업무에 기여하고자 지원하게 되었습니다.

... 이하 생략`
      : `[첨삭 요청 자소서 예시]
저는 5년간 제조업체에서 근무하며 생산관리와 문서 행정을 담당했습니다. 이 경험을 바탕으로 귀사에 지원하게 되었습니다.

... 이하 생략`;
  };

  return (
    <Container>
      <TabMenu>
        <Tab
          type="button"
          $active={activeTab === 'generate'}
          onClick={() => setActiveTab('generate')}
        >
          자소서 생성
        </Tab>
        <Tab
          type="button"
          $active={activeTab === 'edit'}
          onClick={() => setActiveTab('edit')}
        >
          자소서 첨삭
        </Tab>
      </TabMenu>

      <PreviewBox>{getPreviewText()}</PreviewBox>

      <InputArea
        value={content}
        onChange={handleChange}
        placeholder={
          activeTab === 'generate'
            ? '자소서를 입력하거나 생성해 보세요.'
            : '첨삭받을 자소서를 입력해 보세요.'
        }
      />

      <BottomBar>
        <CharCount>{content.length} / {maxLength}</CharCount>
        <SaveButton type="button" onClick={handleSubmit}>저장하기</SaveButton>
      </BottomBar>
    </Container>
  );
};

export default CoverLetterPanel;

const Container = styled.div`
  width: 100%;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Pretendard', sans-serif;
`;

const TabMenu = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding-bottom: 8px;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  color: ${({ $active }) => ($active ? '#1d4ed8' : '#888')};
  border: none;
  background: none;
  border-bottom: ${({ $active }) => ($active ? '2px solid #1d4ed8' : 'none')};
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }
`;

const PreviewBox = styled.div`
  background: #f8f8f8;
  border-radius: 6px;
  padding: 16px;
  height: 300px;
  overflow-y: auto;
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const InputArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  margin-bottom: 12px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CharCount = styled.span`
  font-size: 14px;
  color: #666;
`;

const SaveButton = styled.button`
  padding: 8px 16px;
  background-color: #1d4ed8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;