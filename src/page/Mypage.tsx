import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPage: React.FC = () => {
    const [message, setMessage] = useState('불러오는 중...');
    const [user, setUser] = useState<any>(null);

    const api = axios.create({
        baseURL: '/api', // 프록시를 통해 요청
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    });

    useEffect(() => {
        const signupUser = async () => {
            try {
                const res = await api.post('/api/auth/signup', {
                    name: "추상윤",
                    email: "dhzktldh@gmail.com",
                    password: "ttkdd1240",
                    birthday: "2003-03-03",
                    phoneNumber: "010-7689-3141",
                    region: "서울시 강서구",
                    career: "1년간 요식업 근무 경험"
                });

                console.log('✅ 서버 응답 데이터:', res.data);
                setUser(res.data);
                setMessage('✅ 회원가입 성공!');
            } catch (err) {
                console.error('❌ API 호출 실패:', err);
                setMessage('❌ 회원가입 실패');
            }
        };

        const checkEmailDuplicate = async () => {
            try {
                const email = "dhzktldh@gmail.com";
                const res = await api.get('/api/user/duplicate', { params: { email } });
                console.log('✅ 이메일 중복 체크 응답:', res.data);
            } catch (err) {
                console.error('❌ 이메일 중복 체크 실패:', err);
            }
        };

        signupUser();
        checkEmailDuplicate();
    }, []);
    return (
        <div style={{ padding: '20px' }}>
            <h2>내 페이지 (회원가입 테스트)</h2>
            <p>{message}</p>
            {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
    );
};

export default MyPage;