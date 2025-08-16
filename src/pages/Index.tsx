import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import MessageSection from '@/components/MessageSection';
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
      <MessageSection />
      <FinalCelebration />
    </div>
  );
};

export default Index;
