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
                <span className="font-semibold text-primary">Dear Nisha Ji,</span>
              </p>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                Pehle toh mai yeh kehna chaahunga ki aap mere liye kitni special ho. Maine sapne mai bhi nahi socha tha ki mujhe aap jaisi itni achi friend milegi online. Aap bahut sweet aur pyaari ho. Pata nahi chala ki RP karte karte aapke saath ek special connection kaise ban gaya, yeh friendship mere liye bahut special hai. ✨
              </p>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                Thank you for being such an amazing friend to me nisha ji. Aap mera safe space ho, aapse baat karke mera dil khush ho jaata hai. Ab toh kitne din ho gaye aapse baat kiye hue, mai bata nahi sakta ki mai aapko kitna miss kar raha hu. Jab bhi aapse baat karta hu na, mujhe bahut acha lagta hai.  💖
              </p>
              
              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                Aap mere liye ek inspiration ho nisha ji, aap kitna kuch handle karte ho. Family, Studies, Training aur mere saath RP karna, haha. Aap aage jaake bahut badi doctor banoge, bahut successful and bahut ameer. Phir merko adopt karke meri sugar mummy ban jana hehehe. Aap bahut hardworking or smart ho nisha ji, mujhe pata hai aap ekdum A1 doctor banogi. 🌈
              </p>

              <p className="text-lg md:text-xl font-inter leading-relaxed text-card-foreground">
                I hope ki hum bahut time tak saath rahein aur baat karein. I know ki kisi din aapko jana hoga, but I hope ki mai aapko yaad rahu. Ki ek ajay naam ko koi ladka tha hehe. Mai aapko humesha yaad rakhunga nisha ji, as a good friend. Especially kabhi kabhi humari uhmmm... waisi waali baatein, I will always miss them 🌈
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