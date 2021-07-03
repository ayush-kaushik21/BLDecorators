import React from 'react'

const Error404 = () => {
  return (
    <div className='error__container'>
      <div className='error__container__flex'>
        <div className='error__img__container'>
          <img src='../images/undraw_page_not_found_su7k.svg'  alt='error' className='img-fluid' />
        </div>
        <h3 className='error__h3'>Page Not Found</h3>
      </div>
    </div>
  )
}

export default Error404
