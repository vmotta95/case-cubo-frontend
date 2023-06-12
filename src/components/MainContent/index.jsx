
import React, { useEffect, useState, useRef } from "react";
import { ContainerDonutGraphic, ContainerMainContent, Table, TableCell, TableHead, TableHeaderCell, TableRow } from "./style";
import axios from "axios";
import { Chart } from 'chart.js/auto';

function MainContent() {
  const [users, setUsers] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  const getAllUsers = async () => {
    try {
      const result = await axios.get("https://vmotta-case-cubo-backend.onrender.com/users");
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
            backgroundColor: ['#36a2eb', '#fe6383', '#4ac0c0', '#ff9f40', ' #9966ff', '#ffcc56','#cacbcf','#5fc46d','#ff6383','#9ad3dc','#ffd35e' ], 
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
              position: 'right',
              labels: {
                font: {
                  size: 17, 
                  family: 'Arial',
                },
              },
            },
            title: {
              display: true,
              text: 'Participação dos Usuários',
              font: {
                size: 20, 
                family: 'Arial',
              },
            },
          },
        },
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
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Primeiro Nome</TableHeaderCell>
              <TableHeaderCell>Ultimo Nome</TableHeaderCell>
              <TableHeaderCell>Participação</TableHeaderCell>
            </TableRow>
          </TableHead>
          <tbody>
            {users.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.participation}%</TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ContainerDonutGraphic>
        <canvas ref={chartRef}></canvas>
      </ContainerDonutGraphic>
    </ContainerMainContent>
  );
}

export default MainContent;
