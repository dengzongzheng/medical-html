<template>
  <div>
    <!--<header class="header">
      <nav class="inner" role="navigation">
        <router-link v-for="item in naves" :key="item.title" :to="item.path">
          {{ item.title }}
        </router-link>
      </nav>
    </header>-->
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
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: #34495e;
    overflow-y: scroll;
    background: #fff;
    font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
    -webkit-text-size-adjust: none;
    word-break: break-word;
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

