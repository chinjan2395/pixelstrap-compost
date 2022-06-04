import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

let primary = localStorage.getItem('primary_color') || '#158df7';
let secondary = localStorage.getItem('secondary_color') || '#fb2e63';

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

// Chart 1
export const chartBox1: Chart = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14', 'Q15', 'Q16'],
		series: [600, 400, 800, 1000, 600, 500, 1100, 1300, 1000, 800, 400, 600, 400, 350, 300]
	},
	options: {
		distributeSeries: true,
		chartPadding: {
			left: 5,
			bottom: 0,
			right: 0,
			top: 0,
		},
		low: 0,
		axisY: {
			labelInterpolationFnc: function (value) {
				return (value / 1000);
			}
		},
		axisX: {
			showLabel: false,
			showGrid: false,
			offset: 0
		}
	},
	events: {
		draw: (data) => {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 8px ; stroke-linecap: round'
				});
			}
		}
	}
};

// Chart 2

export var chartBox2Type = 'line';
export var chartBox2Labels: Array<any> = ["2009", "2010", "2011", "2012", "2013", "2014", "2015"];
export var chartBox2Data: any = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "sup"],
	datasets: [{
		label: "My first dataset",
		fillColor: 'transparent',
		// strokeColor: gradient,
		pointColor: "#fff",
		// pointStrokeColor: gradient,
		pointHighlightFill: "#fff",
		// pointHighlightStroke: gradient,
		data: [28, 45, 28, 55, 40, 60, 50, 80, 60]
	}]
}
export var chartBox2Options: any = {
	scaleShowGridLines: true,
	showScale: false,
	scaleGridLineColor: "rgba(0,0,0,.05)",
	scaleGridLineWidth: 1,
	scaleShowHorizontalLines: true,
	scaleShowVerticalLines: false,
	bezierCurve: true,
	bezierCurveTension: 0.4,
	pointDot: true,
	pointDotRadius: 6,
	pointDotStrokeWidth: 3,
	pointHitDetectionRadius: 30,
	datasetStroke: true,
	datasetStrokeWidth: 4,
	datasetFill: true,
	legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
export var chartBox2Colors: Array<any> = [{
	fill: false,
	borderColor: primary,
	borderWidth: 2.5,
	pointBackgroundColor: primary,
	pointBorderColor: primary
}];
export var chartBox2Legend = false;


export const chartBox2 = {
	type: 'Line',
	data: {
		series: [
			[28, 45, 28, 55, 40, 60, 50, 80, 60]
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
		created: (data) => {
			var defs = data.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradient2',
				x1: 1,
				y1: 1,
				x2: 0,
				y2: 0
			}).elem('stop', {
				offset: 0,
				'stop-color': primary
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': secondary
			});
		}
	}
};

// Chart 3
export const chartBox3: Chart = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
		series: [
			[100, 300, 500, 700, 600, 400, 300, 100, 300, 500, 700, 600, 400, 100]
		]
	},
	options: {
		scaleShowLabels: false,
		stackBars: true,
		height: 85,
		chartPadding: {
			left: 0,
			bottom: 0,
			right: 0,
			top: 5,
		},
		axisY: {
			showLabel: false,
			showGrid: false,
			offset: 0
		},
		axisX: {
			low: 0,
			showLabel: false,
			showGrid: false,
			offset: 0
		},
	},
	events: {
		draw: (data) => {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 10px ; stroke-linecap: round'
				});
			}
		}
	}
};

export const mapChart = {
	options: {
		chart: {
			height: 350,
			type: 'area',
			toolbar: {
				show: false
			},
		},
		series: [
			{
				name: "series1",
				data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100]
			},
			{
				name: "series2",
				data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41]
			}
		],
		yaxis: {
			show: false,
			showGrid: false,
		},
		dataLabels: {
			enabled: false
		},
		grid: {
			borderColor: '#f0f7fa',
			show: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			low: 0,
			offsetX: 0,
			offsetY: 0,
			showGrid: false,
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
		colors: [primary, secondary],
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.5,
				opacityTo: 0.4,
				stops: [0, 95, 100]
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
				breakpoint: 320,
				options: {
					stroke: {
						width: 1
					}
				}
			}
		],
	}
};


// smallChart
export var smallChart: Chart = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
		series: [
			[100, 200, 300, 350, 250]
		]
	},
	options: {
		stackBars: true,
		width: 50,
		height: 50,
		axisY: {
			low: 0,
			showGrid: false,
			showLabel: false,
			offset: 0
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
