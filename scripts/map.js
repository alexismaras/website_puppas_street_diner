document.addEventListener('DOMContentLoaded', function() {
   const map = L.map('map').setView([49.129144, 10.696510], 15); // Coordinates and zoom
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([49.129144, 10.696510]).addTo(map)
        .bindPopup('Our Location')
        .openPopup();
  });