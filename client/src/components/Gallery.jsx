import React, { useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import GalleryButtons from './GalleryButtons'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ScrollBtn from './ScrollBtn'

// console.log(allCatValues)
const Images = [
  {
    id: 1,
    category: 'All',
    thumbnail: 'Flower Decorations',
    img: '../images/wedding3.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 2,
    category: 'Wedding',
    thumbnail: 'Flower Decorations',
    img: '../images/wedding.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 3,
    category: 'Engagement',
    thumbnail: 'Flower Decorations',
    img: '../images/engagement2.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 4,
    category: 'Engagement',
    thumbnail: 'Flower Decorations',
    img: '../images/engagement3.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 5,
    category: 'Birthday',
    thumbnail: 'Flower Decorations',
    img: '../images/birthday5.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 6,
    category: 'Wedding',
    thumbnail: 'Flower Decorations',
    img: '../images/wedding5.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 7,
    category: 'Parties',
    thumbnail: 'Flower Decorations',
    img: '../images/parties4.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 8,
    category: 'Ceremony',
    thumbnail: 'Flower Decorations',
    img: '../images/ceremony.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 9,
    category: 'Ceremony',
    thumbnail: 'Flower Decorations',
    img: '../images/ceremony4.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 10,
    category: 'Engagement',
    thumbnail: 'Flower Decorations',
    img: '../images/engagement4.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 11,
    category: 'Parties',
    thumbnail: 'Flower Decorations',
    img: '../images/party3.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 12,
    category: 'Wedding',
    thumbnail: 'Flower Decorations',
    img: '../images/wedding4.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 13,
    category: 'Birthday',
    thumbnail: 'Flower Decorations',
    img: '../images/birthday3.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 14,
    category: 'Ceremony',
    thumbnail: 'Flower Decorations',
    img: '../images/ceremony6.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 15,
    category: 'Wedding',
    thumbnail: 'Flower Decorations',
    img: '../images/wedding3.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 16,
    category: 'Birthday',
    thumbnail: 'Flower Decorations',
    img: '../images/birthday4.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 17,
    category: 'Ceremony',
    thumbnail: 'Flower Decorations',
    img: '../images/ceremony5.jpeg',
    animate: 'zoom-in',
  },
  {
    id: 18,
    category: 'Parties',
    thumbnail: 'Flower Decorations',
    img: '../images/parties (3).jpeg',
    animate: 'zoom-in',
  },
]

const allCatValues = [
  ...new Set(
    Images.map((item) => {
      return item.category
    })
  ),
]

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
      <ScrollBtn showBelow={50} className='scroll__btn__active' />
    </div>
  )
}

export default Gallery
