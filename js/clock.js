const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  let hh = String(date.getHours()).padStart(2, "0");
  let m = String(date.getMinutes()).padStart(2, "0");
  let ss = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hh}:${m}:${ss}`;
}
getClock();
setInterval(getClock, 1000);
