function clock() {
  const arrowHours = document.querySelector('.hours');
  const arrowMinutes = document.querySelector('.minutes');
  const arrowSeconds = document.querySelector('.seconds');
  const deg = 6;

  const smallHours = document.querySelector('.hoursSmall');
  const smallMinutes = document.querySelector('.minutesSmall');
  const smallSeconds = document.querySelector('.secondsSmall');

  setInterval(() => {
    const date = new Date();

    const hours = date.getHours() * 30;
    const minutes = date.getMinutes() * deg;
    const seconds = date.getSeconds() * deg;

    arrowHours.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
    arrowMinutes.style.transform = `rotateZ(${minutes}deg)`
    arrowSeconds.style.transform = `rotateZ(${seconds}deg)`

    smallHours.innerHTML = date.getHours();
    smallMinutes.innerHTML = date.getMinutes();
    smallSeconds.innerHTML = date.getSeconds();

    document.querySelector('.day').innerHTML = date.getDate()
    document.querySelector('.month').innerHTML = date.getMonth()
    document.querySelector('.year').innerHTML = date.getFullYear()
  },0)
}

clock();