document.addEventListener("DOMContentLoaded", function () {
  const step1 = document.querySelector('.weather-first-step');
  const step2 = document.querySelector('.weather-second-step');
  let isWeatherStepVisible = true;

  function toggleSteps() {
    isWeatherStepVisible = !isWeatherStepVisible;
    step1.style.display = isWeatherStepVisible ? 'flex' : 'none';
    step2.style.display = isWeatherStepVisible ? 'none' : 'flex';
  }

  toggleSteps();

  setInterval(toggleSteps, 4000); 
});
