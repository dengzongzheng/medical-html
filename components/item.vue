<template>
  <router-link :to="{path:'/common/detail',query:{medicalLegalNo:item.medicalLegalNo}}">

    <div class="item-box" v-show="item.listTitleImage.length==0">
      <div class="no-image-item-content">
        <div class="item-title">{{item.title}}</div>
        <div class="sub-info">
          <div class="sub-date">2018-08-10</div>
          <div class="sub-read">120 阅</div>
        </div>
      </div>
    </div>
    <div class="item-box" v-show="item.listTitleImage.length>=1&&item.listTitleImage.length<3">
      <div class="item-content">
        <div class="item-title">{{item.title}}</div>
        <div class="sub-info">
          <div class="sub-date">2018-08-10</div>
          <div class="sub-read">120 阅</div>
        </div>
      </div>
      <div class="item-image-right">
        <img v-for="im in item.listTitleImage" :key="im.imagePath" :src="item.imageServerPath+im"/>
      </div>
    </div>
    <div class="item-box" v-show="item.listTitleImage.length>2">
      <div class="content-box">
        <div class="title">{{item.title}}</div>
        <div class="item-image-box">
          <img v-for="im in item.listTitleImage" :key="im.imagePath" :src="item.imageServerPath+im"/>
        </div>
      </div>
      <div class="sub-box">
        <div class="sub-date">2018-08-10</div>
        <div class="sub-read">120 阅</div>
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
    padding: 40px 40px;
  }

  .title{
    padding: 40px 40px;
    text-decoration: none !important;
    color: black;
    cursor: pointer;
    font-size: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: 50px;
  }


  .item-image-box{
    display: inline-block;
    width:100%;
    text-align: center;
  }

  .item-image-box img{
    display: inline-block;
    width: 400px;
    height: 400px;
    text-align: center;
    padding: 10px;
    border-radius: 12px;
  }

  .sub-box{
    padding: 0px 10px;
    color: #c8c4d8;
    line-height: 35px;
  }

  .sub-date{
    display: inline-block;
    margin-right: 20px;
  }

  .sub-read{
    display: inline-block;
  }

  .content-box{
    min-height: 120px;
  }

  .item-content{
    float: left;
    width: 213px;
    padding: 10px 10px;
  }

  .item-title{
    text-decoration: none !important;
    color: black;
    cursor: pointer;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 56px;
  }

  .sub-info{
    padding-top: 20px;
  }

  .item-image-right{
    text-align: right;
  }

  .item-image-right img{
    display: inline-block;
    width: 400px;
    height: 400px;
    text-align: center;
    padding: 10px;
    border-radius: 12px;
  }

  .no-image-item-content{
    padding: 10px 10px;
  }
</style>
