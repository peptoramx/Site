// English remains the first language for a fresh visit. Once a visitor makes
// an explicit choice, retain it for the current PEPTORA browsing session so
// internal links never reset the experience back to another language.
document.addEventListener('DOMContentLoaded', () => {
  let saved = null;
  const requested = new URLSearchParams(window.location.search).get('lang');
  try { saved = requested || sessionStorage.getItem('peptora_session_lang'); } catch (error) { saved = requested; }
  if (saved === 'es' && typeof setLanguage === 'function') setLanguage('es');

  function updateInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach(link => {
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith('#') || raw.startsWith('tel:') || raw.startsWith('mailto:')) return;
      const url = new URL(raw, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (lang === 'es') url.searchParams.set('lang', 'es');
      else url.searchParams.delete('lang');
      link.setAttribute('href', url.pathname + url.search + url.hash);
    });
  }
  updateInternalLinks(document.documentElement.lang);

  const toggle = document.getElementById('langToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
    try { sessionStorage.setItem('peptora_session_lang', lang); } catch (error) {}
    updateInternalLinks(lang);
  });
});
