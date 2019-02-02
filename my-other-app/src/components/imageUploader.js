import React from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

//import Images from './handleImages';
import UploadButton from './uploadButton'

export default class ImageUplaoder extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      uploading: false,
      //images: []
    }
  }
  render() {
    return(
      <div>
        <UploadButton className="uploadButton" onChange={this.onChange}/>
      </div>
    )
  }

  onChange = (e)=>{
    console.log(e)
    const files =  Array.from(e.target.files)
    this.setState({uploading: true})
    files.forEach((file,i)=>{
      console.log(file)
      //formData.append(i, file)
    })
  }


}
