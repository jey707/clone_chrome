const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

imgSrc = `img/${chosenImages}`;
body.style.backgroundImage = `url(${imgSrc})`;
