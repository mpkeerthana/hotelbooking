import { useState } from 'react';

export default function HotelGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl overflow-hidden h-96">
        <img
          src={images[selectedImage]}
          alt="Hotel"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === idx
                ? 'border-blue-500'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img src={img} alt="thumbnail" className="w-full h-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
