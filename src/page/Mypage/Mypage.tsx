import React, { useState } from 'react';
import Header from '../../components/Header';
import RoundButton from '../../components/RoundButton';
import './Mypage.css';

const Mypage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [formData, setFormData] = useState({
    name: '추상윤',
    phoneNumber: '010-',
    email: 'dhzktldh@gmail.com',
    address: '',
    birthday: '2003-03-03',
    career: '1년간 요식업 근무 경험',
    memoryPassword: ''
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

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    // 여기서 실제 패스워드 확인 로직을 구현할 수 있습니다
    if (deletePassword === 'correctPassword') { // 실제로는 서버에서 확인
      console.log('계정 삭제 완료');
      setShowDeleteModal(false);
      setDeletePassword('');
      // 실제 삭제 로직 구현
    } else {
      alert('패스워드가 일치하지 않습니다.');
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setDeletePassword('');
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
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="Mypage_delete_button"
              >
                계정 삭제
              </button>
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

      {/* 계정 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="Mypage_modal_overlay">
          <div className="Mypage_modal">
            <div className="Mypage_modal_header">
              <h3 className="Mypage_modal_title">계정 영구 삭제</h3>
              <button 
                className="Mypage_modal_close"
                onClick={handleDeleteCancel}
              >
                ×
              </button>
            </div>
            <div className="Mypage_modal_content">
              <p className="Mypage_modal_text">
                계정을 영구적으로 삭제하시겠습니까?
              </p>
              <p className="Mypage_modal_warning">
                이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.
              </p>
              <div className="Mypage_modal_input_group">
                <label className="Mypage_modal_label">비밀번호 확인</label>
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="Mypage_modal_input"
                />
              </div>
            </div>
            <div className="Mypage_modal_actions">
              <button
                className="Mypage_modal_button Mypage_modal_button_cancel"
                onClick={handleDeleteCancel}
              >
                취소
              </button>
              <button
                className="Mypage_modal_button Mypage_modal_button_confirm"
                onClick={handleDeleteConfirm}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mypage;