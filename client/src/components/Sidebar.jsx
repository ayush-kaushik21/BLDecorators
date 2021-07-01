import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ setMenuOpen }) => {
  return (
    <>
      <div className='sidebar'>
        <NavLink
          to='/about'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          About Us
        </NavLink>
        <NavLink
          to='/service'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Services
        </NavLink>
        <NavLink
          to='/gallery'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Gallery
        </NavLink>
        <NavLink
          to='/testimonial'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Testimonials
        </NavLink>
        <NavLink
          to='/contact'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Contact Us
        </NavLink>
      </div>
    </>
  )
}

export default Sidebar
