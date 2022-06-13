/**
 * 公共的请求的接口
 */
const base = {
  host:'http://api.tianapi.com',  //天行数据 -- 疫情病毒
  baseUrl:'https://qayz.api.storeapi.net', //挖数据 --- 国内国外疫情
  covInfo:'/ncov/index?key=da056b778d34936e9abc6d1c787818da', //疫情病毒信息
  chinaData:'/api/94/219?format=json&appid=18304&sign=413ead7575eaf7d626d7429408190e53', // 国内疫情接口
  worldData:'/api/94/220?format=json&appid=18304&sign=413ead7575eaf7d626d7429408190e53', //世界疫情数据
  city:'/api/94/221',   //城市接口
  //format=json&appid=18304&city_name=城市名称&sign=md5加密字符串
  allData:'/api/94/222?format=json&appid=18304&sign=413ead7575eaf7d626d7429408190e53',
  swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',
  travel:'/api/springTravel/citys?key=ea3295121216b176e1a6b8af7fcd3dcf',
  travelQuery:'/api/springTravel/query?key=ea3295121216b176e1a6b8af7fcd3dcf', //城市疫情 &from=10191&to=10349
  // 360接口地址:https://bang.360.cn/aj/getcitycode
  getcity:'/foo/aj/getcitycode' 
}
export default base;
