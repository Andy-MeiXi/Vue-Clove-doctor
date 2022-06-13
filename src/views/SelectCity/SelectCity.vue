<template>
  <div class="selectCity">
    <h2 class="title">城市选择</h2>

    <!-- 属性:
      index-list 索引字符列表  string[] | nubmer  默认A-Z 
      index 索引字符 number | string
      <van-cell title="文本" />
        title 内容展示      
    -->

    <van-index-bar :index-list="indexList">
      <template v-for="(item,name) in citylist">
        <van-index-anchor :index="name" :key="name" />
          <van-cell :title="ele.name" v-for="ele in item" :key="ele.id" @click="tiao"/>
        <!-- <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" /> -->
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data() {
    return {
      citylist: {},//城市列表
      indexList:[], //索引字符列表
      city:''
    }
  },
  destroyed() {
    this.$bus.$emit('city',this.city)
  },
  created() {
    api.getCity().then(res => {
      console.log('城市列表---', res.data.result.citylist)
      this.citylist = res.data.result.citylist
      // Object.keys(obj) 获取所有的键名 --[]
      this.indexList = Object.keys(res.data.result.citylist)
    })
  },
  methods: {
    // 跳转页面
    tiao(event){
      console.log(event.target.innerText)
      // 1.点击获取当前城市名称   2.跳转首页  或者  返回上一层   3.获取的城市名称传递给首页
      // 方式1: 本地存储
      // localStorage.setItem('city',event.target.innerText)
      // 方式2: eventBus
      // this.$bus.$emit('city',event.target.innerText)
      this.city = event.target.innerText

      // 返回上一层
      this.$router.go(-1) //返回上一层   返回上一层时  会回到顶部
      // this.$router.push('/') //返回 / 页面    返回 / 页面时  不会回到顶部
      // document.documentElement.scrollTop = 0

    }
  },
}
</script>

<style lang="less" scoped>
.selectCity {
  background: #f5f5f5;
  .title {
    padding: 0.2rem;
  }
}
</style>