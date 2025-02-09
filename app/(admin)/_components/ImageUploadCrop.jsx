'use client';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageUploadCrop = ({ onCropComplete }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [croppedImage, setCroppedImage] = useState(null);

  // Handle file upload
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Handle crop completion
  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const onImageLoaded = (image) => {
    setCrop({ ...crop, width: image.width, height: image.height });
  };

  const onCropCompleteHandler = (croppedArea, croppedAreaPixels) => {
    if (!imageSrc) return;

    const image = new Image();
    image.src = imageSrc;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    const croppedImageUrl = canvas.toDataURL('image/jpeg');
    setCroppedImage(croppedImageUrl);
    onCropComplete(croppedImageUrl); // Pass cropped image to parent
  };

  return (
    <div className="space-y-4">
      {/* Dropzone for file upload */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 text-center cursor-pointer ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? 'Drop the image here...'
            : 'Drag & drop an image here, or click to select one'}
        </p>
      </div>

      {/* Image Cropper */}
      {imageSrc && (
        <div className="mt-4">
          <ReactCrop
            src={imageSrc}
            crop={crop}
            onChange={onCropChange}
            onComplete={onCropCompleteHandler}
            onImageLoaded={onImageLoaded}
          />
        </div>
      )}

      {/* Cropped Image Preview */}
      {croppedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Cropped Image Preview</h3>
          <img
            src={croppedImage}
            alt="Cropped"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploadCrop;