//Beispiellink
//https://www.chartjs.org/docs/latest/charts/scatter.html
//Ohne den wahrscheinlich nicht machbar

(async function () {
  const data = [
    // HIER DIE DATEN REINSCHREIBEN
    { x: 20, y: 30 },
    { x: 50, y: 15 },
    { x: 22, y: 35 },
    { x: 45, y: 15 },
    { x: 28, y: 35 },
    { x: 49, y: 18 },
    { x: 20, y: 30 },
    { x: 40, y: 10 },
    { x: 60, y: 50 },
    { x: 80, y: 20 },
    { x: 100, y: 70 },
    { x: 120, y: 40 },
    { x: 140, y: 90 },
    { x: 160, y: 60 },
    { x: 180, y: 30 },
    { x: 200, y: 80 }
    // Weitere Datenpunkte hier hinzufügen
  ];


  new Chart(
    document.getElementById('scatter'),
    {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    }
  );
})();
