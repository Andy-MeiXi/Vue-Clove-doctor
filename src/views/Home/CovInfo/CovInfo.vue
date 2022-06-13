<template>
  <div class="info">
    <div class="cov">
      <div class="title">病毒信息</div>
      <!-- <p>{{covDesc.note1}}</p>
      <p>{{covDesc.note2}}</p>
      <p>{{covDesc.note3}}</p>
      <p>{{covDesc.remark1}}</p>
      <p>{{covDesc.remark2}}</p>
      <p>{{covDesc.remark3}}</p> -->
      <p>病毒:SARS-CoV-2,其导致疾病命名 COVID-19</p>
      <p>传染源:新冠肺炎的患者。无症状感染者也可能成为传染源</p>
      <p>传播途径:经呼吸道飞沫,接触传播是主要的传播途径。气溶胶传播和消化道等传播途径尚待明确</p>
      <p>易感人群:人群普遍易感。老年人及有基础疾病者感染后病情较重,儿童及婴儿也有发病</p>
      <p>潜伏期:一般为3~7天,最长不超过14天,潜伏期内可能存在传染性,其中无症状病例传染性非常罕见</p>
      <p>宿主:野生动物,可能为中华菊头蝠</p>
    </div>

    <div class="hot"> 
      <div class="title">
        <img src="../../../assets/images/hot.png" width="60px">
        <div>查看更多></div>
      </div>
      <ul>
        <li v-for="item in news" :key="item.id">
          <div class="hotdiv">
            <div class="hotdiv-left">
              <img style="margin-right:5px;" src="../../../assets/images/zuixin.png">
              <div>{{item.title}}</div>
            </div>
            <div class="hotdivIcon">></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    covDesc:{
      type:Object,
      default:function(){
        return {}
      }
    },
    news:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .info{
    padding: 0.2rem;
    .title{
      display:flex;
      justify-content: space-between;
      border-left: 0.1rem solid rgb(73, 96, 160);
      padding-left: 0.1rem;
      margin-bottom: 0.2rem;
      div{
        color: rgb(60, 121, 190);
      }
    }
    p{
      line-height: 0.5rem;
      color: #666;
    }
  }
  .hot{
    border-bottom: 1px solid rgb(206, 204, 204);
  }
  .hotdiv{
    display:flex;
    justify-content: space-between;
    margin: 12px 0;
  }
  .hotdiv-left{
    display: flex;
  }
  .hotdivIcon{
    color: rgb(172, 171, 171);
  }
</style>