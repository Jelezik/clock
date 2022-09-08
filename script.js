function clock() {
  const arrowHours = document.querySelector('.hours');
  const arrowMinutes = document.querySelector('.minutes');
  const arrowSeconds = document.querySelector('.seconds');
  const deg = 6;

  setInterval(() => {
    const date = new Date();

    const hours = date.getHours() * 30;
    const minutes = date.getMinutes() * deg;
    const seconds = date.getSeconds() * deg;

    arrowHours.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
    arrowMinutes.style.transform = `rotateZ(${minutes}deg)`
    arrowSeconds.style.transform = `rotateZ(${seconds}deg)`
  },0)
}

clock();