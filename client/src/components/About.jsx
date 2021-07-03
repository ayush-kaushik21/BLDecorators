import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <h1 className='heading heading__about__heading text-center '>
          About Us
        </h1>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto left__img'>
            <div className='about__img__container'>
              <img
                src='../images/golu.jpg'
                alt='selfie'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-md-6 col-10 mx-auto right__text'>
            <h4 className='heading__about__hii'>Hii</h4>
            <h4 className='heading__about__name'>I'm Shubham Bhardwaj</h4>
            <p className='heading__about__p'>
              I'm proprietor of <strong>Billu Light Decoration</strong>, Me and
              my team has a clear vision to create your precious day memorable
              with our decoration work. We try to imitate your dream decoration
              into reality. We offer many decoration services like Wedding,
              Engagement, Birthday, Parties etc.
            </p>
            <p>
              We provide decoration with flowers, decorative lights, fabric,
              chandelier and many more decorative stuff.
            </p>
            <strong>Your support will be Cherry On Top.</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
