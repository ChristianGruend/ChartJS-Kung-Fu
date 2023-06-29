(async function() {
    const response = await fetch('bubble.json');
    const bubbleData = await response.json();
  
    const data = {
      datasets: [{
        label: 'My First Dataset',
        data: bubbleData,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      }]
    };
  
  new Chart(
      document.getElementById('bubble'),
      {
        type: 'bubble',
        data: data,
        options: {
          scales: {
            x:{
              min:-10,
              max:100
            },
            y:{
              min:-10,
              max:100
            }
          }
        },
      }
  );
  })();
  