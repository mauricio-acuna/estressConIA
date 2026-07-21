(() => {
  const MAINTENANCE_MODE = true;

  if (!MAINTENANCE_MODE) return;

  document.documentElement.classList.add("maintenance-mode");
  document.title = "Web en desarrollo · Pausa";

  const robots = document.querySelector('meta[name="robots"]') || document.createElement("meta");
  robots.name = "robots";
  robots.content = "noindex, nofollow";
  if (!robots.parentNode) document.head.append(robots);

  const style = document.createElement("style");
  style.textContent = `
    html.maintenance-mode body { visibility: hidden; }
    html.maintenance-mode body.maintenance-ready { visibility: visible; }
    .maintenance-page { min-height: 100vh; display: grid; place-items: center; margin: 0; padding: 1.5rem; background: #f4f1ea; color: #17231f; font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
    .maintenance-card { width: min(680px, 100%); padding: clamp(2rem, 7vw, 4.5rem); border: 1px solid #cbd1ca; border-radius: 1.25rem; background: #fff; box-shadow: 0 24px 70px rgba(23, 35, 31, .1); text-align: center; }
    .maintenance-mark { display: inline-flex; align-items: center; gap: .45rem; margin-bottom: 2.5rem; font-weight: 800; letter-spacing: -.04em; }
    .maintenance-mark span { color: #72a66f; }
    .maintenance-kicker { margin: 0 0 1rem; color: #174c3c; font-size: .75rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
    .maintenance-card h1 { margin: 0; font: 400 clamp(3rem, 10vw, 5.5rem)/.98 Georgia, serif; letter-spacing: -.055em; }
    .maintenance-message { max-width: 470px; margin: 1.5rem auto 0; color: #59645f; font-size: 1.05rem; }
    .maintenance-status { display: inline-flex; align-items: center; gap: .55rem; margin-top: 2rem; padding: .6rem .9rem; border-radius: 999px; background: #cfe3d3; color: #174c3c; font-size: .82rem; font-weight: 750; }
    .maintenance-status::before { width: .55rem; height: .55rem; border-radius: 50%; background: #174c3c; content: ""; }
  `;
  document.head.append(style);

  const showMaintenancePage = () => {
    document.title = "Web en desarrollo · Pausa";
    document.body.className = "maintenance-page maintenance-ready";
    document.body.innerHTML = `
      <main class="maintenance-card">
        <div class="maintenance-mark"><span aria-hidden="true">●</span> pausa</div>
        <p class="maintenance-kicker">Estamos preparando algo nuevo</p>
        <h1>Web en desarrollo</h1>
        <p class="maintenance-message">Estamos revisando el proyecto junto a profesionales para ofrecer una experiencia útil, responsable y bien fundamentada.</p>
        <p class="maintenance-status">Volveremos pronto</p>
      </main>
    `;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showMaintenancePage, { once: true });
  } else {
    showMaintenancePage();
  }
})();
