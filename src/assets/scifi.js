const container = document.querySelector('.container-gyro');
const gyro = document.querySelector('.gyro');
const sd = document.querySelector('.small-dash')
const bd = document.querySelector('.big-dash')

const smallDashs = [];
const bigDashs = [];

for (let i = 0; i < 57; i++) {
  smallDashs.push("<div class='vector shrink-40 outer-orbit dashed-small'></div>");
}

for (let i = 0; i < 18; i++) {
  bigDashs.push("<div class='vector shrink-40 outer-orbit dashed-big'></div>");
}

sd.innerHTML = smallDashs.join('');
bd.innerHTML = bigDashs.join('');



function handleMove(event) {
  if (event.type === 'touchmove') {
    event.preventDefault(); // Prevenir el scroll predeterminado
  }
  // Obtenemos las dimensiones del contenedor
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;

  // Determinamos las coordenadas dependiendo de si es un mouse o un toque
  let clientX, clientY;
  if (event.touches) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }

  // Calculamos la posición del mouse/touch relativa al contenedor
  const mouseX = clientX - containerRect.left;
  const mouseY = clientY - containerRect.top;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const distanceX = mouseX - centerX;
  const distanceY = mouseY - centerY;

  // Normalizamos las distancias al rango de -1 a 1
  const normalizedX = distanceX / centerX;
  const normalizedY = distanceY / centerY;

  // Aseguramos que los valores estén dentro del rango de -1 a 1
  const clampedX = Math.max(-1, Math.min(1, normalizedX));
  const clampedY = Math.max(-1, Math.min(1, normalizedY));

  // Mapeamos las distancias normalizadas al rango de -45 a +45 grados
  const rotateY = clampedX * 45; // Más lejos del centro, mayor el ángulo
  const rotateX = clampedY * -45; // Ahora se corrige el eje X para que sea consistente

  // Aplicamos el transform al elemento gyro
  gyro.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}


container.addEventListener('mousemove', handleMove);
container.addEventListener('touchmove', handleMove);
