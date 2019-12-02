<template>
  <div class="shou-page">
   <div class="header">
     <input type="text" placeholder="高考志愿报填"><span>提问</span>
   </div>
   <div class="center">
     <div class="one">
     <router-link to="/shou/guan">关注</router-link>
     <router-link to="/shou/tui">推荐</router-link>
     <router-link to="/shou/re">热榜</router-link>
     </div>
     <div class="two">
<router-view></router-view>
     </div>
   </div>
  </div>
</template>
<style lang="scss">
.shou-page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
  .header{
    width: 100%;
    height: 50px;
    input{
      width: 250px;
      height: 50px;
      border-radius: 20px;
      border: 1px solid black;
     padding-left: 80px;
    }
    span{
      line-height: 50px;
    margin-left: 30px;
    }
    
  }
  .center{
      width: 100%;
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
      .one{
        width: 100%;
        height: 50px;
        // border: 1px solid red;
        display: flex;
        a{
          flex: 1;
          text-align: center;
          line-height: 50px;
          text-decoration: none;
          &.router-link-exact-active{
            background: blue;
            color: white;
          }
        }
      }
      .two{
        width: 100%;
        flex: 1;
        overflow: auto;
      }
    }
</style>