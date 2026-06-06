/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 800);
});

/* =========================
   TYPING ANIMATION
========================= */

const words = [
  "Desk Collection",
  "Collection Officer",
  "Customer Handling",
  "Operational Staff",
  "Data Reporting",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex);

    charIndex--;

    if (charIndex < 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

/* =========================
   COUNTER
========================= */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;

    let count = 0;

    const updateCounter = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;

        counter.innerText = Math.ceil(count);

        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  });
};

runCounter();

/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPosition = window.scrollY;

  const progress = (scrollPosition / totalHeight) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});

/* =========================
   REVEAL ANIMATION
========================= */

function revealSections() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);

revealSections();

/* =========================
   SCROLL TO TOP
========================= */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

/* =========================
   ACTIVE MENU ON SCROLL
========================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* =========================
   FLOATING WA PULSE
========================= */

const floatingWA = document.querySelector(".floating-wa");

setInterval(() => {
  floatingWA.style.transform = "scale(1.15)";

  setTimeout(() => {
    floatingWA.style.transform = "scale(1)";
  }, 500);
}, 3000);

/* =========================
   HERO IMAGE EFFECT
========================= */

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  heroImage.addEventListener("mousemove", () => {
    heroImage.style.transform = "scale(1.03)";
  });

  heroImage.addEventListener("mouseleave", () => {
    heroImage.style.transform = "scale(1)";
  });
}

/* =========================
   YEAR AUTO FOOTER
========================= */

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML += `<p style="margin-top:15px;">
© ${year} Mochamad Rizky.
All Rights Reserved.
</p>`;
