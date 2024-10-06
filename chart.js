<script>
  const ctx = document.getElementById('starChart').getContext('2d');

  const exoplanets = [
    { name: "51 Pegasi b", ra: 22.9577, dec: 20.7688 },
    { name: "HD 209458 b", ra: 22.0529, dec: 18.8843 },
    { name: "Kepler-452b", ra: 19.7335, dec: 44.2777 },
    { name: "Proxima Centauri b", ra: 14.4953, dec: -62.6795 },
    { name: "TRAPPIST-1e", ra: 23.1076, dec: -5.0414 }
  ];

  const labels = exoplanets.map(planet => planet.name);
  const raValues = exoplanets.map(planet => planet.ra);
  const decValues = exoplanets.map(planet => planet.dec);

  const starChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Exoplanets',
        data: exoplanets.map(planet => ({ x: planet.ra, y: planet.dec })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Right Ascension (RA)'
          },
          beginAtZero: true
        },
        y: {
          title: {
            display: true,
            text: 'Declination (Dec)'
          },
          beginAtZero: true
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              const planet = exoplanets[tooltipItem.dataIndex];
              return `${planet.name} (RA: ${planet.ra}, Dec: ${planet.dec})`;
            }
          }
        }
      }
    }
  });
</script>
