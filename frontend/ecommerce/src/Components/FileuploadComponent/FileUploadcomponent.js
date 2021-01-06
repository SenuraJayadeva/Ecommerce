import React from "react";
import upload from "../FileuploadComponent/upload.css";

import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

export default function FileUpload(){
 // Payload data and url to upload files
 const getUploadParams = ({ meta }) => { return { url: 'https://http://localhost:3000' } }

 // Return the current status of files being uploaded
 const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta) }

 // Return array of uploaded files after submit button is clicked
 const handleSubmit = (files, allFiles) => {
    //  console.log(files.map(f => f.meta))
     allFiles.forEach(f => f.remove());
     console.log("test");
     console.log(files);
 }

 return (
     <Dropzone styles={{overflow:"hidden"}}
     classNames={upload}
         getUploadParams={getUploadParams}
         onChangeStatus={handleChangeStatus}
         maxFiles={3}
        //  onSubmit={handleSubmit}
         accept="image/*,audio/*,video/*"
     />
 );
};