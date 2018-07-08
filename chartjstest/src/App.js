import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/Charts';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chartData:{}
    }
  }

  //life cycle hook
  componentWillMount(){
    this.getChartData();
  }

  getChartData() {

    //Ajax calls here
    this.setState({
      chartData:{

        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford' ],

        datasets:[{

            label: 'Population',
            data: [
                617594,
                18000,
                15300,
                10600, 
                105300,
                95072
            ],
             backgroundColor: [
                'teal',
                'green',
                'orange',
                'red',
                'purple',
                'pink'
            ]
        }] 
      }
    })
  } 
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    
          <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
