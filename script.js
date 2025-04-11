// Music toggle + confetti
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let played = false;

musicBtn.addEventListener('click', () => {
  if (!played) {
    bgMusic.play();
    musicBtn.textContent = '⏸ Music Playing';
    played = true;

    // Confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    bgMusic.onended = () => {
      musicBtn.textContent = '🎵 Play Music';
      played = false;
    };
  } else {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    musicBtn.textContent = '🎵 Play Music';
    played = false;
  }
});

// Scroll animation
const animatedEls = document.querySelectorAll('.fade-in, .slide-up');

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;
  animatedEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

document.getElementById('revealLetterBtn').addEventListener('click', () => {
  const letterDiv = document.getElementById('letter');
  const letterText = document.getElementById('letterText');
  const fullText = `Madame Ji,

Finally Vai Ka birthday is here 💃💃💃 and i really can't wait to see you again. The fact is that we found our way through long talks and shared meals, and I am not really sure how but we clicked instantly after not being close for years now.
Tiramisu that somehow became our thing. KFC burgers that never disappointed (once it did tho), even when we said we should cut back.
McD meals that left us joking about the weight we were definitely not losing. Junk food, laughter, time that slipped by too fast but left its mark in the best ways.

So here’s to you. To another year of everything that makes you, you. To more laughter, more meals, more quiet unspoken understandings and more spoken misunderstandings hehe. And most of all, to the simple fact that I’m grateful we met <3

Yours Chirkut :)`;

  letterDiv.classList.remove('hidden');

  // Typewriter effect
  letterText.textContent = '';
  let index = 0;
  const speed = 40;

  function typeWriter() {
    if (index < fullText.length) {
      letterText.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
  document.getElementById('revealLetterBtn').style.display = 'none';
});

// Cursor toggle on click
document.body.addEventListener('click', () => {
  document.body.classList.toggle('burger-cursor');
});

// Page flip audio
const pageFlip = new Audio('assets/page-flip.mp3');
const memoryrevel = new Audio('assets/memory-reveal.mp3');
const cakesound = new Audio('assets/cakesound.mp3');

document.getElementById('revealLetterBtn').addEventListener('click', () => {
  pageFlip.play();
});

document.getElementById('showcakebtn').addEventListener('click', (e) => {
  e.preventDefault(); // Stop the link from navigating

  cakesound.play();

  cakesound.onended = () => {
    window.location.href = 'cake.html';
  };
});

document.getElementById('revealMemoryBtn').addEventListener('click', () => {
  memoryrevel.play();
});

// Reveal memory photo button
document.getElementById('revealMemoryBtn').addEventListener('click', () => {
  document.getElementById('photo').classList.remove('hidden');
  document.getElementById('revealMemoryBtn').style.display = 'none';
});

// Trigger balloons and confetti on play music
document.getElementById('playMusic').addEventListener('click', () => {
  // Trigger confetti
  if (typeof confetti === 'function') {
    confetti();
  }

  // Create floating balloons
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(balloon);

    // Remove after animation
    setTimeout(() => balloon.remove(), 15000);
  }
});
