var http = 'https://data.danjiguanjia.com/da_api/v1/';
// 地图城市经纬度
var placeList={"北京":[116.405289,39.904987],"天津":[117.190186,39.125595],"石家庄":[114.502464,38.045475],"唐山":[118.175392,39.635113],"秦皇岛":[119.586578,39.942532],"邯郸":[114.490685,36.612274],"邢台":[114.50885,37.068199],"保定":[115.48233,38.867657],"张家口":[114.884094,40.811901],"承德":[117.939156,40.976204],"沧州":[116.85746,38.310581],"廊坊":[116.704437,39.523926],"衡水":[115.665993,37.735096],"太原":[112.549248,37.857014],"大同":[113.295258,40.090309],"阳泉":[113.583282,37.861187],"长治":[113.113556,36.191113],"晋城":[112.851273,35.497555],"朔州":[112.433388,39.331261],"晋中":[112.736465,37.696495],"运城":[111.00396,35.022778],"忻州":[112.733536,38.41769],"临汾":[111.517975,36.084148],"吕梁":[111.134338,37.524364],"呼和浩特":[111.670799,40.81831],"包头":[109.840408,40.658169],"乌海":[106.825562,39.673733],"赤峰":[118.956802,42.275318],"通辽":[122.263123,43.617428],"鄂尔多斯":[109.990288,39.817181],"呼伦贝尔":[119.758171,49.215332],"巴彦淖尔":[107.416962,40.757401],"乌兰察布":[113.11454,41.034126],"兴安":[122.07032,46.076267],"锡林郭勒":[116.090996,43.944019],"阿拉善":[105.706421,38.844814],"沈阳":[123.429092,41.796768],"大连":[121.618622,38.914589],"鞍山":[122.995628,41.110626],"抚顺":[123.921112,41.875957],"本溪":[123.770515,41.297909],"丹东":[124.383041,40.124294],"锦州":[121.135742,41.11927],"营口":[122.235153,40.667431],"阜新":[121.648964,42.011795],"辽阳":[123.181519,41.269402],"盘锦":[122.069572,41.124485],"铁岭":[123.844276,42.290585],"朝阳":[120.45118,41.576759],"葫芦岛":[120.856392,40.755573],"长春":[125.324501,43.886841],"吉林":[126.553017,43.843578],"四平":[124.370789,43.170345],"辽源":[125.145348,42.902691],"通化":[125.936501,41.721176],"白山":[126.427841,41.942505],"松原":[124.823608,45.118244],"白城":[122.84111,45.619026],"延边朝鲜族":[129.513229,42.904823],"哈尔滨":[126.642464,45.756966],"齐齐哈尔":[123.957916,47.342079],"鸡西":[130.975967,45.300045],"鹤岗":[130.277481,47.332085],"双鸭山":[131.157303,46.64344],"大庆":[125.112717,46.590733],"伊春":[128.899399,47.724773],"佳木斯":[130.361633,46.809605],"七台河":[131.015579,45.771267],"牡丹江":[129.618607,44.582962],"黑河":[127.499023,50.249584],"绥化":[126.992928,46.637394],"大兴安岭":[124.711525,52.335262],"上海":[121.472641,31.231707],"南京":[118.76741,32.041546],"无锡":[120.301666,31.57473],"徐州":[117.184814,34.261791],"常州":[119.946976,31.772753],"苏州":[120.619583,31.299379],"南通":[120.864609,32.016212],"连云港":[119.178818,34.600018],"淮安":[119.021263,33.597507],"盐城":[120.139999,33.377632],"扬州":[119.421005,32.393158],"镇江":[119.452751,32.204403],"泰州":[119.915176,32.484882],"宿迁":[118.275162,33.963009],"杭州":[120.15358,30.287458],"宁波":[121.549789,29.868387],"温州":[120.672112,28.000574],"嘉兴":[120.750862,30.762653],"湖州":[120.102402,30.867199],"绍兴":[120.582115,29.997116],"金华":[119.649506,29.089523],"衢州":[118.872627,28.941708],"舟山":[122.106865,30.016027],"台州":[121.428596,28.661379],"丽水":[119.921783,28.451994],"合肥":[117.283043,31.861191],"芜湖":[118.37645,31.326319],"蚌埠":[117.363228,32.939667],"淮南":[117.018326,32.647575],"马鞍山":[118.507904,31.689362],"淮北":[116.794662,33.971706],"铜陵":[117.816574,30.929935],"安庆":[117.043549,30.508829],"黄山":[118.317322,29.709238],"滁州":[118.316261,32.303627],"阜阳":[115.819733,32.896969],"宿州":[116.984085,33.633892],"六安":[116.507675,31.75289],"亳州":[115.782936,33.869339],"池州":[117.489159,30.656036],"宣城":[118.757996,30.945667],"福州":[119.306236,26.075302],"厦门":[118.110222,24.490475],"莆田":[119.007561,25.431011],"三明":[117.635002,26.265444],"泉州":[118.589424,24.908854],"漳州":[117.661804,24.510897],"南平":[118.178459,26.635628],"龙岩":[117.029778,25.091602],"宁德":[119.527084,26.659241],"南昌":[115.892151,28.676493],"景德镇":[117.214661,29.292561],"萍乡":[113.852188,27.622946],"九江":[115.992813,29.712034],"新余":[114.930832,27.810835],"鹰潭":[117.033836,28.238638],"赣州":[114.940277,25.850969],"吉安":[114.986374,27.111698],"宜春":[114.391136,27.8043],"抚州":[116.358353,27.98385],"上饶":[117.971184,28.44442],"济南":[117.000923,36.675808],"青岛":[120.355171,36.082981],"淄博":[118.047646,36.814938],"枣庄":[117.557961,34.856422],"东营":[118.664711,37.434563],"烟台":[121.39138,37.539295],"潍坊":[119.107079,36.709251],"济宁":[116.587242,35.415394],"泰安":[117.129066,36.194969],"威海":[122.116394,37.509689],"日照":[119.461205,35.428589],"莱芜":[117.677734,36.214397],"临沂":[118.326447,35.065281],"德州":[116.307426,37.453968],"聊城":[115.98037,36.456013],"滨州":[118.016975,37.383541],"菏泽":[115.469383,35.246532],"郑州":[113.665413,34.757977],"开封":[114.341446,34.79705],"洛阳":[112.434471,34.66304],"平顶山":[113.307716,33.735241],"安阳":[114.352486,36.103443],"鹤壁":[114.295441,35.748238],"新乡":[113.883987,35.302616],"焦作":[113.238266,35.23904],"济源":[112.59005,35.090378],"濮阳":[115.041298,35.768234],"许昌":[113.826065,34.022957],"漯河":[114.026405,33.575855],"三门峡":[111.194099,34.777336],"南阳":[112.540916,32.999081],"商丘":[115.650497,34.437054],"信阳":[114.075027,32.123276],"周口":[114.649651,33.620358],"驻马店":[114.024734,32.980167],"武汉":[114.298569,30.584354],"黄石":[115.077049,30.220074],"十堰":[110.787918,32.646908],"宜昌":[111.29084,30.702637],"襄阳":[112.14415,32.042427],"鄂州":[114.890594,30.396536],"荆门":[112.204254,31.035419],"孝感":[113.926659,30.926422],"荆州":[112.238129,30.326857],"黄冈":[114.879364,30.447712],"咸宁":[114.328964,29.832798],"随州":[113.373772,31.717497],"恩施":[109.486992,30.283113],"仙桃":[113.453972,30.364952],"潜江":[112.896866,30.421215],"天门":[113.165863,30.653061],"神农架":[114.298569,30.584354],"长沙":[112.982277,28.19409],"株洲":[113.151733,27.835806],"湘潭":[112.944054,27.829729],"衡阳":[112.607697,26.900358],"邵阳":[111.469231,27.237843],"岳阳":[113.132858,29.370291],"常德":[111.691345,29.040224],"张家界":[110.479919,29.127401],"益阳":[112.355042,28.570066],"郴州":[113.032066,25.793589],"永州":[111.608017,26.434517],"怀化":[109.978241,27.550081],"娄底":[112.008499,27.728136],"湘西":[109.739738,28.314297],"广州":[113.28064,23.125177],"韶关":[113.591545,24.801323],"深圳":[114.085945,22.547001],"珠海":[113.553986,22.224979],"汕头":[116.708466,23.371019],"佛山":[113.122719,23.028763],"江门":[113.09494,22.590431],"湛江":[110.364975,21.274899],"茂名":[110.919228,21.659752],"肇庆":[112.472527,23.051546],"惠州":[114.412598,23.079405],"梅州":[116.117584,24.299112],"汕尾":[115.364235,22.774485],"河源":[114.6978,23.746265],"阳江":[111.975105,21.859222],"清远":[113.051224,23.685022],"东莞":[113.746262,23.046238],"中山":[113.382393,22.521112],"东沙":[112.552948,21.810463],"潮州":[116.632301,23.661701],"揭阳":[116.355736,23.543777],"云浮":[112.044441,22.929802],"南宁":[108.320007,22.82402],"柳州":[109.411705,24.314617],"桂林":[110.299118,25.274216],"梧州":[111.297607,23.474804],"北海":[109.119255,21.473343],"防城港":[108.345474,21.614632],"钦州":[108.624176,21.967127],"贵港":[109.602142,23.093599],"玉林":[110.154396,22.631359],"百色":[106.616287,23.897741],"贺州":[111.552055,24.414141],"河池":[108.062103,24.695898],"来宾":[109.229774,23.733767],"崇左":[107.353928,22.404108],"海口":[110.331192,20.031971],"三亚":[109.50827,18.247871],"三沙":[112.348824,16.831039],"五指山":[109.516663,18.77692],"琼海":[110.466782,19.246012],"儋州":[109.576782,19.517487],"文昌":[110.753975,19.612986],"万宁":[110.388794,18.796215],"东方":[108.653786,19.10198],"定安":[110.349236,19.684965],"屯昌":[110.102776,19.362917],"澄迈":[110.007149,19.737095],"临高":[109.687698,19.908293],"白沙":[109.452606,19.224585],"昌江":[109.053352,19.260967],"乐东":[109.175446,18.74758],"陵水":[110.037216,18.505007],"保亭":[109.702454,18.636372],"琼中":[109.839996,19.03557],"重庆":[106.504959,29.533155],"成都":[104.065735,30.659462],"自贡":[104.773445,29.352764],"攀枝花":[101.716003,26.580446],"泸州":[105.443352,28.889137],"德阳":[104.398651,31.127991],"绵阳":[104.741722,31.46402],"广元":[105.829758,32.433666],"遂宁":[105.571327,30.513311],"内江":[105.066139,29.58708],"乐山":[103.761261,29.582024],"南充":[106.082977,30.79528],"眉山":[103.831787,30.048319],"宜宾":[104.630821,28.760189],"广安":[106.633369,30.456398],"达州":[107.502258,31.209484],"雅安":[103.00103,29.987722],"巴中":[106.75367,31.858809],"资阳":[104.641914,30.122211],"阿坝":[102.221375,31.899792],"甘孜":[101.963814,30.050663],"凉山":[102.258743,27.886763],"贵阳":[106.713478,26.578342],"六盘水":[104.846741,26.584642],"遵义":[106.937263,27.706627],"安顺":[105.93219,26.245544],"铜仁":[109.191551,27.718346],"黔西南":[104.897972,25.08812],"毕节":[105.285011,27.301693],"黔东南":[107.977486,26.583351],"黔南":[107.517159,26.258219],"昆明":[102.71225,25.040609],"曲靖":[103.797852,25.501556],"玉溪":[102.543907,24.35046],"保山":[99.16713,25.111801],"昭通":[103.717216,27.337],"丽江":[100.233025,26.872108],"普洱":[100.972343,22.777321],"临沧":[100.086967,23.886566],"楚雄":[101.546043,25.041988],"红河":[103.384186,23.366776],"文山":[104.244011,23.369511],"西双版纳":[100.797943,22.001724],"大理":[100.22567,25.589449],"德宏":[98.578362,24.436693],"怒江":[98.854301,25.850948],"迪庆":[99.706467,27.826853],"拉萨":[91.13221,29.66036],"昌都":[97.178452,31.136875],"山南":[91.766525,29.236023],"日喀则":[88.885147,29.267519],"那曲":[92.060211,31.476004],"阿里":[80.105499,32.503185],"林芝":[94.36235,29.654694],"西安":[108.948021,34.263161],"铜川":[108.979607,34.91658],"宝鸡":[107.144867,34.369316],"咸阳":[108.705116,34.333439],"渭南":[109.502884,34.499382],"延安":[109.490807,36.596539],"汉中":[107.028618,33.077667],"榆林":[109.741196,38.290161],"安康":[109.029274,32.6903],"商洛":[109.939774,33.86832],"兰州":[103.823555,36.058041],"嘉峪关":[98.277306,39.78653],"金昌":[102.187889,38.514236],"白银":[104.173607,36.545681],"天水":[105.724998,34.578529],"武威":[102.634697,37.929996],"张掖":[100.455475,38.932896],"平凉":[106.684692,35.542789],"酒泉":[98.510796,39.744022],"庆阳":[107.638374,35.734219],"定西":[104.626297,35.579578],"陇南":[104.929382,33.388599],"临夏":[103.212006,35.599445],"甘南":[102.911011,34.986355],"西宁":[101.778915,36.623177],"海东":[102.103271,36.502914],"海北":[100.901062,36.959435],"黄南":[102.019989,35.517742],"海南藏族":[100.619545,36.280354],"果洛":[100.242142,34.473598],"玉树":[97.008522,33.004047],"海西":[97.370789,37.374664],"银川":[106.278175,38.46637],"石嘴山":[106.376175,39.013329],"吴忠":[106.199409,37.986164],"固原":[106.28524,36.004562],"中卫":[105.189568,37.51495],"乌鲁木齐":[87.617729,43.792816],"克拉玛依":[84.873947,45.595886],"吐鲁番":[89.184074,42.947613],"哈密":[93.513161,42.833248],"昌吉":[87.304008,44.014576],"博尔塔拉":[82.074776,44.903259],"巴音郭楞":[86.15097,41.768551],"阿克苏":[80.265068,41.170712],"克孜勒苏柯尔克孜":[76.172829,39.713432],"喀什":[75.989136,39.467663],"和田":[79.925331,37.110687],"伊犁":[81.317947,43.92186],"塔城":[82.985733,46.7463],"阿勒泰":[88.139633,47.848392],"石河子":[86.041077,44.305885],"阿拉尔":[81.285881,40.541916],"图木舒克":[79.07798,39.867317],"五家渠":[87.526886,44.1674],"台北":[121.509064,25.044333],"高雄":[121.509064,25.044333],"台南":[121.509064,25.044333],"台中":[121.509064,25.044333],"金门":[121.509064,25.044333],"南投":[121.509064,25.044333],"基隆":[121.509064,25.044333],"新竹":[121.509064,25.044333],"嘉义":[121.509064,25.044333],"新北":[121.509064,25.044333],"宜兰":[121.509064,25.044333],"新竹":[121.509064,25.044333],"桃园":[121.509064,25.044333],"苗栗":[121.509064,25.044333],"彰化":[121.509064,25.044333],"嘉义":[121.509064,25.044333],"云林":[121.509064,25.044333],"屏东":[121.509064,25.044333],"台东":[121.509064,25.044333],"花莲":[121.509064,25.044333],"澎湖":[121.509064,25.044333],"连江":[121.509064,25.044333],"香港岛":[114.173355,22.320047],"九龙":[114.173355,22.320047],"新界":[114.173355,22.320047],"澳门半岛":[113.549133,22.198751],"离岛":[113.549088,22.198952],"北京":[116.405289,39.904987],"天津":[117.190186,39.125595],"河北":[114.502464,38.045475],"山西":[112.549248,37.857014],"内蒙古":[111.670799,40.81831],"辽宁":[123.429092,41.796768],"吉林":[125.324501,43.886841],"黑龙江":[126.642464,45.756966],"上海":[121.472641,31.231707],"江苏":[118.76741,32.041546],"浙江":[120.15358,30.287458],"安徽":[117.283043,31.861191],"福建":[119.306236,26.075302],"江西":[115.892151,28.676493],"山东":[117.000923,36.675808],"河南":[113.665413,34.757977],"湖北":[114.298569,30.584354],"湖南":[112.982277,28.19409],"广东":[113.28064,23.125177],"广西":[108.320007,22.82402],"海南":[110.331192,20.031971],"重庆":[106.504959,29.533155],"四川":[104.065735,30.659462],"贵州":[106.713478,26.578342],"云南":[102.71225,25.040609],"西藏":[91.13221,29.66036],"陕西":[108.948021,34.263161],"甘肃":[103.823555,36.058041],"青海":[101.778915,36.623177],"宁夏":[106.278175,38.46637],"新疆":[87.617729,43.792816],"台湾":[121.509064,25.044333],"香港":[114.173355,22.320047],"澳门":[113.549088,22.198952],"格尔木":[94.922387,36.412836],"巴音郭楞蒙古自治州":[86.161488,41.777603],"红河哈尼族彝族自治州":[103.381836,23.368138],"喀什地区":[75.994666,39.475206],"昌吉回族自治州":[87.306378,44.011045],"吉首":[109.694101,28.267493],"奎屯":[84.90485,44.433293],"临河":[107.363785,40.757555],"黔南布依族苗族自治州":[107.527253,26.274094],"海南藏族自治州":[100.618921,36.292582],"德宏傣族景颇族自治州":[98.593515,24.438801],"锡林浩特":[116.044171,43.937503],"德令哈":[97.364595,37.373969],"阿克苏地区":[80.271542,41.174596],"临夏回族自治州":[103.212367,35.605214],"潢川":[115.052147,32.135085],"凉山彝族自治州":[102.265454,27.884687],"文山壮族苗族自治州":[104.21682,23.411831],"博尔塔拉蒙古自治州":[82.07349,44.919141],"库尔勒":[86.178045,41.733234],"黔西南布依族苗族自治州":[104.898119,25.097108],"黔东南苗族侗族自治州":[107.990596,26.573678],"伊犁哈萨克自治州":[81.329388,43.925216],"集宁":[113.117712,41.04724],"延吉":[129.475677,42.919478],"克州":[76.192223,39.719823],"凯里":[107.987469,26.573596],"江汉（天门/仙桃/潜江）区":[114.274631,30.602309],"延边朝鲜族自治州":[129.463578,42.921659],"梅河口":[125.702085,42.537231],"兴义":[104.904761,25.09916],"都匀":[107.526554,26.2656],"焦作":[112.609101,35.069538],"大理白族自治州":[100.257336,25.594403],"江汉":[114.275206,30.606287],"海拉尔":[119.73,49.12]};
// 资讯点击量
var newsCount = 0;
// 加载动画dom对象
var loadingDom = document.getElementById("loading-container");
/*
 * 
 *地图数据处理
 * cityData 城市数据
 * */
function mapHandleData(cityData) {
	var data = [];
	var city = '';
	for(var i = 0; i < cityData.length; i++) {
		city = cityData[i].city.replace('市', '');
		data.push({
			name: city,
			value: cityData[i].value,
			geoCoord: placeList[city]
		})
	}
	//console.log(data);
	return data;
}

/*
 图表固定切换动画
 * chart 图表对象
 * data 图表默认数据
 * decimals 间隔秒数
 * index 起始索引
 * vstr 值字段名
 * nstr 名称字段名
 * */

function changeChart(chart,data,decimals,index,vstr,nstr){	
	index = index || 0;
	var timeTicket;
	var value = '';
	var name  = '';
	timeTicket = setInterval(function() {
		value = typeof(vstr) == 'undefined'?data[index]:data[index][vstr];
		name  = typeof(nstr)  == 'undefined'?data[index].name:data[index][nstr];
		// 动态数据接口 addData
		chart.addData([
			[
				0, // 系列索引
				value, // 新增数据
				false, // 新增数据是否从队列头部插入
				false, // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
				name // 坐标轴标签
			]
		]);
		if(index >= data.length - 1) {
			index = 0;
		} else {
			index++;
		}
	}, decimals*1000);
}

/*
数字变化初始化方法，变换数字以及设定变换周期
* 
* target  目标元素的 ID
* startVal 开始值
* endVal 结束值
* decimals 小数位数，默认值是0
* duration 动画延迟秒数，默认值是2
* */
function countUp(target, startVal, endVal, decimals, duration, random, interval, actionName, params) {
	var options = {  
		  useEasing: true,
		  useGrouping: true,
		  separator: ',',
		  decimal: '.'
	};
	var count_obj = new CountUp(target, startVal, endVal, decimals, duration, options);
	if(!count_obj.error) {  
		count_obj.start();
	} else {  
		console.error(count_obj.error);
		return false;
	}
	console.log(actionName)
	setInterval(function() {
		if(typeof(actionName) != 'undefined') { // 存在用户模块名
			axios.get(http + actionName)
				.then(function(res) {
					count_obj.update(res.data.data[params]);
					if(actionName == 'getALlViewNum') { // 针对资讯数据进行处理			
						if(newsCount > 0 && res.data.data[params] > newsCount) {
							var now = new Date();
							//添加新数据
							newsUsers.addData([
								[
									0,
									(res.data.data[params] - newsCount),
									false,
									true,
									now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
								]
							]);
						}
						newsCount = res.data.data[params].allVierNum; //重新赋值
					}
				}).catch(function(err) {
					console.log(err);
				})
		} else {
			endVal += Math.ceil(Math.random() * random);
			count_obj.update(endVal);
		}
	}, interval * 1000);
}

/* 
 * 参数说明 
 * el==>需要淡出的元素 
 */
function fadeOut(el) {
	el.style.opacity = 1;
	el.style.display = "";

	var last = +new Date();
	var tick = function() {
		el.style.opacity = +el.style.opacity - (new Date() - last) / 1000;
		last = +new Date();

		if(+el.style.opacity > 0) {
			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		}else{			
			if(el)el.parentNode.removeChild(el);			
		}
	};
	tick();
}

/*  
 * 数字时钟，以数字的方式展示时间
 * 
 * */
function displayTime() {
	var elt = document.getElementById("clock"); // 通过id= "clock"找到元素
	var now = new Date(); // 得到当前时间
	elt.innerHTML = now.getFullYear() + "-" +
		(now.getMonth() + 1) + "-" +
		now.getDate() + " " +
		haddleNum(now.getHours()) + ":" +
		haddleNum(now.getMinutes()) + ":" +
		haddleNum(now.getSeconds());
	setTimeout(displayTime, 1000); //在1秒后再次执行	
	
	if(now.getMinutes() % 10 == 0 && now.getSeconds() == 0){
		setNewsLine();//每十分钟重置一次数据
	}
}

function haddleNum(num) {
	if(num < 10) {
		num = "0" + num;
	}
	return num;
}
window.onload = displayTime; //当onload事件发生时开始显示时间