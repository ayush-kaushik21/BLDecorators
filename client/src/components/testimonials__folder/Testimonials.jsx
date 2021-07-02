import React from 'react'
import FirstTest from './FirstTest'
import SecondTest from './SecondTest'
import ThirdTest from './ThirdTest'
import FourthTest from './FourthTest'
import FiveTest from './FiveTest'
import testLogo from '../../images/undraw_My_answer_re_k4dv.svg'

const Testimonials = () => {
  return (
    <div id='testimonial'>
      <div className='testimonials'>
        <h1 className='text-center py-4 heading'>Our Happy Customers</h1>
        <div className='test__img__container col-10'>
          <img src={testLogo} alt='testLogo' className='img-fluid animateImg' />
        </div>
        <div className='container'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <FirstTest />
              </div>
              <div className='carousel-item'>
                <SecondTest />
              </div>
              <div className='carousel-item'>
                <ThirdTest />
              </div>
              <div className='carousel-item'>
                <FourthTest />
              </div>
              <div className='carousel-item'>
                <FiveTest />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'
            >
              <div className='left__btn'>
                <span
                  className='carousel-control-prev-icon left__btn__icon'
                  aria-hidden='true'
                ></span>
              </div>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'
            >
              <div className='left__btn'>
                <span
                  className='carousel-control-next-icon left__btn__icon__right'
                  aria-hidden='true'
                ></span>
              </div>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
