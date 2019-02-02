import React from 'react'
import Add from '@material-ui/icons/Add';

export default function UploadButton (props) {
  return(
    <div className='uploadButton'>
        <label htmlFor='multi'>
          <Add/>
        </label>
        <input type='file' id='multi' className="uploadButton__input" onChange={props.onChange} multiple />
    </div>
  );
}
