// PieChartCard.js
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import "../styles/pieChartStyle.css";

function PieChartCard() {

    let [value, setValue] = useState([44, 55, 41, 17, 15])




    const state = {
        series: value,
        options: {
            chart: {
                type: 'donut',
                height: 350,
            },
            colors: ['#FF4560', '#008FFB', '#00E396', '#775DD0', '#FEB019'],
            dataLabels: {
                enabled: true,
            },
            legend: {
                position: 'bottom',
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff'],
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    customScale: 1,
                    donut: {
                        size: '60%',
                        labels: {
                            show: true,
                            name: {
                                fontSize: '22px',
                                color: undefined,
                                offsetY: -10,
                            },
                            value: {
                                fontSize: '16px',
                                color: '#000',
                                formatter: (val) => {
                                    return `${val}%`;
                                },
                            },
                        },
                    },
                },
            },
            title: {
                text: '',
                align: 'center',
                style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                },
            },
        },
    };


    function callFun(e) {
        switch (e.target.value) {
            case "tromorrow":
                setValue([41, 17, 15, 40, 55])
                break;

            case "yesterday":
                setValue([70, 80, 40, 20, 5])
                break;
            default:
                setValue([44, 55, 41, 17, 15])
                break;
        }
    }


    return (
        <div className="py-2 bg-white px-3 rounded">
            <h5 className='py-2 fw-bold text-dark-gray'>Cases Graph</h5>
            <select className="form-select pie-chart-drop" onChange={callFun} aria-label="Default select example">
                <option value="today" selected>Today</option>
                <option value="tromorrow">Tomorrow</option>
                <option value="yesterday">Yesterday</option>
            </select>
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                height={250}
            />
        </div>
    );
}

export default PieChartCard;
