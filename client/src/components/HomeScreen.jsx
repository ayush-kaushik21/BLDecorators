import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <div className='slider__container'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://thumbs.dreamstime.com/b/purple-wedding-table-decorations-purple-wedding-table-decorations-nice-summer-wedding-168187400.jpg'
                className='d-block w-100'
                alt='first'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://i.ytimg.com/vi/vjhh-7rK3Y4/maxresdefault.jpg'
                className='d-block w-100 mx-auto'
                alt='second'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://thumbs.dreamstime.com/b/indian-wedding-reception-23254153.jpg'
                className='d-block w-100'
                alt='third'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next next__icon'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='home__text'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <div className='home__text__card__left'>
              <h1 className='h11'>Welcome To</h1>
              <h4 className='h44'>BILLU LIGHT DECORATORS</h4>
            </div>
          </div>
          <div className='col-md-6 col-10 mx-auto'>
            <div className='home__text__card__right '>
              <h5 className='h5__home'>
                We create you dream decoration into reality!!!
              </h5>
              <p className='p__home'>
                Make your special day memorable with us.
              </p>
              <div className='home__btn__div'>
                <NavLink to='/about' className='myBtn homeScreen__btn__left '>
                  About
                </NavLink>
                <NavLink
                  to='/gallery'
                  className='myBtn homeScreen__btn__right '
                >
                  Gallery
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
