import React from "react";
import "./Navbar.scss";

const Navbar = () => {
 cosnt [selectLanguage, setSelectLanguage] = useState('en');
  const languageOption = [
    { value: 'en', label: 'english'},
    { value: 'hind', label: 'hindi'},
    { value: 'mar', label: 'marathi'},
    ]
  return (
    <div className="navbar">
      <div className="innerNavbar">
        <h1>CarRental.com</h1>
        <div className="routing-Links">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>
        <div className="dropdown-menu">
          <select value={selectLanguage} onChange={(e) => setSelectLanguage(e.target.value)}>
    {languageOption.map((option) => {
       return < option key={option.value} value={option.value}>{option.label}</option>
    })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
