import headerImg from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header className="text-center my-12">
      <img className="w-20 h-20 object-contain" src={headerImg} alt="헤더 이미지" />
      <h2>Investment Calculator</h2>
    </header>
  );
};

export default Header;
