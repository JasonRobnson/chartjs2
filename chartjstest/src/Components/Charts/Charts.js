 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';



 class Chart extends Component {

        static defaultProps = {
            displayTitle: true, 
            displayLegend: true,
            legendPosition: 'right'
        }
      render() {
        return (
            <div className="Chart">
                    <Bar
	                    data={this.props.chartData}
	                      options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Largest Cities In Massachausetts',
                                fontSize: 40
                            },
                            legend: {
                                display: this.props.displayLegend, 
                                position: this.props.legendPosition
                            }
                            
                         }}
                    />
            
            </div>
        )
      }
 }

 export default Chart