'use client';
import React, { useState, useEffect } from 'react';
import ImageUploadCrop from '../../_components/ImageUploadCrop';

const UploadPage = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [showcaseImages, setShowcaseImages] = useState([]);

  // Load images from local storage on component mount
  useEffect(() => {
    const savedBanner = localStorage.getItem('bannerImage');
    const savedShowcase = JSON.parse(localStorage.getItem('showcaseImages') || '[]');
    if (savedBanner) setBannerImage(savedBanner);
    if (savedShowcase) setShowcaseImages(savedShowcase);
  }, []);

  // Save banner image to local storage
  const handleBannerCropComplete = (croppedImage) => {
    setBannerImage(croppedImage);
    localStorage.setItem('bannerImage', croppedImage);
  };

  // Save showcase image to local storage
  const handleShowcaseCropComplete = (croppedImage) => {
    const updatedShowcase = [...showcaseImages, croppedImage];
    setShowcaseImages(updatedShowcase);
    localStorage.setItem('showcaseImages', JSON.stringify(updatedShowcase));
  };

  // Clear local storage and state
  const handleUpload = () => {
    localStorage.removeItem('bannerImage');
    localStorage.removeItem('showcaseImages');
    setBannerImage(null);
    setShowcaseImages([]);
    alert('Images uploaded successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Upload and Crop Images</h1>

      {/* Banner Image Upload */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Banner Image</h2>
        <ImageUploadCrop onCropComplete={handleBannerCropComplete} />
        {bannerImage && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Banner Preview</h3>
            <img
              src={bannerImage}
              alt="Banner Preview"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Showcase Images Upload */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Showcase Images</h2>
        <ImageUploadCrop onCropComplete={handleShowcaseCropComplete} />
        {showcaseImages.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Showcase Preview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {showcaseImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Showcase ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Upload Button */}
      <div className="mt-8">
        <button
          onClick={handleUpload}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Upload Images
        </button>
      </div>
    </div>
  );
};

export default UploadPage;