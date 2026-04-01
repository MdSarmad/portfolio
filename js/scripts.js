window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("portfolioTheme") || "light";
  const statusText = document.getElementById("contactStatus");

  const applyTheme = (theme) => {
    body.classList.toggle("theme-dark", theme === "dark");
    body.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("portfolioTheme", theme);
    themeToggle.querySelector("i").className =
      theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  };

  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    applyTheme(body.classList.contains("theme-dark") ? "light" : "dark");
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(
      ".resume-section, .hero-card, .timeline-item, .card, .project-card",
    )
    .forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });

  const skillsSection = document.getElementById("skills");
  const skillFills = document.querySelectorAll("#skills .fa-li");

  window.addEventListener(
    "scroll",
    () => {
      if (!skillsSection) return;
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        document.querySelectorAll(".dev-icons .fa").forEach((icon, index) => {
          icon.style.transform = "translateY(0)";
        });
      }
    },
    { passive: true },
  );

  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject =
      document.getElementById("contactSubject").value.trim() ||
      "Portfolio query";
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      statusText.textContent = "Please fill all required fields.";
      statusText.className = "form-text text-danger";
      return;
    }

    const receiver = "28mdsarmad99@gmail.com";
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    const subjectEncoded = encodeURIComponent(subject);
    const mailto = `mailto:${receiver}?subject=${subjectEncoded}&body=${body}`;

    statusText.textContent = "Opening your email client...";
    statusText.className = "form-text text-success";
    window.location.href = mailto;

    setTimeout(() => {
      contactForm.reset();
      statusText.textContent =
        "If the email client did not open, send manually to 28mdsarmad99@gmail.com.";
      statusText.className = "form-text text-muted";
    }, 300);
  });

  document.querySelectorAll(".js-scroll-trigger").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
