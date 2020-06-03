const options = {
	leftTop: data => {
		return {
			title: {
				text: data.title,
				left: 'center',
				top: 10,
				textStyle: {
					color: '#fff'
				}
			},
			series: {
				type: 'pie',
				radius: [35, 55],
				center: ['50%', '50%'],
				data: data.yData,
				label: {
					show: true,
					color: '#fff',
					formatter: ({ name }) => name.replace(/\s/g, '\n')
				},
				labelLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				itemStyle: {
					color: ({ dataIndex }) =>
						[
							'#E5EEFD',
							'#C4D8FC',
							'#8FB7FB',
							'#508DFA',
							'#2873FA',
							'#1C5FD7',
							'#2051AE',
							'#1B4083'
						][dataIndex % 6]
				}
			}
		}
	},
	leftCenter: data => {
		return {
			title: {
				text: data.title,
				left: 'center',
				top: 10,
				textStyle: {
					color: '#fff'
				}
			},
			grid: {
				left: 15,
				right: 15,
				bottom: 40,
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: data.xData,
				axisLabel: {
					rotate: 30,
					interval: 0,
					color: '#fff',
					formatter: value => value.replace(/\s/g, '\n')
				}
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					color: '#fff'
				}
			},
			series: {
				type: 'bar',
				data: data.yData,
				barWidth: 20,
				itemStyle: {
					color: ({ dataIndex }) =>
						[
							'#E5EEFD',
							'#C4D8FC',
							'#8FB7FB',
							'#508DFA',
							'#2873FA',
							'#1C5FD7',
							'#2051AE',
							'#1B4083',
							'#1B4083',
							'#1B4083'
						][dataIndex]
				}
			}
		}
	},
	leftBottom: data => {
		return {
			title: {
				text: data.title,
				left: 'center',
				top: 10,
				textStyle: {
					color: '#fff'
				}
			},
			grid: {
				left: 15,
				right: 15,
				bottom: 40,
				containLabel: true
			},
			xAxis: {
				type: 'value',
				axisLabel: {
					rotate: 30,
					color: '#fff'
				}
			},
			yAxis: {
				type: 'category',
				data: data.xData,
				axisLabel: {
					interval: 0,
					color: '#fff'
				}
			},
			series: {
				type: 'bar',
				data: data.yData,
				itemStyle: {
					color: ({ dataIndex }) =>
						[
							'#E5EEFD',
							'#C4D8FC',
							'#8FB7FB',
							'#508DFA',
							'#2873FA',
							'#1C5FD7',
							'#2051AE',
							'#1B4083',
							'#1B4083',
							'#1B4083'
						][dataIndex]
				}
			}
		}
	},
	rightTop: data => {
		return {
			title: {
				text: data.title,
				left: 'center',
				top: 10,
				textStyle: {
					color: '#fff'
				}
			},
			series: {
				type: 'pie',
				radius: 55,
				center: ['50%', '50%'],
				data: data.yData,
				label: {
					show: true,
					color: '#fff',
					formatter: ({ name }) => [name.slice(0, 8), '\n', name.slice(8)].join('')
				},
				itemStyle: {
					color: ({ dataIndex }) =>
						[
							'#E5EEFD',
							'#C4D8FC',
							'#8FB7FB',
							'#508DFA',
							'#2873FA',
							'#1C5FD7',
							'#2051AE',
							'#1B4083'
						][dataIndex % 6]
				}
			}
		}
	},
	rightCenter: data => {
		return {
			title: {
				text: data.title,
				left: 'center',
				top: 10,
				textStyle: {
					color: '#fff'
				}
			},
			grid: {
				left: 15,
				right: 15,
				bottom: 40,
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: data.xData,
				axisLabel: {
					rotate: 30,
					interval: 0,
					color: '#fff'
				}
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					color: '#fff'
				}
			},
			series: {
				type: 'bar',
				data: data.yData,
				barWidth: 20,
				itemStyle: {
					color: ({ dataIndex }) =>
						[
							'#E5EEFD',
							'#C4D8FC',
							'#8FB7FB',
							'#508DFA',
							'#2873FA',
							'#1C5FD7',
							'#2051AE',
							'#1B4083',
							'#1B4083',
							'#1B4083'
						][dataIndex]
				}
			}
		}
	},
	centerCenter: data => {
		return {
			title: {
				text: data.title,
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},
			legend: {
				right: 100,
				data: ['事件数量', '告警数量'],
				textStyle: {
					color: '#fff'
				}
			},
			grid: {
				left: 15,
				right: 15,
				top: 40,
				bottom: 40,
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: data.xData,
				boundaryGap: false,
				splitLine: {
					show: true,
					lineStyle: {
						type: 'dashed'
					}
				},
				axisLabel: {
					color: '#fff'
				}
			},
			yAxis: {
				type: 'value',
				interval: 50,
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				},
				axisLabel: {
					color: '#fff'
				}
			},
			series: [
				{
					name: '事件数量',
					type: 'line',
					lineStyle: {
						color: '#c23531'
					},
					areaStyle: {
						color: '#c23531'
					},
					data: data.yEventData
				},
				{
					name: '告警数量',
					type: 'line',
					lineStyle: {
						color: '#2f4554'
					},
					areaStyle: {
						color: '#2f4554'
					},
					data: data.yAlarmData
				}
			]
		}
	},
	centerTopLeft: data => {
		return {
			series: {
				type: 'gauge',
				radius: 60,
				center: ['50%', '50%'],
				axisLine: {
					lineStyle: {
						width: 25,
						color: [
							[0.5, '#DD3F36'],
							[0.7, '#FAE521'],
							[1, '#37B70C']
						]
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					distance: 0,
					fontSize: 10,
					color: '#fff'
				},
				itemStyle: {
					color: '#fff'
				},
				detail: {
					offsetCenter: ['0%', '80%'],
					color: '#fff',
					fontSize: 14,
					formatter: value => (value > 70 ? '健康' : '不健康')
				},
				data: [data]
			}
		}
	}
}

export function getChartOption(name, data) {
	return options[name](data)
}
