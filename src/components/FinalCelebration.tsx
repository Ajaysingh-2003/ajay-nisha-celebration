import { useState, useEffect } from 'react';
import { Sparkles, PartyPopper, Heart, Gift } from 'lucide-react';
import confetti from '@/assets/confetti.jpg';

const FinalCelebration = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [celebrationClicked, setCelebrationClicked] = useState(false);

  const triggerCelebration = () => {
    setShowFireworks(true);
    setCelebrationClicked(true);
    
    // Reset fireworks after animation
    setTimeout(() => setShowFireworks(false), 3000);
  };

  // Auto-trigger celebration when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !celebrationClicked) {
            setTimeout(() => triggerCelebration(), 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('final-celebration');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [celebrationClicked]);

  return (
    <section 
      id="final-celebration"
      className="py-24 bg-gradient-sunset relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Fireworks/Confetti explosion */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Large confetti pieces */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                backgroundColor: ['#ff69b4', '#87ceeb', '#ffd700', '#dda0dd', '#98fb98', '#ff6347'][Math.floor(Math.random() * 6)],
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
          
          {/* Sparkle effects */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-yellow-400 animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${1 + Math.random() * 2}rem`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              fontSize: `${2 + Math.random() * 2}rem`,
            }}
          >
            {['🎊', '🎉', '💫', '🌟', '💖', '🎈'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Main celebration message */}
        <div className="animate-slide-up">
          <div className="flex justify-center mb-8">
            <PartyPopper className="text-primary animate-bounce-gentle text-6xl" />
          </div>
          
          <h1 className="font-dancing text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight">
            Once Again,<br />
            Happy Birthday Nisha! 🎊
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="text-accent animate-bounce-gentle" size={40} />
            <p className="text-2xl md:text-3xl font-inter font-medium text-secondary">
              You deserve all the happiness in the world!
            </p>
            <Heart className="text-accent animate-bounce-gentle" size={40} />
          </div>
        </div>

        {/* Special wishes card */}
        <div className="magic-card max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Gift className="text-primary animate-bounce-gentle" size={48} />
            </div>
            
            <div className="pt-8 space-y-6">
              <h3 className="font-dancing text-3xl font-bold text-primary">
                My Birthday Wishes for You ✨
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">🌟</span>
                    <span>May every day sparkle with joy and laughter</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">🌈</span>
                    <span>May your dreams come true in the most beautiful ways</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">💎</span>
                    <span>May you always shine as bright as you do</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">🦋</span>
                    <span>May new adventures and opportunities find you</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">💝</span>
                    <span>May love and friendship surround you always</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">🌺</span>
                    <span>May this new year bloom with endless possibilities</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive celebration button */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={triggerCelebration}
            className={`celebration-button text-xl py-6 px-12 ${showFireworks ? 'animate-glow-pulse' : ''}`}
          >
            <Sparkles className="mr-3" size={28} />
            🎊 CELEBRATE NISHA! 🎊
            <Sparkles className="ml-3" size={28} />
          </button>
          
          <p className="mt-6 text-muted-foreground font-inter text-lg">
            Click above for a special surprise! ✨
          </p>
        </div>

        {/* Final signature */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <div className="border-t-2 border-primary/30 pt-8 max-w-lg mx-auto">
            <p className="text-xl font-dancing text-primary font-semibold mb-2">
              With endless love and warmest wishes,
            </p>
            <p className="text-2xl font-dancing text-accent font-bold">
              Your friend Ajay 💕
            </p>
            <div className="flex justify-center gap-3 mt-4">
              {['💖', '🎂', '🎈', '✨', '🌟'].map((emoji, index) => (
                <span 
                  key={index}
                  className="text-2xl animate-bounce-gentle"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCelebration;