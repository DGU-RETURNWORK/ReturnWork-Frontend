import Button from "../components/Button";
import RoundButton from "../components/RoundButton";
import Header from "../components/Header";
import Input from "../components/Input";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <div>
        <Header isLogin={true} userName="송민교" />
        <Header isLogin={false} withBack={false} />
      </div>
      <RoundButton text="저장하기" size="small" />
      <RoundButton text="자기소개서 생성하기" size="medium" />
      <RoundButton text="계속하기" size="large" />
      <RoundButton text="계속하기" status="inactive" size="large" />
      <Button text="확인" status="inactive" size="small" />
      <div>
        <Input
          placeholder="이름을 입력하세요"
          type="password"
          status="success"
          errorMessage="이미 가입된 이메일입니다"
        />
        <Input
          placeholder="이름을 입력하세요"
          type="password"
          status="fail"
          errorMessage="이미 가입된 이메일입니다"
        />
      </div>
      <div>
        <SideBar activePage="home" />
      </div>
    </div>
  );
};

export default Home;
