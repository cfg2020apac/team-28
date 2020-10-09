import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import Async from 'react-async';

import {
    dashboardPanelChart,
  } from "variables/charts.js";

  class Activeuserlinechart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isLoaded: false, };
      }
      async componentDidMount() {
        fetch(`http://localhost:3004/data`)
            .then(res => {
            res.text().then(jsonString => {
            console.log(JSON.parse(jsonString));
            this.setState({data: JSON.parse(jsonString), isLoaded:true})
      })
    })
      }
      render(){
          var {isLoaded, items} = this.state;

          if (!isLoaded){
            console.log(items);
              return <div>Loading...</div>;
          }
          else{
                var temp = this.state.data;
              console.log(items);

            return(
              <>
                <Line data={(canvas) => {
                const ctx = canvas.getContext("2d");
                var chartColor = "#FFFFFF";
                var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
                gradientStroke.addColorStop(0, "#80b6f4");
                gradientStroke.addColorStop(1, chartColor);
                var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
                gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
                gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");
            
                return {
                  labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                  ],
                  datasets: [
                    {
                      label: "Active Users",
                      borderColor: chartColor,
                      pointBorderColor: chartColor,
                      pointBackgroundColor: "#2c2c2c",
                      pointHoverBackgroundColor: "#2c2c2c",
                      pointHoverBorderColor: chartColor,
                      pointBorderWidth: 1,
                      pointHoverRadius: 7,
                      pointHoverBorderWidth: 2,
                      pointRadius: 5,
                      fill: true,
                      backgroundColor: gradientFill,
                      borderWidth: 2,
                      data: temp,
                    },
                  ],
                };
              }}
              options={dashboardPanelChart.options}
            />
              </>
            )
          }
      }
  }

  export default Activeuserlinechart;