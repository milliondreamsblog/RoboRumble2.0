import { useEffect } from 'react';

function ParticleBackground() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.querySelector('.particle-container');
    container.appendChild(canvas);

    let particles = [];
    const particleCount = 150;
    const mouse = { x: null, y: null };

    // Resize canvas to fit the screen
    function resize() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }

    // Create a single particle
    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1.5 - 0.75,
        speedY: Math.random() * 1.5 - 0.75,
        life: Math.random() * 1 + 0.5,
        color: `rgba(0, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
      };
    }

    // Initialize all particles
    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    // Draw particles and handle interactivity
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Handle particle rebounding off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Mouse attraction
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x && mouse.y && distance < 100) {
          particle.x += dx / distance * -2;
          particle.y += dy / distance * -2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections between close particles
        particles.forEach((otherParticle) => {
          const distX = particle.x - otherParticle.x;
          const distY = particle.y - otherParticle.y;
          const dist = Math.sqrt(distX * distX + distY * distY);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 200, ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawParticles);
    }

    // Track mouse movement
    function handleMouseMove(event) {
      mouse.x = event.clientX - container.offsetLeft;
      mouse.y = event.clientY - container.offsetTop;
    }

    // Reset mouse position when it leaves the screen
    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    resize();
    initParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      canvas.remove();
    };
  }, []);

  return <div className="particle-container absolute top-0 left-0 w-full h-full"></div>;
}

export default ParticleBackground;
