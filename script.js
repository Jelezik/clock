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


    date.getHours() < 10 ? smallHours.innerHTML = "0" + date.getHours() : smallHours.innerHTML = date.getHours();
    date.getMinutes() < 10 ? smallMinutes.innerHTML = "0" + date.getMinutes() : smallMinutes.innerHTML = date.getMinutes();
    date.getSeconds() < 10 ? smallSeconds.innerHTML = "0" + date.getSeconds() : smallSeconds.innerHTML = date.getSeconds()

    date.getDate() < 10 ?  document.querySelector('.day').innerHTML = "0" + date.getDate() : document.querySelector('.day').innerHTML = date.getDate();
    date.getMonth() < 10 ? document.querySelector('.month').innerHTML = "0" + date.getMonth() : document.querySelector('.month').innerHTML = date.getMonth();
    document.querySelector('.year').innerHTML = date.getFullYear()
  },0)
}

clock();