const mapContainer = document.getElementById('map');  // Yo, map container setup
const themeToggle = document.getElementById('theme-toggle');  // Theme switch button
let map;  // Map var

if (navigator.geolocation) {  // Check if user got location on
  navigator.geolocation.getCurrentPosition(  // Get user's loc
    (position) => {
      const { latitude, longitude } = position.coords;  // Get lat, lon

      // Set map to user location
      map = L.map('map').setView([latitude, longitude], 13);

      // OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Marker at user location
      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup('<b>You are here!</b>').openPopup();  // Popup yo

      // Click to add markers
      map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`You clicked at ${lat.toFixed(2)}, ${lng.toFixed(2)}`)
          .openPopup();
      });
    },
    () => {
      alert('Unable to retrieve your location. Please enable location services.');  // If geolocation fails
      fallbackMap();  // Load fallback map
    }
  );
} else {
  alert('Geolocation is not supported by your browser.');  // If geolocation isn’t supported
  fallbackMap();  // Load fallback map
}

// Fallback map if no location
function fallbackMap() {
  map = L.map('map').setView([51.505, -0.09], 13);  // Default loc (London)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);
}

// Toggle between light/dark modes
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = 'Switch to Light Mode';  // Change button text
    themeToggle.classList.add('dark');
    themeToggle.classList.remove('light');
  } else {
    themeToggle.textContent = 'Switch to Dark Mode';
    themeToggle.classList.add('light');
    themeToggle.classList.remove('dark');
  }
});

// Default theme setup
document.body.classList.add('light');
themeToggle.classList.add('light');
