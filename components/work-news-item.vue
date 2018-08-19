<template>
  <div>
    <router-link :to="{path:'/common/detail',query:{medicalNo:itemData.workNewsNo,type:'workNews'}}">
    <div class="data-box">
      <div class="left-box">
        <img v-for="(item, index) in itemData.listTitleImage" v-if="index==0" v-bind:index="index"
             v-bind:key="index" :src="itemData.imageServerPath+item"/>
      </div>
      <div class="right-box">
        <div class="title-box">{{itemData.title}}</div>
        <div class="date-box">
          <label >{{itemData.updateTime}}</label>
          <label>{{itemData.readCount}}<span>阅</span></label>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    name: "work-news-item",
    props:{
      itemData:{
        type:Object,
        required:true
      }
    }
  };
</script>
<style>
  .left-box{
    display: inline-block;
    width:38%;
    float: left;
    margin-right: 20px;
  }

  .left-box img {
    width: 284px;
    height: 180px;
    border-radius: 6px;

  }

  .right-box{
    display: inline-block;
    width:58%;
    height: 144px;

  }

  .title-box{
    font-size: 28px;
    min-height: 138px;
  }

  .data-box{
    padding:30px 14px;
    border-bottom:1px solid #979797;
    height: 160px;
  }

  .date-box label{
    font-size: 8px;
    margin-right: 20px;
    color: #9e9e9e;
  }
</style>
