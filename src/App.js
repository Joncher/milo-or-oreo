/* eslint-disable default-case */
import React, {useState} from 'react';
import ImageUploader from 'react-images-upload'
import './App.css';

const UploadComponent = props => (
  <form>
    <ImageUploader
      key = "image-uploader"
      withIcon = {true}
      singleImage = {true}
      withPreview = {true}
      label = "Maximum size file: 5MB"
      buttonText = "Choose File Image"
      onChange = {props.onImage}
      imgExtension = {['.jpg', '.png', '.jpng']}
      maxFileSize= {5242880}
    ></ImageUploader>
  </form>
)


const App = () => {
  const [progress, setProgress] = useState('getUpload')
  const [errorMessage, setErrorMessage] = useState('')

  const content = () => {
    switch (progress) {
        case 'getUpload':
            return <UploadComponent onImage={onImage}/>
        case 'uploading':
            return <h2>Uploading....</h2>;
        case 'uploaded':
            return <img src={url} alt="uploaded" />;
        case 'uploadError':
            return (
                <>
                    <div>Error message = {errorMessage}</div>
                    <div>please upload image</div>
                </>
            );
    }
};

  return(
    <div className="App" >
      <h1>Upload a picture of oreo or milo the cat</h1>
      {content()}
    </div>
  )
  }

export default App;