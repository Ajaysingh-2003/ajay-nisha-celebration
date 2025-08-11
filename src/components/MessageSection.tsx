import { Heart, Sparkles, Gift, Star } from 'lucide-react';

const MessageSection = () => {
  return (
    <section className="py-20 bg-gradient-mint relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: '1.5rem',
            }}
          >
            {['💝', '🌸', '🦋', '💫'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-primary mb-4">
            A Special Message for You 💌
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Star className="text-accent animate-sparkle" size={24} />
            <p className="text-xl text-secondary font-inter">
              From the bottom of my heart
            </p>
            <Star className="text-accent animate-sparkle" size={24} />
          </div>
        </div>

        <div className="magic-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3">
              <Heart className="text-primary animate-bounce-gentle" size={32} />
            </div>
            <div className="absolute -top-3 -right-3">
              <Gift className="text-accent animate-bounce-gentle" size={32} />
            </div>
            <div className="absolute -bottom-3 -left-3">
              <Sparkles className="text-secondary animate-sparkle" size={28} />
            </div>
            <div className="absolute -bottom-3 -right-3">
              <Sparkles className="text-primary animate-sparkle" size={28} />
            </div>

            {/* Main message */}
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">🎂</div>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                <span className="font-semibold text-primary">Dear Nisha,</span>
              </p>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                On this magical day, I want you to know how incredibly special you are! 
                Your kindness, laughter, and wonderful spirit light up every room you enter. 
                You have this amazing ability to make everyone around you feel loved and valued. ✨
              </p>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                Thank you for being such an incredible friend! Your friendship means the world to me, 
                and I feel so grateful to have someone as amazing as you in my life. 💖
              </p>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                I hope this new year of your life brings you endless joy, amazing adventures, 
                beautiful surprises, and all the happiness your heart can hold! 🌈
              </p>
              
              <div className="border-t border-primary/20 pt-6 mt-8">
                <p className="text-xl md:text-2xl font-dancing font-semibold text-primary">
                  Wishing you the happiest of birthdays! 🎊
                </p>
                <p className="text-lg font-inter text-secondary mt-2">
                  With love and best wishes,<br />
                  <span className="font-semibold text-primary">Ajay 💕</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun emoji row */}
        <div className="flex justify-center gap-4 mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {['🎁', '🌟', '🎈', '🎂', '💐', '🎊', '✨', '💖'].map((emoji, index) => (
            <span 
              key={index}
              className="text-3xl animate-bounce-gentle"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;