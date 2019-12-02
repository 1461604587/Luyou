<template>
  <div class="home">
    <div class="main">
      <router-view></router-view>
    </div>
     <div class="header">
      <router-link to="/shou">首页</router-link>
      <router-link to="/xiang">想法</router-link>
      <router-link to="/da">大学</router-link>
      <router-link to="/xiao">消息</router-link>
      <router-link to="/my">我的</router-link>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 
 
}
</script>

<style lang="scss">
  // *{
  //   padding: 0;
  //   margin: 0;
  //   list-style: none;
  //   box-sizing: border-box
  // }
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
      width: 100%;
      flex: 1;
      overflow: auto;
    }
    .header{
      width: 100%;
      height: 50px;
      display: flex;
      a{
     flex: 1;
    line-height: 50px;
       justify-content: center;
       text-decoration: none;
        &.router-link-exact-active{
        background: red;
        color: white;
      }
      }
    }
  }
</style>
