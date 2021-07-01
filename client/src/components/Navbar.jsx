import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className={'topbar ' + (menuOpen && 'active')}>
        <div className='row'>
          <div className=' left col-md-6 col-10'>
            <div className='logo__container'>
              <div className='logo__header'>
                <NavLink to='/' className='logo__style'>
                  BILLU LIGHT DECORATORS
                </NavLink>
              </div>
            </div>
          </div>
          <div className=' right col-md-6 col-2'>
            <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
            <div className='menu'>
              <NavLink to='/about' className='menu__item'>
                About Us
              </NavLink>
              <NavLink to='/service' className='menu__item'>
                Services
              </NavLink>
              <NavLink to='/gallery' className='menu__item'>
                Gallery
              </NavLink>
              <NavLink to='/testimonial' className='menu__item'>
                Testimonials
              </NavLink>
              <NavLink to='/contact' className='menu__item'>
                Contact Us
              </NavLink>
            </div>
            <div className='sidebar__container'>
              {menuOpen && (
                <Sidebar setMenuOpen={setMenuOpen} className='sideBar__trans' />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
