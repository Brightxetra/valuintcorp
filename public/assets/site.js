(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector("[data-nav-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");

    function setScrolled() {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    function closeMobileNav() {
      if (!toggle || !mobileNav) return;
      mobileNav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }

    function toggleMobileNav() {
      if (!toggle || !mobileNav) return;
      var isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    }

    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    if (toggle && mobileNav) {
      toggle.addEventListener("click", toggleMobileNav);
      mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileNav);
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMobileNav();
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth >= 1100) closeMobileNav();
      });
    }

    document.querySelectorAll(".accordion-item").forEach(function (item) {
      var button = item.querySelector("button");
      if (!button) return;

      button.addEventListener("click", function () {
        document.querySelectorAll(".accordion-item.active").forEach(function (openItem) {
          if (openItem === item) return;
          openItem.classList.remove("active");
          var openButton = openItem.querySelector("button");
          if (openButton) openButton.setAttribute("aria-expanded", "false");
        });

        var isActive = item.classList.toggle("active");
        button.setAttribute("aria-expanded", String(isActive));
      });
    });
  });
})();
