import React from 'react'
import LocationImg from '../images/undraw_Navigation_re_wxx4.svg'

const Map = () => {
  return (
    <>
      <div className='contact'>
        <h1 className='heading text-center'>Our Location</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-11 mx-auto left__image'>
              <div className='img-container'>
                <img
                  src={LocationImg}
                  alt='location'
                  className='img-fluid animateImg'
                />
              </div>
            </div>
            <div className='col-md-6  col-11 mx-auto right__map'>
              <div className='map__container'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.270404702691!2d78.13393833211015!3d29.36930235851779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bee6b19b37c3f%3A0x8967282fe3d3d6a2!2zSmFpbiBNYW5kaXIsIOCkrOCkv-CknOCkqOCljOCksCwgQmlqbm9yLCBVdHRhciBQcmFkZXNoIDI0NjcwMQ!5e0!3m2!1sen!2sin!4v1623903212759!5m2!1sen!2sin'
                  allowfullscreen=''
                  loading='lazy'
                  title='mappp'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
