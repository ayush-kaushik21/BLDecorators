import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
          <div className='nav__items mx-auto'>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/service'>Services</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
            <NavLink to='/testimonial'>Testimonials</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
          </div>
          <p className='footer__tag__line'>
            &copy; {new Date().getFullYear()}, All Rights are Reserved, Created
            with <FavoriteIcon className='heart' /> by{' '}
            <a
              href='https://ayushkaushikportfolio.herokuapp.com/'
              target='_blank'
            >
              Ayush
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
