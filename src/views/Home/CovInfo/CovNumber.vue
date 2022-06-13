<template>
  <div class="num"> 
    <div class="content">
      <div class="title"> 截至 {{covData.modifyTime | time}} 全国数据统计 </div>
      <ul class="wrap">
        <li>
          <div>较昨天<span class="boldNum">{{covData.currentConfirmedIncr | number}}</span></div>
          <div class="bold">{{covData.currentConfirmedCount | division}}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <div>较昨天<span class="boldNum">{{covData.suspectedIncr | number}}</span></div>
          <div class="bold">{{covData.suspectedCount | division}}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <div>较昨天<span class="boldNum">{{covData.seriousIncr | number}}</span></div>
          <div class="bold">{{covData.seriousCount | division}}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <div>较昨天<span class="boldNum">{{covData.confirmedIncr | number}}</span></div>
          <div class="bold">{{covData.confirmedCount | division}}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <div>较昨天<span class="boldNum">{{covData.deadIncr | number}}</span></div>
          <div class="bold">{{covData.deadCount | division}}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <div>较昨天<span class="boldNum">{{covData.curedIncr | number}}</span></div>
          <div class="bold">{{covData.curedCount | division}}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['covData'],
  data(){
    return{
    }
  },
  // 定义过滤器
  filters:{
    // 数字的大于0 补0
    number(val){
      val = val>0 ? '+'+val:val;
      return val
    },
    // 数据每三位加,
    division(num) {
      // 方法1:正则处理
      // if (!num) return '0'
      // // 获取整数部分
      // const intPart = Math.trunc(num)
      // // 整数部分处理，增加,
      // const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      // // 将数值截取为小数部分和整数部分
      // return intPartFormat 

      // 方法2: toLocaleString 方法
      if(num == undefined) return "";
      return num.toLocaleString();
    },
    // 处理时间格式 --- js:年月日
    time:function(time){
      // var data = new Date(item)
      // time = new Date().toLocaleString().split(' ')[0]   // 只要年月日
      time = new Date().toLocaleString();   // 年月日  时分秒
      return time

      // 手动获取
      // var y = data.getFullYear();
      // var m = data.getMonth()+1;
      // var d = data.getDate();
      // var h = data.getHours();
      // var f = data.getMinutes();
      // var s = data.getSeconds()
      // return y+'-'+(m>10?m:'0'+m)+'-'+(d>10?d:'0'+d)+'  '+(h>10?h:'0'+h)+':'+(f>10?f:'0'+f)+':'+(s>10?s:'0'+s);

    }
  },

}
</script>

<style lang="less" scoped>
  .num{
    background-color: #f0f0f0;
    padding-top: 0.3rem;
    margin: 10px 0;
    .content{
      padding: 0.3rem;
      background-color: #fff;
      height: 2rem;
      border-radius: 0.2rem 0.2rem 0 0;
      .title{
        color: #666;
        margin-bottom: 0.2rem;
      }
      .wrap{
        display:flex;
        flex-wrap: wrap;
        padding-top: 0.2rem;
        border-radius: 0.1rem;
        box-shadow: 0 0 3px 2px rgba(175,172,172,20%);
        li{
          width:33.333%;
          text-align: center;
          margin-bottom:0.2rem;
          color: #666;
          height: 60px;
          strong{
            color: #333;
          }
        }
        .bold{
          font-weight: bold;
        }
        li:nth-child(1) .bold{
          color: red;
        }
        li:nth-child(2) .bold{
          color: green;
        }
        li:nth-child(3) .bold{
          color: orange;
        }
        li:nth-child(4) .bold{
          color:burlywood;
        }
        li:nth-child(5) .bold{
          color: rgba(0, 153, 255, 0.61);
        }
        li:nth-child(6) .bold{
          color: rgb(163, 62, 121);
        }
        li:nth-child(1) .boldNum{
          color:rgb(163, 62, 121);
        }
        li:nth-child(2) .boldNum{
          color:rgba(0, 153, 255, 0.61);
        }
        li:nth-child(3) .boldNum{
          color:burlywood;
        }
        li:nth-child(4) .boldNum{
          color:orange;
        }
        li:nth-child(5) .boldNum{
          color:green;
        }
        li:nth-child(6) .boldNum{
          color:red;
        }
      }
    }
  }
</style>