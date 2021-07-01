import React from 'react'

const GalleryButtons = ({ catItems, filterButton }) => {
  return (
    <>
      <div className='buttons'>
        <div className='buttons__container mx-auto'>
          <div className='btn__div'>
            {catItems.map((item, index) => {
              return (
                <button
                  key={index}
                  className='gallery__btn'
                  onClick={() => filterButton(item)}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryButtons
