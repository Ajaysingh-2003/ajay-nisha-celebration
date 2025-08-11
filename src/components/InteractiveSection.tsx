import { useState, useRef } from 'react';
import { Volume2, Play, RotateCcw } from 'lucide-react';
import balloons from '@/assets/balloons.jpg';

const InteractiveSection = () => {
  const [poppedBalloons, setPoppedBalloons] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const balloonColors = [
    'bg-pink-400', 'bg-blue-400', 'bg-yellow-400', 
    'bg-purple-400', 'bg-green-400', 'bg-red-400',
    'bg-orange-400', 'bg-indigo-400', 'bg-cyan-400'
  ];

  const popBalloon = (index: number) => {
    if (!poppedBalloons.includes(index)) {
      setPoppedBalloons([...poppedBalloons, index]);
      
      // Add pop sound effect (visual feedback)
      const popElement = document.createElement('div');
      popElement.textContent = '💥';
      popElement.className = 'absolute text-4xl animate-bounce-gentle pointer-events-none';
      popElement.style.left = '50%';
      popElement.style.top = '50%';
      popElement.style.transform = 'translate(-50%, -50%)';
      
      const balloonElement = document.getElementById(`balloon-${index}`);
      if (balloonElement) {
        balloonElement.appendChild(popElement);
        setTimeout(() => popElement.remove(), 1000);
      }
    }
  };

  const resetBalloons = () => {
    setPoppedBalloons([]);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you'd play actual audio here
    console.log(isPlaying ? 'Stopping music' : 'Playing birthday song');
  };

  return (
    <section className="py-20 bg-gradient-interactive relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-primary mb-4">
            Let's Have Some Fun! 🎮
          </h2>
          <p className="text-xl text-secondary font-inter">
            Interactive birthday games just for you!
          </p>
        </div>

        {/* Balloon Popping Game */}
        <div className="magic-card mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <h3 className="font-dancing text-3xl font-bold text-primary mb-3">
              🎈 Pop the Birthday Balloons! 🎈
            </h3>
            <p className="text-muted-foreground font-inter">
              Click on the balloons to pop them and make a wish! 
              {poppedBalloons.length > 0 && ` You've popped ${poppedBalloons.length} balloon${poppedBalloons.length === 1 ? '' : 's'}!`}
            </p>
          </div>

          {/* Balloons Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-md mx-auto mb-8">
            {balloonColors.map((color, index) => (
              <div
                key={index}
                id={`balloon-${index}`}
                className="relative flex items-center justify-center"
              >
                {!poppedBalloons.includes(index) ? (
                  <button
                    onClick={() => popBalloon(index)}
                    className={`balloon ${color} animate-balloon-sway hover:animate-bounce-gentle`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-white text-xl">🎈</span>
                  </button>
                ) : (
                  <div className="w-16 h-20 flex items-center justify-center text-4xl animate-sparkle">
                    ✨
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Game Controls */}
          <div className="text-center">
            {poppedBalloons.length === balloonColors.length ? (
              <div className="mb-4">
                <p className="text-lg font-dancing text-primary font-bold mb-3">
                  🎊 Amazing! You popped all the balloons! 🎊
                </p>
                <p className="text-muted-foreground">May all your birthday wishes come true! ✨</p>
              </div>
            ) : null}
            
            <button
              onClick={resetBalloons}
              className="celebration-button mr-4"
            >
              <RotateCcw size={20} className="mr-2" />
              Reset Balloons
            </button>
          </div>
        </div>

        {/* Music Player */}
        <div className="magic-card text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-dancing text-3xl font-bold text-primary mb-4">
            🎵 Birthday Celebration Music 🎵
          </h3>
          <p className="text-muted-foreground font-inter mb-6">
            Turn up the volume and let's celebrate with some happy tunes!
          </p>
          
          <button
            onClick={toggleMusic}
            className={`celebration-button ${isPlaying ? 'animate-glow-pulse' : ''}`}
          >
            {isPlaying ? (
              <>
                <Volume2 size={24} className="mr-3" />
                🎶 Playing Birthday Song! 🎶
              </>
            ) : (
              <>
                <Play size={24} className="mr-3" />
                🎶 Play Birthday Song 🎶
              </>
            )}
          </button>
          
          {isPlaying && (
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full animate-bounce-gentle"
                    style={{ 
                      height: `${20 + Math.random() * 30}px`,
                      animationDelay: `${i * 0.2}s` 
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                🎵 "Happy birthday to you..." 🎵
              </p>
            </div>
          )}
        </div>

        {/* Fun floating musical notes */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-primary text-2xl animate-float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                🎵
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveSection;