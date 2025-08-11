import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import MessageSection from '@/components/MessageSection';
import InteractiveSection from '@/components/InteractiveSection';
import FinalCelebration from '@/components/FinalCelebration';

const Index = () => {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <PhotoGallery />
      <MessageSection />
      <InteractiveSection />
      <FinalCelebration />
    </div>
  );
};

export default Index;
