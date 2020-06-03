<template>
	<div class="chart">
		<div ref="chart" style="width: 100%; height: 100%;"></div>
		<div class="labels" v-show="labels.length > 0">
			<div class="label" v-for="(item, index) in labels" :key="index">
				<input type="radio" :value="index" v-model="labelSelected" />
				<label :for="index">{{ item.label }}</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'chart',
		props: {
			option: {
				type: Object,
				default: () => {}
			},
			labels: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				chart: null,
				labelSelected: 0
			}
		},
		mounted() {
			this.chart = this.$chart.init(this.$refs.chart)
			this.chart.setOption(this.option)
		},
		watch: {
			labelSelected: function(index) {
				this.$emit('change', this.labels[index].value)
			},
			option: function(option) {
				this.chart.setOption(this.option)
			}
		}
	}
</script>

<style lang="less" scpoed>
	.chart {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.labels {
		width: 100%;
		height: 40px;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		.label {
			label {
				margin: 0 10px;
			}
		}
	}
</style>
