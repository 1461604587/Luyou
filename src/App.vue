<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
