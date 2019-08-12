import React from 'react';

// import { Container } from './styles';
import Components from '@coc/components';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
  datasets: [
    {
      label: "Minha informação",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 125, 56, 55, 40]
    }
  ]
};


export default function Months() {
  return (
   
    <Components.Card>
    <Components.Card.Header>
      Meus meses
    </Components.Card.Header>
                <Components.Card.Body>
                  <Bar
                    data={data}
                    width={30}
                    height={155}
                    options={{ maintainAspectRatio: false }}
                  />
                </Components.Card.Body>
              </Components.Card>
  );
}
