/* eslint-disable default-case */
import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [progress, setProgress] = useState('getUpload')
  const [url, setUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const content = () => {
    switch (progress) {
        case 'getUpload':
            return <div>PLease upload image</div>
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