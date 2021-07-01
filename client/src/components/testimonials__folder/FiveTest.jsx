import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import { fifthData } from '../../data/test__data'

const FirstTest = () => {
  return fifthData.map((item) => {
    return (
      <div className='testimonial__card'>
        <div className='container'>
          <div className='card__template'>
            <div className='row '>
              <div className='col-md-5 mx-auto'>
                <div className='card shadow-lg card__testimonial'>
                  <div className='img__container'>
                    <img src={item.img} alt='logo' className='img-fluid' />
                  </div>
                  <div className='card__body'>
                    <h4 className='card__body__name'>{item.name}</h4>
                    <h5 className='card__body__feed'>{item.feedback}</h5>
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <StarIcon className='star' />
                      ))}
                    {Array(item.norating)
                      .fill()
                      .map((_, i) => (
                        <StarIcon className='star__unliked' />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

export default FirstTest
