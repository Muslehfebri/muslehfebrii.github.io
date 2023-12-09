// script.js

// Contoh interaktivitas untuk Learn More button
const learnMoreButton = document.getElementById('learn-more-button');
const serviceDescription = document.getElementById('service-description');

learnMoreButton.addEventListener('click', () => {
  serviceDescription.classList.toggle('show-description');
});
