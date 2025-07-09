import "./styles/Header.css";
import Button from "./Button";

interface HeaderProps {
  withBack?: boolean;
  isLogin: boolean;
  userName?: string;
  onMenuClick?: () => void;
  onBackClick?: () => void;
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  onUserClick?: () => void;
  onSaveClick?: () => void;
}

const Header = ({
  withBack = true,
  isLogin,
  userName,
  onMenuClick,
  onBackClick,
  onLoginClick,
  onSignUpClick,
  onUserClick,
  onSaveClick,
}: HeaderProps) => {
  return (
    <header className="Header">
      <div className="Header_left">
        <button className="button_menu" onClick={onMenuClick}>
          ☰
        </button>
        {withBack && (
          <button className="button_back" onClick={onBackClick}>
            ←
          </button>
        )}
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
      </div>
      <div className="Header_right">
        {isLogin ? (
          <div className="wrapper_user">
            <Button text={userName!} icon={true} onClick={onUserClick} />
            {withBack && (
              <Button text="임시저장" onClick={onSaveClick} status="inactive" />
            )}
          </div>
        ) : (
          <div className="wrapper_login">
            <button className="button_login" onClick={onLoginClick}>
              로그인
            </button>
            <Button text="회원가입" onClick={onSignUpClick} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
