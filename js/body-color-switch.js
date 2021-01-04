const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
let isActive; 
let timer;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

btnStartRef.addEventListener('click', changeColorHandler);
btnStopRef.addEventListener('click', stopTimer);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function setBodyStyleHandler() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};

function changeColorHandler() {
  if (isActive) {
    return;
  };

  btnStartRef.disabled = true;

  isActive = true;
  setBodyStyleHandler();
  timer = setInterval(setBodyStyleHandler, 1000);
};

function stopTimer() {
  btnStartRef.disabled = false;
  isActive = false;
  clearInterval(timer);
};
