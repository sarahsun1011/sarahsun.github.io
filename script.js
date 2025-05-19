function bounce(element) {
    element.classList.add('bounce');
    setTimeout(() => element.classList.remove('bounce'), 500);
  }
  
  function sparkle() {
    const star = document.createElement('div');
    star.innerText = '✨';
    star.style.position = 'fixed';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.fontSize = '1.5rem';
    star.style.zIndex = 9999;
    star.style.animation = 'sparkleFade 1s forwards';
    document.body.appendChild(star);
    setTimeout(() => document.body.removeChild(star), 1000);
  }