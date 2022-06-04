import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from 'node_modules/ng-apexcharts';
let primary = localStorage.getItem('primary_color') || '#158df7';
let secondary = localStorage.getItem('secondary_color') || '#fb2e63';

export interface Chart {
    type?: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}


export interface apexChart {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;

}

// Chart 1
export let chartBox: Chart = {
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
                    style: 'stroke-width: 3px'
                });
            }
        }
    }

};


export let chartBox1: Chart = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
        series: [
            [400, 900, 800, 1000, 700, 1200, 300],
            [1000, 500, 600, 400, 700, 200, 1100]
        ]
    }
};

export let chartBox2: Chart = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
        series: [
            [400, 600, 900, 800, 1000, 1200, 500],
            [1000, 800, 500, 600, 400, 200, 900]
        ]
    }
};
export let chartBox3: Chart = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
        series: [
            [600, 900, 600, 1000, 700, 500, 300],
            [300, 500, 800, 400, 700, 200, 1100]
        ]
    }
};
/* export const smallChartListener = {
    draw: function (data) {
        data.element.attr({
            style: 'stroke-width: 3px'
        });
    }
}; */

export let apex1 = {
    options: {
        chart: {
            height: 280,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25px'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 8,
            colors: ['transparent']
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    stroke: {
                        width: 5
                    },
                    chart: {
                        height: 200
                    }
                }
            },
            {
                breakpoint: 480,
                options: {
                    stroke: {
                        width: 1
                    }
                }
            },
            {
                breakpoint: 320,
                options: {
                    stroke: {
                        width: 1
                    }
                }
            }
        ],
        series: [{
            name: '<b>ICU</b> (intensive care unit)',
            data: [80, 45, 114, 20, 80, 40, 55, 40]
        }, {
            name: '<b>OPD</b> (out patient Department)',
            data: [35, 65, 80, 68, 60, 70, 20, 80]
        }],
        xaxis: {
            categories: [0],
            labels: {
                low: 0,
                offsetX: 0,
                show: false
            },
            axisBorder: {
                low: 0,
                offsetX: 0,
                show: false
            }
        },
        fill: {
            colors: [primary, secondary],
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.3,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        grid: {
            borderColor: "#f5f8fd",
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: true
                }

            }
        },
        yaxis: {
            labels: {
                style: {
                    color: '#6e7e96'
                }
            }
        },
        colors: [primary, secondary]
    }
};

export let apex2 = {
    options: {
        chart: {
            width: 140,
            height: 120,
            type: 'area',
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        series: [{
            name: 'series1',
            data: [15, 10, 14, 22, 18, 18.3, 10]
        }],
        colors: [secondary],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.2,
                stops: [0, 80, 100]
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    stroke: {
                        width: 5
                    },
                    chart: {
                        height: 200
                    }
                }
            },
            {
                breakpoint: 480,
                options: {
                    stroke: {
                        width: 1
                    }
                }
            },
            {
                breakpoint: 420,
                options: {
                    stroke: {
                        width: 1
                    }
                }
            }
        ],
    }
};


export const hospitalCurveChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
        [2, 2.4, 1.5, 2.7, 1, 2.3, 1.2],
        [2.3, 1.8, 2.2, 1.8, 3, 1.5, 2.2]
    ]
}

export const hospitalCurveChartOptions = {
    fullWidth: true,
    height: 180,
    low: 0,
    offset: 0,
    showArea: true,
    showPoint: false,
    chartPadding: {
        left: -22,
        right: 0,
        bottom: -12,
        top: 10
    },
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
    },
    responsive: [
        {
            breakpoint: 992,
            options: {
                stroke: {
                    width: 5
                },
                chart: {
                    height: 200
                }
            }
        },
        {
            breakpoint: 480,
            options: {
                stroke: {
                    width: 1
                }
            }
        },
        {
            breakpoint: 420,
            options: {
                stroke: {
                    width: 1
                }
            }
        }
    ],
}