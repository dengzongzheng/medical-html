<template>
  <div>
    <div class="check-type">
      <input type="radio" name="range-type" class="range-type"/>
      <i class="range-type-i hotel-i">住宿业</i>
    </div>
  </div>
</template>
<script>
  export default{
    name:"select-range-type"
  }
</script>
<style>

  .check-type{
    width:346px;
    height:144px;
    background:rgba(255,255,255,1);
    border:6px solid rgba(209,189,189,1);
    text-align: center;
    position: relative;
    display: inline-block;
    margin:1px 6px;
    float: left;
  }

  .range-type{
    width:348px;
    height:144px;
    opacity: 0;
    position: relative;
  }

  .hotel-i{
    background-size: 100px 84px;
    background: url("~/assets/images/hotle.png") no-repeat 40px 40px;
  }

  .infectious-i{
    background-size: 100px 84px;
    background: url("~/assets/images/infectious.png") no-repeat 40px 40px;
  }

  .operate-i{
    background-size: 100px 84px;
    background: url("~/assets/images/operate.png") no-repeat 40px 40px;
  }

  .profession-i{
    background-size: 100px 84px;
    background: url("~/assets/images/profession.png") no-repeat 40px 40px;
  }

 .beauty-i{
    background-size: 100px 84px;
    background: url("~/assets/images/beauty.png") no-repeat 40px 40px;
  }

  .haircut-i {
    background-size: 100px 84px;
    background: url("~/assets/images/haircut.png") no-repeat 40px 40px;
  }

  .bathroom-i {
    background-size: 100px 84px;
    background: url("~/assets/images/bathroom.png") no-repeat 40px 40px;
  }

  .radiation-i {
    background-size: 100px 84px;
    background: url("~/assets/images/radiation.png") no-repeat 40px 40px;
  }

 .mall-i {
   background-size: 100px 84px;
   background: url("~/assets/images/mall.png") no-repeat 40px 40px;
 }

  .range-type-i {
    font-style: normal;
    width:348px;
    padding-left: 30px;
    height:144px;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(58, 24, 24, 1);
    line-height: 144px;
    top: 0;
    left: 0;
    position: absolute;
  }

  .range-type:checked+i:after{
    content: "";
    width:346px;
    height:144px;
    background: url("~/assets/images/selected.png") no-repeat;
    background-size: 210px 164px;
    display: block;
    position: absolute;
    right: 18px;
    top: 0;
  }
</style>
