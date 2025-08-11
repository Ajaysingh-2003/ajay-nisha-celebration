import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder photos that can be replaced later
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      caption: "Amazing memories together! 📸"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop",
      caption: "Adventures and laughter 🌟"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      caption: "Beautiful moments captured ✨"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      caption: "Life's perfect snapshots 🎨"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&h=400&fit=crop",
      caption: "Joy in every frame 💫"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1486591913781-4bee9ed65bfc?w=400&h=400&fit=crop",
      caption: "Unforgettable times 🌈"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 bg-gradient-sky relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-primary mb-4">
            Cherished Memories 📷
          </h2>
          <p className="text-xl text-secondary font-inter">
            A collection of beautiful moments we've shared together
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="magic-card max-w-2xl mx-auto">
            <div className="relative">
              <img
                src={photos[currentImage].src}
                alt={photos[currentImage].caption}
                className="w-full h-96 object-cover rounded-2xl shadow-magical"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-sm rounded-full p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-sm rounded-full p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-card-foreground font-inter text-center">
                  {photos[currentImage].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentImage(index)}
              className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                currentImage === index 
                  ? 'ring-4 ring-primary shadow-glow scale-110' 
                  : 'hover:scale-105 hover:shadow-card'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-20 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {currentImage === index && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <Camera className="text-primary-foreground" size={20} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Fun note */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground font-inter italic">
            "Every picture tells our story of friendship and joy! 💕"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;