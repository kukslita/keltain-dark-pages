document.addEventListener('DOMContentLoaded', () => {
  const bsod = document.getElementById('bsod');
  const content = document.getElementById('content');
  const audio = document.getElementById('ocean-sound');
  let canTrigger = false;

  // Через 3 секунды скрываем BSOD и показываем контент
  setTimeout(() => {
    bsod.classList.add('hidden');
    content.classList.remove('hidden');

    // Через 5 секунд разрешаем триггер
    setTimeout(() => {
      canTrigger = true;
    }, 2000); // 3 + 2 = 5 секунд от старта

    // Включаем звук
    audio.play().catch(e => console.log('Автовоспроизведение запрещено'));

    // Показываем первый текст
    setTimeout(() => {
      content.innerHTML = `<div class="fade-in">Ты слишком себя загрузила.<br>Сейчас всё остановится.</div>`;
    }, 500);

    // Через 8 секунд — закрыть глаза
    setTimeout(() => {
      content.innerHTML = `<div class="fade-in">Закрой глаза.<br>Пусть мысли уйдут, как волны.</div>`;
    }, 8000);

    // Через 30 секунд — ты не обязана
    setTimeout(() => {
      content.innerHTML = `<div class="fade-in">Ты не обязана решать всё сейчас.<br>Просто будь.</div>`;
    }, 30000);

    // Через 60 секунд — оставить след
    setTimeout(() => {
      content.innerHTML = `
        <div class="fade-in">
          Можешь оставить след.<br>
          Но он исчезнет навсегда.
        </div>
        <input type="text" id="user-input" placeholder="Напиши что-то..." autofocus>
      `;
      const input = document.getElementById('user-input');
      input.addEventListener('input', () => {
        setTimeout(() => {
          input.value = '';
        }, 3000);
      });
    }, 60000);

    // Через 70 секунд — финал
    setTimeout(() => {
      content.innerHTML = `<div class="fade-in">Ты не обязана быть включённой.<br>KELTAIN. Мы рядом.</div>`;
    }, 70000);

    // Через 75 секунд — закрытие
    setTimeout(() => {
      window.close();
    }, 75000);

  }, 3000);

  // Обработка движения мыши и касания
  function triggerBreak() {
    if (canTrigger) {
      content.classList.remove('hidden');
      content.innerHTML = `
        <div style="text-align: center; line-height: 1.8;">
          Ты снова включился(лась).<br>
          А ведь можно было просто быть здесь.
        </div>
      `;
      content.classList.add('fade-in');
      audio.pause();
      setTimeout(() => {
        window.close();
      }, 5000);
    }
  }

  document.addEventListener('mousemove', triggerBreak);
  document.addEventListener('touchstart', triggerBreak);
});

// Скрытие BSOD
document.querySelector('.bsod').classList.remove('hidden');