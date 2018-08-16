<template>
  <div class="nav-box">
    <div class="nav-image-box">
      <img :src="nav_image"/>
    </div>
    <div class="nav-title">
      {{nav_title}}
    </div>
    <div class="nav-text">
      {{nav_text}}
    </div>
  </div>
</template>

<script>
  export default{
    name: "item-header",
    props: {
      nav_image: {
        type: String,
        required: true
      },
      nav_title: {
        type: String,
        required: true
      },
      nav_text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>

  .nav-box {

    width: 750px;
    background: white;
  }

  .nav-image-box{
    text-align: center;
    padding-top: 60px;
    width: 750px;
  }

  .nav-title{
    font-size: 36px;
    font-weight: 600;
    padding: 10px 10px;
    text-align: center;
  }

  .nav-text{
    color: #635C5C;
    font-size: 26px;
    text-align: center;
    font-weight: lighter;
    padding: 54px;
    line-height: 50px;
  }

</style>
