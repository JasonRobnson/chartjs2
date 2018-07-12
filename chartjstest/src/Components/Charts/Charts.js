 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';
 import './Charts.css';



 class Chart extends Component {

        constructor(props) {
            super(props);
            this.state = {
                chartData:{

                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford' ],
            
                    datasets:[{
            
                        label: '# of cups Water/Food/Excercise',
                        data: [
                            617594,
                            18000,
                            15300,
                            10600, 
                            805300,
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
                    }],
                    options: {
                        title: {
                            display: false, 
                        },
                         legend: {
                                display: true,
                                position: 'bottom',
                            
                         },
                         maintainAspectRatio: true
                        }
                    } 
                }
            };
        
      
      render() {
        return (
            <div className="Chart">
                    <Bar
	                    data={this.state.chartData}
	                      options={{
                            title: {
                                display: this.state.chartData,
                                text: 'Largest Cities In Massachausetts',
                                fontSize: 40
                            }
                            
                         }}
                    />
            
            </div>
        )
    }
}
      

 export default Chart