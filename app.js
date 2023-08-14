if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Зарегестрирован"))
    .catch(() => console.log("Ошибка"));
}