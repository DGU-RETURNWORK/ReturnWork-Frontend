import React, { useState } from 'react';
import Header from '../../components/Header';
import RoundButton from '../../components/RoundButton';
import './Mypage.css';

const Mypage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '추상윤',
    phoneNumber: '010-',
    email: 'dhzktldh@gmail.com',
    address: '',
    birthday: '2003-03-03',
    career: '1년간 요식업 근무 경험',
    memoryPassword: '',
    deleteAccount: false
  });
  const [originalData, setOriginalData] = useState(formData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileSelect = () => {
    console.log('파일 선택');
  };

  const handleEdit = () => {
    setIsEditing(true);
    setOriginalData(formData); // 현재 데이터를 원본으로 저장
  };

  const handleSave = () => {
    // 여기서 실제 저장 로직을 구현할 수 있습니다
    console.log('저장하기', formData);
    setIsEditing(false);
    setOriginalData(formData); // 저장된 데이터를 새로운 원본으로 설정
  };


  return (
    <div className="Mypage">
      <Header 
        withBack={true} 
        isLogin={true} 
        userName="name"
        onMenuClick={() => console.log("메뉴 클릭")}
        onBackClick={() => console.log("뒤로가기")}
        onUserClick={() => console.log("사용자 클릭")}
      />
      
      <div className="Mypage_content">
        <div className="Mypage_title">Profile</div>
        
        <div className="Mypage_form">
          <div className="Mypage_form_left">
            <div className="Mypage_field">
              <label className="Mypage_label">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="Mypage_input"
                disabled={!isEditing}
              />
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">전화번호</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="Mypage_input"
                disabled={!isEditing}
              />
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">이미지</label>
              <div className="Mypage_file_group">
                <input
                  type="text"
                  placeholder="파일을 선택해 주세요"
                  className="Mypage_input Mypage_file_input"
                  readOnly
                />
                <button 
                  type="button"
                  onClick={handleFileSelect}
                  className="Mypage_file_button"
                  disabled={!isEditing}
                >
                  파일 선택
                </button>
              </div>
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">경력사항</label>
              <textarea
                name="career"
                value={formData.career}
                onChange={handleInputChange}
                className="Mypage_textarea"
                rows={4}
                disabled={!isEditing}
              />
            </div>
          </div>
          
          <div className="Mypage_form_right">
            <div className="Mypage_field">
              <label className="Mypage_label">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="Mypage_input"
                disabled={!isEditing}
              />
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">주소</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="장소를 입력해 주세요"
                className="Mypage_input"
                disabled={!isEditing}
              />
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">생년월일</label>
              <div className="Mypage_date_group">
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="Mypage_input Mypage_date_input"
                  disabled={!isEditing}
                />
                <div className="Mypage_calendar_icon"></div>
              </div>
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">계정 영구 삭제</label>
              <div className="Mypage_toggle_group">
                <div className="Mypage_toggle">
                  <input
                    type="checkbox"
                    name="deleteAccount"
                    checked={formData.deleteAccount}
                    onChange={handleInputChange}
                    className="Mypage_toggle_input"
                    id="deleteAccount"
                    disabled={!isEditing}
                  />
                  <label htmlFor="deleteAccount" className="Mypage_toggle_label">
                    <span className="Mypage_toggle_slider"></span>
                  </label>
                </div>
                <span className="Mypage_toggle_text">삭제</span>
              </div>
            </div>
            
            <div className="Mypage_field">
              <label className="Mypage_label">수정 권한 인증</label>
              <input
                type="password"
                name="memoryPassword"
                value={formData.memoryPassword}
                onChange={handleInputChange}
                placeholder="추억 비밀번호를 입력해 주세요"
                className="Mypage_input"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
        
        <div className="Mypage_actions">
          <RoundButton
            text={isEditing ? "저장하기" : "수정하기"}
            size="large"
            onClick={isEditing ? handleSave : handleEdit}
          />
        </div>
      </div>
      
      <div className="Mypage_footer">
        <div className="Mypage_copyright">2023 JOB. All rights reserved.</div>
        <div className="Mypage_links">
          <a href="#" className="Mypage_link">Privacy Policy</a>
          <a href="#" className="Mypage_link">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Mypage;