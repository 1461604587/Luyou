<template>
  <div>
    <List :cart="cart"/>
  </div>
</template>

<script>
import List from "../components/List"
export default {
components:{
  List
},
data(){
  return{
    cart:[]
  }
},
created(){
  this.getDate()
},
methods:{
  getDate(){
    this.$axios.get('/data').then(res=>{
      this.cart=res.data;
    })
  }
}
}
</script>

<style>

</style>