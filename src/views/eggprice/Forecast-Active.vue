<template>
	<!--蛋价预测活动-->
	<div class="forecast-active price-forecast">
		<div class="row">
			<div class="triangle-right">

			</div>
			<div class="col-title">
				当前进度
			</div>
		</div>
		<div class="progress">
			<div class="items">
				<div class="item animated bounceInLeft" v-for="(prize,i) in prizes">
					<div class="box" :class="{'box-checked':(i==0&&success_num>=7)||(i==1&&success_num>=14)||(i==2&&success_num>=21)}">
						<img :src="prize.image" />
					</div>
					<div class="prizes" v-if="i<2">
						+{{ parseInt(prize.prizes) }}
					</div>
					<p>
						预测成功{{ prize.prizes_num }}次
					</p>
				</div>
			</div>
			<x-progress :percent="percent" :show-cancel="false"></x-progress>
		</div>
		<div class="line"></div>
		<div class="row">
			<div class="triangle-right">

			</div>
			<div class="col-title">
				奖品展示
			</div>
		</div>
		<div class="active-content mrl of">

			<div class="l left">
				<img :src="prizes[0].image" />
				<p><b>{{ prizes[0].prizes }}</b></p>
				<p>预测成功{{ prizes[0].prizes_num }}次</p>
			</div>

			<div class="r right">
				<div class="of">
					<img :src="prizes[1].image" class="l" />
					<div class="l">
						<p><b>{{ prizes[1].prizes }}</b></p>
						<p>预测成功{{ prizes[1].prizes_num }}次</p>
					</div>
				</div>
				<div class="of">
					<img :src="prizes[2].image" class="l" />
					<div class="l">
						<p><b>{{ prizes[2].prizes }}</b></p>
						<p>预测成功{{ prizes[2].prizes_num }}次</p>
					</div>
				</div>
			</div>

		</div>

		<div class="line"></div>

		<div class="row">
			<div class="triangle-right">

			</div>
			<div class="col-title">
				活动规则
			</div>
		</div>
		<div class="rule-text mrl">
			<!--<p>{{$store.state.forecast.rule}}</p>-->
			<p>
				当日中午12时—23时参与次日的蛋价涨跌预测，并根据当月的累计正确预测次数获得相应奖励，预测结果会在次日的进行公布，请进入预测查询页进行查看。达到领奖条件后即可点击领取奖励按钮获得奖励。
			</p>
		</div>
		<div class="forecast-btn theme-bg" @click="receive">
			领取奖励
		</div>
	</div>
</template>

<script>
	import { XProgress, XButton } from 'vux'
	import { prizesDisplay, progressBar, getGift } from '../../api/EggPrice'
	import { userAction } from "../../api/api"
	export default {
		components: {
			XProgress,
			XButton
		},
		data() {
			return {
				percent: 0,
				prizes: [{
					image: '',
					prizes: '',
					prizes_num: 0
				}, {
					image: '',
					prizes: '',
					prizes_num: 0
				}, {
					image: '',
					prizes: '',
					prizes_num: 0
				}],
				success_num: 0
			}
		},
		mounted() {
			this.$store.state.header.title = '蛋价预测活动';
			progressBar({
				ticket: localStorage.getItem('ticket')
			}).then(rs => {
				this.prizes = rs.data.goods;
				this.prizes_data = rs.data.data;
				//成功次数
				this.success_num = rs.data.num.num;
				//进度条的值
				this.percent = (parseInt(this.success_num / 23 * 100));
			})
			this.$wechat.ready(() => {
				var title = '蛋鸡管家 - 全球蛋鸡产业信息化平台';
				var link = 'https://m.danjiguanjia.com/#/p/forecast-active';
				var imgUrl = 'https://api.danjiguanjia.com/public/icon120.png';
				this.$wechat.onMenuShareTimeline({
					title: title,
					link: link,
					imgUrl: imgUrl
				});
				this.$wechat.onMenuShareAppMessage({
					title: title,
					desc: '关注蛋鸡管家,随时掌握最新行情信息!',
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
		},
		methods: {
			receive() {
				userAction({
					ticket: this.$store.state.ticket,
					module: 151421,
					cur_version: this.$store.state.cur_version
				})
				var s_num = this.success_num;
				if(s_num < 7) {
					this.$vux.toast.text('当前没有可领取的奖品,请多多预测吧!');
				} else {
					this.$vux.toast.text('当前没有可领取的奖品,请多多预测吧!');
				}
				//				else if(s_num >= 7 && s_num < 14 && this.prizes_data.status == 10001) {
				//					this.$vux.confirm.show({
				//						title: '您是否确认领取该礼品?',
				//						onCancel() {},
				//						onConfirm() {
				//							getGift({
				//								ticket: localStorage.getItem('ticket'),
				//								prize_id: 6,
				//								sign: 0
				//							}).then(res => {
				//								if(res.retcode == "2000") {
				//									this.$vux.toast.text("领取积蛋成功!");
				//									this.prizes_data.status == 10003;
				//								} else {
				//									this.$vux.toast.text('');
				//								}
				//							})
				//						}
				//					})
				//				} else if(s_num >= 14 && s_num < 21 && this.prizes_data.status == 10001) {
				//					this.$vux.confirm.show({
				//						title: '您是否确认领取该礼品?',
				//						onCancel() {},
				//						onConfirm() {
				//							getGift({
				//								ticket: localStorage.getItem('ticket'),
				//								prize_id: 7,
				//								sign: 0
				//							}).then(res => {
				//								if(res.retcode == "2000") {
				//									this.$vux.toast.text("领取积蛋成功!");
				//									this.prizes_data.status == 10003;
				//								} else {
				//									this.$vux.toast.text('');
				//								}
				//							})
				//						}
				//					})
				//				}else{
				//					this.$router.push()
				//				}
			}
		}
	}
</script>

<style lang="less">
	.forecast-active {
		margin: 0;
		.mrl,
		.row {
			margin: 15px;
		}
		.progress {
			position: relative;
			margin: 4vw 8vw;
			.items {
				width: 100%;
				position: relative;
				z-index: 2;
				&:after {
					content: "\0020";
					display: block;
					height: 0;
					clear: both;
				}
				.item {
					float: left;
					position: relative;
					width: 20vw;
					text-align: center;
					&:first-child {
						margin-left: 15%;
					}
					&:nth-child(2) {
						margin-left: 10%;
					}
					&:last-child {
						position: absolute;
						right: -6vw;
					}
					.prizes {
						position: absolute;
						top: 0;
						right: 5px;
						font-size: 12px;
						color: #57B663;
					}
					.box {
						width: 8vw;
						height: 8vw;
						margin: auto;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 10vw;
						background: #F9E2C8;
						img {
							width: 60%;
						}
					}
					.box-checked {
						background: #FF945D;
					}
					p {
						margin-top: 10px;
						white-space: nowrap;
					}
				}
			}
			.weui-progress {
				position: absolute;
				top: 4vw;
				z-index: 1;
				width: 100%;
				.weui-progress__bar {
					background: #F9E2C8;
					.weui-progress__inner-bar {
						background: #FF945D;
					}
				}
			}
		}
		.rule-text {
			margin-bottom: 60px;
		}
		.active-content {
			margin-top: 30px;
			.left {
				width: 40%;
				text-align: center;
				margin-top: 3vh;
				img {
					width: 40%;
					display: inline-block;
					margin-bottom: 15px;
				}
			}
			p {
				line-height: 20px;
			}
			.right {
				width: 59%;
				border-left: 1px solid #ddd;
				.of {
					margin-top: 15px;
					&:first-child {
						border-bottom: 1px solid #ddd;
						margin-bottom: 15px;
					}
				}
				img.l {
					width: 25%;
					margin: 0 15px;
					margin-bottom: 15px;
				}
			}
		}
	}
	
	.forecast-btn {
		height: 3rem;
		line-height: 3rem;
		color: #FFF;
		font-size: 1rem;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>