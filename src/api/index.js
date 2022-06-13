/**
 * 请求的接口的方法
 */

// 请求的axios
import axios from 'axios'
// 接口地址
import base from './base'
// 引入md5
import md5 from 'md5-js'

// 请求方法
const api = {
  /**
   * 病毒信息的获取
   */
  getCovInfo(){
    return axios.get(base.host+base.covInfo)
  },
  /**  
   *  获取国内疫情 
   */ 
  getChinaData(){
    return axios.get(base.baseUrl+base.chinaData)
  },
  /**
   * 世界疫情
   */
  getWorldData(){
    return axios.get(base.baseUrl+base.worldData)
  },
  /**
   * 获取城市接口
   * 参数:format=json&appid=18304&city_name=城市名称&sign=md5加密字符串
   */
  getCity(city_name){
    // let canshu = 'format=json&appid=18304&city_name='+city_name+'&sign=md5加密字符串'
    // md5加密规则: sign = MD5( appid1formatjsontime1545829466密钥) 查看加密规则说明 密钥不需要键名，请直接跟上32位的密钥
    // 步骤: 1. 安装 npm i -g md5-js   2. 引入md5 模块   3. 使用加密处理
    let sing = md5('appid18304city_name'+city_name+'formatjsonf9ddb29a539dd29e9e95112b1d21d5a7')
    let canshu = 'format=json&appid=18304&city_name='+city_name+'&sign='+sing
    return axios.get(base.baseUrl+base.city+'?'+canshu)
  },

  /**
   * 全球数据获取
   */
  getAllData(){
    return axios.get(base.baseUrl+base.allData)
  },
  /**
   * 轮播数据接口
   */
  getSwiperBanner(){
    return axios.get(base.swiperBanner)
  },

  /**
   * 出行城市
   */
  getTrael(){
    return axios.get(base.travel)
  },
  /**
   * 城市出行政策 
   * &from = 10191&to=10349
   * axios.get('url?xx=xx&xx=xx')
   * axios.get('url',{
   *  params:{
   *    参数:xx,
   *    ...
   *  }
   * })
   */
   getTravelQuery(params){    //params={from:'',to:''}
    return axios.get(base.travelQuery,{
      params
    })
   },

   /**
    * 城市选择
    */
   getCity(){
     return axios.get(base.getcity)
   }
}

export default api