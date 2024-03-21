import { useEffect, useState } from 'react';
import './Navbar.css';
import zeroone1 from '../Assets/zeroone1.png';

const Navbar = () => {

  const [active, setActive] = useState(false);

  useEffect(() => {

    const addActiveClass = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 300) {
        nav.classList.add('active');
        setActive(true);
      }
      else {
        nav.classList.remove('active');
        setActive(false);
      }
    };

    document.addEventListener('scroll', addActiveClass);

    return () => {
      document.removeEventListener('scroll', addActiveClass);
    }
  }, [])

  return (
    <nav className='nav'>
      {
        active &&
        <div className="logo">
          <img src={zeroone1} alt="logo" />
        </div>
      }
      <div className="links">
        <a href='/'>Home</a>
        <a href='/semester'>Semester</a>
        <a href='/contact'>Contact</a>
      </div>
    </nav>
  )
};

export default Navbar
