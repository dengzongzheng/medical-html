<template>
  <router-link :to="{path:'/common/detail',query:{medicalLegalNo:item.medicalLegalNo}}">

    <div class="item-box" v-show="item.listTitleImage.length==0">
      <div class="no-image-item-content">
        <div class="item-title">{{item.title}}</div>
        <div class="sub-info">
          <div class="sub-date">{{item.updateTime}}</div>
          <div class="sub-read">{{item.readCount}} 阅</div>
        </div>
      </div>
    </div>
    <div class="item-box" v-show="item.listTitleImage.length>=1&&item.listTitleImage.length<3">
      <div class="item-content">
        <div class="item-title">{{item.title}}</div>
        <div class="sub-info">
          <div class="sub-date">{{item.updateTime}}</div>
          <div class="sub-read">{{item.readCount}} 阅</div>
        </div>
      </div>
      <div class="item-image-right">
        <img v-for="im in item.listTitleImage" :key="im.imagePath" :src="item.imageServerPath+im"/>
      </div>
    </div>
    <div class="item-box" v-show="item.listTitleImage.length>2">
      <div class="content-box">
        <div class="title">您提供全面的法律法规，条例释义，您身边的法律助手，随时随地为您提供法律知识，欢迎使用您提供全面的法律法规，条例释义，您身边的法律助手，随时随地为您提供法律知识，欢迎使用您提供全面的法律法规，条例释义，您身边的法律助手，随时随地为您提供法律知识，欢迎使用您提供全面的法律法规，条例释义，您身边的法律助手，随时随地为您提供法律知识，欢迎使用{{item.title}}</div>
        <div class="item-image-box">
          <img v-for="im in item.listTitleImage" :key="im.imagePath" :src="item.imageServerPath+im"/>
        </div>
      </div>
      <div class="sub-box">
        <div class="sub-date">{{item.updateTime}}</div>
        <div class="sub-read">{{item.readCount}} 阅</div>
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
    padding: 18px 20px;
  }

  .title{
    margin: 18px 10px;
    text-decoration: none !important;
    cursor: pointer;
    height:30px;
    font-size:28px;
    font-family:PingFangSC-Medium;
    color:rgba(99,92,92,1);
    line-height:35px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

  }


  .item-image-box{
    display: inline-block;
    width:100%;
    text-align: center;
  }

  .item-image-box img{
    display: inline-block;
    width: 224px;
    height: 150px;
    text-align: center;
    padding: 5px;
    border-radius: 12px;
  }

  .sub-box{
    padding: 0px 10px;
    padding-top: 10px;
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
    width: 470px;
    /*padding: 10px 10px;*/
  }

  .item-title{
    text-decoration: none !important;
    height:42px;
    font-size:28px;
    font-family:PingFangSC-Medium;
    color:rgba(99,92,92,1);
    line-height:42px;
    min-height: 120px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .sub-info{
    padding-top: 10px;
    color: #c8c4d8;
    line-height: 35px;
  }

  .item-image-right{
    text-align: right;
  }

  .item-image-right img{
    display: inline-block;
    width: 224px;
    height: 150px;
    text-align: center;
    padding: 5px;
    border-radius: 12px;
  }

  .no-image-item-content{
    /*padding: 10px 10px;*/
  }

</style>
