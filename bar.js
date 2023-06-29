(async function() {
    const products = [];
   
    for (let i = 1; i <= 10; i++) {
      const response = await fetch(`https://dummyjson.com/products/${i}`);
      const data = await response.json();
      products.push(data);
    }
 
    const labels = products.map(product => product.title);
    const prices = products.map(product => product.price);
 
    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Produkte',
        data: prices,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      }]
    };
 
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
 
    const chart = new Chart(
      document.getElementById('bar'),
      {
        type: 'bar',
        data: chartData,
        options: chartOptions
      }
    );
  })();
