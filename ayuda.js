const groundingSteps = [
  ['Mira a tu alrededor', 'Nombra cinco cosas que puedes ver, sin intentar juzgarlas.'],
  ['Escucha el lugar', 'Identifica cuatro sonidos cercanos o lejanos.'],
  ['Nota el contacto', 'Observa tres puntos en los que tu cuerpo toca una superficie.'],
  ['Reconoce el aire', 'Identifica dos olores o dos sensaciones del aire a tu alrededor.'],
  ['Elige el siguiente paso', 'Nombra una acción pequeña y segura que puedas hacer después.']
];
let groundingIndex = 0;
const groundingTitle = document.querySelector('#grounding-title');
const groundingHelp = document.querySelector('#grounding-help');
const groundingCount = document.querySelector('#grounding-count');
const groundingNote = document.querySelector('#grounding-note');
const groundingNext = document.querySelector('#grounding-next');
const progress = [...document.querySelectorAll('.grounding-progress span')];

function renderGrounding() {
  const [title, help] = groundingSteps[groundingIndex];
  groundingTitle.textContent = title;
  groundingHelp.textContent = help;
  groundingCount.textContent = `Paso ${groundingIndex + 1} de ${groundingSteps.length}`;
  groundingNote.value = '';
  groundingNext.textContent = groundingIndex === groundingSteps.length - 1 ? 'Terminar' : 'Siguiente';
  progress.forEach((item, index) => item.classList.toggle('active', index <= groundingIndex));
}

groundingNext?.addEventListener('click', () => {
  if (groundingIndex < groundingSteps.length - 1) groundingIndex += 1;
  else groundingIndex = 0;
  renderGrounding();
});
document.querySelector('#grounding-reset')?.addEventListener('click', () => { groundingIndex = 0; renderGrounding(); });

document.querySelectorAll('.release-button').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.release-card');
    const done = card.classList.toggle('done');
    button.textContent = done ? 'Listo' : 'Hecho';
  });
});

const priorityForm = document.querySelector('#priority-form');
priorityForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#priority-input');
  const value = input.value.trim();
  if (!value) return;
  const item = document.createElement('li');
  item.append(document.createTextNode(value));
  const remove = document.createElement('button');
  remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', `Eliminar ${value}`);
  remove.addEventListener('click', () => item.remove());
  item.append(remove);
  const destination = document.querySelector('#priority-destination').value;
  document.querySelector(`[data-priority="${destination}"]`).append(item);
  input.value = '';
  input.focus();
});

const consultForm = document.querySelector('#consult-form');
const summary = document.querySelector('#summary-output');
consultForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(consultForm);
  const fields = [['Motivo', 'what'], ['Duración y frecuencia', 'when'], ['Impacto en mi rutina', 'impact'], ['Qué ayuda o empeora', 'changes'], ['Preguntas', 'questions']];
  const text = fields.map(([label, key]) => `${label}: ${data.get(key)?.trim() || 'Sin completar'}`).join('\n\n');
  summary.textContent = text;
  summary.hidden = false;
});
document.querySelector('#clear-consult')?.addEventListener('click', () => {
  consultForm.reset(); summary.textContent = ''; summary.hidden = true;
});
