document.addEventListener("DOMContentLoaded", () => {
  // MENU TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // SCROLL SIDEBAR
  const sidebarLinks = document.querySelectorAll('#sidebar nav a');
  const sections = [...sidebarLinks].map(link => {
    const id = link.getAttribute('href').slice(1);
    return document.getElementById(id);
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 183;
    let currentIndex = -1;

    sections.forEach((section, index) => {
      if (!section) return;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      if (scrollPosition >= sectionTop) {
        currentIndex = index;
      }
    });

    if (currentIndex === -1) currentIndex = 0;
    sidebarLinks.forEach(link => link.classList.remove('active'));
    if (sidebarLinks[currentIndex]) {
      sidebarLinks[currentIndex].classList.add('active');
    }
  });

  // MUSIC TOGGLE
  const music = document.getElementById("bg-music");
  const toggleMusicBtn = document.getElementById("toggle-music");
  let isPlaying = false;

  if (toggleMusicBtn && music) {
    music.play().then(() => {
      isPlaying = true;
      toggleMusicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }).catch(err => {
      console.warn("Autoodtwarzanie zablokowane:", err);
      toggleMusicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    });

    toggleMusicBtn.addEventListener("click", () => {
      if (isPlaying) {
        music.pause();
        toggleMusicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      } else {
        music.play().catch(err => {
          console.warn("Autoodtwarzanie zablokowane:", err);
        });
        toggleMusicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      }

      isPlaying = !isPlaying;
    });
  }

  const volumeSlider = document.getElementById("volume-slider");

  if (music && volumeSlider) {
    music.volume = volumeSlider.value;

    volumeSlider.addEventListener("input", () => {
      music.volume = volumeSlider.value;
    });
  }

  // ANIMACJA SECTION
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // SKOK NA POCZĄTEK STRONY
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    document.getElementById("main-header")?.scrollIntoView({ behavior: "smooth" });
  });

  // WYSZUKIWANIE
  const input = document.getElementById("search-input");
  const button = document.getElementById("search-button");

  function searchAndScroll() {
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    const targetSection = [...document.querySelectorAll("section")].find(section =>
      section.textContent.toLowerCase().includes(query)
    );

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      alert(`Nie znaleziono treści zawierającej: "${query}"`);
    }
  }

  button.addEventListener("click", searchAndScroll);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchAndScroll();
  });

  // PRELOADER
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1000);
  });

  // MOTYWY
  const toggleButton = document.getElementById('toggle-theme');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else {
        root.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }

    toggleButton.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        const icon = toggleButton.querySelector('i');
        if (!icon) return;
        icon.className = theme === 'dark'
            ? 'fa-solid fa-moon'
            : 'fa-solid fa-sun';
    }


  // ANIMACJA CZĄSTECZEK
  let particlesOn = true;
  let particleInterval = setInterval(createParticle, 220);

  const toggleParticlesBtn = document.getElementById('toggle-particles');
  toggleParticlesBtn?.addEventListener('click', () => {
    particlesOn = !particlesOn;
    toggleParticlesBtn.setAttribute('aria-pressed', particlesOn);
    const icon = toggleParticlesBtn.querySelector('i');
    if (icon) {
        icon.className = particlesOn
            ? 'fa-solid fa-wand-magic-sparkles'
            : 'fa-solid fa-wand-magic';
    }
    if (particlesOn) {
        particleInterval = setInterval(createParticle, 220);
        document.getElementById('particles').style.display = '';
    } else {
        clearInterval(particleInterval);
        document.getElementById('particles').style.display = 'none';
    }
  });

  const particleColors = [
    'var(--color-base)',
    'var(--color-primary)', 
    'var(--color-secondary)'
  ];

  function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.top = '-20px';
    p.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
    p.style.boxShadow = `0 0 ${size * 4}px ${size * 1.5}px ${p.style.background}, 0 0 2px 1px #fff8`;
    p.style.animation = `particleMoveDown ${4 + Math.random() * 4}s linear forwards`;
    p.style.opacity = 0.7 + Math.random() * 0.3;
    document.getElementById('particles').appendChild(p);
    setTimeout(() => p.remove(), 9000);
  }
  setInterval(createParticle, 120);

});
