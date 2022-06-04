import * as Chartist from 'chartist'
let primary = localStorage.getItem('primary_color') || '#158df7';
let secondary = localStorage.getItem('secondary_color') || '#fb2e63';

export const bitcoinBtc = {
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
            curve: 'straight'
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
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        markers: {
            size: 6,
            strokeWidth: 3,
            strokeColor: primary,
            colors: ['#ffffff'],
            hover: {
                size: 7,
                sizeOffset: 3
            },
        },
        series: [{
            name: 'series1',
            data: [15, 15, 16, 15, 16, 16, 17, 17, 17, 19]
        }],
        colors: [primary],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.5,
                stops: [0, 100]
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        }
    },
}

export const litecoinLtc = {
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
            curve: 'straight'
        },
        xaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00"],
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
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        markers: {
            size: 6,
            strokeWidth: 3,
            strokeColor: secondary,
            colors: ['#ffffff'],
            hover: {
                size: 7,
                sizeOffset: 3
            },
        },

        series: [{
            name: 'series1',
            data: [15, 15, 17, 15, 19, 18, 18, 18, 16]
        }],
        colors: [secondary],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.4,
                stops: [0, 95, 100]
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        }
    }
}

export const ethereumEtc = {
    options:{
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
            curve: 'straight'
        },
        xaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00"],
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
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        markers: {
            size: 6,
            strokeWidth: 3,
            strokeColor: '#fb740d',
            colors: ['#ffffff'],
            hover: {
                size: 7,
                sizeOffset: 3
            },
        },
        series: [{
            name: 'series1',
            data: [15, 15, 17, 15, 19, 18, 18, 16]
        }],
        colors: ['#fb740d'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.4,
                stops: [0, 95, 100]
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        }
    }
}

export const candleStick = {
    options:{
        chart: {
            height: 385,
            type: 'candlestick',
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                top: 10,
                left: 0,
                blur: 8,
                opacity: 0.08,
                color: primary,
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: primary,
                    downward: secondary
                }
            }
        },
        series: [{
            data: [{
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6615, 6627.40, 6584.10, 6603.00]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            ]
        }],
        xaxis: {
            type: 'datetime',
            show: false,
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
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.2,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: '#f6f9fd',
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }
}

export const marketDepth = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    data: {
        series: [
            [10, 9.5, 7, 6.8, 6.8, 5, 4, 4.2, 3, 3.8, 3.7, 2.5, 2, 1, 0, null, null, null, null, null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 1, 2, 2.5, 2.4, 3.5, 5, 6, 6.2, 6.1, 6.8, 7.2, 8, 8.8, 9.5],
        ],
    },
    options: {
        fullWidth: !0,
        showArea: true,
        chartPadding: {
            left: -25,
            bottom: -23,
            right: 7,
            top: 15
        },
        low: 0,
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
        draw: function (data) {
            if (data.type === 'point') {
                var circle = new Chartist.Svg('circle', {
                    cx: [data.x], cy: [data.y], r: [5],
                }, 'ct-circle');
                data.element.replace(circle);
            }
        },
    },
}