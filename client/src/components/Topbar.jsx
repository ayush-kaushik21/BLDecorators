import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import { IconButton } from '@material-ui/core'

const Topbar = () => {
  return (
    <div>
      <div className='row topbar__menu'>
        <div className='col-md-6 mx-auto social__icons'>
          <a href='/'>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
          <a href='/'>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
          <a href='/'>
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
          </a>
        </div>
        <div className='col-md-6 mx-auto contact__details mx-auto'>
          <div className='phone'>
            <IconButton>
              <PhoneIcon />
            </IconButton>{' '}
            <span>1234567890</span>
          </div>
          <div className='mail'>
            <IconButton>
              <EmailIcon />
            </IconButton>{' '}
            <span>kaushik.ayush90@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
