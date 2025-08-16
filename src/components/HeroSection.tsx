import { useEffect, useState } from 'react';
import { Sparkles, Heart, Gift } from 'lucide-react';
import birthdayCake from '@/assets/birthday-cake.jpg';

const HeroSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center px-4">

      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#ff69b4', '#87ceeb', '#ffd700', '#dda0dd', '#98fb98'][Math.floor(Math.random() * 5)],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Main birthday message */}
        <div className="animate-slide-up">
          <h1 className="font-dancing text-6xl md:text-8xl font-bold text-primary mb-4">
            Happy Birthday, Nisha Ji! 🎉
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="text-primary animate-bounce-gentle" size={32} />
            <p className="text-2xl md:text-3xl font-inter font-medium text-secondary">
              From your friend, Ajay 💖
            </p>
            <Heart className="text-primary animate-bounce-gentle" size={32} />
          </div>
        </div>

        {/* Birthday cake image */}
        <div className="relative inline-block mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <img 
            src={birthdayCake} 
            alt="Beautiful birthday cake with candles"
            className="w-96 h-56 object-cover rounded-3xl shadow-magical animate-glow-pulse"
          />
          <div className="absolute -top-4 -right-4">
            <Sparkles className="text-accent animate-sparkle" size={40} />
          </div>
          <div className="absolute -bottom-4 -left-4">
            <Gift className="text-primary animate-bounce-gentle" size={36} />
          </div>
        </div>

        {/* Celebration message */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8 leading-relaxed">
            Aaj ka din bahut special hai, pehli baar mai aapke birthday ka hissa ban raha hu! ✨<br />
            Isliye mai chahta hu ki meri special friend ke liye kuch special kiya jaaye! 🌈
            Meri taraf se yeh chota sa gift, I hope aapko yeh acha lagega! 
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;