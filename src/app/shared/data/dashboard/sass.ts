let primary = localStorage.getItem('primary_color') || '#158df7';
let secondary = localStorage.getItem('secondary_color') || '#fb2e63';

export const sassSmallChart1 = {
    type: 'Bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
        series: [
            [200, 400, 300, 100, 250]
        ]
    }
}

export let chartBox = {
    type: 'Bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
        series: [
            [400, 900, 800, 1000, 700, 1200, 300],
            [1000, 500, 600, 400, 700, 200, 1100]
        ]
    },
    options: {
        stackBars: true,
        height: 75,
        axisY: {
            low: 0,
            showGrid: false,
            showLabel: false,
            offset: 0,
            scaleMinSpace: 40
        },
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
        }
    },
    events: {
        draw: (data) => {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 2px'
                });
            }
        }
    }

};

export const sassUserChart = {
    type: "Bar",
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
        series: [
            [300, 600, 500, 800, 500, 400, 650, 650, 650, 900, 300, 600, 300],
            [400, 200, 100, 100, 300, 200, 50, 200, 50, null, 100, 200, 400]
        ]
    }
}
export const sassUserChartOptions = {
    stackBars: true,
    fullWidth: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}
export const sassUserChartListener = {
    draw: function (ctx) {
        if (ctx.type === 'bar') {
            ctx.element.attr({
                x1: ctx.x1 + 0.05,
                style: 'stroke-width: 10px ; stroke-linecap: round'
            });
        }
    },
    created: function (ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(234, 57, 103, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(255, 79, 96, 1)'
        });
    }
}


export const apexRadialChart = {
    options: {
        labels: ['Profit', 'Loss'],
        colors: ['#158df7', '#fb2e63'],
        chart: {
            height: 360,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '40%',
                },
                dataLabels: {
                    name: {
                        fontSize: '28px',
                    },
                    value: {
                        fontSize: '20px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 75
                        }
                    }
                },
            }
        },
        stroke: {
            lineCap: "round"
        },
    },
    series: [80, 20]
}

export const areaSpaline = {
    options: {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#f0f7fa',
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
            name: 'series1',
            data: [50, 45, 55, 50, 60, 56, 58, 50, 65, 60, 50, 60, 52, 55, 52]
        }],

        xaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            type: 'datetime',
            labels: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisTicks: {
                show: false,
            },
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00", "2018-09-19T12:30:00", "2018-09-19T13:30:00", "2018-09-19T14:30:00"],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        colors: ['#2bd175'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.4,
                stops: [0, 95, 100]
            }
        }
    }
}

export const shipmentMapChart = {
    series: [44, 55],
    chart: {
        height: 280,
        type: "radialBar"
    },
    colors: [primary, secondary],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: "22px"
                },
                value: {
                    fontSize: "16px"
                },
                total: {
                    show: true,
                    label: "Total",
                    formatter: function (w) {
                        return "249";
                    }
                }
            }
        }
    },
    labels: ['Near', 'Far']
};