<template>
	<div class="seckill-goods-detail">
		<swiper v-model="banner_index" dots-position="center" :auto="true" :loop="true" :interval="1500" :aspect-ratio="750/800">
			<swiper-item class="banner-img" v-for="(item, index) in data.cover_big" :key="index">
				<img :src="item">
			</swiper-item>
		</swiper>

		<div class="goods-content">
			<h2 class="goods-title mb15">{{ data.goods_name }}</h2>
			<h4 class="mb15 slogan" v-show="stop_group">{{ data.slogan }}</h4>
			<h2 class="goods-price mb15">
				<p >
					当前价格：<span>￥{{ data.cur_price }}</span>
				</p>
			</h2>
			<h4 class="mb15 end-time">距离结束时间还剩：
				<span>{{ rTime.d|TimeText }}</span>：<span>{{ rTime.h|TimeText }}</span>：<span>{{ rTime.m|TimeText }}</span>：<span>{{ rTime.s|TimeText }}</span>
			</h4>
			<h4 class="mb15">当前参团人数： {{ data.cur_human }}人次 </h4>
			<h4 class="mb15">
				配送方式：
				<span v-for="(logi,index) in data.logistics_cost">{{ logi }} </span>
			</h4>

			<div class="section">
				<div class="title theme-color">
					发货说明
				</div>
				<div class="content">
					{{ data.goods_instructions }}
				</div>
			</div>

			<div class="section">
				<div class="title theme-color">
					联系方式
				</div>
				<div class="content">
					客服电话：{{ data.tel }}
				</div>
			</div>

			<div class="section">
				<div class="title theme-color">
					商品详情
				</div>
				<div class="content" v-html="data.detail">

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'
	import { goodsDetail } from '../../api/group'
	import { getWeixinSign } from '../../api/api'
	import config from '../../api/config'
	export default {
		components: {
			Swiper,
			SwiperItem
		},
		data() {
			return {
				data: '',
				banner_index: 0,
				rTime: {
					d: 0,
					h: 0,
					m: 0,
					s: 0
				},
				stop_group:true
			}
		},
		mounted() {
			this.$store.state.header.title = '团购商品';
			goodsDetail({
				good_id: this.$route.params.good_id
			}).then(rs => {
				this.data = rs.data;
				var t = this.data.remain_time;
				//console.log(this.data.remain_time);
				var ita = setInterval(()=> {
					if(t >= 0) {
						this.rTime.d = Math.floor(t / 60 / 60 / 24);
						this.rTime.h = Math.floor(t / 60 / 60 % 24);
						this.rTime.m = Math.floor(t / 60 % 60);
						this.rTime.s = Math.floor(t % 60);
					} else {
						clearInterval(ita);
						this.stop_group=false
					}
					t--;
				}, 1000);

				this.$wechat.ready(() => {
					var title 	 = rs.data.share_title;
					var url_link = config.web_url + '/#' + this.$route.path;
					var imgUrl 	 = rs.data.cover_big[0];
					this.$wechat.onMenuShareTimeline({
						title: 	title,
						link: 	url_link,
						imgUrl: imgUrl
					});
					this.$wechat.onMenuShareAppMessage({
						title: 	title,
						link: 	url_link,
						imgUrl: imgUrl
					});
					this.$wechat.onMenuShareQQ({
						title: 	title,
						link: 	url_link,
						imgUrl: imgUrl
					});
					this.$wechat.onMenuShareQZone({
						title: 	title,
						link: 	url_link,
						imgUrl: imgUrl
					});
				});
			})

			//alert(document.location.href);

		},
		watch: {

		},
		methods: {

		},
		filters: {
			TimeText: function(t) {
				return t >= 10 ? t : '0' + t;
			}
		}
	}
</script>

<style lang="less">
	h2,
	h4 {
		font-weight: normal;
	}
	.slogan{
		color: #1d70e4;
	}
	.seckill-goods-detail {
		.banner-img {
			img {
				width: 100%;
			}
		}
		.goods-content {
			margin: 15px;
			.mb15 {
				margin-bottom: 15px;
			}
			h4 {
				font-size: 14px;
			}
			.end-time {
				span {
					display: inline-block;
					background: #333333;
					padding: 5px;
					color: #FFFFFF;
					font-size: 14px;
				}
			}
			.section {
				margin: 15px 0;
				.title {
					margin-bottom: 10px;
					font-size: 16px;
				}
				.content {
					font-size: 14px;
					img {
						width: 100%;
					}
				}
			}
			.goods-title {
				font-size: 18px;
				/*font-weight:600;*/
			}
			.goods-price {
				color: #D0011B;
				span {
					font-size: 18px;
				}
				p {
					display: inline-block;
					font-size: 18px;
				}
				.real-price {
					margin-left: 15px;
					font-size: 16px;
					color: #B2B2B2;
					span {
						text-decoration: line-through;
					}
				}
			}
		}
	}
</style>