import "./styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="InformationCard">
        <section className="Information">
          <h2 className="Info_title">Email</h2>
          <text className="Info_content">returnwork@gmail.com</text>
        </section>
        <section className="Information">
          <h2 className="Info_title">Number</h2>
          <text className="Info_content">010-0000-0000</text>
        </section>
        <section className="Information">
          <h2 className="Info_title">Address</h2>
          <text className="Info_content">
            04620 서울특별시 중구 필동로1길 30(필동 3가, 동국대학교)
          </text>
        </section>
      </div>

      <div className="Footer_links">
        <a className="Footer_link">Privacy Policy</a>
        <a className="Footer_link">Terms of Services</a>
        <a className="Footer_link">About Us</a>
      </div>
    </div>
  );
}
