'use client';
import { useEffect, useRef } from 'react';

export default function BioCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const mouse = { x: -1000, y: -1000 };
    let animId: number;

    canvas.width = width;
    canvas.height = height;

    const config = {
      particleCount: 50,
      baseRadius: 15,
      wanderStrength: 0.5,
      connectionDist: 150,
    };

    class Particle {
      x: number; y: number; vx: number; vy: number;
      radius: number; angle: number;

      constructor() {
        this.x = width / 2 + (Math.random() - 0.5) * 200;
        this.y = height / 2 + (Math.random() - 0.5) * 200;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = config.baseRadius * (0.8 + Math.random() * 0.5);
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += (Math.random() - 0.5) * 0.2;
        this.vx += Math.cos(this.angle) * config.wanderStrength;
        this.vy += Math.sin(this.angle) * config.wanderStrength;
        this.vx *= 0.95;
        this.vy *= 0.95;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          this.vx += dx * 0.002;
          this.vy += dy * 0.002;
        }

        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(200,200,200,0.8)';
        ctx!.fill();
      }
    }

    const particles = Array.from({ length: config.particleCount }, () => new Particle());

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    function animate() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.strokeStyle = 'rgba(120,120,120,0.15)';
      ctx!.lineWidth = 4;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.connectionDist) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="goo" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          filter: "url('#liquid-filter') contrast(150%) brightness(100%)",
          opacity: 0.9,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
