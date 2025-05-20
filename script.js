window.addEventListener('DOMContentLoaded', () => {
    const petals = [];
  
    for (let i = 0; i < 10; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'petal-wrapper';
  
      const petal = document.createElement('div');
      petal.className = 'petal-inner';
      wrapper.appendChild(petal);
  
      wrapper.style.left = `${Math.random() * 100}vw`;
      wrapper.style.animationDelay = `${Math.random() * 5}s`;
      wrapper.style.animationDuration = `${5 + Math.random() * 20}s`;
  
      document.body.appendChild(wrapper);
      petals.push(petal);
    }
  
    document.addEventListener('mousemove', (e) => {
      petals.forEach(petal => {
        const rect = petal.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
  
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const offset = 30 * (1 - dist / 100);
          const x = Math.cos(angle) * offset;
          const y = Math.sin(angle) * offset;
          petal.style.transform = `translate(${x}px, ${y}px)`;
        } else {
          petal.style.transform = '';
        }
      });
    });
  });
  