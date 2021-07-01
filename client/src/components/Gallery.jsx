import React, { useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Images from '../data/Images'
import GalleryButtons from './GalleryButtons'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const allCatValues = [
  ...new Set(
    Images.map((item) => {
      return item.category
    })
  ),
]

// console.log(allCatValues)

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

  const [imagesList, setImagesList] = useState(Images)
  const [catItems, setCatItems] = useState(allCatValues)

  let filterButton = (categoryItem) => {
    if (categoryItem === 'All') {
      setImagesList(Images)
      return
    }

    const updated = Images.filter((item) => {
      return item.category === categoryItem
    })
    setImagesList(updated)
  }

  return (
    <div id='gallery'>
      <div className='container'>
        <h1 className='text-center py-4 heading'>Gallery</h1>
        <SRLWrapper>
          <div className='gallery'>
            <GalleryButtons catItems={catItems} filterButton={filterButton} />
            <div className='row mx-auto'>
              {imagesList.map((item) => {
                return (
                  <div className='col-md-4 col-10 col-10' key={item.id}>
                    <div
                      className='card gallery__card my-2 shadow-lg mx-auto'
                      data-aos={item.animate}
                    >
                      <img
                        src={item.img}
                        alt={item.thumbnail}
                        className='img-fluid img__style'
                      />
                      <div className='info'>
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SRLWrapper>
      </div>
    </div>
  )
}

export default Gallery
