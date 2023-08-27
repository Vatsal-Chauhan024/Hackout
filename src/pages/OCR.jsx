import React, { useState, useEffect } from 'react';
import api from '../api/api'
import useAuth from '../helper/useAuth';
import { ToastContainer, toast } from 'react-toastify';

const OCR = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedContent, setExtractedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [accuracy, setAccuracy] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };
const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const base64Data = event.target.result.split(',')[1]; // Get the base64 data part
        console.log(base64Data);
     
       
        
      api.post('digitalize_record/', {'base64':base64Data})
        .then(response => {
          setExtractedContent(response.data);
          setAccuracy(response.data.accuracy);
        })
        .catch(error => {
          toast.error('Error uploading file');
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  
    reader.readAsDataURL(file); // Read and encode the file as base64
  };
    
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (selectedFile) {
      setIsLoading(true);

      api.post('digitalize_record/', selectedFile)
        .then(response => {
          setExtractedContent(response.data);
          setAccuracy(response.data.accuracy);
        })
        
        .catch(error => {
          toast.error(error)
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedFile]);


  return (
    <div>
        <ToastContainer/>
      <div className='w-full px-10 mt-7'>
        <div className="alert alert-info rounded-md h-24 flex items-center">
          <span className='sm:text-2xl font-semibold text-lg'>Image To Text Conversion & Speech To Text Conversion: </span>
        </div>
      </div>

      <h1 className='px-10 mt-12 font-semibold text-xl text-gray-500'>Drop your Image:</h1>

      <div
        className='w-full h-80 px-10 mt-3'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="btn  border-[1px] border-solid border-gray-400 h-full w-full flex items-center justify-center rounded-md ">
          <label className="file-input file-input-bordered file-input-primary bg-transparent border-none max-w-xs outline-none flex items-center justify-center  w-full h-full">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <p className=''>Selected File: {selectedFile.name}</p>
            ) : (
              <p>No file chosen</p>
            )}
          </label>
        </div>
      </div>

      <div className='w-full px-10 mt-12 flex flex-col gap-2'>
      <h1 className=''>Extracted Content:</h1>              

<div>

  <div
    class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <textarea
      id="OrderNotes"
      className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-2 min-h-[100px] outline-none"
      rows="4"
      placeholder="Enter any additional order notes..."
      value={extractedContent}
    ></textarea>

    <div class="flex items-center justify-end gap-2 bg-white p-3">
      

      <button
        type="button"
        class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Play Audio
      </button>
      <button
        type="button"
        class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Download Word File
      </button>
    </div>
  </div>
</div>
</div>


<div className='w-full px-10 mt-12 flex flex-col gap-2'>
      <h1 className=''>Comparasion & Accuraccy:</h1>              

<div>

  <div
    class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <textarea
      id="OrderNotes"
      className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-2 min-h-[100px] outline-none"
      rows="4"
      placeholder="Enter any additional order notes..."
      
    ></textarea>

    <div class="flex items-center justify-end gap-2 bg-white p-3">
      

    
    </div>
  </div>
    <button
        type="button"
        class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 mt-3"
      >
        Compare Accuracy
      </button>

      <h4 className='text-sm mt-2'>The Accuracy of the Model is: {accuracy !== null ? accuracy : 'N/A'} </h4>
</div>
</div>

    </div>
  );
}

export default OCR;
