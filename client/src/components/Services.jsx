import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div className='service__header'>
      <div className='service'>
        <h1 className='heading text-center py-4'>Our Services</h1>
        <div className='service__container'>
          <div className='container'>
            <div className='row service__align'>
              <div className='col-md-3'>
                <div className='card' data-aos='flip-left'>
                  <div className='card__img__container'>
                    <img
                      src='../images/undraw_wedding_t1yl.svg'
                      alt='wedding'
                      className='img-fluid img__size'
                    />
                  </div>
                  <div className='card__body'>
                    <h6>Wedding</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='flip-left'>
                  <div className='card__img__container'>
                    <img
                      src='../images/undraw_Birthday_cake_2wxy.svg'
                      alt='Birthday'
                      className='img-fluid img__size'
                    />
                  </div>
                  <div className='card__body'>
                    <h6>Birthday</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='flip-left'>
                  <div className='card__img__container'>
                    <img
                      src='../images/undraw_mello_otq1.svg'
                      alt='DjNight'
                      className='img-fluid img__size'
                    />
                  </div>
                  <div className='card__body'>
                    <h6>DJ Night</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='flip-left'>
                  <div className='card__img__container'>
                    <img
                      src='../images/undraw_Having_fun_re_vj4h.svg'
                      alt='Party'
                      className='img-fluid img__size'
                    />
                  </div>
                  <div className='card__body'>
                    <h6>Parties</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
