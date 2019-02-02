import React from 'react'

export default function Images (props) {
  //return(<div>handleImages<UploadButton/></div>)
  props.images.map(
    (image, i) =>
      <div key={i} className=''>
        <div
          //onClick={() => props.removeImage(image.public_id)}
          className='delete'
        >
        </div>
        <img src={image.secure_url} alt='' />
      </div>
  )
}
