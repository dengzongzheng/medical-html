<template>
  <div>
    <header class="header">
      <nav class="inner" role="navigation">
        <router-link v-for="item in naves" :key="item.title" :to="item.path">
          {{ item.title }}
        </router-link>
      </nav>
    </header>
    <nuxt nuxt-child-key="none" role="main" />
  </div>
</template>
<script>
  export default{
    data(){
      return {
        naves:[
          {
             path:"/for_service/legal",
             title:"为您服务"
          },
          {
            path:"/for_service/legal",
            title:"卫监播报"
          },
          {
            path:"/for_service/legal",
            title:"诚信自律"
          }
        ]
      };
    }
  }
</script>
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    background-color: lighten(#eceef1, 30%);
    margin: 0;
    padding: 0;
    color: #34495e;
    overflow-y: scroll;
  }

  a {
    color: #34495e;
    text-decoration: none;
  }

  .header {
    background-color: #188269;
    z-index: 999;
    height: 55px;
    text-align: center;
  }

  .inner {
    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  .inner a{
    font-size: 18px;
    padding-right: 10px;
    color: white;
  }

  .github {
    color: #fff;
    font-size: 0.9em;
    margin: 0;
    float: right;
  }

  .logo {
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .view {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

</style>

