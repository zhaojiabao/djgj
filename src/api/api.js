import axios from 'axios';
import http from './config';
import qs from 'qs';

let base = http.base_url;
let base2 = http.test_url;
let config = {
	headers: {
		'Content-Type': 'multipart/form-data'
	}
};
/*
 微信分享
 * 
 * */
export const getWeixinSign = params => {
	return axios.get(`https://api.danjiguanjia.com/index/index/getWeixinSign`, {
		params: params
	}).then(res => res.data);
};
//给咨询详情页添加接口
export const getNewsDetailNum = params => {
	return axios.get(`https://api.danjiguanjia.com/v4/news/getNewsMsg`, {
		params: params
	}).then(res => res.data);
};
/*
 资讯相关接口
 * 
 * 
 * */
let news = '/v4/news';
//首页banner
export const indexBanner = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/news/getBanner`, params).then(res => res.data);
};
//首页新闻列表
export const indexNews = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/news/getRedlineTopNew`, {
		params: params
	}).then(res => res.data);
};
//资讯分类
export const newsType = params => {
	return axios.get(`${base}${news}/getType`, params).then(res => res.data);
};
//资讯分类列表
export const newsData = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/news/getNews`, {
		params: params
	}).then(res => res.data);
};

function getNewsDetails(params) {
	return axios.get(`${base}${news}/getNewsDetail`, {
		params: params
	});
}

function getNewsMsg(params) {
	return axios.get(`${base}${news}/getNewsMsg`, {
		params: params
	});
}

//资讯详情
export const getNewsDetail = params => {
	return axios.all([getNewsDetails(params), getNewsMsg(params)]).then(axios.spread((news, msg) => {
		console.log(news)
	}))
};

//资讯详情  新版的
export const newsDetail = params => {
//	return axios.get(`https://api.danjiguanjia.com/v4/news/viewDetail`, {
	return axios.get(`${base}${news}/getNewsDetail`, {
		params: params
	}).then(res => res.data);
};

//获取资讯阅读https://api.danjiguanjia.com/v4/news/getNewsMsg/id/3961/ticket/
export const newsDetailParams = params => {
	return axios.get(`${base}${news}/getNewsMsg`, {
		params: params
	}).then(res => res.data);
};

//获取资讯点击和分类数据
export const newsMsg = params => {
	return axios.get(`${base}${news}/getNewsMsg`, {
		params: params
	}).then(res => res.data);
};

let info = '/v4/message';
//消息类型
export const infoMessage = params => {
	return axios.get(`${base2}${info}/message_type`, {
		params: params
	}).then(res => res.data);
};
//消息列表
export const messageList = params => {
	return axios.get(`${base2}${info}/message_list`, {
		params: params
	}).then(res => res.data);
};
//未读消息数  message_not_read
export const unReadNum = params => {
	return axios.get(`${base2}${info}/message_not_read`, {
		params: params
	}).then(res => res.data);
};
let pro = '/v4/Pro'

//消息确认
export const infoSure = params => {
	return axios.get(`${base2}${pro}/addUser`, {
		params: params
	}).then(res => res.data);
};

/**
 管家视界相关接口
 * 
 */
let video = '/v5/video';
//养殖课堂列表
export const videoBreedList = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/breed_video_new`, {
		params: params
	}).then(res => res.data);
};
//管家视界的首页banner
export const videoBanner = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/getBanner`, params).then(res => res.data);
};
//视频详情
export const videoDetail = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/getVideo_new`, {
		params: params
	}).then(res => res.data);
};

//走进鸡场列表
export const videoChickList = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/chick_new`, params).then(res => res.data);
};
//金牌讲师列表
export const videoTeacherList = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/teacher_new`, params).then(res => res.data);
};
//获取讲师详情
export const getOneTeachVideo = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/getOneTeachVideo`, {
		params: params
	}).then(res => res.data);
};
//获取评论列表
export const commentList = params => {
	return axios.get(`${base}/v5/video/getCommentV5`, {
		params: params
	}).then(res => res.data);
};
//export const commentList = params => {
//	let param = new FormData(); //创建form对象	
//	param.append('teach_id', params.teach_id);
//	param.append('v_id', params.v_id);
//	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Video/getCommentV5`, param, config).then(res => res.data);
//};

//添加评论
//export const videoAddComment = params => {
//	return axios.get(`${base}${video}/addComment`, {
//		params: params
//	}).then(res => res.data);
//};
export const submitComment = params => {
	let param = new FormData(); //创建form对象	
	//	param.append('to_comment_id', params.to_comment_id);
	param.append('ticket', params.ticket);
	param.append('content', params.content);
	param.append('teach_id', params.teach_id);
	param.append('v_id', params.v_id);
	return axios.post(`${base}/v3/video/addCommentV5`, param, config).then(res => res.data);
};

//获取热门推荐数据
export const videoHot = params => {
	return axios.get(`https://api.rls.danjiguanjia.com/api/v1/video/getHot_new`, {
		params: params
	}).then(res => res.data);
};
/*
 用户相关接口
 * */
let user = '/v4/user';
let rls = 'https://api.rls.danjiguanjia.com/api/'
//用户登录
export const userLogin = params => {
	let param = new FormData(); //创建form对象	
	param.append('user_name', params.user_name);
	param.append('user_pwd', params.user_pwd);
	return axios.post(`${rls}v1/user/login`, param, config).then(res => res.data);
};

//获取用户信息
export const userInfo = params => {
	return axios.get(`${base}${user}/getUserInfo`, {
		params: params
	}).then(res => res.data);
};
//用户积分
export const userScore = params => {
	return axios.get(`${base}/v1/score/getScores`, {
		params: params
	}).then(res => res.data);
};
//用户注册
//export const register = params => {
//	return axios.get(`${base}${user}/register`, {
//		params: params
//	}).then(res => res.data);
//};
export const register = params => {
	let param = new FormData(); //创建form对象	
	param.append('user_name', params.user_name);
	param.append('user_pwd', params.user_pwd);
	param.append('code', params.code);
	return axios.post(`${rls}v1/user/register`, param, config).then(res => res.data);
};
//用户找回密码
export const forgetPassword = params => {
	return axios.get(`${base}${user}/forgetPassword`, {
		params: params
	}).then(res => res.data);
};
//export const forgetPassword = params => {
//	let param = new FormData(); //创建form对象	
//	param.append('phone', params.phone);
//	return axios.post(`${base}${user}/forgetPassword`, param, config).then(res => res.data);
//};

let code = '/v1/code';
//用户获取验证码
//export const getCode = params => {
//	return axios.get(`${rls}v1/user/sendVerCode`, {
//		params: params
//	}).then(res => res.data);
//};
export const getCode = params => {
	let param = new FormData(); //创建form对象	
	param.append('phone', params.phone);
	return axios.post(`${rls}v1/user/sendVerCode`, param, config).then(res => res.data);
};


/*
 生产效益管理
 *
 * 
 * */
let product = '/v4/production';
let Product = '/v4/Production';

//栋舍详情
export const batchDetail = params => {
	return axios.get(`${base}${product}/batchDetail`, {
		params: params
	}).then(res => res.data);
};
//我的鸡场权限
export const isMyChicket = params => {
	return axios.get(`https://api.danjiguanjia.com/v4/Pro/isMyChicket`, {
		params: params
	}).then(res => res.data);
};
//获取鸡场操作
export const getBene = params => {
	return axios.get(`${base}${product}/getBeneAction`, {
		params: params
	}).then(res => res.data);
};
//获取栋舍
export const getBatch = params => {
	return axios.get(`${base}${product}/getBatch`, {
		params: params
	}).then(res => res.data);
};
//获取首页栋舍
export const getIndexBatch = params => {
	return axios.get(`${base}${product}/getIndexBatch`, {
		params: params
	}).then(res => res.data);
};

//获取鸡的品种
export const getVariety = params => {
	return axios.get(`${base}${product}/variety`, {
		params: params
	}).then(res => res.data);
};

//编辑栋舍
export const editBatch = params => {
	return axios.get(`${base}${product}/editBatch`, {
		params: params
	}).then(res => res.data);
};
//查看日成本报表
export const ChengList = params => {
	return axios.get(`${base}${Product}/ChengList`, {
		params: params
	}).then(res => res.data);
};
//查看周成本报表
export const weekMoney = params => {
	return axios.get(`${base}${Product}/weekMoney`, {
		params: params
	}).then(res => res.data);
};
//查看周成本报表
export const week = params => {
	return axios.get(`${base}${Product}/week`, {
		params: params
	}).then(res => res.data);
};
//查看历史单号
export const historyNumber = params => {
	return axios.get(`${base}${Product}/history_number`, {
		params: params
	}).then(res => res.data);
};
//查看整体数据
export const getTotal = params => {
	return axios.get(`${base}${Product}/getTotal`, {
		params: params
	}).then(res => res.data);
};
//查看日生产报表
export const getDayBene = params => {
	return axios.get(`${base}${Product}/getBene`, {
		params: params
	}).then(res => res.data);
};
//查看日其他数据
export const getExtraList = params => {
	return axios.get(`${base}${Product}/getExtraList`, {
		params: params
	}).then(res => res.data);
};
//录入数据之前
export const getOneBatch = params => {
	return axios.get(`${base}${product}/getOneBatch`, {
		params: params
	}).then(res => res.data);
};
//录入生产数据
export const addBene = params => {
	return axios.get(`${base}${product}/addBene`, {
		params: params
	}).then(res => res.data);
};
//录入成本数据
export const addCheng = params => {
	return axios.get(`${base}${product}/addCheng`, {
		params: params
	}).then(res => res.data);
};
//录入其他报表数据
export const getExtraDatas = params => {
	return axios.get(`${base}${product}/getExtraDatas`, {
		params: params
	}).then(res => res.data);
};
//淘汰鸡
export const delChicket = params => {
	return axios.get(`${base}${product}/delChicket`, {
		params: params
	}).then(res => res.data);
};
//进鸡
export const addChicket = params => {
	return axios.get(`${base}${product}/addChicket`, {
		params: params
	}).then(res => res.data);
};
//转出栋舍选择
export const selectBatch = params => {
	return axios.get(`${base}${product}/selectBatch`, {
		params: params
	}).then(res => res.data);
};
//转栋
export const migrate = params => {
	return axios.get(`${base}${product}/migrate`, {
		params: params
	}).then(res => res.data);
};

//人员权限管理
export const listUser = params => {
	return axios.get(`${base}${product}/listUser`, {
		params: params
	}).then(res => res.data);
};
//新增人员
export const addUser = params => {
	return axios.get(`${base}${product}/addUser`, {
		params: params
	}).then(res => res.data);
};
//移除人员
export const delUser = params => {
	return axios.get(`${base}${product}/delUser`, {
		params: params
	}).then(res => res.data);
};
//获取用户权限
export const getBatchUserRule = params => {
	return axios.get(`${base}${product}/getBatchUserRule`, {
		params: params
	}).then(res => res.data);
};
//编辑权限
export const editUserRule = params => {
	return axios.get(`${base}${product}/editUserRule`, {
		params: params
	}).then(res => res.data);
};
//曲线
export const profit = params => {
	return axios.get(`${base}${product}/profit`, {
		params: params
	}).then(res => res.data);
};
//利润曲线
export const proChart = params => {
	return axios.get(`${base}${product}/pro`, {
		params: params
	}).then(res => res.data);
};

/**
 * 论坛相关接口
 * //2159
 */
let forums = '/v6/community';

//帖子详情页
//export const postDetail = params => {
//	return axios.get(`${base}${forums}/detail`, {
//		params: params
//	}).then(res => res.data);
//};
export const postDetail	 = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	param.append('page', params.page);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/detail`, param, config).then(res => res.data);
};
/**
 * 个人中心商务合作上传数据
 * 
 */
let company = '/webapi/company';
export const submitCompanyInfo = params => {
	return axios.post(`${base}${company}/addInfoData`, params, config).then(res => res.data);
};
//上传产品信息
export const submitProductInfo = params => {
	let param = new FormData(); //创建form对象
	let pro_name = [];
	var pro_pics = [];
	for(var i = 0; i < params.products.length; i++) {
		pro_name.push(params.products[i].pro_name);
		pro_pics.push(params.products[i].pro_pics);
	}
	param.append('pro_name', pro_name);
	param.append('pro_pics', pro_pics);
	param.append('cid', params.cid);

	return axios.post(`${base}${company}/addProductData`, param, config).then(res => res.data);
};

/**
 * 获取七牛上传签名
 * 
 */
export const getQiniuSign = params => {
	return axios.get(`${base}/index/index/getQiniuSign`).then(res => res.data);
};

// 上传图片
export const uploadImg = params => {
	let file = params.file.target.files[0];
	let param = new FormData(); //创建form对象
	param.append('chunk', '0'); //断点传输
	param.append('chunks', '1');
	param.append('file', file, file.name)
	param.append('token', params.token);
	return axios.post(`https://up-z1.qbox.me`, param, config).then(res => res.data);
};

export const forumsDetail = params => {
	return axios.get(`${base}${forums}/detail`, {
		params: params
	}).then(res => res.data);
};
//帖子列表
//export const forumsList = params => {
//	return axios.get(`${base}${forums}/postedList`, {
//		params: params
//	}).then(res => res.data);
//};
//新版帖子列表
export const forumsList = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('type', params.type);
	param.append('page', params.page);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/postedList`, param, config).then(res => res.data);
};
////圈子列表
//export const circleList = params => {
//	return axios.get(`${base}${forums}/circleList`, {
//		params: params
//	}).then(res => res.data);
//};
//新版圈子列表
export const circleList = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/circleList`, param, config).then(res => res.data);
};
//圈子下的帖子列表以及圈子详情
export const circleDetail = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('circle_id', params.circle_id);
	param.append('page', params.page);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/circleDetail`, param, config).then(res => res.data);
};
//我的论坛
//export const myForumList = params => {
//	return axios.get(`${base}${forums}/discuss`, {
//		params: params
//	}).then(res => res.data);
//};
export const myForumList = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('type', params.type);
	param.append('page', params.page);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/discuss`, param, config).then(res => res.data);
};
//我的消息
export const myMessage = params => {
	return axios.get(`${base}${forums}/message`, {
		params: params
	}).then(res => res.data);
};
//发帖
export const submitPost = params => {
	let param = new FormData(); //创建form对象	
	param.append('title', params.title);
	param.append('content', params.content);
	param.append('type', params.type);
	param.append('ticket', params.ticket);
	param.append('tag_id', params.tag_id.join(','));
	param.append('circle_id', params.circle_id);
	param.append('sign', params.sign);
	param.append('prize_scores', params.prize_scores);
	if(params.h5_img.length > 0) param.append('h5_img', params.h5_img.join(','));
	//	if(params.cover.length >0)param.append('cover', params.cover.join(','));
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/community/posted`, param, config).then(res => res.data);
};
//回帖
export const replayPost = params => {
	let param = new FormData(); //创建form对象	
	param.append('to_commit_id', params.to_commit_id);
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	param.append('sign', params.sign);
	param.append('content', params.content);
	return axios.post(`${base}/v4/community/comment`, param, config).then(res => res.data);
};

//获取标签
export const myTag = params => {
	return axios.get(`${base}/v6/Community/community_tag`, {
		params: params
	}).then(res => res.data);
};
//收藏帖子
export const favoritePost = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/addFavorite`, param, config).then(res => res.data);
};
//取消收藏帖子
export const delFavoritePost = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/delFavorite`, param, config).then(res => res.data);
};
//取消帖子点赞
export const unlikeCommunity = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/unlikeCommunity`, param, config).then(res => res.data);
};
//对帖子点赞
export const likeCommunity = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/likeCommunity`, param, config).then(res => res.data);
};
//收藏新闻
export const addNewsCollect = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('news_id', params.news_id);
	return axios.post(`${base}/v4/Search/addNewsCollect`, param, config).then(res => res.data);
};
//取消收藏新闻
export const delNewsCollect = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('news_id', params.news_id);
	return axios.post(`${base}/v4/Search/delNewsCollect`, param, config).then(res => res.data);
};
//对文章点赞
export const addArticlePraise = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('news_id', params.news_id);
	return axios.post(`${base}/v4/Search/addArticlePraise`, param, config).then(res => res.data);
};
//取消文章点赞
export const delArticlePraise = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('news_id', params.news_id);
	return axios.post(`${base}/v4/Search/delArticlePraise`, param, config).then(res => res.data);
};
//关注好友
export const addFriend = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('friend_id', params.friend_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/addFriend`, param, config).then(res => res.data);
};
//取消关注好友
export const delFriend = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('friend_id', params.friend_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/delFriend`, param, config).then(res => res.data);
};
//添加举报
export const addReport = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('type', params.type);
	param.append('community_id', params.community_id);
	param.append('reason', params.reason);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/addReport`, param, config).then(res => res.data);
};
//取消举报
export const cancleReport = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('type', params.type);
	param.append('community_id', params.community_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/cancleReport`, param, config).then(res => res.data);
};
//删除帖子
export const delCommunity = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/delCommunity`, param, config).then(res => res.data);
};
//删除评论
export const delComment = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('community_id', params.community_id);
	param.append('comment_id', params.comment_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/delComment`, param, config).then(res => res.data);
};

//加入圈子
export const circleJoin = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('circle_id', params.circle_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/circleJoin`, param, config).then(res => res.data);
};

//退出圈子circleDel
export const circleDel = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('circle_id', params.circle_id);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/circleDel`, param, config).then(res => res.data);
};
//绑定手机
//export const bindPhone = params => {
//	let param = new FormData(); //创建form对象	
//	param.append('mobile', params.mobile);
//	param.append('code', params.code);
//	param.append('mid', params.mid);
//	return axios.post(`${base}/v6/Useraction/memberThirdParty`, param, config).then(res => res.data);
//};
export const bindPhone = params => {
	return axios.get(`${base}/v6/Useraction/memberThirdParty`, {
		params: params
	}).then(res => res.data);
};
//验证码
//export const identifyingCodes = params => {
//	return axios.get(`${rls}v1/user/sendVerCodes`, {
//		params: params
//	}).then(res => res.data);
//};
export const identifyingCodes = params => {
	let param = new FormData(); //创建form对象	
	param.append('phone', params.phone);
	return axios.post(`${rls}v1/user/sendVerCodes`, param, config).then(res => res.data);
};

//用户行为统计https://api.danji.jianong.com/v1/total/mbAction   
//export const userAction = params => {
//	return axios.get(`${base}/v1/total/mbAction`, {
//		params: params
//	}).then(res => res.data);
//};
export const userAction = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('module', params.module);
	param.append('cur_version', params.cur_version);
	return axios.post(`https://data.danjiguanjia.com/api/v1/insertUserAction`, param, config).then(res => res.data);
};
//创建圈子
export const circleCreate = params => {
	let param = new FormData(); //创建form对象	
	param.append('ticket', params.ticket);
	param.append('creator', params.creator);
	param.append('name', params.name);
	param.append('info', params.info);
	param.append('image', params.image);
	return axios.post(`https://api.rls.danjiguanjia.com/api/v1/Community/circleCreate`, param, config).then(res => res.data);
};
