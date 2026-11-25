// Словарь связывает кнопки с готовыми моделями.
const models = { cube: { src: 'models/cube.glb', alt: 'Синий куб' }, sphere: { src: 'models/sphere.glb', alt: 'Оранжевый шар' } };
const viewer = document.querySelector('#viewer');
const buttons = document.querySelectorAll('.choice');
const status = document.querySelector('#status');
buttons.forEach(button => button.addEventListener('click', () => {
  // Меняем файл и подпись модели, затем отмечаем выбранную кнопку.
  const model = models[button.dataset.model];
  viewer.setAttribute('src', model.src);
  viewer.setAttribute('alt', model.alt);
  status.textContent = '';
  buttons.forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
}));
viewer.addEventListener('error', () => { status.textContent = 'Не удалось загрузить модель. Проверьте интернет и наличие папки models.'; });
// Если библиотека не загрузилась, посетитель увидит понятную подсказку.
setTimeout(() => { if (!customElements.get('model-viewer')) status.textContent = 'Не загрузилась библиотека model-viewer. Проверьте подключение к интернету.'; }, 12000);
