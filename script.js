const form = document.querySelector('#check-form');
const result = document.querySelector('#check-result');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const state = new FormData(form).get('state');
  const messages = {
    mild: ['Haz una pausa breve', 'Reduce una demanda, toma agua o camina unos minutos. Después registra qué estaba ocurriendo.'],
    persistent: ['Busca apoyo y prepara contexto', 'Si lleva dos semanas o más, o interfiere con tu rutina, pide cita con un profesional. Resume desde cuándo ocurre y cómo te afecta.'],
    urgent: ['Prioriza ayuda humana ahora', 'Si hay peligro inmediato en España, llama al 112. Para pensamientos suicidas o apoyo relacionado, llama al 024. Fuera de España, contacta con emergencias de tu país.']
  };
  if (!state) {
    result.hidden = false;
    result.innerHTML = '<strong>Elige una opción para continuar.</strong>';
    return;
  }
  const [title, body] = messages[state];
  result.hidden = false;
  result.innerHTML = `<strong>${title}</strong>${body}`;
});

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const prompt = button.previousElementSibling?.querySelector('p')?.textContent;
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt.replace(/[“”]/g, ''));
      const previous = button.textContent;
      button.textContent = 'Copiado';
      setTimeout(() => { button.textContent = previous; }, 1500);
    } catch {
      button.textContent = 'Selecciona el texto';
    }
  });
});

const dialog = document.querySelector('#breathing-dialog');
const start = document.querySelector('#breathing-start');
const cue = document.querySelector('#breathing-cue');
const time = document.querySelector('#breathing-time');
const orb = document.querySelector('.breathing-orb');
let timer;

document.querySelector('[data-open-breathing]')?.addEventListener('click', () => dialog.showModal());
document.querySelector('.dialog-close')?.addEventListener('click', () => {
  clearInterval(timer);
  dialog.close();
});

start?.addEventListener('click', () => {
  clearInterval(timer);
  let remaining = 60;
  let inhale = true;
  start.disabled = true;
  cue.textContent = 'Inhala con suavidad';
  orb.classList.add('expand');
  timer = setInterval(() => {
    remaining -= 1;
    time.textContent = `0:${String(remaining).padStart(2, '0')}`;
    if (remaining % 4 === 0) {
      inhale = !inhale;
      cue.textContent = inhale ? 'Inhala con suavidad' : 'Suelta el aire sin forzar';
      orb.classList.toggle('expand', inhale);
    }
    if (remaining <= 0) {
      clearInterval(timer);
      cue.textContent = 'Pausa terminada';
      start.disabled = false;
      start.textContent = 'Repetir';
      orb.classList.remove('expand');
    }
  }, 1000);
});
