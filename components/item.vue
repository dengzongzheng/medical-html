<template>
  <router-link :to="{path:'/common/detail',query:{medicalLegalNo:item.medicalLegalNo}}">
    <div class="item-box">
      <div class="title">{{item.title}}</div>
      <div class="item-image-box">
        <img v-for="im in item.listTitleImage" :key="im.imagePath" :src="item.imageServerPath+im"/>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default{
    name: "item",
    props:{
      item:{
        type:Object,
        required:true
      }
    }
  };
</script>

<style>

  body,a{
    text-decoration: none;
  }

  .item-box{
    background-color: white;
    border-bottom: solid 1px #F1F1F1;
  }

  .title{
    padding: 10px 10px;
    text-decoration: none !important;
    color: black;
    cursor: pointer;
  }


  .item-image-box{
    display: inline-block;
  }

  .item-image-box img{
    display: inline-block;
    width: 85px;
    height: 80px;
    text-align: center;
    padding: 10px;
    border-radius: 12px;
  }

</style>
