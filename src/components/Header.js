/* eslint-disable no-void */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  const [btnBurger, setBtnBurger] = useState(null);
  useEffect(() => {
    setBtnBurger(document.querySelector('#btn-burger'));
  }, []);

  const handleBurgerToggle = () => {
    setOpenedBurgerMenu(!openedBurgerMenu);
    if (btnBurger?.classList) {
      if (btnBurger.classList.contains('open')) {
        btnBurger.classList.remove('open');
        void btnBurger.offsetWidth; // https://stackoverflow.com/questions/60686489/what-purpose-does-void-btnBurger-offsetwidth-serve
        btnBurger.classList.add('close');
      } else if (btnBurger.classList.contains('close')) {
        btnBurger.classList.remove('close');
        void btnBurger.offsetWidth;
        btnBurger.classList.add('open');
      } else {
        btnBurger.classList.add('open');
      }
    }
  };

  const closeBurger = () => {
    setOpenedBurgerMenu(false);
    handleBurgerToggle();
  };

  return (
    <header>
      <div id="responsive-header">
        <div id="logo-and-burger-div">
          <NavLink className="logo-font" path="/" to="/">
            Cécile Dubois
          </NavLink>
          <button id="btn-burger" type="button" onClick={handleBurgerToggle}>
            <div className="burger-line" />
            <div className="burger-line" />
            <div className="burger-line" />
          </button>
        </div>
        <div className={`${openedBurgerMenu ? 'opened' : 'hidden'}`} id="menu">
          <NavLink to="/" className="menu-link" onClick={closeBurger}>
            Home
          </NavLink>
          <NavLink to="/" className="menu-link" onClick={closeBurger}>
            Pourquoi ?
          </NavLink>
          <NavLink to="/who" className="menu-link" onClick={closeBurger}>
            Qui suis-je ?
          </NavLink>
          <NavLink to="/" className="menu-link" onClick={closeBurger}>
            Portfolio
          </NavLink>
          <NavLink to="/" className="menu-link" onClick={closeBurger}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
