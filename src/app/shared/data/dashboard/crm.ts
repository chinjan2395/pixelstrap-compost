import * as Chartist from 'chartist';
let primary = localStorage.getItem('primary_color') || '#158df7';
let secondary = localStorage.getItem('secondary_color') || '#fb2e63';

export const graphRounded = {
    type: 'Bar',
    data: {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        series: [[75, 150, 220, 280, 220, 150, 75, 150, 220, 280, 220, 75]]
    }
}
export const graphRoundedOptions = {
    height: 350,
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
        right: 0,
        left: 0,
        bottom: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisX: {
        showGrid: false,
        showLabel: false,
        limitPointsLabels: false,
        low: 0,
        offset: 0
    }
}
export const graphRoundedListener = {
    draw: function (data) {
        if (data.type === "bar") {
            data.element.attr({
                style: "stroke: #5354ff ; stroke-width: 15px ; stroke-linecap: flat;"
            });
        }
    }
}

export const lineAreaFullChart = {
    type: 'Line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        series: [
            [2, 1, 1.2, 0.8, 2, 1.5, 2.5, 1.3, 3, 2]
        ]
    }
}
export const lineAreaFullChartOptions = {
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
    height: 195,
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
        right: 0,
        left: 0,
        bottom: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisX: {
        showGrid: false,
        showLabel: false,
        limitPointsLabels: false,
        low: 0,
        offset: 0
    },
    created: function (data) {
        var defs = data.svg.elem('defs');

        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 1,
            y1: 1,
            x2: 0,
            y2: 1
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 244, 248, 1)'
        }).parent().elem('stop', {
            offset: 0.2,
            'stop-color': 'rgba(255, 101, 141, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(255, 41, 96, 1)'
        });
    }
}
export const lineAreaFullChartListener = {
    created: function (data) {
        var defs = data.svg.elem('defs');

        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 1,
            y1: 1,
            x2: 0,
            y2: 1
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 244, 248, 1)'
        }).parent().elem('stop', {
            offset: 0.2,
            'stop-color': 'rgba(255, 101, 141, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(255, 41, 96, 1)'
        });
    }
}

export const apexTotalUsers = {
    options: {
        chart: {
            height: 205,
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
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00"],
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
            data: [10, 25, 15, 16, 10, 14, 28, 18, 19, 16]
        }],
        colors: ['#8a4eff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }
}

export const crmSmallChart = {
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
            },
        }
    }
}

export const doneProjectChart = {
    options: {
        chart: {
            height: 205,
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
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00"],
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
            data: [15, 10, 18, 17, 26, 18, 22, 18, 19, 16]
        }],
        colors: ['#fc6a0d'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }
}

export const projectIncome = {
    type: 'Line',
    data: {
        series: [
            [5, 0, 15, 0, 5, 0, 10, 0]

        ],
    },
    chartPadding: {
        left: 5,
        bottom: 0,
        right: 0,
        top: 0,
    },
    low: 0,
    options: {
        axisX: {
            showGrid: false,
            showLabel: false
        },
        axisY: {
            showGrid: false,
            showLabel: false
        },
    },
    events: {
        created: (data) => {
            const defs = data.svg.elem('defs');
            defs.elem('linearGradient', {
                id: 'gradient1',
                x1: 1,
                y1: 1,
                x2: 0,
                y2: 0
            }).elem('stop', {
                offset: 0,
                'stop-color': 'rgb(85, 77, 255)'
            }).parent().elem('stop', {
                offset: 1,
                'stop-color': 'rgb(64, 200, 255)'
            });
        },
        draw: (e) => {
            if ("point" === e.type) {
                var t = new Chartist.Svg("circle", {
                    cx: e.x,
                    cy: e.y,
                    class: "circle-point",
                    r: 5,
                });
                e.element.replace(t)
            }
        },
    }
}
export const newProject = {
    type: 'Line',
    data: {
        series: [
            [5, 0, 15, 0, 5, 0, 10, 0]

        ],
    },
    chartPadding: {
        left: 5,
        bottom: 0,
        right: 0,
        top: 0,
    },
    low: 0,
    fullWidth: true,
    options: {
        axisX: {
            showGrid: false,
            showLabel: false
        },
        axisY: {
            showGrid: false,
            showLabel: false
        },
    },
    events: {
        draw: (e) => {
            if ("point" === e.type) {
                var t = new Chartist.Svg("circle", {
                    cx: e.x,
                    cy: e.y,
                    class: "circle-point",
                    r: 5,
                });
                e.element.replace(t)
            }
        },
    }
}



export const slideData = [
    {
        type: 'primary',
        class: 'ui-user',
        text: 'User'
    },
    {
        type: 'secondary',
        class: 'social-google-map',
        text: 'Map'
    },
    {
        type: 'success',
        class: 'verification-check',
        text: 'Done'
    },
    {
        type: 'warning',
        class: 'paper-plane',
        text: 'Delivery'
    },
    {
        type: 'info',
        class: 'pie',
        text: 'Chart'
    },
    {
        type: 'primary',
        class: 'chat',
        text: 'Comment'
    },
    {
        type: 'secondary',
        class: 'ebook',
        text: 'Article'
    },
    {
        type: 'success',
        class: 'repair',
        text: 'Support'
    },
];