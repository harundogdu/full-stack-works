import React from 'react'

const ImageLocationSection = () => {
  return (
    <>
          {/* Image of location/map */}
          <div className='w3-container'>
          <img
            src='https://www.w3schools.com/w3images/map.jpg'
            className='w3-image'
            style={{ width: '100%' }}
            alt='Google Map'
          />
        </div>
    </>
  )
}

export default ImageLocationSection