<template>

  <div>
    <router-link v-if="type=='notice'" :to="{path:'/common/detail',query:{medicalNo:itemData.noticeNo,type:'notice'}}">

      <div class="notice-box">
        <div class="header-box">
          <div class="header-image">
            <img v-for="(item, index) in itemData.listTitleImage" v-if="index==0" v-bind:index="index"
                 v-bind:key="index" :src="itemData.imageServerPath+item"/>
          </div>
        </div>
        <div class="title-box">
          <div class="left-box">{{itemData.title}}</div>
          <div class="right-box">
            <img v-for="(item, index) in itemData.listTitleImage" v-if="index==0" v-bind:index="index"
                 v-bind:key="index" :src="itemData.imageServerPath+item"/>
          </div>
          <div class="other-class">
            <div class="time">{{itemData.updateTime}}</div>
            <div class="read-count">{{itemData.readCount}}<label>阅</label></div>
          </div>
        </div>
      </div>

    </router-link>

    <router-link v-if="type=='information'"
                 :to="{path:'/common/detail',query:{medicalNo:itemData.informationNo,type:'information'}}">

      <div class="notice-box">
        <div class="header-box">
          <div class="header-image">
            <img v-for="(item, index) in itemData.listTitleImage" v-if="index==0" v-bind:index="index"
                 v-bind:key="index" :src="itemData.imageServerPath+item"/>
          </div>
        </div>
        <div class="title-box">
          <div class="left-box">{{itemData.title}}</div>
          <div class="right-box">
            <img v-for="(item, index) in itemData.listTitleImage" v-if="index==0" v-bind:index="index"
                 v-bind:key="index" :src="itemData.imageServerPath+item"/>
          </div>
          <div class="other-class">
            <div class="time">{{itemData.updateTime}}</div>
            <div class="read-count">{{itemData.readCount}}<label>阅</label></div>
          </div>
        </div>
      </div>

    </router-link>
  </div>
</template>

<script>
  export default{
    name: "notice-item",
    props:{
      itemData:{
        type:Object,
        required:true
      },
      type:{
          type:String,
          required:true
      }
    }
  };
</script>

<style>

  .content-box{
    background-color: #EBEBEB;
  }

  .notice-box {
    padding: 50px 20px;
    border-radius:6px;
  }

  .header-image img {
    width: 100%;
    height: 268px;
  }

  .title-box{
    background-color: #FFFFFF;
    padding:46px 26px;
  }

  .left-box{
    display: inline-block;
    font-size:28px;
    font-family:PingFangSC-Medium;
    color:rgba(99,92,92,1);
    line-height:40px;
    width: 70%;
    vertical-align: top;
  }

  .right-box{
    display: inline-block;
    width:30%;
  }

  .right-box img{
    width: 160px;
    height: 120px;
    float: right;
  }

  .other-class{
    font-size: 24px;
  }

  .time{
    display: inline-block;
    padding-right: 50px;
  }

  .read-count{
    display: inline-block;
  }

  .read-count label{
    padding:0 10px;
  }

</style>
