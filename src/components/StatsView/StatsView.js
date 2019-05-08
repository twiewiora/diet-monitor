import React from 'react';

import CanvasJSReact from '../../canvasjs-2.3.1/canvasjs.react';


class StatsView extends React.Component {
    render() {
        const happinessChartOptions = {
            animationEnabled: true,
            title:{
                text: "Samopoczucie w ciągu dnia"
            },
            axisY : {
                title: "Wskaźnik zadowolnenia",
                includeZero: false,
                // labelFormatter: function() {
                //     return '<img src="http://highcharts.com/demo/gfx/sun.png" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>'+ this.value;
                // },
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Poziom zadowolenia",
                showInLegend: true,
                dataPoints: [
                    { y: 30, label: "0:00" },
                    { y: 30, label: "7:00" },
                    { y: 100, label: "12:00" },
                    { y: 100, label: "15:00" },
                    { y: 77, label: "17:00" },
                    { y: 66, label: "20:00" },
                    { y: 66, label: "23:00" },
                ]
            }]
        }

        const nutriChartOptions = {
            animationEnabled: true,
            title:{
                text: "Spożycie składników spożywczych w ciągu dnia"
            },
            axisX: {
                // valueFormatString: "DDD"
            },
            axisY: {
                // prefix: "$"
            },
            toolTip: {
                shared: true
            },
            legend:{
                cursor: "pointer",
                // itemclick: toggleDataSeries
            },
            data: [{
                type: "stackedBar",
                name: "Norma",
                showInLegend: "true",
                // xValueFormatString: "DD, MMM",
                // yValueFormatString: "$#,##0",
                dataPoints: [
                    { x: "Białka", y: 130 },
                    { x: "Tłuszcze", y: 95 },
                ]
            },
                {
                    type: "stackedBar",
                    name: "Pozwyżej normy",
                    showInLegend: "true",
                    // xValueFormatString: "DD, MMM",
                    // yValueFormatString: "$#,##0",
                    dataPoints: [
                        { x: "Białka", y: 150 },
                    ]
                },
            ]
        }

        return (
            <div>
                <CanvasJSReact.CanvasJSChart options = {happinessChartOptions}
                    /* onRef={ref => this.chart = ref} */
                />

                <CanvasJSReact.CanvasJSChart options = {nutriChartOptions}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default StatsView;