import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaSearch } from "react-icons/fa";
import './header.css';
const Header=() => {
    return (
         <header>
                  <div className="headerContainer">
                  <div className="menu">
                    <Image className="menuIcon" src={"/images/menu.webp"} alt="icon" width={10} height={10}/>
                  </div>
                  <div className="searchWrapper">
                        <Image src={"/images/logo.png"} alt={"logo"} width={150} height={20}/>
                        <div className="searchDiv"><FaSearch/></div>
                        <input className="searchInput" placeholder="Хайлт хийх"/>
                    </div>
                  <div className="navbar">
                    <span> Дараагийн нийтлэл:</span>
                    <h2>TECHWORM</h2>
                    <button className="navbarButton">Өнөөдөр орно </button>
                  </div>
                  <div className="linkWrapper">
                        <a target="_blank" href="https://www.facebook.com/UnreadToday/"><FaFacebook/></a>
                        <a target="_blank" href="https://www.instagram.com/unreadtoday/"><FaInstagram /></a>
                        <a target="_blank" href="https://x.com/UnreadToday"><FaLinkedinIn/></a>
                        <a target="_blank" href="https://www.linkedin.com/company/unreadmedia"><FaTwitter/></a>
                    </div>
                    </div>
                </header>
    )

} 
export default Header;