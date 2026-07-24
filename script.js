const header = document.querySelector(".site-header");
const cursorLight = document.querySelector(".cursor-light");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const heroLede = document.querySelector("[data-type-text]");
const scrollProgress = document.querySelector(".scroll-progress");
const servicesFab = document.querySelector(".services-fab");
const servicesPopover = document.querySelector(".services-popover");
const trackedSections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]'));

function setAppHeight() {
  if (header) {
    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
  }
  document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
}

function setHeaderElevation() {
  header.dataset.elevated = String(window.scrollY > 12);
}

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
}

function updateActiveNavigation() {
  if (!trackedSections.length) return;

  const activeSection = trackedSections.reduce((current, section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight * 0.34) return section;
    return current;
  }, trackedSections[0]);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeSection.id}`);
  });
}

function toggleMenu(forceOpen) {
  const willOpen = typeof forceOpen === "boolean" ? forceOpen : menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  mobileNav.hidden = !willOpen;
  document.body.classList.toggle("menu-open", willOpen);
}

function toggleServices(forceOpen) {
  if (!servicesFab || !servicesPopover) return;
  const willOpen = typeof forceOpen === "boolean" ? forceOpen : servicesFab.getAttribute("aria-expanded") !== "true";
  servicesFab.setAttribute("aria-expanded", String(willOpen));
  servicesPopover.hidden = !willOpen;
}

function typeHeroText() {
  if (!heroLede) return;

  const text = heroLede.dataset.typeText || "";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    heroLede.textContent = text;
    heroLede.classList.remove("is-typing");
    return;
  }

  let index = 0;
  heroLede.textContent = "";
  const typeNextCharacter = () => {
    heroLede.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      window.setTimeout(typeNextCharacter, 42);
    } else {
      heroLede.classList.remove("is-typing");
    }
  };
  typeNextCharacter();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("resize", () => {
  setAppHeight();
  updateScrollProgress();
  updateActiveNavigation();
});

window.addEventListener("scroll", () => {
  setHeaderElevation();
  updateScrollProgress();
  updateActiveNavigation();
}, { passive: true });
setAppHeight();
setHeaderElevation();
updateScrollProgress();
updateActiveNavigation();
typeHeroText();

window.addEventListener("pointermove", (event) => {
  if (!cursorLight || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
  cursorLight.style.opacity = "1";
});

menuToggle.addEventListener("click", () => toggleMenu());
mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) toggleMenu(false);
});

if (servicesFab) {
  servicesFab.addEventListener("click", () => toggleServices());
}

document.querySelectorAll(".service-tab").forEach((tab) => {
  tab.addEventListener("click", () => toggleServices(false));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".floating-services")) toggleServices(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleMenu(false);
    toggleServices(false);
  }
});
