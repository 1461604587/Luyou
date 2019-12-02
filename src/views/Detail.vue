<template>
  <div>
    详情页面
    <ul v-for="(item,index) in book" :key="index">
      <li>{{item.name}}</li>
      <li>{{item.title}}</li>
      <li>{{item.content}}</li>
    </ul>
    <div class="div">
      
    </div>
  </div>
</template>
<script>
export default {
data(){
  return{
    book:[]
  }
},
created(){
this.getDetail()
},
methods:{
  getDetail(){
    this.$axios.get("/details",{
      params:{
        id:this.$route.params.id
      }
    }).then(res=>{
      this.book=res.data.list
    })
  }
}
}
</script>