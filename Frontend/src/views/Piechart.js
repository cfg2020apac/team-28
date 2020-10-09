import React from "react";
// react plugin used to create charts
import { Pie } from "react-chartjs-2";
import Async from 'react-async';


  class Piechart extends React.Component {
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
                <Pie data={(canvas) => {
                return {
                labels: [
                    '10-19',
                    '20-29',
                    '30-39',
                    '40-49',
                    '50-59',
                    'Others',
                    ],
                datasets: [{
                data: temp,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    "#18ce0f",
                    "#f96332",
                    '#ff0000',
            ]
      }]
    }
    }}/>
              </>
            )
          }
      }
  }

  export default Piechart;