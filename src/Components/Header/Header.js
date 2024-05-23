import {Link} from 'react-router-dom';
import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';


function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
        
          <Menu />
          <div className="Buttons">
            <button>Login</button>
            <button>Sign In</button>
          </div>
          <Link to="/cart" className="Cart_ic">
            
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;