import { IoIosArrowDown } from "react-icons/io";

export default function RegionInput() {
  return (
    <div className="input-wrapper input-large">
      <div className="input-container">
        <select className="input-select input-large">
          <option value="">지역을 선택해주세요</option>
          <option value="seoul">서울</option>
          <option value="busan">부산</option>
          <option value="daegu">대구</option>
          <option value="incheon">인천</option>
          <option value="gwangju">광주</option>
          <option value="daejeon">대전</option>
          <option value="ulsan">울산</option>
          <option value="sejong">세종</option>
          <option value="gyeonggi">경기도</option>
          <option value="gangwon">강원도</option>
        </select>
        <div className="input-icon">
          <IoIosArrowDown size={18} />
        </div>
      </div>
    </div>
  );
}
