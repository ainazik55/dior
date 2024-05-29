import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <Logo />
          <div className="Foot_menu">
            <p className="Foot_tit">Menu</p>
            <div className="Foot_menu-in flex">
              <Menu />
              <p>
                If you reside in the U.S. territories, please call Goldman Sachs
                at 877-255-5923 with questions about Apple Card. Learn more
                about how Apple Card applications are evaluated at
                support.apple.com/kb/HT209218.
              </p>
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit">Links</p>
            <div className="Foot_links flex">
              <Link className="Foot_link Foot_link__inst" />
              <Link className="Foot_link Foot_link__fb" />
              <Link className="Foot_link Foot_link__tw" />
            </div>
          </div>
        </div>
        <div className="Foot_bot">
          <p>
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 1-800-MY-APPLE.
          </p>
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
