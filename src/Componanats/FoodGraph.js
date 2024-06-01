import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const FoodGraph = ({ categoryData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy existing chart if it exists
    }

    const ctx = document.getElementById('foodChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categoryData.map((item) => item.category),
        datasets: [{
          label: 'Number of Dishes',
          data: categoryData.map((item) => item.count),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      // Cleanup: Destroy the chart when the component unmounts
      chartRef.current.destroy();
    };
  }, [categoryData]);

  return (
    <div>
      <canvas id="foodChart" width="400" height="300"></canvas>
    </div>
  );
};

export default FoodGraph;
