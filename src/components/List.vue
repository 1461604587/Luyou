<template>
  <div class="list-page">
    <ul v-for="(item,index) in cart" :key="index">
    <!-- {{item}} -->

      <li>{{item.name}}</li>
      <li @click="tiao(item)"><b>{{item.title}}</b></li>
      <li>{{item.content}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    cart:Array
  },
  methods:{
    tiao(item){
      console.log(111)
      this.$router.push({
        path:`/detail/${item.id}`
      })
    }
  }
}
</script>
<style lang="scss">
  .list-page{
    width: 100%;
    height: 100%;
    ul{
      width: 100%;
      height: 200px;
      border: 1px solid black;
      li{
        text-align: center;
        line-height: 60px;
      }
    }
  }
</style>
