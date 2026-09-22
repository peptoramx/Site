// English remains the first language for a fresh visit. Once a visitor makes
// an explicit choice, retain it for the current PEPTORA browsing session so
// internal links never reset the experience back to another language.
document.addEventListener('DOMContentLoaded', () => {
  let saved = null;
  try { saved = sessionStorage.getItem('peptora_session_lang'); } catch (error) {}
  if (saved === 'es' && typeof setLanguage === 'function') setLanguage('es');

  const toggle = document.getElementById('langToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    try { sessionStorage.setItem('peptora_session_lang', document.documentElement.lang === 'es' ? 'es' : 'en'); } catch (error) {}
  });
});
