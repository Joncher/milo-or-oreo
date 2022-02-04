import React, { useState } from "react";

import ImageUploader from "react-images-upload";

import "./App.css";

const UploadComponent = (props) => (
  <form>
    <ImageUploader
      key="image-uploader"
      withIcon={true}
      singleImage={true}
      withPreview={true}
      label="Maximum size file: 5MB"
      buttonText="Choose File Image"
      onChange={props.onImage}
      imgExtension={[".jpg", ".png", ".jpng"]}
      maxFileSize={5242880}
    ></ImageUploader>
  </form>
);

const App = () => {
  const [progress, setProgress] = useState("getUpload");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState("");
  const url = "oreo-or-milo";

  const onImage = async (failedImages, successImages) => {
    setProgress("uploading");

    try {
      console.log("successimages", successImages);
      setImage(successImages);
    } catch (error) {
      console.log("error in upload", error);
      setErrorMessage(error.message);
      setProgress("uploadError");
    }

    setProgress("uploaded");
  };

  const content = () => {
    // eslint-disable-next-line default-case
    switch (progress) {
      case "getUpload":
        return <UploadComponent onImage={onImage} url={url} />;
      case "uploading":
        return <h2>Uploading...</h2>;
      case "uploaded":
        return (
          <img
            src={image}
            style={{
              height: 500,
              width: 700,
            }}
            alt="cat pic"
          />
        );
      case "uploadError":
        return (
          <>
            <div>Error message = {errorMessage}</div>
            <div>Please upload an image</div>
          </>
        );
    }
  };

  return (
    <div className="App">
      <h1>Upload an Image of Milo and/or Oreo</h1>
      {content()}
    </div>
  );
};

export default App;
