"use client";
import React, { useState } from 'react'
import { CldUploadWidget, CldImage} from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState("")
  return (
    // onUpload depreated, onSuccess
    <>
    {publicId && 
    <CldImage src={publicId} width={270} height={180} alt="Practice"/>}
      <CldUploadWidget
      options={{
        sources: ["local"],
        multiple: false,
        maxFiles: 5,
      
      }}
        uploadPreset="sqwq4v4k"
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          widget.show()
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}

export default UploadPage