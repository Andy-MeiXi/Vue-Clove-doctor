<template>
  <div class="indexBox">
    <!-- <h2>风险地区</h2> -->
    <img class="logoTop" src="../../assets/images/area.png" width="100%" />
    <div class="content">
      <!-- 高风险 -->
      <!-- <template v-if="high.length>0">
        <div class="title">
          <div><img src="../../assets/images/high.png"/>高风险区{{high.length}}个</div>
          <div>截至北京时间 {{covData.modifyTime | time}}</div>
        </div>
        <ul>
          <li v-for="(item,index) in high" :key="index">{{item}}</li>
        </ul>
      </template> -->
      <!-- 中风险 -->
      <!-- <template v-if="mid.length>0">
        <div class="title">
          <div><img src="../../assets/images/mid.png"/>中风险区{{mid.length}}个</div>
          <div>截至北京时间 {{covData.modifyTime | time}}</div>
        </div>
        <ul>
          <li v-for="(item,index) in mid" :key="index">{{item}}</li>
        </ul>
      </template> -->
      <div class="pageTitle">全国风险地区汇总</div>
      <div class="title">
        <img src="../../assets/images/high.png" />
        <div>高风险区2个</div>
      </div>
      <div class="titleItem">
        辽宁省大连市庄河市新华街道小寺社区
      </div>
      <div class="titleItem">
        江西省大连市庄河市昌盛街道张屯社区
      </div>

      <div class="title">
        <img src="../../assets/images/mid.png" />
        <div>中风险区{{riskList.length}}个</div>
      </div>
      <div class="titleItem" v-for="(item,index) in riskList" :key="index">
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data(){
    return{
      covData:{},
      high:[],//高风险区域
      mid:[],//低风险区域
      riskList:[
        {
          content:"江西省上饶市铅山县葛仙山镇"
        },{
          content:"江西省上饶市信州区铁三社区金凤花园"
        },{
          content:"北京市海淀区西三旗街道富力桃园C区"
        },{
          content:"辽宁省大连市庄河市城关街道财政社区昌盛街二段91号楼"
        },{
          content:"云南省德宏傣族景颇族自治州瑞丽市弄岛等秀村会"
        },{
          content:"江西省上饶市信州区铁三社区金凤花园"
        },{
          content:"北京市海淀区西三旗街道富力桃园C区"
        },{
          content:"辽宁省大连市庄河市城关街道财政社区昌盛街二段91号楼"
        },{
          content:"云南省德宏傣族景颇族自治州瑞丽市弄岛等秀村会"
        },

      ]
    }
  },
  // created(){
  //   api.getCovInfo()
  //   .then(res=>{
  //     console.log(res)
  //     let riskarea = res.data.newslist[0].riskarea
  //     console.log(riskarea)
  //     // 解析
  //     this.high = riskarea.high
  //     this.mid = riskarea.mid
  //   })
  //   // 获取当前时间
  //   let data = res.data.newslist[0].desc
  //   this.covData = {
  //     modifyTime:data.modifyTime
  //   }
  // },
  // filters:{
  //   time(time){
  //     return new Date().toLocaleString()
  //   }
  // }
}
</script>

<style lang="less" scoped>
  // .indexBox{
  //   padding-bottom: 20px;
  // }
  .logoTop{
    position: relative;
    z-index:-1;
  }
  .content{
    margin: -160px 10px 20px 10px;
    padding: 14px 14px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    height: 400px;
  }
  .pageTitle{
    font-weight: bold;
    font-size: 16px;
    border-left: 5px solid rgb(65, 123, 189);
    padding-left: 5px;
    margin-bottom:10px;
  }
  .title{
    display:flex;
    // justify-content: space-between;
    align-items: center;
    img{
      width: 22px;
      height: 22px;
      margin-right: 8px;
    }
  }
  .titleItem{
    background-color: #f1f1f1;
    margin: 10px 0;
    padding: 8px 10px;
    border-radius: 6px;
  }
</style>