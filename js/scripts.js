/**
 * Md Sarmad - Software Engineer Portfolio JavaScript
 * Custom interactive elements, theme management, scroll reveal, and contact handler
 */

window.addEventListener("DOMContentLoaded", () => {
  // --- Theme Management ---
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  
  // Default to dark theme if not specified
  const savedTheme = localStorage.getItem("portfolioTheme") || "dark";

  const applyTheme = (theme) => {
    body.classList.toggle("theme-dark", theme === "dark");
    body.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("portfolioTheme", theme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  };

  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.contains("theme-dark");
    applyTheme(isDark ? "light" : "dark");
  });

  // --- Sticky Navbar Scroll Effect ---
  const mainNav = document.getElementById("mainNav");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      mainNav.classList.add("scrolled");
    } else {
      mainNav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  // Call once immediately in case page is loaded scrolled down
  handleScroll();

  // --- Mobile Hamburger Menu ---
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navbarLinks = document.getElementById("navbarLinks");
  
  if (mobileMenuToggle && navbarLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
      
      // Toggle menu icon between bars and close
      const icon = mobileMenuToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Close mobile menu when a nav link is clicked
    navbarLinks.querySelectorAll(".js-scroll-trigger").forEach((link) => {
      link.addEventListener("click", () => {
        navbarLinks.classList.remove("active");
        
        const icon = mobileMenuToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // --- Scroll Reveal Animation ---
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Unobserve once revealed to keep UI performant
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // --- Contact Form Handler ---
  const contactForm = document.getElementById("contactForm");
  const statusText = document.getElementById("contactStatus");

  if (contactForm && statusText) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value.trim() || "Portfolio Connection";
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !message) {
        statusText.textContent = "Please fill all required fields.";
        statusText.style.color = "var(--bs-danger, #ef4444)";
        return;
      }

      const receiver = "28mdsarmad99@gmail.com";
      const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoUrl = `mailto:${receiver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

      statusText.textContent = "Opening email client...";
      statusText.style.color = "var(--accent-secondary)";

      window.location.href = mailtoUrl;

      setTimeout(() => {
        contactForm.reset();
        statusText.textContent = "Email client opened. If it didn't open automatically, please send directly to 28mdsarmad99@gmail.com.";
        statusText.style.color = "var(--text-muted)";
      }, 1500);
    });
  }

  // --- Smooth Scrolling for Navigation ---
  document.querySelectorAll(".js-scroll-trigger").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      
      if (targetId === "page-top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // --- Copy to Clipboard Functionality ---
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy-target");
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const textToCopy = targetElement.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        btn.classList.add("copied");
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.setAttribute("title", "Copied!");

        setTimeout(() => {
          btn.classList.remove("copied");
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
          btn.removeAttribute("title");
        }, 2000);
      }).catch((err) => {
        console.error("Clipboard copy failed: ", err);
      });
    });
  });
});

