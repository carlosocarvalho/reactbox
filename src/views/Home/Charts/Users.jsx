import React from "react";
import { Doughnut } from "react-chartjs-2";

import Components from '@coc/components';

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE3"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE3"]
    }
  ]
};

export default function User() {
  return (
      <Components.Card style={{
         
      }}>
      <Components.Card.Header>
          Hok
      </Components.Card.Header>
          <Components.Card.Body>
          <Doughnut data={data} />
          </Components.Card.Body>
      </Components.Card>
    
  );
}
