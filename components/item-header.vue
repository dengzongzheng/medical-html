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

  .nav-box{
    text-align: center;
    padding: 10px 10px;
    background: white;
  }

  .nav-title{
    font-size: 20px;
    font-weight: 600;
    padding: 10px 10px;
  }

  .nav-text{
    color: #635C5C;
    font-size: 16px;
    text-align: center;
    font-weight: lighter;
  }

</style>
