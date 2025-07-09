import "./styles/SideBar.css";
import {
  Home,
  Lock,
  User,
  FileText,
  Search,
  HelpCircle,
  MessageCircle,
  Menu,
} from "lucide-react";

interface SideBarProps {
  activePage: string;
}

const SideBar = ({ activePage }: SideBarProps) => {
  const menuItems = [
    { id: "home", icon: Home, text: "홈" },
    { id: "login", icon: Lock, text: "로그인하기" },
    { id: "mypage", icon: User, text: "내 페이지" },
    { id: "service", icon: FileText, text: "복귀 지원 서비스" },
    { id: "history", icon: Search, text: "이력보기" },
    { id: "issue", icon: HelpCircle, text: "민원접수" },
    { id: "customer", icon: MessageCircle, text: "고객센터" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Menu className="menubar" size={20} />
        <img src="images/logo.png" />
      </div>

      <nav className="sidebar_nav">
        <ul className="menu_list">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li
                key={item.id}
                className={`menu_item ${
                  activePage === item.id ? "active" : ""
                }`}
              >
                <IconComponent className="icon" size={18} />
                <span className="text">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
