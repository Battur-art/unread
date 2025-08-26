import './footer.css';
import Image from "next/image";
const Footer=() => {
    return ( 
      <footer>
        
    <div className="footer-container">
    <Image className='footerLogo' src={"/images/logo.png"} alt='logo' width={150} height={20}/>
      <div>
        <h4>Бидний тухай</h4>
        <ul>
          <li><a href="#">Редакцын бодлого</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Хамтран ажиллах</a></li>
          <li><a href="#">Холбоо барих</a></li>
        </ul>
      </div>

      <div>
        <h4>Бүлгүүд</h4>
        <ul>
          <li><a href="#">5 минутаар</a></li>
          <li><a href="#">Өнгө аяс</a></li>
          <li><a href="#">7 хоногийн тойм</a></li>
          <li><a href="#">8 сэдэв</a></li>
          <li><a href="#">10 асуулт</a></li>
        </ul>
      </div>

      <div>
        <h4>Холбогдох</h4>
        <ul>
          <li>Утас: +976 9911 1012</li>
          <li><a href="#">www.unread.today</a></li>
        </ul>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-soundcloud"></i></a>
        </div>
      </div>

      <div>
        <h4>Апп татах</h4>
        <div class="store-buttons">
        
        </div>
      </div>
    </div>
    <div class="bottom-text">© 2025 UNREAD Media</div>
  </footer>
    )
}
export default Footer;
