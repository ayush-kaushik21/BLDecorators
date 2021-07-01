import React from 'react'

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
              <div className='carousel-caption d-none d-md-block'>
                <h5>Royal Wedding Decor</h5>
                <p>We furnish the essence of royal wedding theme to couple</p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='https://i.ytimg.com/vi/vjhh-7rK3Y4/maxresdefault.jpg'
                className='d-block w-100 mx-auto'
                alt='second'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Ring Engagement</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='https://thumbs.dreamstime.com/b/indian-wedding-reception-23254153.jpg'
                className='d-block w-100'
                alt='third'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Dining Decor</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
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
    </div>
  )
}

export default HomeScreen
