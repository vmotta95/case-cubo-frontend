
import React, { useEffect, useState, useRef } from "react";
import { ContainerMainContent } from "./style";
import axios from "axios";
import { Chart } from 'chart.js/auto';

function MainContent() {
  const [users, setUsers] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  const getAllUsers = async () => {
    try {
      const result = await axios.get("http://localhost:3003/users");
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []); 

  useEffect(() => {
    if (users.length > 0) {
      const labels = users.map(user => user.first_name);
      const values = users.map(user => user.participation);

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Participação',
            data: values,
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'], // Defina as cores conforme necessário
          }
        ]
      };

      const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Participação dos Usuários'
            }
          }
        }
      };

      if (chartInstance) {
        chartInstance.destroy();
      }

      const newChartInstance = new Chart(chartRef.current, config);
      setChartInstance(newChartInstance);
    }
  }, [users]);

  return (
    <ContainerMainContent>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Primeiro Nome</th>
              <th>Ultimo Nome</th>
              <th>Participacao</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.participation}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </ContainerMainContent>
  );
}

export default MainContent;
