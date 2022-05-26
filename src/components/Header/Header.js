import "./Header.scss";
import "../../styles/partials/_globals.scss";
import siteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import navAvatar from '../../assets/Images/Mohan-muruge.jpg';
import searchIcon from '../../assets/Icons/search.svg';


function Header() {
    return (
        <header className="header">
          <nav className="header__nav">
            
            <div className="header__logo-box">
              <img className="header__img" src={siteLogo} alt="brainflix logo" />
            </div>
          
            <div className="header__form-box">
              <form className="header__form" action="">
                <input className="header__search" src={searchIcon} type="text" placeholder='Search'/>
                {/* background the search img in styles */}
              
                <img className='header__avatar-img' src={navAvatar} alt="nav avatar with someones profile photo"/>
              </form>

              <button className="header__btn">UPLOAD</button>
            </div>
  
          </nav>
        </header>
    );
  }

export default Header;
  