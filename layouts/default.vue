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

</style>

