/* Portfolio widgets.
   Re-run on every page swap because Material's navigation.instant replaces
   the content without a full page load. */

(function () {
  "use strict";

  /* ---------- reading progress ---------- */

  /* One bar, one listener, for the life of the document. Material's
     navigation.instant re-runs init() on every page swap, so the listener is
     registered once and only the bar reference is refreshed — the previous
     version removed a freshly-created closure, which removed nothing and
     leaked a scroll listener per navigation. */
  var progressBar = null;

  function updateProgress() {
    if (!progressBar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progressBar.style.width = pct + "%";
  }

  function readingProgress() {
    progressBar = document.querySelector(".pf-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "pf-progress";
      document.body.appendChild(progressBar);
      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress, { passive: true });
    }
    updateProgress();
  }

  /* ---------- toolkit filter ---------- */

  function toolkitFilter() {
    var root = document.querySelector("[data-pf-filter]");
    if (!root) return;

    var buttons = Array.prototype.slice.call(root.querySelectorAll(".pf-filter button"));
    var groups = Array.prototype.slice.call(root.querySelectorAll("[data-group]"));
    var chips = Array.prototype.slice.call(root.querySelectorAll(".pf-chip"));
    if (!buttons.length) return;

    function apply(key) {
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.dataset.filter === key ? "true" : "false");
      });
      groups.forEach(function (g) {
        g.hidden = !(key === "all" || g.dataset.group === key);
      });
      chips.forEach(function (c) {
        var on = key === "all" || c.closest("[data-group]").dataset.group === key;
        c.classList.toggle("is-dim", !on);
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.filter); });
    });

    apply("all");
  }

  /* ---------- boot ---------- */

  function init() {
    readingProgress();
    toolkitFilter();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);          // Material's page-load observable
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
