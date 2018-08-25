<template>
  <div>
    <div class="select-box">
      <input type="radio" name="place" class="select-type" v-bind:value="item.value" />
      <i class="select-type-i" :class="item.icon+'-i'">{{item.name}}</i>
    </div>
  </div>
</template>
<script>
  export default{
    name: "select-place-box",
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
</script>
<style>
  .select-box {

    font-style: normal;
    margin-top: 66px;
    width: 666px;
    height: 160px;
    border-radius: 10px;
    border:6px solid #C9BABA;
    text-align: center;
    position: relative;
  }

  .select-type{
    opacity: 0;
    border: 2px solid black;
    width: 666px;
    height: 160px;
    position: relative;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 9;
  }


  .select-type:checked+i {
    /*background-color: #FFFFFF;*/
    /*border: 2px solid #EF5104;*/
    /*border-radius: 4px;*/


  }
  .select-type:checked+i:after{
    content: "";
    width: 200px;
    height: 200px;
    background: url("~/assets/images/selected.png") no-repeat;
    background-size: 210px 164px;
    display: block;
    position: absolute;
    right: 18px;
    top: 0;
  }

  .select-type-i{
    width: 666px;
    height:160px;
    font-size:48px;
    font-family:PingFangSC-Light;
    font-weight:300;
    color:rgba(86,83,83,1);
    line-height:160px;
    font-style: normal;
    position: absolute;
    top: 0;
    left: 20px;
  }

  .school-i {
    background-size: 108px 108px;
    background: url("~/assets/images/school.png") no-repeat 40px 20px;
  }

  .public-i{
    background-size: 108px 108px;
    background: url("~/assets/images/public.png") no-repeat 40px 40px;
  }

  .medical-i{
    background-size: 108px 108px;
    background: url("~/assets/images/medical.png") no-repeat 40px 20px;
  }

  .water-i{
    background-size: 108px 108px;
    background: url("~/assets/images/water.png") no-repeat 40px 20px;
  }
</style>
