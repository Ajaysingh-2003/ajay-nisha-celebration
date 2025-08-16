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
    setTimeout(() => setShowFireworks(false), 5000);
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
      {/* Flying emoji blast */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Flying emojis */}
          {[...Array(80)].map((_, i) => {
            const randomX = (Math.random() - 0.5) * 800;
            const randomY = -(Math.random() * 400 + 100);
            return (
              <div
                key={i}
                className="absolute animate-emoji-blast text-4xl"
                style={{
                  left: `${40 + Math.random() * 20}%`,
                  top: `${40 + Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `5s`,
                  '--emoji-x': `${randomX}px`,
                  '--emoji-y': `${randomY}px`,
                } as React.CSSProperties}
              >
                {['🎈', '💖', '🎂', '⭐', '🌟', '✨', '🎊', '🎉', '💫', '🎁'][Math.floor(Math.random() * 10)]}
              </div>
            );
          })}
        </div>
      )}


      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Main celebration message */}
        <div className="animate-slide-up">
          <div className="flex justify-center mb-8">
            <PartyPopper className="text-primary animate-bounce-gentle text-6xl" />
          </div>
          
          <h1 className="font-dancing text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight">
            Once Again,<br />
            Happy Birthday Nisha Ji! 🎊
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="text-accent animate-bounce-gentle" size={40} />
            <p className="text-2xl md:text-3xl font-inter font-medium text-primary">
              Aapko iss duniya ki har khushi mile, mai yahi dua karta hu. I will always be someone you can trust, mai humesha aapka well wisher banke rahunga. Aur bhagwaan ne chaaha toh ek din hum zarur milenge nisha ji, mujhe aapko dekhne ka bahut mann hai!
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
                    <span>Aapka har din khushi se bhara ho</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">🌈</span>
                    <span>Aapke saare sapne sach ho aur aapko sab kuch mile</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">💎</span>
                    <span>Aap apne parents ko bhaut proud karoge</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">🦋</span>
                    <span>Aapko ek bahut acha ladka milega (mujhese acha toh nahi hehe)</span>
                  </p>
                  <p className="flex items-start gap-3 text-card-foreground">
                    <span className="text-xl">💝</span>
                    <span>Aap independent aur strong bane raho humesha, aur koi bhi aira gaira aapko sad na karein</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Celebrate Nisha button */}
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
              Ye tha meri taraf se ek chota sa gift, I hope aapko acha laga ho.
            </p>
            <p className="text-2xl font-dancing text-accent font-bold">
              Aapke chote dost ki taraf se: Ajay 💕
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