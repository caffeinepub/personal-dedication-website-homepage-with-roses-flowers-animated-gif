import { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

const memories = [
  {
    src: '/assets/uploads/747e069e-469d-459e-ad07-b9c624c0375e.jpeg',
    alt: 'Memory photo 1',
  },
  {
    src: '/assets/uploads/578ED063-9D71-4C7D-8C6F-83EE349DB24F.jpeg',
    alt: 'Memory photo 2',
  },
  {
    src: '/assets/uploads/IMG_4738.jpeg',
    alt: 'Memory photo 3',
  },
  {
    src: '/assets/uploads/IMG_3049.jpeg',
    alt: 'Memory photo 4',
  },
  {
    src: '/assets/uploads/IMG_4745.jpeg',
    alt: 'Memory photo 5',
  },
  {
    src: '/assets/uploads/IMG_4680.jpeg',
    alt: 'Memory photo 6',
  },
  {
    src: '/assets/uploads/IMG_4537.jpeg',
    alt: 'Memory photo 7',
  },
  {
    src: '/assets/uploads/IMG_4561.jpeg',
    alt: 'Memory photo 8',
  },
  {
    src: '/assets/uploads/IMG_4587.jpeg',
    alt: 'Memory photo 9',
  },
  {
    src: '/assets/uploads/IMG_4521.jpeg',
    alt: 'Memory photo 10',
  },
  {
    src: '/assets/uploads/IMG_4436.jpeg',
    alt: 'Memory photo 11',
  },
];

export function MemoriesGallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="w-full">
        <h3 className="text-3xl sm:text-4xl font-serif font-semibold text-rose-700 dark:text-rose-300 text-center mb-8">
          Our Memories
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {memories.map((memory, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(memory)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-400 dark:focus:ring-rose-600"
            >
              <img
                src={memory.src}
                alt={memory.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
