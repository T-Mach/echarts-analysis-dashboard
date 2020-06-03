const testData = {
	// 工控设备数据
	leftTop: {
		title: '工控设备',
		yData: [
			{ value: 392, name: 'DAM' },
			{ value: 123, name: 'SCADA' },
			{ value: 71, name: 'RUT' },
			{ value: 565, name: 'PLC' },
			{ value: 56, name: 'HMI' },
			{ value: 24, name: 'RPD' },
			{ value: 23, name: 'Communications Adapter' },
			{ value: 902, name: 'SDS' },
			{ value: 67, name: 'DCS_C' },
			{ value: 8, name: 'DTU' }
		]
	},

	// 中国工控设备的状况数据
	leftCenter: {
		title: '中国工控设备的状况',
		id: 'divLeftCenter',
		xData: ['SDS', 'PLC', 'DAM', 'SCADA', 'DCS_C', 'HMI', 'RTU', 'RPD', 'Communications Adapter'],
		yData: [988, 868, 452, 251, 86, 73, 70, 23, 22]
	},

	// 工控蜜罐地理分布图数据
	leftBottom: {
		title: '工控蜜罐地理分布图',
		xData: ['新北市', '高雄市', '台北市', '台南市', '云林县', '台中市', '苗栗县', '桃园市', '上海', '阜阳'],
		yData: [62, 39, 33, 21, 17, 14, 10, 9, 8, 8]
	},

	// 工控漏洞数据
	rightTop: {
		title: '工控漏洞',
		xData: ['访问控制不当', '任意文件上传', '密码加密算法弱', '弱密钥'],
		yData: [
			{ name: '未分类', value: 207 },
			{ name: '缓冲区错误', value: 73 },
			{ name: '信息泄露', value: 70 },
			{ name: '缓冲区边界操作限制不当', value: 69 },
			{ name: '输入验证不当', value: 60 },
			{ name: '跨站脚本', value: 42 },
			{ name: '路径遍历', value: 29 },
			{ name: '跨站请求伪造', value: 20 },
			{ name: '授权问题', value: 20 }
		]
	},

	// 中国工控设备漏洞状况数据
	rightCenter: {
		title: '中国工控设备漏洞状况',
		xData: ['危急', '高危', '中危'],
		yData: [26, 15, 4]
	},

	// 事件/告警数量趋势图数据
	centerCenter: (() => {
		const data = {
			title: '事件/告警数量趋势图',
			xData: [],
			yEventData: [],
			yAlarmData: []
		}
		return () => {
			data.xData.push(new Date().toLocaleTimeString())
			data.yEventData.push(Math.floor(Math.random() * 500))
			data.yAlarmData.push(Math.floor(Math.random() * 500))
			return data
		}
	})(),

	// 健康数值
	centerTopLeft: {
		value: 77
	},

	// 健康数值右侧数据
	centerTopCenter: {
		assets: 5203,
		honeypotNum: 367,
		loophole: 41
	},

	// 健康数值右侧数据2
	centerTopRight: {
		type: 18,
		brand: 23,
		model: 173,
		agreement: 22,
		loopholeType: 4,
		honeypotType: 1
	},

	selectData: {
		leftTop: [
			{
				value: 'typeLT',
				label: '设备类型分布'
			},
			{
				value: 'treatyLT',
				label: '设备协议分布'
			},
			{
				value: 'distributionLT',
				label: '厂商分布'
			}
		],
		leftCenter: [
			{
				value: 'typeLC',
				label: '设备类型分布'
			},
			{
				value: 'statisticsLC',
				label: '行业设备分布'
			},
			{
				value: 'distributionLC',
				label: '企业分布'
			}
		]
	},

	selectChooseData: {
		// 工控设备切换数据
		leftTop: {
			typeLT: {
				yData: [
					{ name: 'SDS', value: 977 },
					{ name: 'PLC', value: 815 },
					{ name: 'SCADA', value: 251 },
					{ name: 'DCS_C', value: 86 },
					{ name: 'RTU', value: 60 },
					{ name: 'RPD', value: 23 },
					{ name: 'Communications Adapter', value: 22 },
					{ name: 'CPIE', value: 8 },
					{ name: 'HMI', value: 7 }
				]
			},
			distributionLT: {
				yData: [
					{ name: 'moxa', value: 1027 },
					{ name: 'advantech', value: 247 },
					{ name: 'siemens', value: 241 },
					{ name: 'schneider', value: 234 },
					{ name: 'omron', value: 122 },
					{ name: 'allen-bradley', value: 111 },
					{ name: 'abb', value: 110 },
					{ name: 'rockwell', value: 73 },
					{ name: 'honeywell', value: 31 }
					// {name: "其他", value: 128}
				]
			},
			treatyLT: {
				yData: [
					{ name: 'telnet', value: 557 },
					{ name: 'moxanport', value: 466 },
					{ name: 'http', value: 309 },
					{ name: 'modbus', value: 264 },
					{ name: 's7', value: 218 },
					{ name: 'ethernetip', value: 185 },
					{ name: 'https', value: 151 },
					{ name: 'snmp', value: 49 },
					{ name: 'ftp', value: 46 }
					// {name: "其他", value: 91}
				]
			}
		},

		// 中国工控设备的状况切换数据
		leftCenter: {
			typeLC: {
				xData: ['SDS', 'PLC', 'DAM', 'SCADA', 'DCS_C', 'HMI', 'RTU', 'RPD', 'Communications Adapter'],
				yData: [988, 868, 452, 251, 86, 73, 70, 23, 22]
			},
			statisticsLC: {
				xData: ['能源', '交通', '汽车', '家电', '医疗', '银行', '自动化', '快递', '服务'],
				yData: [1383, 1366, 1166, 1037, 986, 969, 810, 428, 334]
			},
			distributionLC: {
				xData: ['机械', '交通', '汽车', '家电', '医疗', '银行', '餐饮', '快递', '服务'],
				yData: [163, 166, 156, 137, 126, 119, 110, 108, 104]
			}
		}
	},

	map: [
		{ name: '台湾', value: 400 },
		{ name: '香港', value: 226 },
		{ name: '黑龙江', value: 271 },
		{ name: '北京', value: 123 },
		{ name: '上海', value: 128 },
		{ name: '广东', value: 110 },
		{ name: '浙江', value: 119 },
		{ name: '江苏', value: 108 },
		{ name: '山东', value: 84 },
		{ name: '安徽', value: 51 },
		{ name: '辽宁', value: 50 },
		{ name: '河南', value: 29 },
		{ name: '内蒙古', value: 50 },
		{ name: '吉林', value: 40 },
		{ name: '四川', value: 24 },
		{ name: '湖北', value: 20 },
		{ name: '河北', value: 21 },
		{ name: '江西', value: 15 },
		{ name: '福建', value: 12 },
		{ name: '新疆', value: 14 },
		{ name: '天津', value: 9 },
		{ name: '宁夏', value: 10 },
		{ name: '山西', value: 16 },
		{ name: '重庆', value: 6 },
		{ name: '广西', value: 5 },
		{ name: '湖南', value: 6 },
		{ name: '青海', value: 4 },
		{ name: '云南', value: 4 },
		{ name: '澳门', value: 2 },
		{ name: '甘肃', value: 2 },
		{ name: '贵州', value: 2 },
		{ name: '陕西', value: 2 },
		{ name: '海南', value: 1 }
	],

	control: [
		{ name: '台湾', value: 3625 },
		{ name: '黑龙江', value: 271 },
		{ name: '香港', value: 226 },
		{ name: '上海', value: 128 },
		{ name: '北京', value: 123 },
		{ name: '浙江', value: 119 },
		{ name: '广东', value: 110 },
		{ name: '江苏', value: 108 },
		{ name: '山东', value: 84 },
		{ name: '安徽', value: 51 }
	],

	log: () =>
		new Date().toLocaleString() +
		[
			' 发现工控漏洞信息23条',
			' 新发现僵尸设备16个',
			' 新发现漏洞设备8个',
			' 新发现僵尸设备98个',
			' 新发现漏洞设备12个',
			' 新发现漏洞设备23个'
		][Math.floor(Math.random() * 6)] +
		'<br>'
}

export function getData(name, label) {
	const data = typeof testData[name] == 'function' ? testData[name]() : testData[name]
	if (label) {
		return Object.assign(data, testData.selectChooseData[name][label])
	} else {
		return data
	}
}

export function getLabels(name) {
	return testData.selectData[name]
}
