<template>
  <div class="home">
    <!-- 1.疫情图片 -->
    <div class="logo">
      <img src="../../assets/images/1.jpg" width="100%">
      <!-- 点击进入城市选择 -->
      <router-link class="select" to="/selectCity">{{ city }}=</router-link>
    </div>
    <!-- 2.病毒信息 -->
    <CovInfo :covDesc="covDesc" :news="news"/>
    <!-- 3.疫情-小导航 -->
    <div class="list">
      <div class="listItem">
        <router-link to="/area">
          <img src="../../assets/images/1.png">
          <div>风险地区</div>
        </router-link>
      </div> 
      <div class="listItem">
        <router-link to="/hesuan">
          <img src="../../assets/images/2.png">
          <div>核酸检测</div>
        </router-link>
      </div>
       <div class="listItem">
        <router-link to="/pervention">
          <img src="../../assets/images/3.png">
          <div>防疫物资</div>
        </router-link>
      </div>
       <div class="listItem">
        <router-link to="/travel">
          <img src="../../assets/images/4.png">
          <div>出行政策</div>
        </router-link>
      </div>
    </div>

    <!-- 4.数据统计 -->
    <CovNumber :covData="covData"/>

    <!-- 5.中国地图 -->
    <ChinaMap/>

    <!-- 6.世界地图 -->
    <WorldMap/>

    <!-- 7.轮播图 -->
    <VueSwiper/>


  </div>
</template>

<script>
 import CovInfo from './CovInfo/CovInfo.vue'
 import CovNumber from './CovInfo/CovNumber.vue'
 import ChinaMap from './VueEcharts/ChinaMap.vue'
 import WorldMap from './VueEcharts/WorldMap.vue'
 import VueSwiper from './VueSwiper/VueSwiper.vue'
 import api from '../../api/index.js'
export default {
  name: 'Home',
  data(){
    return{
      covDesc:{},
      news:[],
      covData:{}, //全国数据统计
      city: "国内疫情",
    }
  },
  components: {
    CovInfo,
    CovNumber,
    ChinaMap,
    WorldMap,
    VueSwiper
  },
  // 离开的时候解除绑定 --- 重复执行 this.$bus.$on
  beforeDestroy() {
    this.$bus.$off('city')
  },
  created() {
    // 方式2: 获取event-bus
    this.$bus.$on('city',val=>{
      console.log('---val---',val)
      this.city = val
  })

    // 方式1:进入页面获取本地存储
    // let city = localStorage.getItem('city')
    // if(city){
    //   this.city = city+'疫情'
    // }

    // 请求病毒接口 
    api.getCovInfo().then(res=>{
      // console.log(res.data)
      // console.log(res.data.newslist[0].desc)
      // 1.病毒信息介绍
      let data = res.data.newslist[0].desc
      this.covDesc = {
        note1:data.note1,
        note2:data.note2,
        note3:data.note3,
        remark1:data.remakr1,
        remark2:data.remakr2,
        remark3:data.remakr3,
      }
      // 2.疫情热点
      this.news = res.data.newslist[0].news
      // 3.全国疫情的数据统计信息
      this.covData = {
        currentConfirmedCount:data.currentConfirmedCount,   //现存确诊
        confirmedCount:data.confirmedCount,                 //累计确诊
        suspectedCount:data.suspectedCount,                 //累计境外输入人数
        curedCount:data.curedCount,                         //累计治愈人数
        deadCount:data.deadCount,                           //累计死亡人数
        seriousCount:data.seriousCount,                     //现存无症状人数
        suspectedIncr:data.suspectedIncr,                   //新增境外输入人数
        currentConfirmedIncr:data.currentConfirmedIncr,     //相比昨天现存确诊人数
        confirmedIncr:data.confirmedIncr,                   //相比昨天累计确诊人数
        curedIncr:data.curedIncr,                           //相比昨天新增治愈人数
        deadIncr:data.deadIncr,                             //相比昨日新增死亡人数
        seriousIncr:data.seriousIncr,                       //相比昨日现存无症状人数
        modifyTime:data.modifyTime                          //疫情时间
      }
    });
  },
}
</script>

<style lang="less">
  .logo {
  position: relative;
    .select {
      position: absolute;
      right: 0.2rem;
      top: 0.3rem;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      padding: 0.1rem 0.2rem;
      border-radius: 0.2rem;
    }
  }
  .list{
    margin-bottom: 10px;
    display:flex;
    flex-wrap: nowrap;
    text-align: center;
    .listItem{
      width: 25%;
    }
    img{
      width: 50px;
      height: 50px;
    }
}
</style>
