document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', function() {
      const name = this.dataset.name;
      const coordinates = this.dataset.coordinates;
      
      document.getElementById('planetName').innerText = `Planet: ${name}`;
      document.getElementById('planetCoordinates').innerText = `Coordinates: ${coordinates}`;
    });
  });
// Select all planets and the info panel elements
const planets = document.querySelectorAll('.planet');
const planetName = document.getElementById('planetName');
const planetCoordinates = document.getElementById('planetCoordinates');
const infoPanel = document.getElementById('infoPanel');

// Function to handle displaying planet information
planets.forEach(planet => {
    planet.addEventListener('click', () => {
        planetName.textContent = planet.dataset.name;
        planetCoordinates.textContent = planet.dataset.coordinates;
        infoPanel.style.display = 'block'; // Show the info panel
    });

    // Show tooltip on mouse enter
    planet.addEventListener('mouseenter', () => {
        const tooltip = planet.querySelector('.tooltip');
        tooltip.style.display = 'block'; // Show tooltip
    });

    // Hide tooltip on mouse leave
    planet.addEventListener('mouseleave', () => {
        const tooltip = planet.querySelector('.tooltip');
        tooltip.style.display = 'none'; // Hide tooltip
    });
});
document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const planetId = planet.id;
        let url;

        switch (planetId) {
            case 'planet1':
                url = '51-pegasi-b.html';
                break;
            case 'planet2':
                url = 'hd-209458-b.html';
                break;
            case 'planet3':
                url = 'kepler-452b.html';
                break;
            case 'planet4':
                url = 'proxima-centauri-b.html';
                break;
            case 'planet5':
                url = 'trappist-1e.html';
                break;
        }

        // Redirect to the planet detail page
        window.location.href = url;
    });
});
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetUrl = this.getAttribute('href'); // Get the target URL
        
        // Add fade-out class to body
        document.body.classList.add('fade-out');
        
        // Wait for the transition to finish before navigating
        setTimeout(() => {
          window.location.href = targetUrl; // Navigate to the target URL
        }, 500); // Match with CSS transition duration
      });
    });
  });
    