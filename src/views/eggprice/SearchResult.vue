<template>
	<div class="search-result">
		<template v-if="type == 1">
			<div class="select-type">
				<button-tab v-model="mt_type">
					<button-tab-item v-for="(tab,key,index) in tabArr" :key="key">{{ tab }}</button-tab-item>
				</button-tab>
			</div>
			<div class="line"></div>
		</template>
		<h2 class="theme-color">{{$route.params.area}}地区{{ current_type.title }}价格</h2>
		<x-table :cell-bordered="false">
			<thead>
				<tr class="theme-bg">
					<th>地区</th>
					<th>{{ current_type.title }}价格{{ current_type.unit }}</th>
					<th>涨跌幅{{ current_type.unit }}</th>
				</tr>
			</thead>
			<tbody>
				<template v-for="(data,index) in data.search">
					<tr>
						<td>{{ data.name }}</td>
						<td>{{ data.price }}</td>
						<td><span :class="data.gains>0?'theme-color-red':'theme-color'" :style="{color:data.gains == 0?'#333':false}">{{ data.gains.toFixed(2) }}</span></td>
					</tr>
				</template>
			</tbody>
		</x-table>

		<template v-if="data.search.length == 0 ">
			<img src="https://api.danjiguanjia.com/public/image/sorry.png" class="empty-data" />
			<load-more tip="暂无数据" :show-loading="false" background-color="#fbf9fe"></load-more>
		</template>

		<template v-if="type == 0">
			<h2 class="theme-color">周边地区蛋价</h2>
			<x-table :cell-bordered="false">
				<thead>
					<tr class="theme-bg">
						<th>地区</th>
						<th>鸡蛋价格(元/斤)</th>
						<th>涨跌幅(元/斤)</th>
					</tr>
				</thead>
				<tbody>
					<template v-for="(data,index) in data.nearby">
						<tr>
							<td>{{ data.name }}</td>
							<td>{{ data.price }}</td>
							<td><span :class="data.gains>0?'theme-color-red':'theme-color'" :style="{color:data.gains == 0?'#333':false}">{{ data.gains.toFixed(2) }}</span></td>
						</tr>
					</template>
				</tbody>
			</x-table>
			<template v-if="data.nearby.length == 0">
				<img src="https://api.danjiguanjia.com/public/image/sorry.png" class="empty-data" />
				<load-more tip="暂无数据" :show-loading="false" background-color="#fbf9fe"></load-more>
			</template>
		</template>

		<p style="text-align: center;margin-top: 20px;">最后更新时间：{{ data.saveTime }}</p>
		<div class="bottom">
			<img src="https://api.danjiguanjia.com/public/image/code.png" />
			<p>
				了解更多价格，长按识别图中二维码下载蛋鸡管家APP ！
			</p>
		</div>

	</div>
</template>

<script>
	import { XTable, LoadMore, ButtonTab, ButtonTabItem } from 'vux';
	import { search, searchMaterial, searchCullchick } from '../../api/EggPrice'
	export default {
		components: {
			XTable,
			LoadMore,
			ButtonTab,
			ButtonTabItem
		},
		data() {
			return {
				data: [],
				tabArr: ['玉米', '豆粕'],
				type: 0,
				mt_type: 0,
				search_type: [{
					title: '鸡蛋',
					unit: '(元/斤)'
				}, {
					title: '原料',
					unit: '(元/吨)'
				}, {
					title: '淘汰鸡',
					unit: '(元/斤)'
				}],
				current_type: {
					title: '',
					unit: ''
				},
			}
		},
		watch: {
			'mt_type': 'init'
		},
		mounted() {
			this.$store.state.header.title = '查询结果';

			if(this.$route.query.type != undefined) {
				this.$store.state.header.is_show_header = true;
				this.type = this.$route.query.type;
			} else {
				this.type = this.$store.state.price_type;
			}

			var xheader = document.querySelector(".vux-header-title");
			xheader.classList.remove('title-after');
			//			if(this.$route.params.sear_type != undefined) {
			//				this.$store.state.header.is_show_header = true;
			//				this.type = this.$route.params.sear_type;
			//			} else {
			//				this.type = this.$store.state.price_type;
			//			}

			var ua = navigator.userAgent.toLowerCase();
			if(ua.indexOf('djgj_jn') > -1) {
				this.$store.state.header.is_show_header = false;
			}
			this.init();
		},
		methods: {
			init() {
				var d = new Date();
				var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				var type_detail = '';
				var links = 'https://m.danjiguanjia.com/#/p/search-result/' + this.$route.params.area + '?type=' + this.type
				this.current_type = this.search_type[this.type];
				if(this.type == 0) {
					this.$vux.loading.show({
					 text: 'Loading'
					})
					search({
						area: this.$route.params.area
					}).then(rs => {
						this.$store.state.header.title = '查询结果';
						this.data = rs.data;
						this.$vux.loading.hide()
					})
					type_detail = '鸡蛋'
				}

				//原料
				if(this.type == 1) {
					this.current_type.title = this.tabArr[this.mt_type];
					this.$vux.loading.show({
					 text: 'Loading'
					})
					searchMaterial({
						area: this.$route.params.area,
						type: this.mt_type + 1
					}).then(rs => {
						this.data = rs.data;
						this.$vux.loading.hide()
					})
					type_detail = '原料'
				}

				//淘汰鸡
				if(this.type == 2) {
					this.$vux.loading.show({
					 text: 'Loading'
					})
					searchCullchick({
						area: this.$route.params.area
					}).then(rs => {
						this.data = rs.data;
						this.$vux.loading.hide()
					})
					type_detail = '淘汰鸡'
				}
				this.$wechat.ready(() => {
					var title = str + this.$route.params.area + type_detail + '价格行情';
					if(isiOS){
						var link = window.location.href+'?type=' + this.type;
					}else{
						var link=links;
					}
					var imgUrl = 'https://api.danjiguanjia.com/public/icon120.png';
					this.$wechat.onMenuShareTimeline({
						title: title,
						link: link,
						imgUrl: imgUrl
					});
					this.$wechat.onMenuShareAppMessage({
						title: title,
						desc: '天天查价格,掌握最新价格行情信息',
						link: link,
						imgUrl: imgUrl
					});
					this.$wechat.onMenuShareQQ({
						title: title,
						link: link,
						imgUrl: imgUrl
					});
					this.$wechat.onMenuShareWeibo({
						title: title,
						link: link,
						imgUrl: imgUrl
					});
				});
				this.$store.state.search_type=this.type;
				
			}
		}
	}
</script>

<style lang="less">
	.search-result {
		h2.theme-color {
			text-align: center;
			margin: 20px 0;
			font-size: 18px;
		}
		.bottom {
			width: 50%;
			margin: 30px auto;
			text-align: center;
			font-size: 14px;
			img {
				width: 80%;
				display: block;
				margin: 10px auto;
				margin-top: 30px;
			}
		}
		.empty-data {
			display: block;
			margin: 0 auto;
			margin-top: 40px;
		}
	}
</style>