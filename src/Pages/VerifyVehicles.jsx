import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function VerifyVehicles() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("File Accepted");
    setUpload(false);
    setReload(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [upload, setUpload] = useState(true);
  const [reload, setReload] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <div>
      {/* Upload */}
      {upload && (
        <div className="flex justify-center items-center bg-black h-[50vh]">
          <div className="h-full" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-white">Drop the files here ...</p>
            ) : (
              <p className="text-white">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
        </div>
      )}

      {/* Reload */}

      {/* Update */}
      {update && (
        <div>
          <p>Owner Name:</p>
          <br />
          <p>Owner Desgination:</p>
          <br />
          <p>License Plate No:</p>
          <br />
          <p>Active User:</p>
          <br />
          <p>Visitor Reason:</p>
          <br />
        </div>
      )}
    </div>
  );
}
