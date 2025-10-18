import { useEffect, useState } from 'react';

const Index = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4">
        <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light text-foreground tracking-wider animate-fade-in">
          Void inside me
        </h1>
        <div className="mt-8 w-24 h-px bg-primary/40 mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default Index;
