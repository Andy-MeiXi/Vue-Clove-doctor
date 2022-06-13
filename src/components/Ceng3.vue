<template>
  <div>
    <h3>第三层</h3>
    <p>啦啦啦啦</p>
    <h4>这是层2的数据:---{{id}}</h4>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:'',
    }
  },
  created(){
    // 接收eventBus提供的数据 
    this.$bus.$on("id",val=>{
      console.log("接收的层2的数据",val)
      this.id = val
    })
  },
  methods:{

  }
}
</script>

<style>

</style>