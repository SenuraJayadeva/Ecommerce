import React, { useState } from "react";
import upload from "../FileuploadComponent/upload.css";

import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

export default function FileUpload() {
  // Payload data and url to upload files
  const getUploadParams = ({ meta }) => {
    return { url: "https://http://localhost:3000" };
  };
  const [images, setImages] = useState([]);
  // Return the current status of files being uploaded
  const handleChangeStatus = ({ meta, file }, status, allFiles) => {
    // console.log(status, meta, file, allFiles);
    setImages(allFiles);
    console.log(Images);
  };

  const Images = [images];


  // Return array of uploaded files after submit button is clicked
  const Submit = (files, allFiles) => {
    //  console.log(files.map(f => f.meta))
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      styles={{ overflow: "hidden" }}
      classNames={upload}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={3}
      //  onChangeStatus ={submit}
      //  onSubmit={Submit}
      accept="image/*,audio/*,video/*"
    />
  );
}
