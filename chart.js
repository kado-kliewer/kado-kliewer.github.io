const chartContainer = document.getElementById('chart-container');
const popup = document.getElementById('popup');

// Initial data for the line chart
let data = {
    labels: ['2004', '2014', '2016', '2022', '2023', '2024'],
    datasets: [{
        label: 'Age',
        data: [0, 10, 12, 18, 19, 20],
        borderColor: '#201e20',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        fill: false
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true // Enable the tooltip plugin
            }
        },
        scales: {
            x: {
                type: 'category',
                labels: data.labels
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

chartContainer.addEventListener('mousemove', (event) => {
    const points = myChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);

    if (points.length > 0) {
        const point = points[0];
        const { x, y } = point.tooltipPosition();

        // Update popup content and position
        popup.innerHTML = `Value: ${point.raw}`;
        popup.style.left = `${chartContainer.offsetLeft + x}px`;
        popup.style.top = `${chartContainer.offsetTop + y}px`;

        // Show popup
        popup.style.display = 'block';
    } else {
        // Hide popup if no point is hovered
        popup.style.display = 'none';
    }
});

// Function to add more values to the chart
function addData(value, label) {
    data.labels.push(label);
    data.datasets[0].data.push(value);

    // Update chart
    myChart.update();
}

// Example: Add more data after a delay
setTimeout(() => {
    addData(35, '2025');
    addData(40, '2026');
}, 2000);